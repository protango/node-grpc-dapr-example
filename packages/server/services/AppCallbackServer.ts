import { AppCallbackServer as IAppCallbackServer, BindingEventRequest, BindingEventResponse, BindingEventResponse_BindingEventConcurrency, ListInputBindingsResponse, ListTopicSubscriptionsResponse, TopicEventRequest, TopicEventResponse, TopicEventResponse_TopicEventResponseStatus } from 'protogen/dapr/proto/runtime/v1/appcallback';

import { handleUnaryCall, UntypedHandleCall } from '@grpc/grpc-js';
import { InvokeRequest, InvokeResponse } from 'protogen/dapr/proto/common/v1/common';
import { Empty } from 'protogen/google/protobuf/empty';
import { MathServiceServer } from './MathServiceServer';
import { BasicMathRequest, MathResponse } from 'protogen/services/v1/math_service';
import { Any } from 'protogen/google/protobuf/any';

export class AppCallbackServer implements IAppCallbackServer {
    [name: string]: UntypedHandleCall;
    onInvoke: handleUnaryCall<InvokeRequest, InvokeResponse> = (call, callback) => {
        if (!call.request.data || !call.request.method) 
            throw new Error("Incomplete service invocation");

        const match = call.request.method.match(/^(?<serviceName>.+)\.(?<methodName>.+)$/);
        if (!match?.groups) throw new Error("Invalid method name");
        const serviceName = match.groups['serviceName'], methodName = match.groups['methodName'];

        switch (serviceName) {
            case 'MathService':
                const mathService = new MathServiceServer();
                const method = {
                    Add: mathService.add,
                    Subtract: mathService.subtract,
                    Multiply: mathService.multiply,
                    Divide: mathService.divide,
                }[methodName];
                if (!method) throw new Error("Method does not exist");
                const fakeCall = {request: BasicMathRequest.decode(call.request.data.value)};

                method(fakeCall as any, (error, result) => {
                    if (!result) throw new Error("No result returned");
                    callback(error, {
                        contentType: "", 
                        data: {
                            typeUrl: "", 
                            value: Buffer.from(MathResponse.encode(result).finish())
                        }
                    });
                });
                break;
            default:
                throw new Error("Service does not exist");
        }


    };
    listTopicSubscriptions: handleUnaryCall<Empty, ListTopicSubscriptionsResponse> = (call, callback) => {
        let response: ListTopicSubscriptionsResponse = {
            subscriptions: []
        };
        callback(null, response);
    };
    onTopicEvent: handleUnaryCall<TopicEventRequest, TopicEventResponse> = (call, callback) => {
        callback(null, {status: TopicEventResponse_TopicEventResponseStatus.UNRECOGNIZED});
    };
    listInputBindings: handleUnaryCall<Empty, ListInputBindingsResponse> = (call, callback) => {
        callback(null, {bindings: []});
    };
    onBindingEvent: handleUnaryCall<BindingEventRequest, BindingEventResponse> = (call, callback) => {
        callback(null, {
            concurrency: BindingEventResponse_BindingEventConcurrency.SEQUENTIAL,
            data: Buffer.from([]),
            states: [],
            storeName: "",
            to: []
        });
    };
}