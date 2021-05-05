import {
    BasicMathRequest,
    MathResponse,
    MathServiceServer as IMathServiceServer,
} from 'protogen/services/v1/math_service';

import { handleUnaryCall, UntypedHandleCall } from '@grpc/grpc-js'

export class MathServiceServer implements IMathServiceServer {
    [name: string]: UntypedHandleCall;

    add: handleUnaryCall<BasicMathRequest, MathResponse> = (call, callback) => {
        console.log(`Recieved: MathService.Add(${JSON.stringify(call.request)})`);
        callback(null, { result: call.request.num1 + call.request.num2 });
    }

    subtract: handleUnaryCall<BasicMathRequest, MathResponse> = (call, callback) => {
        console.log(`Recieved: MathService.Subtract(${JSON.stringify(call.request)})`);
        callback(null, { result: call.request.num1 - call.request.num2 });
    }

    multiply: handleUnaryCall<BasicMathRequest, MathResponse> = (call, callback) => {
        console.log(`Recieved: MathService.Multiply(${JSON.stringify(call.request)})`);
        callback(null, { result: call.request.num1 * call.request.num2 });
    }

    divide: handleUnaryCall<BasicMathRequest, MathResponse> = (call, callback) => {
        console.log(`Recieved: MathService.Divide(${JSON.stringify(call.request)})`);
        callback(null, { result: call.request.num1 / call.request.num2 });
    }
}