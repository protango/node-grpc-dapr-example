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
import {
  StateItem,
  InvokeRequest,
  InvokeResponse,
} from "../../../../dapr/proto/common/v1/common";
import { Empty } from "../../../../google/protobuf/empty";

export const protobufPackage = "dapr.proto.runtime.v1";

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
export enum TopicEventResponse_TopicEventResponseStatus {
  /** SUCCESS - SUCCESS is the default behavior: message is acknowledged and not retried or logged. */
  SUCCESS = 0,
  /** RETRY - RETRY status signals Dapr to retry the message as part of an expected scenario (no warning is logged). */
  RETRY = 1,
  /** DROP - DROP status signals Dapr to drop the message as part of an unexpected scenario (warning is logged). */
  DROP = 2,
  UNRECOGNIZED = -1,
}

export function topicEventResponse_TopicEventResponseStatusFromJSON(
  object: any
): TopicEventResponse_TopicEventResponseStatus {
  switch (object) {
    case 0:
    case "SUCCESS":
      return TopicEventResponse_TopicEventResponseStatus.SUCCESS;
    case 1:
    case "RETRY":
      return TopicEventResponse_TopicEventResponseStatus.RETRY;
    case 2:
    case "DROP":
      return TopicEventResponse_TopicEventResponseStatus.DROP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TopicEventResponse_TopicEventResponseStatus.UNRECOGNIZED;
  }
}

export function topicEventResponse_TopicEventResponseStatusToJSON(
  object: TopicEventResponse_TopicEventResponseStatus
): string {
  switch (object) {
    case TopicEventResponse_TopicEventResponseStatus.SUCCESS:
      return "SUCCESS";
    case TopicEventResponse_TopicEventResponseStatus.RETRY:
      return "RETRY";
    case TopicEventResponse_TopicEventResponseStatus.DROP:
      return "DROP";
    default:
      return "UNKNOWN";
  }
}

/** BindingEventRequest represents input bindings event. */
export interface BindingEventRequest {
  /** Required. The name of the input binding component. */
  name: string;
  /** Required. The payload that the input bindings sent */
  data: Buffer;
  /** The metadata set by the input binging components. */
  metadata: { [key: string]: string };
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
export enum BindingEventResponse_BindingEventConcurrency {
  /** SEQUENTIAL - SEQUENTIAL sends data to output bindings specified in "to" sequentially. */
  SEQUENTIAL = 0,
  /** PARALLEL - PARALLEL sends data to output bindings specified in "to" in parallel. */
  PARALLEL = 1,
  UNRECOGNIZED = -1,
}

export function bindingEventResponse_BindingEventConcurrencyFromJSON(
  object: any
): BindingEventResponse_BindingEventConcurrency {
  switch (object) {
    case 0:
    case "SEQUENTIAL":
      return BindingEventResponse_BindingEventConcurrency.SEQUENTIAL;
    case 1:
    case "PARALLEL":
      return BindingEventResponse_BindingEventConcurrency.PARALLEL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BindingEventResponse_BindingEventConcurrency.UNRECOGNIZED;
  }
}

export function bindingEventResponse_BindingEventConcurrencyToJSON(
  object: BindingEventResponse_BindingEventConcurrency
): string {
  switch (object) {
    case BindingEventResponse_BindingEventConcurrency.SEQUENTIAL:
      return "SEQUENTIAL";
    case BindingEventResponse_BindingEventConcurrency.PARALLEL:
      return "PARALLEL";
    default:
      return "UNKNOWN";
  }
}

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
  metadata: { [key: string]: string };
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

const baseTopicEventRequest: object = {
  id: "",
  source: "",
  type: "",
  specVersion: "",
  dataContentType: "",
  topic: "",
  pubsubName: "",
};

export const TopicEventRequest = {
  encode(
    message: TopicEventRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.source !== "") {
      writer.uint32(18).string(message.source);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    if (message.specVersion !== "") {
      writer.uint32(34).string(message.specVersion);
    }
    if (message.dataContentType !== "") {
      writer.uint32(42).string(message.dataContentType);
    }
    if (message.data.length !== 0) {
      writer.uint32(58).bytes(message.data);
    }
    if (message.topic !== "") {
      writer.uint32(50).string(message.topic);
    }
    if (message.pubsubName !== "") {
      writer.uint32(66).string(message.pubsubName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TopicEventRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTopicEventRequest } as TopicEventRequest;
    message.data = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.source = reader.string();
          break;
        case 3:
          message.type = reader.string();
          break;
        case 4:
          message.specVersion = reader.string();
          break;
        case 5:
          message.dataContentType = reader.string();
          break;
        case 7:
          message.data = reader.bytes() as Buffer;
          break;
        case 6:
          message.topic = reader.string();
          break;
        case 8:
          message.pubsubName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TopicEventRequest {
    const message = { ...baseTopicEventRequest } as TopicEventRequest;
    message.data = Buffer.alloc(0);
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = String(object.source);
    } else {
      message.source = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.specVersion !== undefined && object.specVersion !== null) {
      message.specVersion = String(object.specVersion);
    } else {
      message.specVersion = "";
    }
    if (
      object.dataContentType !== undefined &&
      object.dataContentType !== null
    ) {
      message.dataContentType = String(object.dataContentType);
    } else {
      message.dataContentType = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Buffer.from(bytesFromBase64(object.data));
    }
    if (object.topic !== undefined && object.topic !== null) {
      message.topic = String(object.topic);
    } else {
      message.topic = "";
    }
    if (object.pubsubName !== undefined && object.pubsubName !== null) {
      message.pubsubName = String(object.pubsubName);
    } else {
      message.pubsubName = "";
    }
    return message;
  },

  toJSON(message: TopicEventRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.source !== undefined && (obj.source = message.source);
    message.type !== undefined && (obj.type = message.type);
    message.specVersion !== undefined &&
      (obj.specVersion = message.specVersion);
    message.dataContentType !== undefined &&
      (obj.dataContentType = message.dataContentType);
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : Buffer.alloc(0)
      ));
    message.topic !== undefined && (obj.topic = message.topic);
    message.pubsubName !== undefined && (obj.pubsubName = message.pubsubName);
    return obj;
  },

  fromPartial(object: DeepPartial<TopicEventRequest>): TopicEventRequest {
    const message = { ...baseTopicEventRequest } as TopicEventRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    } else {
      message.source = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.specVersion !== undefined && object.specVersion !== null) {
      message.specVersion = object.specVersion;
    } else {
      message.specVersion = "";
    }
    if (
      object.dataContentType !== undefined &&
      object.dataContentType !== null
    ) {
      message.dataContentType = object.dataContentType;
    } else {
      message.dataContentType = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = Buffer.alloc(0);
    }
    if (object.topic !== undefined && object.topic !== null) {
      message.topic = object.topic;
    } else {
      message.topic = "";
    }
    if (object.pubsubName !== undefined && object.pubsubName !== null) {
      message.pubsubName = object.pubsubName;
    } else {
      message.pubsubName = "";
    }
    return message;
  },
};

const baseTopicEventResponse: object = { status: 0 };

export const TopicEventResponse = {
  encode(
    message: TopicEventResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TopicEventResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTopicEventResponse } as TopicEventResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TopicEventResponse {
    const message = { ...baseTopicEventResponse } as TopicEventResponse;
    if (object.status !== undefined && object.status !== null) {
      message.status = topicEventResponse_TopicEventResponseStatusFromJSON(
        object.status
      );
    } else {
      message.status = 0;
    }
    return message;
  },

  toJSON(message: TopicEventResponse): unknown {
    const obj: any = {};
    message.status !== undefined &&
      (obj.status = topicEventResponse_TopicEventResponseStatusToJSON(
        message.status
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<TopicEventResponse>): TopicEventResponse {
    const message = { ...baseTopicEventResponse } as TopicEventResponse;
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    return message;
  },
};

const baseBindingEventRequest: object = { name: "" };

export const BindingEventRequest = {
  encode(
    message: BindingEventRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      BindingEventRequest_MetadataEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BindingEventRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBindingEventRequest } as BindingEventRequest;
    message.metadata = {};
    message.data = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.data = reader.bytes() as Buffer;
          break;
        case 3:
          const entry3 = BindingEventRequest_MetadataEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.metadata[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BindingEventRequest {
    const message = { ...baseBindingEventRequest } as BindingEventRequest;
    message.metadata = {};
    message.data = Buffer.alloc(0);
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Buffer.from(bytesFromBase64(object.data));
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      Object.entries(object.metadata).forEach(([key, value]) => {
        message.metadata[key] = String(value);
      });
    }
    return message;
  },

  toJSON(message: BindingEventRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : Buffer.alloc(0)
      ));
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<BindingEventRequest>): BindingEventRequest {
    const message = { ...baseBindingEventRequest } as BindingEventRequest;
    message.metadata = {};
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = Buffer.alloc(0);
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      Object.entries(object.metadata).forEach(([key, value]) => {
        if (value !== undefined) {
          message.metadata[key] = String(value);
        }
      });
    }
    return message;
  },
};

const baseBindingEventRequest_MetadataEntry: object = { key: "", value: "" };

export const BindingEventRequest_MetadataEntry = {
  encode(
    message: BindingEventRequest_MetadataEntry,
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
  ): BindingEventRequest_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBindingEventRequest_MetadataEntry,
    } as BindingEventRequest_MetadataEntry;
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

  fromJSON(object: any): BindingEventRequest_MetadataEntry {
    const message = {
      ...baseBindingEventRequest_MetadataEntry,
    } as BindingEventRequest_MetadataEntry;
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

  toJSON(message: BindingEventRequest_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<BindingEventRequest_MetadataEntry>
  ): BindingEventRequest_MetadataEntry {
    const message = {
      ...baseBindingEventRequest_MetadataEntry,
    } as BindingEventRequest_MetadataEntry;
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

const baseBindingEventResponse: object = {
  storeName: "",
  to: "",
  concurrency: 0,
};

export const BindingEventResponse = {
  encode(
    message: BindingEventResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.storeName !== "") {
      writer.uint32(10).string(message.storeName);
    }
    for (const v of message.states) {
      StateItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.to) {
      writer.uint32(26).string(v!);
    }
    if (message.data.length !== 0) {
      writer.uint32(34).bytes(message.data);
    }
    if (message.concurrency !== 0) {
      writer.uint32(40).int32(message.concurrency);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BindingEventResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBindingEventResponse } as BindingEventResponse;
    message.states = [];
    message.to = [];
    message.data = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storeName = reader.string();
          break;
        case 2:
          message.states.push(StateItem.decode(reader, reader.uint32()));
          break;
        case 3:
          message.to.push(reader.string());
          break;
        case 4:
          message.data = reader.bytes() as Buffer;
          break;
        case 5:
          message.concurrency = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BindingEventResponse {
    const message = { ...baseBindingEventResponse } as BindingEventResponse;
    message.states = [];
    message.to = [];
    message.data = Buffer.alloc(0);
    if (object.storeName !== undefined && object.storeName !== null) {
      message.storeName = String(object.storeName);
    } else {
      message.storeName = "";
    }
    if (object.states !== undefined && object.states !== null) {
      for (const e of object.states) {
        message.states.push(StateItem.fromJSON(e));
      }
    }
    if (object.to !== undefined && object.to !== null) {
      for (const e of object.to) {
        message.to.push(String(e));
      }
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Buffer.from(bytesFromBase64(object.data));
    }
    if (object.concurrency !== undefined && object.concurrency !== null) {
      message.concurrency = bindingEventResponse_BindingEventConcurrencyFromJSON(
        object.concurrency
      );
    } else {
      message.concurrency = 0;
    }
    return message;
  },

  toJSON(message: BindingEventResponse): unknown {
    const obj: any = {};
    message.storeName !== undefined && (obj.storeName = message.storeName);
    if (message.states) {
      obj.states = message.states.map((e) =>
        e ? StateItem.toJSON(e) : undefined
      );
    } else {
      obj.states = [];
    }
    if (message.to) {
      obj.to = message.to.map((e) => e);
    } else {
      obj.to = [];
    }
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : Buffer.alloc(0)
      ));
    message.concurrency !== undefined &&
      (obj.concurrency = bindingEventResponse_BindingEventConcurrencyToJSON(
        message.concurrency
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<BindingEventResponse>): BindingEventResponse {
    const message = { ...baseBindingEventResponse } as BindingEventResponse;
    message.states = [];
    message.to = [];
    if (object.storeName !== undefined && object.storeName !== null) {
      message.storeName = object.storeName;
    } else {
      message.storeName = "";
    }
    if (object.states !== undefined && object.states !== null) {
      for (const e of object.states) {
        message.states.push(StateItem.fromPartial(e));
      }
    }
    if (object.to !== undefined && object.to !== null) {
      for (const e of object.to) {
        message.to.push(e);
      }
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = Buffer.alloc(0);
    }
    if (object.concurrency !== undefined && object.concurrency !== null) {
      message.concurrency = object.concurrency;
    } else {
      message.concurrency = 0;
    }
    return message;
  },
};

const baseListTopicSubscriptionsResponse: object = {};

export const ListTopicSubscriptionsResponse = {
  encode(
    message: ListTopicSubscriptionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.subscriptions) {
      TopicSubscription.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListTopicSubscriptionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListTopicSubscriptionsResponse,
    } as ListTopicSubscriptionsResponse;
    message.subscriptions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscriptions.push(
            TopicSubscription.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListTopicSubscriptionsResponse {
    const message = {
      ...baseListTopicSubscriptionsResponse,
    } as ListTopicSubscriptionsResponse;
    message.subscriptions = [];
    if (object.subscriptions !== undefined && object.subscriptions !== null) {
      for (const e of object.subscriptions) {
        message.subscriptions.push(TopicSubscription.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ListTopicSubscriptionsResponse): unknown {
    const obj: any = {};
    if (message.subscriptions) {
      obj.subscriptions = message.subscriptions.map((e) =>
        e ? TopicSubscription.toJSON(e) : undefined
      );
    } else {
      obj.subscriptions = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListTopicSubscriptionsResponse>
  ): ListTopicSubscriptionsResponse {
    const message = {
      ...baseListTopicSubscriptionsResponse,
    } as ListTopicSubscriptionsResponse;
    message.subscriptions = [];
    if (object.subscriptions !== undefined && object.subscriptions !== null) {
      for (const e of object.subscriptions) {
        message.subscriptions.push(TopicSubscription.fromPartial(e));
      }
    }
    return message;
  },
};

const baseTopicSubscription: object = { pubsubName: "", topic: "" };

export const TopicSubscription = {
  encode(
    message: TopicSubscription,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pubsubName !== "") {
      writer.uint32(10).string(message.pubsubName);
    }
    if (message.topic !== "") {
      writer.uint32(18).string(message.topic);
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      TopicSubscription_MetadataEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TopicSubscription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTopicSubscription } as TopicSubscription;
    message.metadata = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubsubName = reader.string();
          break;
        case 2:
          message.topic = reader.string();
          break;
        case 3:
          const entry3 = TopicSubscription_MetadataEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.metadata[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TopicSubscription {
    const message = { ...baseTopicSubscription } as TopicSubscription;
    message.metadata = {};
    if (object.pubsubName !== undefined && object.pubsubName !== null) {
      message.pubsubName = String(object.pubsubName);
    } else {
      message.pubsubName = "";
    }
    if (object.topic !== undefined && object.topic !== null) {
      message.topic = String(object.topic);
    } else {
      message.topic = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      Object.entries(object.metadata).forEach(([key, value]) => {
        message.metadata[key] = String(value);
      });
    }
    return message;
  },

  toJSON(message: TopicSubscription): unknown {
    const obj: any = {};
    message.pubsubName !== undefined && (obj.pubsubName = message.pubsubName);
    message.topic !== undefined && (obj.topic = message.topic);
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TopicSubscription>): TopicSubscription {
    const message = { ...baseTopicSubscription } as TopicSubscription;
    message.metadata = {};
    if (object.pubsubName !== undefined && object.pubsubName !== null) {
      message.pubsubName = object.pubsubName;
    } else {
      message.pubsubName = "";
    }
    if (object.topic !== undefined && object.topic !== null) {
      message.topic = object.topic;
    } else {
      message.topic = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      Object.entries(object.metadata).forEach(([key, value]) => {
        if (value !== undefined) {
          message.metadata[key] = String(value);
        }
      });
    }
    return message;
  },
};

const baseTopicSubscription_MetadataEntry: object = { key: "", value: "" };

export const TopicSubscription_MetadataEntry = {
  encode(
    message: TopicSubscription_MetadataEntry,
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
  ): TopicSubscription_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTopicSubscription_MetadataEntry,
    } as TopicSubscription_MetadataEntry;
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

  fromJSON(object: any): TopicSubscription_MetadataEntry {
    const message = {
      ...baseTopicSubscription_MetadataEntry,
    } as TopicSubscription_MetadataEntry;
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

  toJSON(message: TopicSubscription_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TopicSubscription_MetadataEntry>
  ): TopicSubscription_MetadataEntry {
    const message = {
      ...baseTopicSubscription_MetadataEntry,
    } as TopicSubscription_MetadataEntry;
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

const baseListInputBindingsResponse: object = { bindings: "" };

export const ListInputBindingsResponse = {
  encode(
    message: ListInputBindingsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.bindings) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListInputBindingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListInputBindingsResponse,
    } as ListInputBindingsResponse;
    message.bindings = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bindings.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListInputBindingsResponse {
    const message = {
      ...baseListInputBindingsResponse,
    } as ListInputBindingsResponse;
    message.bindings = [];
    if (object.bindings !== undefined && object.bindings !== null) {
      for (const e of object.bindings) {
        message.bindings.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: ListInputBindingsResponse): unknown {
    const obj: any = {};
    if (message.bindings) {
      obj.bindings = message.bindings.map((e) => e);
    } else {
      obj.bindings = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListInputBindingsResponse>
  ): ListInputBindingsResponse {
    const message = {
      ...baseListInputBindingsResponse,
    } as ListInputBindingsResponse;
    message.bindings = [];
    if (object.bindings !== undefined && object.bindings !== null) {
      for (const e of object.bindings) {
        message.bindings.push(e);
      }
    }
    return message;
  },
};

/**
 * AppCallback V1 allows user application to interact with Dapr runtime.
 * User application needs to implement AppCallback service if it needs to
 * receive message from dapr runtime.
 */
export const AppCallbackService = {
  /** Invokes service method with InvokeRequest. */
  onInvoke: {
    path: "/dapr.proto.runtime.v1.AppCallback/OnInvoke",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: InvokeRequest) =>
      Buffer.from(InvokeRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => InvokeRequest.decode(value),
    responseSerialize: (value: InvokeResponse) =>
      Buffer.from(InvokeResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => InvokeResponse.decode(value),
  },
  /** Lists all topics subscribed by this app. */
  listTopicSubscriptions: {
    path: "/dapr.proto.runtime.v1.AppCallback/ListTopicSubscriptions",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Empty.decode(value),
    responseSerialize: (value: ListTopicSubscriptionsResponse) =>
      Buffer.from(ListTopicSubscriptionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListTopicSubscriptionsResponse.decode(value),
  },
  /** Subscribes events from Pubsub */
  onTopicEvent: {
    path: "/dapr.proto.runtime.v1.AppCallback/OnTopicEvent",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: TopicEventRequest) =>
      Buffer.from(TopicEventRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => TopicEventRequest.decode(value),
    responseSerialize: (value: TopicEventResponse) =>
      Buffer.from(TopicEventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => TopicEventResponse.decode(value),
  },
  /** Lists all input bindings subscribed by this app. */
  listInputBindings: {
    path: "/dapr.proto.runtime.v1.AppCallback/ListInputBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Empty.decode(value),
    responseSerialize: (value: ListInputBindingsResponse) =>
      Buffer.from(ListInputBindingsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListInputBindingsResponse.decode(value),
  },
  /**
   * Listens events from the input bindings
   *
   * User application can save the states or send the events to the output
   * bindings optionally by returning BindingEventResponse.
   */
  onBindingEvent: {
    path: "/dapr.proto.runtime.v1.AppCallback/OnBindingEvent",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: BindingEventRequest) =>
      Buffer.from(BindingEventRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => BindingEventRequest.decode(value),
    responseSerialize: (value: BindingEventResponse) =>
      Buffer.from(BindingEventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => BindingEventResponse.decode(value),
  },
} as const;

export interface AppCallbackServer extends UntypedServiceImplementation {
  /** Invokes service method with InvokeRequest. */
  onInvoke: handleUnaryCall<InvokeRequest, InvokeResponse>;
  /** Lists all topics subscribed by this app. */
  listTopicSubscriptions: handleUnaryCall<
    Empty,
    ListTopicSubscriptionsResponse
  >;
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
  onInvoke(
    request: InvokeRequest,
    callback: (error: ServiceError | null, response: InvokeResponse) => void
  ): ClientUnaryCall;
  onInvoke(
    request: InvokeRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: InvokeResponse) => void
  ): ClientUnaryCall;
  onInvoke(
    request: InvokeRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: InvokeResponse) => void
  ): ClientUnaryCall;
  /** Lists all topics subscribed by this app. */
  listTopicSubscriptions(
    request: Empty,
    callback: (
      error: ServiceError | null,
      response: ListTopicSubscriptionsResponse
    ) => void
  ): ClientUnaryCall;
  listTopicSubscriptions(
    request: Empty,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListTopicSubscriptionsResponse
    ) => void
  ): ClientUnaryCall;
  listTopicSubscriptions(
    request: Empty,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListTopicSubscriptionsResponse
    ) => void
  ): ClientUnaryCall;
  /** Subscribes events from Pubsub */
  onTopicEvent(
    request: TopicEventRequest,
    callback: (error: ServiceError | null, response: TopicEventResponse) => void
  ): ClientUnaryCall;
  onTopicEvent(
    request: TopicEventRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: TopicEventResponse) => void
  ): ClientUnaryCall;
  onTopicEvent(
    request: TopicEventRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: TopicEventResponse) => void
  ): ClientUnaryCall;
  /** Lists all input bindings subscribed by this app. */
  listInputBindings(
    request: Empty,
    callback: (
      error: ServiceError | null,
      response: ListInputBindingsResponse
    ) => void
  ): ClientUnaryCall;
  listInputBindings(
    request: Empty,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListInputBindingsResponse
    ) => void
  ): ClientUnaryCall;
  listInputBindings(
    request: Empty,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListInputBindingsResponse
    ) => void
  ): ClientUnaryCall;
  /**
   * Listens events from the input bindings
   *
   * User application can save the states or send the events to the output
   * bindings optionally by returning BindingEventResponse.
   */
  onBindingEvent(
    request: BindingEventRequest,
    callback: (
      error: ServiceError | null,
      response: BindingEventResponse
    ) => void
  ): ClientUnaryCall;
  onBindingEvent(
    request: BindingEventRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: BindingEventResponse
    ) => void
  ): ClientUnaryCall;
  onBindingEvent(
    request: BindingEventRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: BindingEventResponse
    ) => void
  ): ClientUnaryCall;
}

export const AppCallbackClient = (makeGenericClientConstructor(
  AppCallbackService,
  "dapr.proto.runtime.v1.AppCallback"
) as unknown) as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): AppCallbackClient;
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
