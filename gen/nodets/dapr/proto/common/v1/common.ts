/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";

export const protobufPackage = "dapr.proto.common.v1";

/**
 * HTTPExtension includes HTTP verb and querystring
 * when Dapr runtime delivers HTTP content.
 *
 * For example, when callers calls http invoke api
 * POST http://localhost:3500/v1.0/invoke/<app_id>/method/<method>?query1=value1&query2=value2
 *
 * Dapr runtime will parse POST as a verb and extract querystring to quersytring map.
 */
export interface HTTPExtension {
  /** Required. HTTP verb. */
  verb: HTTPExtension_Verb;
  /** Optional. querystring represents an encoded HTTP url query string in the following format: name=value&name2=value2 */
  querystring: string;
}

/**
 * Type of HTTP 1.1 Methods
 * RFC 7231: https://tools.ietf.org/html/rfc7231#page-24
 */
export enum HTTPExtension_Verb {
  NONE = 0,
  GET = 1,
  HEAD = 2,
  POST = 3,
  PUT = 4,
  DELETE = 5,
  CONNECT = 6,
  OPTIONS = 7,
  TRACE = 8,
  UNRECOGNIZED = -1,
}

export function hTTPExtension_VerbFromJSON(object: any): HTTPExtension_Verb {
  switch (object) {
    case 0:
    case "NONE":
      return HTTPExtension_Verb.NONE;
    case 1:
    case "GET":
      return HTTPExtension_Verb.GET;
    case 2:
    case "HEAD":
      return HTTPExtension_Verb.HEAD;
    case 3:
    case "POST":
      return HTTPExtension_Verb.POST;
    case 4:
    case "PUT":
      return HTTPExtension_Verb.PUT;
    case 5:
    case "DELETE":
      return HTTPExtension_Verb.DELETE;
    case 6:
    case "CONNECT":
      return HTTPExtension_Verb.CONNECT;
    case 7:
    case "OPTIONS":
      return HTTPExtension_Verb.OPTIONS;
    case 8:
    case "TRACE":
      return HTTPExtension_Verb.TRACE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HTTPExtension_Verb.UNRECOGNIZED;
  }
}

export function hTTPExtension_VerbToJSON(object: HTTPExtension_Verb): string {
  switch (object) {
    case HTTPExtension_Verb.NONE:
      return "NONE";
    case HTTPExtension_Verb.GET:
      return "GET";
    case HTTPExtension_Verb.HEAD:
      return "HEAD";
    case HTTPExtension_Verb.POST:
      return "POST";
    case HTTPExtension_Verb.PUT:
      return "PUT";
    case HTTPExtension_Verb.DELETE:
      return "DELETE";
    case HTTPExtension_Verb.CONNECT:
      return "CONNECT";
    case HTTPExtension_Verb.OPTIONS:
      return "OPTIONS";
    case HTTPExtension_Verb.TRACE:
      return "TRACE";
    default:
      return "UNKNOWN";
  }
}

/**
 * InvokeRequest is the message to invoke a method with the data.
 * This message is used in InvokeService of Dapr gRPC Service and OnInvoke
 * of AppCallback gRPC service.
 */
export interface InvokeRequest {
  /** Required. method is a method name which will be invoked by caller. */
  method: string;
  /**
   * Required. Bytes value or Protobuf message which caller sent.
   * Dapr treats Any.value as bytes type if Any.type_url is unset.
   */
  data: Any | undefined;
  /**
   * The type of data content.
   *
   * This field is required if data delivers http request body
   * Otherwise, this is optional.
   */
  contentType: string;
  /**
   * HTTP specific fields if request conveys http-compatible request.
   *
   * This field is required for http-compatible request. Otherwise,
   * this field is optional.
   */
  httpExtension: HTTPExtension | undefined;
}

/**
 * InvokeResponse is the response message inclduing data and its content type
 * from app callback.
 * This message is used in InvokeService of Dapr gRPC Service and OnInvoke
 * of AppCallback gRPC service.
 */
export interface InvokeResponse {
  /** Required. The content body of InvokeService response. */
  data: Any | undefined;
  /** Required. The type of data content. */
  contentType: string;
}

/** StateItem represents state key, value, and additional options to save state. */
export interface StateItem {
  /** Required. The state key */
  key: string;
  /** Required. The state data for key */
  value: Buffer;
  /**
   * The entity tag which represents the specific version of data.
   * The exact ETag format is defined by the corresponding data store.
   */
  etag: Etag | undefined;
  /** The metadata which will be passed to state store component. */
  metadata: { [key: string]: string };
  /** Options for concurrency and consistency to save the state. */
  options: StateOptions | undefined;
}

export interface StateItem_MetadataEntry {
  key: string;
  value: string;
}

/** Etag represents a state item version */
export interface Etag {
  /** value sets the etag value */
  value: string;
}

/** StateOptions configures concurrency and consistency for state operations */
export interface StateOptions {
  concurrency: StateOptions_StateConcurrency;
  consistency: StateOptions_StateConsistency;
}

/** Enum describing the supported concurrency for state. */
export enum StateOptions_StateConcurrency {
  CONCURRENCY_UNSPECIFIED = 0,
  CONCURRENCY_FIRST_WRITE = 1,
  CONCURRENCY_LAST_WRITE = 2,
  UNRECOGNIZED = -1,
}

export function stateOptions_StateConcurrencyFromJSON(
  object: any
): StateOptions_StateConcurrency {
  switch (object) {
    case 0:
    case "CONCURRENCY_UNSPECIFIED":
      return StateOptions_StateConcurrency.CONCURRENCY_UNSPECIFIED;
    case 1:
    case "CONCURRENCY_FIRST_WRITE":
      return StateOptions_StateConcurrency.CONCURRENCY_FIRST_WRITE;
    case 2:
    case "CONCURRENCY_LAST_WRITE":
      return StateOptions_StateConcurrency.CONCURRENCY_LAST_WRITE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StateOptions_StateConcurrency.UNRECOGNIZED;
  }
}

export function stateOptions_StateConcurrencyToJSON(
  object: StateOptions_StateConcurrency
): string {
  switch (object) {
    case StateOptions_StateConcurrency.CONCURRENCY_UNSPECIFIED:
      return "CONCURRENCY_UNSPECIFIED";
    case StateOptions_StateConcurrency.CONCURRENCY_FIRST_WRITE:
      return "CONCURRENCY_FIRST_WRITE";
    case StateOptions_StateConcurrency.CONCURRENCY_LAST_WRITE:
      return "CONCURRENCY_LAST_WRITE";
    default:
      return "UNKNOWN";
  }
}

/** Enum describing the supported consistency for state. */
export enum StateOptions_StateConsistency {
  CONSISTENCY_UNSPECIFIED = 0,
  CONSISTENCY_EVENTUAL = 1,
  CONSISTENCY_STRONG = 2,
  UNRECOGNIZED = -1,
}

export function stateOptions_StateConsistencyFromJSON(
  object: any
): StateOptions_StateConsistency {
  switch (object) {
    case 0:
    case "CONSISTENCY_UNSPECIFIED":
      return StateOptions_StateConsistency.CONSISTENCY_UNSPECIFIED;
    case 1:
    case "CONSISTENCY_EVENTUAL":
      return StateOptions_StateConsistency.CONSISTENCY_EVENTUAL;
    case 2:
    case "CONSISTENCY_STRONG":
      return StateOptions_StateConsistency.CONSISTENCY_STRONG;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StateOptions_StateConsistency.UNRECOGNIZED;
  }
}

export function stateOptions_StateConsistencyToJSON(
  object: StateOptions_StateConsistency
): string {
  switch (object) {
    case StateOptions_StateConsistency.CONSISTENCY_UNSPECIFIED:
      return "CONSISTENCY_UNSPECIFIED";
    case StateOptions_StateConsistency.CONSISTENCY_EVENTUAL:
      return "CONSISTENCY_EVENTUAL";
    case StateOptions_StateConsistency.CONSISTENCY_STRONG:
      return "CONSISTENCY_STRONG";
    default:
      return "UNKNOWN";
  }
}

const baseHTTPExtension: object = { verb: 0, querystring: "" };

export const HTTPExtension = {
  encode(
    message: HTTPExtension,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.verb !== 0) {
      writer.uint32(8).int32(message.verb);
    }
    if (message.querystring !== "") {
      writer.uint32(18).string(message.querystring);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HTTPExtension {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHTTPExtension } as HTTPExtension;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.verb = reader.int32() as any;
          break;
        case 2:
          message.querystring = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HTTPExtension {
    const message = { ...baseHTTPExtension } as HTTPExtension;
    if (object.verb !== undefined && object.verb !== null) {
      message.verb = hTTPExtension_VerbFromJSON(object.verb);
    } else {
      message.verb = 0;
    }
    if (object.querystring !== undefined && object.querystring !== null) {
      message.querystring = String(object.querystring);
    } else {
      message.querystring = "";
    }
    return message;
  },

  toJSON(message: HTTPExtension): unknown {
    const obj: any = {};
    message.verb !== undefined &&
      (obj.verb = hTTPExtension_VerbToJSON(message.verb));
    message.querystring !== undefined &&
      (obj.querystring = message.querystring);
    return obj;
  },

  fromPartial(object: DeepPartial<HTTPExtension>): HTTPExtension {
    const message = { ...baseHTTPExtension } as HTTPExtension;
    if (object.verb !== undefined && object.verb !== null) {
      message.verb = object.verb;
    } else {
      message.verb = 0;
    }
    if (object.querystring !== undefined && object.querystring !== null) {
      message.querystring = object.querystring;
    } else {
      message.querystring = "";
    }
    return message;
  },
};

const baseInvokeRequest: object = { method: "", contentType: "" };

export const InvokeRequest = {
  encode(
    message: InvokeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.method !== "") {
      writer.uint32(10).string(message.method);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    if (message.contentType !== "") {
      writer.uint32(26).string(message.contentType);
    }
    if (message.httpExtension !== undefined) {
      HTTPExtension.encode(
        message.httpExtension,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvokeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvokeRequest } as InvokeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.method = reader.string();
          break;
        case 2:
          message.data = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.contentType = reader.string();
          break;
        case 4:
          message.httpExtension = HTTPExtension.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InvokeRequest {
    const message = { ...baseInvokeRequest } as InvokeRequest;
    if (object.method !== undefined && object.method !== null) {
      message.method = String(object.method);
    } else {
      message.method = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromJSON(object.data);
    } else {
      message.data = undefined;
    }
    if (object.contentType !== undefined && object.contentType !== null) {
      message.contentType = String(object.contentType);
    } else {
      message.contentType = "";
    }
    if (object.httpExtension !== undefined && object.httpExtension !== null) {
      message.httpExtension = HTTPExtension.fromJSON(object.httpExtension);
    } else {
      message.httpExtension = undefined;
    }
    return message;
  },

  toJSON(message: InvokeRequest): unknown {
    const obj: any = {};
    message.method !== undefined && (obj.method = message.method);
    message.data !== undefined &&
      (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    message.contentType !== undefined &&
      (obj.contentType = message.contentType);
    message.httpExtension !== undefined &&
      (obj.httpExtension = message.httpExtension
        ? HTTPExtension.toJSON(message.httpExtension)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<InvokeRequest>): InvokeRequest {
    const message = { ...baseInvokeRequest } as InvokeRequest;
    if (object.method !== undefined && object.method !== null) {
      message.method = object.method;
    } else {
      message.method = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromPartial(object.data);
    } else {
      message.data = undefined;
    }
    if (object.contentType !== undefined && object.contentType !== null) {
      message.contentType = object.contentType;
    } else {
      message.contentType = "";
    }
    if (object.httpExtension !== undefined && object.httpExtension !== null) {
      message.httpExtension = HTTPExtension.fromPartial(object.httpExtension);
    } else {
      message.httpExtension = undefined;
    }
    return message;
  },
};

const baseInvokeResponse: object = { contentType: "" };

export const InvokeResponse = {
  encode(
    message: InvokeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.contentType !== "") {
      writer.uint32(18).string(message.contentType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvokeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvokeResponse } as InvokeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.contentType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InvokeResponse {
    const message = { ...baseInvokeResponse } as InvokeResponse;
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromJSON(object.data);
    } else {
      message.data = undefined;
    }
    if (object.contentType !== undefined && object.contentType !== null) {
      message.contentType = String(object.contentType);
    } else {
      message.contentType = "";
    }
    return message;
  },

  toJSON(message: InvokeResponse): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    message.contentType !== undefined &&
      (obj.contentType = message.contentType);
    return obj;
  },

  fromPartial(object: DeepPartial<InvokeResponse>): InvokeResponse {
    const message = { ...baseInvokeResponse } as InvokeResponse;
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromPartial(object.data);
    } else {
      message.data = undefined;
    }
    if (object.contentType !== undefined && object.contentType !== null) {
      message.contentType = object.contentType;
    } else {
      message.contentType = "";
    }
    return message;
  },
};

const baseStateItem: object = { key: "" };

export const StateItem = {
  encode(
    message: StateItem,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    if (message.etag !== undefined) {
      Etag.encode(message.etag, writer.uint32(26).fork()).ldelim();
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      StateItem_MetadataEntry.encode(
        { key: key as any, value },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.options !== undefined) {
      StateOptions.encode(message.options, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StateItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStateItem } as StateItem;
    message.metadata = {};
    message.value = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.bytes() as Buffer;
          break;
        case 3:
          message.etag = Etag.decode(reader, reader.uint32());
          break;
        case 4:
          const entry4 = StateItem_MetadataEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.metadata[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.options = StateOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StateItem {
    const message = { ...baseStateItem } as StateItem;
    message.metadata = {};
    message.value = Buffer.alloc(0);
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Buffer.from(bytesFromBase64(object.value));
    }
    if (object.etag !== undefined && object.etag !== null) {
      message.etag = Etag.fromJSON(object.etag);
    } else {
      message.etag = undefined;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      Object.entries(object.metadata).forEach(([key, value]) => {
        message.metadata[key] = String(value);
      });
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = StateOptions.fromJSON(object.options);
    } else {
      message.options = undefined;
    }
    return message;
  },

  toJSON(message: StateItem): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : Buffer.alloc(0)
      ));
    message.etag !== undefined &&
      (obj.etag = message.etag ? Etag.toJSON(message.etag) : undefined);
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    message.options !== undefined &&
      (obj.options = message.options
        ? StateOptions.toJSON(message.options)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<StateItem>): StateItem {
    const message = { ...baseStateItem } as StateItem;
    message.metadata = {};
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = Buffer.alloc(0);
    }
    if (object.etag !== undefined && object.etag !== null) {
      message.etag = Etag.fromPartial(object.etag);
    } else {
      message.etag = undefined;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      Object.entries(object.metadata).forEach(([key, value]) => {
        if (value !== undefined) {
          message.metadata[key] = String(value);
        }
      });
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = StateOptions.fromPartial(object.options);
    } else {
      message.options = undefined;
    }
    return message;
  },
};

const baseStateItem_MetadataEntry: object = { key: "", value: "" };

export const StateItem_MetadataEntry = {
  encode(
    message: StateItem_MetadataEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StateItem_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseStateItem_MetadataEntry,
    } as StateItem_MetadataEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StateItem_MetadataEntry {
    const message = {
      ...baseStateItem_MetadataEntry,
    } as StateItem_MetadataEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: StateItem_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<StateItem_MetadataEntry>
  ): StateItem_MetadataEntry {
    const message = {
      ...baseStateItem_MetadataEntry,
    } as StateItem_MetadataEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseEtag: object = { value: "" };

export const Etag = {
  encode(message: Etag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Etag {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEtag } as Etag;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Etag {
    const message = { ...baseEtag } as Etag;
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: Etag): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<Etag>): Etag {
    const message = { ...baseEtag } as Etag;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseStateOptions: object = { concurrency: 0, consistency: 0 };

export const StateOptions = {
  encode(
    message: StateOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.concurrency !== 0) {
      writer.uint32(8).int32(message.concurrency);
    }
    if (message.consistency !== 0) {
      writer.uint32(16).int32(message.consistency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StateOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStateOptions } as StateOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.concurrency = reader.int32() as any;
          break;
        case 2:
          message.consistency = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StateOptions {
    const message = { ...baseStateOptions } as StateOptions;
    if (object.concurrency !== undefined && object.concurrency !== null) {
      message.concurrency = stateOptions_StateConcurrencyFromJSON(
        object.concurrency
      );
    } else {
      message.concurrency = 0;
    }
    if (object.consistency !== undefined && object.consistency !== null) {
      message.consistency = stateOptions_StateConsistencyFromJSON(
        object.consistency
      );
    } else {
      message.consistency = 0;
    }
    return message;
  },

  toJSON(message: StateOptions): unknown {
    const obj: any = {};
    message.concurrency !== undefined &&
      (obj.concurrency = stateOptions_StateConcurrencyToJSON(
        message.concurrency
      ));
    message.consistency !== undefined &&
      (obj.consistency = stateOptions_StateConsistencyToJSON(
        message.consistency
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<StateOptions>): StateOptions {
    const message = { ...baseStateOptions } as StateOptions;
    if (object.concurrency !== undefined && object.concurrency !== null) {
      message.concurrency = object.concurrency;
    } else {
      message.concurrency = 0;
    }
    if (object.consistency !== undefined && object.consistency !== null) {
      message.consistency = object.consistency;
    } else {
      message.consistency = 0;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(""));
}

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
