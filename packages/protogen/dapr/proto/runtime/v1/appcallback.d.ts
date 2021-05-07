/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { StateItem, InvokeRequest, InvokeResponse } from "../../../../dapr/proto/common/v1/common";
import { Empty } from "../../../../google/protobuf/empty";
export declare const protobufPackage = "dapr.proto.runtime.v1";
/**
 * TopicEventRequest message is compatible with CloudEvent spec v1.0
 * https://github.com/cloudevents/spec/blob/v1.0/spec.md
 */
export interface TopicEventRequest {
    /**
     * id identifies the event. Producers MUST ensure that source + id
     * is unique for each distinct event. If a duplicate event is re-sent
     * (e.g. due to a network error) it MAY have the same id.
     */
    id: string;
    /**
     * source identifies the context in which an event happened.
     * Often this will include information such as the type of the
     * event source, the organization publishing the event or the process
     * that produced the event. The exact syntax and semantics behind
     * the data encoded in the URI is defined by the event producer.
     */
    source: string;
    /** The type of event related to the originating occurrence. */
    type: string;
    /** The version of the CloudEvents specification. */
    specVersion: string;
    /** The content type of data value. */
    dataContentType: string;
    /** The content of the event. */
    data: Buffer;
    /** The pubsub topic which publisher sent to. */
    topic: string;
    /** The name of the pubsub the publisher sent to. */
    pubsubName: string;
}
/** TopicEventResponse is response from app on published message */
export interface TopicEventResponse {
    /** The list of output bindings. */
    status: TopicEventResponse_TopicEventResponseStatus;
}
/** TopicEventResponseStatus allows apps to have finer control over handling of the message. */
export declare enum TopicEventResponse_TopicEventResponseStatus {
    /** SUCCESS - SUCCESS is the default behavior: message is acknowledged and not retried or logged. */
    SUCCESS = 0,
    /** RETRY - RETRY status signals Dapr to retry the message as part of an expected scenario (no warning is logged). */
    RETRY = 1,
    /** DROP - DROP status signals Dapr to drop the message as part of an unexpected scenario (warning is logged). */
    DROP = 2,
    UNRECOGNIZED = -1
}
export declare function topicEventResponse_TopicEventResponseStatusFromJSON(object: any): TopicEventResponse_TopicEventResponseStatus;
export declare function topicEventResponse_TopicEventResponseStatusToJSON(object: TopicEventResponse_TopicEventResponseStatus): string;
/** BindingEventRequest represents input bindings event. */
export interface BindingEventRequest {
    /** Required. The name of the input binding component. */
    name: string;
    /** Required. The payload that the input bindings sent */
    data: Buffer;
    /** The metadata set by the input binging components. */
    metadata: {
        [key: string]: string;
    };
}
export interface BindingEventRequest_MetadataEntry {
    key: string;
    value: string;
}
/**
 * BindingEventResponse includes operations to save state or
 * send data to output bindings optionally.
 */
export interface BindingEventResponse {
    /** The name of state store where states are saved. */
    storeName: string;
    /** The state key values which will be stored in store_name. */
    states: StateItem[];
    /** The list of output bindings. */
    to: string[];
    /** The content which will be sent to "to" output bindings. */
    data: Buffer;
    /**
     * The concurrency of output bindings to send data to
     * "to" output bindings list. The default is SEQUENTIAL.
     */
    concurrency: BindingEventResponse_BindingEventConcurrency;
}
/** BindingEventConcurrency is the kind of concurrency */
export declare enum BindingEventResponse_BindingEventConcurrency {
    /** SEQUENTIAL - SEQUENTIAL sends data to output bindings specified in "to" sequentially. */
    SEQUENTIAL = 0,
    /** PARALLEL - PARALLEL sends data to output bindings specified in "to" in parallel. */
    PARALLEL = 1,
    UNRECOGNIZED = -1
}
export declare function bindingEventResponse_BindingEventConcurrencyFromJSON(object: any): BindingEventResponse_BindingEventConcurrency;
export declare function bindingEventResponse_BindingEventConcurrencyToJSON(object: BindingEventResponse_BindingEventConcurrency): string;
/** ListTopicSubscriptionsResponse is the message including the list of the subscribing topics. */
export interface ListTopicSubscriptionsResponse {
    /** The list of topics. */
    subscriptions: TopicSubscription[];
}
/** TopicSubscription represents topic and metadata. */
export interface TopicSubscription {
    /** Required. The name of the pubsub containing the topic below to subscribe to. */
    pubsubName: string;
    /** Required. The name of topic which will be subscribed */
    topic: string;
    /** The optional properties used for this topic's subscription e.g. session id */
    metadata: {
        [key: string]: string;
    };
}
export interface TopicSubscription_MetadataEntry {
    key: string;
    value: string;
}
/** ListInputBindingsResponse is the message including the list of input bindings. */
export interface ListInputBindingsResponse {
    /** The list of input bindings. */
    bindings: string[];
}
export declare const TopicEventRequest: {
    encode(message: TopicEventRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TopicEventRequest;
    fromJSON(object: any): TopicEventRequest;
    toJSON(message: TopicEventRequest): unknown;
    fromPartial(object: DeepPartial<TopicEventRequest>): TopicEventRequest;
};
export declare const TopicEventResponse: {
    encode(message: TopicEventResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TopicEventResponse;
    fromJSON(object: any): TopicEventResponse;
    toJSON(message: TopicEventResponse): unknown;
    fromPartial(object: DeepPartial<TopicEventResponse>): TopicEventResponse;
};
export declare const BindingEventRequest: {
    encode(message: BindingEventRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BindingEventRequest;
    fromJSON(object: any): BindingEventRequest;
    toJSON(message: BindingEventRequest): unknown;
    fromPartial(object: DeepPartial<BindingEventRequest>): BindingEventRequest;
};
export declare const BindingEventRequest_MetadataEntry: {
    encode(message: BindingEventRequest_MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BindingEventRequest_MetadataEntry;
    fromJSON(object: any): BindingEventRequest_MetadataEntry;
    toJSON(message: BindingEventRequest_MetadataEntry): unknown;
    fromPartial(object: DeepPartial<BindingEventRequest_MetadataEntry>): BindingEventRequest_MetadataEntry;
};
export declare const BindingEventResponse: {
    encode(message: BindingEventResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BindingEventResponse;
    fromJSON(object: any): BindingEventResponse;
    toJSON(message: BindingEventResponse): unknown;
    fromPartial(object: DeepPartial<BindingEventResponse>): BindingEventResponse;
};
export declare const ListTopicSubscriptionsResponse: {
    encode(message: ListTopicSubscriptionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListTopicSubscriptionsResponse;
    fromJSON(object: any): ListTopicSubscriptionsResponse;
    toJSON(message: ListTopicSubscriptionsResponse): unknown;
    fromPartial(object: DeepPartial<ListTopicSubscriptionsResponse>): ListTopicSubscriptionsResponse;
};
export declare const TopicSubscription: {
    encode(message: TopicSubscription, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TopicSubscription;
    fromJSON(object: any): TopicSubscription;
    toJSON(message: TopicSubscription): unknown;
    fromPartial(object: DeepPartial<TopicSubscription>): TopicSubscription;
};
export declare const TopicSubscription_MetadataEntry: {
    encode(message: TopicSubscription_MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TopicSubscription_MetadataEntry;
    fromJSON(object: any): TopicSubscription_MetadataEntry;
    toJSON(message: TopicSubscription_MetadataEntry): unknown;
    fromPartial(object: DeepPartial<TopicSubscription_MetadataEntry>): TopicSubscription_MetadataEntry;
};
export declare const ListInputBindingsResponse: {
    encode(message: ListInputBindingsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListInputBindingsResponse;
    fromJSON(object: any): ListInputBindingsResponse;
    toJSON(message: ListInputBindingsResponse): unknown;
    fromPartial(object: DeepPartial<ListInputBindingsResponse>): ListInputBindingsResponse;
};
/**
 * AppCallback V1 allows user application to interact with Dapr runtime.
 * User application needs to implement AppCallback service if it needs to
 * receive message from dapr runtime.
 */
export declare const AppCallbackService: {
    /** Invokes service method with InvokeRequest. */
    readonly onInvoke: {
        readonly path: "/dapr.proto.runtime.v1.AppCallback/OnInvoke";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: InvokeRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => InvokeRequest;
        readonly responseSerialize: (value: InvokeResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => InvokeResponse;
    };
    /** Lists all topics subscribed by this app. */
    readonly listTopicSubscriptions: {
        readonly path: "/dapr.proto.runtime.v1.AppCallback/ListTopicSubscriptions";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: Empty) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Empty;
        readonly responseSerialize: (value: ListTopicSubscriptionsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListTopicSubscriptionsResponse;
    };
    /** Subscribes events from Pubsub */
    readonly onTopicEvent: {
        readonly path: "/dapr.proto.runtime.v1.AppCallback/OnTopicEvent";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: TopicEventRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => TopicEventRequest;
        readonly responseSerialize: (value: TopicEventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => TopicEventResponse;
    };
    /** Lists all input bindings subscribed by this app. */
    readonly listInputBindings: {
        readonly path: "/dapr.proto.runtime.v1.AppCallback/ListInputBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: Empty) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Empty;
        readonly responseSerialize: (value: ListInputBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListInputBindingsResponse;
    };
    /**
     * Listens events from the input bindings
     *
     * User application can save the states or send the events to the output
     * bindings optionally by returning BindingEventResponse.
     */
    readonly onBindingEvent: {
        readonly path: "/dapr.proto.runtime.v1.AppCallback/OnBindingEvent";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: BindingEventRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => BindingEventRequest;
        readonly responseSerialize: (value: BindingEventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => BindingEventResponse;
    };
};
export interface AppCallbackServer extends UntypedServiceImplementation {
    /** Invokes service method with InvokeRequest. */
    onInvoke: handleUnaryCall<InvokeRequest, InvokeResponse>;
    /** Lists all topics subscribed by this app. */
    listTopicSubscriptions: handleUnaryCall<Empty, ListTopicSubscriptionsResponse>;
    /** Subscribes events from Pubsub */
    onTopicEvent: handleUnaryCall<TopicEventRequest, TopicEventResponse>;
    /** Lists all input bindings subscribed by this app. */
    listInputBindings: handleUnaryCall<Empty, ListInputBindingsResponse>;
    /**
     * Listens events from the input bindings
     *
     * User application can save the states or send the events to the output
     * bindings optionally by returning BindingEventResponse.
     */
    onBindingEvent: handleUnaryCall<BindingEventRequest, BindingEventResponse>;
}
export interface AppCallbackClient extends Client {
    /** Invokes service method with InvokeRequest. */
    onInvoke(request: InvokeRequest, callback: (error: ServiceError | null, response: InvokeResponse) => void): ClientUnaryCall;
    onInvoke(request: InvokeRequest, metadata: Metadata, callback: (error: ServiceError | null, response: InvokeResponse) => void): ClientUnaryCall;
    onInvoke(request: InvokeRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: InvokeResponse) => void): ClientUnaryCall;
    /** Lists all topics subscribed by this app. */
    listTopicSubscriptions(request: Empty, callback: (error: ServiceError | null, response: ListTopicSubscriptionsResponse) => void): ClientUnaryCall;
    listTopicSubscriptions(request: Empty, metadata: Metadata, callback: (error: ServiceError | null, response: ListTopicSubscriptionsResponse) => void): ClientUnaryCall;
    listTopicSubscriptions(request: Empty, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListTopicSubscriptionsResponse) => void): ClientUnaryCall;
    /** Subscribes events from Pubsub */
    onTopicEvent(request: TopicEventRequest, callback: (error: ServiceError | null, response: TopicEventResponse) => void): ClientUnaryCall;
    onTopicEvent(request: TopicEventRequest, metadata: Metadata, callback: (error: ServiceError | null, response: TopicEventResponse) => void): ClientUnaryCall;
    onTopicEvent(request: TopicEventRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: TopicEventResponse) => void): ClientUnaryCall;
    /** Lists all input bindings subscribed by this app. */
    listInputBindings(request: Empty, callback: (error: ServiceError | null, response: ListInputBindingsResponse) => void): ClientUnaryCall;
    listInputBindings(request: Empty, metadata: Metadata, callback: (error: ServiceError | null, response: ListInputBindingsResponse) => void): ClientUnaryCall;
    listInputBindings(request: Empty, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListInputBindingsResponse) => void): ClientUnaryCall;
    /**
     * Listens events from the input bindings
     *
     * User application can save the states or send the events to the output
     * bindings optionally by returning BindingEventResponse.
     */
    onBindingEvent(request: BindingEventRequest, callback: (error: ServiceError | null, response: BindingEventResponse) => void): ClientUnaryCall;
    onBindingEvent(request: BindingEventRequest, metadata: Metadata, callback: (error: ServiceError | null, response: BindingEventResponse) => void): ClientUnaryCall;
    onBindingEvent(request: BindingEventRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: BindingEventResponse) => void): ClientUnaryCall;
}
export declare const AppCallbackClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>) => AppCallbackClient;
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
