/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "services.v1";
export interface BasicMathRequest {
    num1: number;
    num2: number;
}
export interface MathResponse {
    result: number;
}
export declare const BasicMathRequest: {
    encode(message: BasicMathRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BasicMathRequest;
    fromJSON(object: any): BasicMathRequest;
    toJSON(message: BasicMathRequest): unknown;
    fromPartial(object: DeepPartial<BasicMathRequest>): BasicMathRequest;
};
export declare const MathResponse: {
    encode(message: MathResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MathResponse;
    fromJSON(object: any): MathResponse;
    toJSON(message: MathResponse): unknown;
    fromPartial(object: DeepPartial<MathResponse>): MathResponse;
};
export declare const MathServiceService: {
    readonly add: {
        readonly path: "/services.v1.MathService/Add";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: BasicMathRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => BasicMathRequest;
        readonly responseSerialize: (value: MathResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => MathResponse;
    };
    readonly subtract: {
        readonly path: "/services.v1.MathService/Subtract";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: BasicMathRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => BasicMathRequest;
        readonly responseSerialize: (value: MathResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => MathResponse;
    };
    readonly multiply: {
        readonly path: "/services.v1.MathService/Multiply";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: BasicMathRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => BasicMathRequest;
        readonly responseSerialize: (value: MathResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => MathResponse;
    };
    readonly divide: {
        readonly path: "/services.v1.MathService/Divide";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: BasicMathRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => BasicMathRequest;
        readonly responseSerialize: (value: MathResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => MathResponse;
    };
};
export interface MathServiceServer extends UntypedServiceImplementation {
    add: handleUnaryCall<BasicMathRequest, MathResponse>;
    subtract: handleUnaryCall<BasicMathRequest, MathResponse>;
    multiply: handleUnaryCall<BasicMathRequest, MathResponse>;
    divide: handleUnaryCall<BasicMathRequest, MathResponse>;
}
export interface MathServiceClient extends Client {
    add(request: BasicMathRequest, callback: (error: ServiceError | null, response: MathResponse) => void): ClientUnaryCall;
    add(request: BasicMathRequest, metadata: Metadata, callback: (error: ServiceError | null, response: MathResponse) => void): ClientUnaryCall;
    add(request: BasicMathRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: MathResponse) => void): ClientUnaryCall;
    subtract(request: BasicMathRequest, callback: (error: ServiceError | null, response: MathResponse) => void): ClientUnaryCall;
    subtract(request: BasicMathRequest, metadata: Metadata, callback: (error: ServiceError | null, response: MathResponse) => void): ClientUnaryCall;
    subtract(request: BasicMathRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: MathResponse) => void): ClientUnaryCall;
    multiply(request: BasicMathRequest, callback: (error: ServiceError | null, response: MathResponse) => void): ClientUnaryCall;
    multiply(request: BasicMathRequest, metadata: Metadata, callback: (error: ServiceError | null, response: MathResponse) => void): ClientUnaryCall;
    multiply(request: BasicMathRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: MathResponse) => void): ClientUnaryCall;
    divide(request: BasicMathRequest, callback: (error: ServiceError | null, response: MathResponse) => void): ClientUnaryCall;
    divide(request: BasicMathRequest, metadata: Metadata, callback: (error: ServiceError | null, response: MathResponse) => void): ClientUnaryCall;
    divide(request: BasicMathRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: MathResponse) => void): ClientUnaryCall;
}
export declare const MathServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>) => MathServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
