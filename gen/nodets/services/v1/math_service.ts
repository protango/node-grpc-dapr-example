/* eslint-disable */
import Long from "long";
import {
  makeGenericClientConstructor,
  ChannelCredentials,
  ChannelOptions,
  UntypedServiceImplementation,
  handleUnaryCall,
  Client,
  ClientUnaryCall,
  Metadata,
  CallOptions,
  ServiceError,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "services.v1";

export interface BasicMathRequest {
  num1: number;
  num2: number;
}

export interface MathResponse {
  result: number;
}

const baseBasicMathRequest: object = { num1: 0, num2: 0 };

export const BasicMathRequest = {
  encode(
    message: BasicMathRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.num1 !== 0) {
      writer.uint32(9).double(message.num1);
    }
    if (message.num2 !== 0) {
      writer.uint32(17).double(message.num2);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BasicMathRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBasicMathRequest } as BasicMathRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.num1 = reader.double();
          break;
        case 2:
          message.num2 = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BasicMathRequest {
    const message = { ...baseBasicMathRequest } as BasicMathRequest;
    if (object.num1 !== undefined && object.num1 !== null) {
      message.num1 = Number(object.num1);
    } else {
      message.num1 = 0;
    }
    if (object.num2 !== undefined && object.num2 !== null) {
      message.num2 = Number(object.num2);
    } else {
      message.num2 = 0;
    }
    return message;
  },

  toJSON(message: BasicMathRequest): unknown {
    const obj: any = {};
    message.num1 !== undefined && (obj.num1 = message.num1);
    message.num2 !== undefined && (obj.num2 = message.num2);
    return obj;
  },

  fromPartial(object: DeepPartial<BasicMathRequest>): BasicMathRequest {
    const message = { ...baseBasicMathRequest } as BasicMathRequest;
    if (object.num1 !== undefined && object.num1 !== null) {
      message.num1 = object.num1;
    } else {
      message.num1 = 0;
    }
    if (object.num2 !== undefined && object.num2 !== null) {
      message.num2 = object.num2;
    } else {
      message.num2 = 0;
    }
    return message;
  },
};

const baseMathResponse: object = { result: 0 };

export const MathResponse = {
  encode(
    message: MathResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(9).double(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MathResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMathResponse } as MathResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MathResponse {
    const message = { ...baseMathResponse } as MathResponse;
    if (object.result !== undefined && object.result !== null) {
      message.result = Number(object.result);
    } else {
      message.result = 0;
    }
    return message;
  },

  toJSON(message: MathResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result);
    return obj;
  },

  fromPartial(object: DeepPartial<MathResponse>): MathResponse {
    const message = { ...baseMathResponse } as MathResponse;
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    } else {
      message.result = 0;
    }
    return message;
  },
};

export const MathServiceService = {
  add: {
    path: "/services.v1.MathService/Add",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: BasicMathRequest) =>
      Buffer.from(BasicMathRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => BasicMathRequest.decode(value),
    responseSerialize: (value: MathResponse) =>
      Buffer.from(MathResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MathResponse.decode(value),
  },
  subtract: {
    path: "/services.v1.MathService/Subtract",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: BasicMathRequest) =>
      Buffer.from(BasicMathRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => BasicMathRequest.decode(value),
    responseSerialize: (value: MathResponse) =>
      Buffer.from(MathResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MathResponse.decode(value),
  },
  multiply: {
    path: "/services.v1.MathService/Multiply",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: BasicMathRequest) =>
      Buffer.from(BasicMathRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => BasicMathRequest.decode(value),
    responseSerialize: (value: MathResponse) =>
      Buffer.from(MathResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MathResponse.decode(value),
  },
  divide: {
    path: "/services.v1.MathService/Divide",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: BasicMathRequest) =>
      Buffer.from(BasicMathRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => BasicMathRequest.decode(value),
    responseSerialize: (value: MathResponse) =>
      Buffer.from(MathResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MathResponse.decode(value),
  },
} as const;

export interface MathServiceServer extends UntypedServiceImplementation {
  add: handleUnaryCall<BasicMathRequest, MathResponse>;
  subtract: handleUnaryCall<BasicMathRequest, MathResponse>;
  multiply: handleUnaryCall<BasicMathRequest, MathResponse>;
  divide: handleUnaryCall<BasicMathRequest, MathResponse>;
}

export interface MathServiceClient extends Client {
  add(
    request: BasicMathRequest,
    callback: (error: ServiceError | null, response: MathResponse) => void
  ): ClientUnaryCall;
  add(
    request: BasicMathRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: MathResponse) => void
  ): ClientUnaryCall;
  add(
    request: BasicMathRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: MathResponse) => void
  ): ClientUnaryCall;
  subtract(
    request: BasicMathRequest,
    callback: (error: ServiceError | null, response: MathResponse) => void
  ): ClientUnaryCall;
  subtract(
    request: BasicMathRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: MathResponse) => void
  ): ClientUnaryCall;
  subtract(
    request: BasicMathRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: MathResponse) => void
  ): ClientUnaryCall;
  multiply(
    request: BasicMathRequest,
    callback: (error: ServiceError | null, response: MathResponse) => void
  ): ClientUnaryCall;
  multiply(
    request: BasicMathRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: MathResponse) => void
  ): ClientUnaryCall;
  multiply(
    request: BasicMathRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: MathResponse) => void
  ): ClientUnaryCall;
  divide(
    request: BasicMathRequest,
    callback: (error: ServiceError | null, response: MathResponse) => void
  ): ClientUnaryCall;
  divide(
    request: BasicMathRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: MathResponse) => void
  ): ClientUnaryCall;
  divide(
    request: BasicMathRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: MathResponse) => void
  ): ClientUnaryCall;
}

export const MathServiceClient = (makeGenericClientConstructor(
  MathServiceService,
  "services.v1.MathService"
) as unknown) as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): MathServiceClient;
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
