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
  StateOptions_StateConsistency,
  InvokeRequest,
  Etag,
  StateOptions,
  StateItem,
  InvokeResponse,
  stateOptions_StateConsistencyFromJSON,
  stateOptions_StateConsistencyToJSON,
} from "../../../../dapr/proto/common/v1/common";
import { Any } from "../../../../google/protobuf/any";
import { Empty } from "../../../../google/protobuf/empty";

export const protobufPackage = "dapr.proto.runtime.v1";

/** InvokeServiceRequest represents the request message for Service invocation. */
export interface InvokeServiceRequest {
  /** Required. Callee's app id. */
  id: string;
  /** Required. message which will be delivered to callee. */
  message: InvokeRequest | undefined;
}

/** GetStateRequest is the message to get key-value states from specific state store. */
export interface GetStateRequest {
  /** The name of state store. */
  storeName: string;
  /** The key of the desired state */
  key: string;
  /** The read consistency of the state store. */
  consistency: StateOptions_StateConsistency;
  /** The metadata which will be sent to state store components. */
  metadata: { [key: string]: string };
}

export interface GetStateRequest_MetadataEntry {
  key: string;
  value: string;
}

/** GetBulkStateRequest is the message to get a list of key-value states from specific state store. */
export interface GetBulkStateRequest {
  /** The name of state store. */
  storeName: string;
  /** The keys to get. */
  keys: string[];
  /** The number of parallel operations executed on the state store for a get operation. */
  parallelism: number;
  /** The metadata which will be sent to state store components. */
  metadata: { [key: string]: string };
}

export interface GetBulkStateRequest_MetadataEntry {
  key: string;
  value: string;
}

/** GetBulkStateResponse is the response conveying the list of state values. */
export interface GetBulkStateResponse {
  /** The list of items containing the keys to get values for. */
  items: BulkStateItem[];
}

/**
 * BulkStateItem is the response item for a bulk get operation.
 * Return values include the item key, data and etag.
 */
export interface BulkStateItem {
  /** state item key */
  key: string;
  /** The byte array data */
  data: Buffer;
  /**
   * The entity tag which represents the specific version of data.
   * ETag format is defined by the corresponding data store.
   */
  etag: string;
  /** The error that was returned from the state store in case of a failed get operation. */
  error: string;
  /** The metadata which will be sent to app. */
  metadata: { [key: string]: string };
}

export interface BulkStateItem_MetadataEntry {
  key: string;
  value: string;
}

/** GetStateResponse is the response conveying the state value and etag. */
export interface GetStateResponse {
  /** The byte array data */
  data: Buffer;
  /**
   * The entity tag which represents the specific version of data.
   * ETag format is defined by the corresponding data store.
   */
  etag: string;
  /** The metadata which will be sent to app. */
  metadata: { [key: string]: string };
}

export interface GetStateResponse_MetadataEntry {
  key: string;
  value: string;
}

/** DeleteStateRequest is the message to delete key-value states in the specific state store. */
export interface DeleteStateRequest {
  /** The name of state store. */
  storeName: string;
  /** The key of the desired state */
  key: string;
  /**
   * The entity tag which represents the specific version of data.
   * The exact ETag format is defined by the corresponding data store.
   */
  etag: Etag | undefined;
  /**
   * State operation options which includes concurrency/
   * consistency/retry_policy.
   */
  options: StateOptions | undefined;
  /** The metadata which will be sent to state store components. */
  metadata: { [key: string]: string };
}

export interface DeleteStateRequest_MetadataEntry {
  key: string;
  value: string;
}

/** DeleteBulkStateRequest is the message to delete a list of key-value states from specific state store. */
export interface DeleteBulkStateRequest {
  /** The name of state store. */
  storeName: string;
  /** The array of the state key values. */
  states: StateItem[];
}

/** SaveStateRequest is the message to save multiple states into state store. */
export interface SaveStateRequest {
  /** The name of state store. */
  storeName: string;
  /** The array of the state key values. */
  states: StateItem[];
}

/** PublishEventRequest is the message to publish event data to pubsub topic */
export interface PublishEventRequest {
  /** The name of the pubsub component */
  pubsubName: string;
  /** The pubsub topic */
  topic: string;
  /** The data which will be published to topic. */
  data: Buffer;
  /** The content type for the data (optional). */
  dataContentType: string;
  /**
   * The metadata passing to pub components
   *
   * metadata property:
   * - key : the key of the message.
   */
  metadata: { [key: string]: string };
}

export interface PublishEventRequest_MetadataEntry {
  key: string;
  value: string;
}

/** InvokeBindingRequest is the message to send data to output bindings */
export interface InvokeBindingRequest {
  /** The name of the output binding to invoke. */
  name: string;
  /** The data which will be sent to output binding. */
  data: Buffer;
  /**
   * The metadata passing to output binding components
   *
   * Common metadata property:
   * - ttlInSeconds : the time to live in seconds for the message.
   * If set in the binding definition will cause all messages to
   * have a default time to live. The message ttl overrides any value
   * in the binding definition.
   */
  metadata: { [key: string]: string };
  /** The name of the operation type for the binding to invoke */
  operation: string;
}

export interface InvokeBindingRequest_MetadataEntry {
  key: string;
  value: string;
}

/** InvokeBindingResponse is the message returned from an output binding invocation */
export interface InvokeBindingResponse {
  /** The data which will be sent to output binding. */
  data: Buffer;
  /** The metadata returned from an external system */
  metadata: { [key: string]: string };
}

export interface InvokeBindingResponse_MetadataEntry {
  key: string;
  value: string;
}

/** GetSecretRequest is the message to get secret from secret store. */
export interface GetSecretRequest {
  /** The name of secret store. */
  storeName: string;
  /** The name of secret key. */
  key: string;
  /** The metadata which will be sent to secret store components. */
  metadata: { [key: string]: string };
}

export interface GetSecretRequest_MetadataEntry {
  key: string;
  value: string;
}

/** GetSecretResponse is the response message to convey the requested secret. */
export interface GetSecretResponse {
  /**
   * data is the secret value. Some secret store, such as kubernetes secret
   * store, can save multiple secrets for single secret key.
   */
  data: { [key: string]: string };
}

export interface GetSecretResponse_DataEntry {
  key: string;
  value: string;
}

/** GetBulkSecretRequest is the message to get the secrets from secret store. */
export interface GetBulkSecretRequest {
  /** The name of secret store. */
  storeName: string;
  /** The metadata which will be sent to secret store components. */
  metadata: { [key: string]: string };
}

export interface GetBulkSecretRequest_MetadataEntry {
  key: string;
  value: string;
}

/** SecretResponse is a map of decrypted string/string values */
export interface SecretResponse {
  secrets: { [key: string]: string };
}

export interface SecretResponse_SecretsEntry {
  key: string;
  value: string;
}

/** GetBulkSecretResponse is the response message to convey the requested secrets. */
export interface GetBulkSecretResponse {
  /**
   * data hold the secret values. Some secret store, such as kubernetes secret
   * store, can save multiple secrets for single secret key.
   */
  data: { [key: string]: SecretResponse };
}

export interface GetBulkSecretResponse_DataEntry {
  key: string;
  value: SecretResponse | undefined;
}

/** TransactionalStateOperation is the message to execute a specified operation with a key-value pair. */
export interface TransactionalStateOperation {
  /** The type of operation to be executed */
  operationType: string;
  /** State values to be operated on */
  request: StateItem | undefined;
}

/** ExecuteStateTransactionRequest is the message to execute multiple operations on a specified store. */
export interface ExecuteStateTransactionRequest {
  /** Required. name of state store. */
  storeName: string;
  /** Required. transactional operation list. */
  operations: TransactionalStateOperation[];
  /** The metadata used for transactional operations. */
  metadata: { [key: string]: string };
}

export interface ExecuteStateTransactionRequest_MetadataEntry {
  key: string;
  value: string;
}

/** RegisterActorTimerRequest is the message to register a timer for an actor of a given type and id. */
export interface RegisterActorTimerRequest {
  actorType: string;
  actorId: string;
  name: string;
  dueTime: string;
  period: string;
  callback: string;
  data: Buffer;
}

/** UnregisterActorTimerRequest is the message to unregister an actor timer */
export interface UnregisterActorTimerRequest {
  actorType: string;
  actorId: string;
  name: string;
}

/** RegisterActorReminderRequest is the message to register a reminder for an actor of a given type and id. */
export interface RegisterActorReminderRequest {
  actorType: string;
  actorId: string;
  name: string;
  dueTime: string;
  period: string;
  data: Buffer;
}

/** UnregisterActorReminderRequest is the message to unregister an actor reminder. */
export interface UnregisterActorReminderRequest {
  actorType: string;
  actorId: string;
  name: string;
}

/** GetActorStateRequest is the message to get key-value states from specific actor. */
export interface GetActorStateRequest {
  actorType: string;
  actorId: string;
  key: string;
}

/** GetActorStateResponse is the response conveying the actor's state value. */
export interface GetActorStateResponse {
  data: Buffer;
}

/** ExecuteActorStateTransactionRequest is the message to execute multiple operations on a specified actor. */
export interface ExecuteActorStateTransactionRequest {
  actorType: string;
  actorId: string;
  operations: TransactionalActorStateOperation[];
}

/** TransactionalAcorStateOperation is the message to execute a specified operation with a key-value pair. */
export interface TransactionalActorStateOperation {
  operationType: string;
  key: string;
  value: Any | undefined;
}

/** InvokeActorRequest is the message to call an actor. */
export interface InvokeActorRequest {
  actorType: string;
  actorId: string;
  method: string;
  data: Buffer;
}

/** InvokeActorResponse is the method that returns an actor invocation response. */
export interface InvokeActorResponse {
  data: Buffer;
}

/** GetMetadataResponse is a message that is returned on GetMetadata rpc call */
export interface GetMetadataResponse {
  id: string;
  activeActorsCount: ActiveActorsCount[];
  registeredComponents: RegisteredComponents[];
  extendedMetadata: { [key: string]: string };
}

export interface GetMetadataResponse_ExtendedMetadataEntry {
  key: string;
  value: string;
}

export interface ActiveActorsCount {
  type: string;
  count: number;
}

export interface RegisteredComponents {
  name: string;
  type: string;
  version: string;
}

export interface SetMetadataRequest {
  key: string;
  value: string;
}

const baseInvokeServiceRequest: object = { id: "" };

export const InvokeServiceRequest = {
  encode(
    message: InvokeServiceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.message !== undefined) {
      InvokeRequest.encode(message.message, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InvokeServiceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvokeServiceRequest } as InvokeServiceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 3:
          message.message = InvokeRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InvokeServiceRequest {
    const message = { ...baseInvokeServiceRequest } as InvokeServiceRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = InvokeRequest.fromJSON(object.message);
    } else {
      message.message = undefined;
    }
    return message;
  },

  toJSON(message: InvokeServiceRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.message !== undefined &&
      (obj.message = message.message
        ? InvokeRequest.toJSON(message.message)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<InvokeServiceRequest>): InvokeServiceRequest {
    const message = { ...baseInvokeServiceRequest } as InvokeServiceRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = InvokeRequest.fromPartial(object.message);
    } else {
      message.message = undefined;
    }
    return message;
  },
};

const baseGetStateRequest: object = { storeName: "", key: "", consistency: 0 };

export const GetStateRequest = {
  encode(
    message: GetStateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.storeName !== "") {
      writer.uint32(10).string(message.storeName);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    if (message.consistency !== 0) {
      writer.uint32(24).int32(message.consistency);
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      GetStateRequest_MetadataEntry.encode(
        { key: key as any, value },
        writer.uint32(34).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetStateRequest } as GetStateRequest;
    message.metadata = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storeName = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        case 3:
          message.consistency = reader.int32() as any;
          break;
        case 4:
          const entry4 = GetStateRequest_MetadataEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.metadata[entry4.key] = entry4.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetStateRequest {
    const message = { ...baseGetStateRequest } as GetStateRequest;
    message.metadata = {};
    if (object.storeName !== undefined && object.storeName !== null) {
      message.storeName = String(object.storeName);
    } else {
      message.storeName = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.consistency !== undefined && object.consistency !== null) {
      message.consistency = stateOptions_StateConsistencyFromJSON(
        object.consistency
      );
    } else {
      message.consistency = 0;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      Object.entries(object.metadata).forEach(([key, value]) => {
        message.metadata[key] = String(value);
      });
    }
    return message;
  },

  toJSON(message: GetStateRequest): unknown {
    const obj: any = {};
    message.storeName !== undefined && (obj.storeName = message.storeName);
    message.key !== undefined && (obj.key = message.key);
    message.consistency !== undefined &&
      (obj.consistency = stateOptions_StateConsistencyToJSON(
        message.consistency
      ));
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GetStateRequest>): GetStateRequest {
    const message = { ...baseGetStateRequest } as GetStateRequest;
    message.metadata = {};
    if (object.storeName !== undefined && object.storeName !== null) {
      message.storeName = object.storeName;
    } else {
      message.storeName = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.consistency !== undefined && object.consistency !== null) {
      message.consistency = object.consistency;
    } else {
      message.consistency = 0;
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

const baseGetStateRequest_MetadataEntry: object = { key: "", value: "" };

export const GetStateRequest_MetadataEntry = {
  encode(
    message: GetStateRequest_MetadataEntry,
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
  ): GetStateRequest_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetStateRequest_MetadataEntry,
    } as GetStateRequest_MetadataEntry;
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

  fromJSON(object: any): GetStateRequest_MetadataEntry {
    const message = {
      ...baseGetStateRequest_MetadataEntry,
    } as GetStateRequest_MetadataEntry;
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

  toJSON(message: GetStateRequest_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetStateRequest_MetadataEntry>
  ): GetStateRequest_MetadataEntry {
    const message = {
      ...baseGetStateRequest_MetadataEntry,
    } as GetStateRequest_MetadataEntry;
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

const baseGetBulkStateRequest: object = {
  storeName: "",
  keys: "",
  parallelism: 0,
};

export const GetBulkStateRequest = {
  encode(
    message: GetBulkStateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.storeName !== "") {
      writer.uint32(10).string(message.storeName);
    }
    for (const v of message.keys) {
      writer.uint32(18).string(v!);
    }
    if (message.parallelism !== 0) {
      writer.uint32(24).int32(message.parallelism);
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      GetBulkStateRequest_MetadataEntry.encode(
        { key: key as any, value },
        writer.uint32(34).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBulkStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetBulkStateRequest } as GetBulkStateRequest;
    message.keys = [];
    message.metadata = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storeName = reader.string();
          break;
        case 2:
          message.keys.push(reader.string());
          break;
        case 3:
          message.parallelism = reader.int32();
          break;
        case 4:
          const entry4 = GetBulkStateRequest_MetadataEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.metadata[entry4.key] = entry4.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBulkStateRequest {
    const message = { ...baseGetBulkStateRequest } as GetBulkStateRequest;
    message.keys = [];
    message.metadata = {};
    if (object.storeName !== undefined && object.storeName !== null) {
      message.storeName = String(object.storeName);
    } else {
      message.storeName = "";
    }
    if (object.keys !== undefined && object.keys !== null) {
      for (const e of object.keys) {
        message.keys.push(String(e));
      }
    }
    if (object.parallelism !== undefined && object.parallelism !== null) {
      message.parallelism = Number(object.parallelism);
    } else {
      message.parallelism = 0;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      Object.entries(object.metadata).forEach(([key, value]) => {
        message.metadata[key] = String(value);
      });
    }
    return message;
  },

  toJSON(message: GetBulkStateRequest): unknown {
    const obj: any = {};
    message.storeName !== undefined && (obj.storeName = message.storeName);
    if (message.keys) {
      obj.keys = message.keys.map((e) => e);
    } else {
      obj.keys = [];
    }
    message.parallelism !== undefined &&
      (obj.parallelism = message.parallelism);
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GetBulkStateRequest>): GetBulkStateRequest {
    const message = { ...baseGetBulkStateRequest } as GetBulkStateRequest;
    message.keys = [];
    message.metadata = {};
    if (object.storeName !== undefined && object.storeName !== null) {
      message.storeName = object.storeName;
    } else {
      message.storeName = "";
    }
    if (object.keys !== undefined && object.keys !== null) {
      for (const e of object.keys) {
        message.keys.push(e);
      }
    }
    if (object.parallelism !== undefined && object.parallelism !== null) {
      message.parallelism = object.parallelism;
    } else {
      message.parallelism = 0;
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

const baseGetBulkStateRequest_MetadataEntry: object = { key: "", value: "" };

export const GetBulkStateRequest_MetadataEntry = {
  encode(
    message: GetBulkStateRequest_MetadataEntry,
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
  ): GetBulkStateRequest_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetBulkStateRequest_MetadataEntry,
    } as GetBulkStateRequest_MetadataEntry;
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

  fromJSON(object: any): GetBulkStateRequest_MetadataEntry {
    const message = {
      ...baseGetBulkStateRequest_MetadataEntry,
    } as GetBulkStateRequest_MetadataEntry;
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

  toJSON(message: GetBulkStateRequest_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetBulkStateRequest_MetadataEntry>
  ): GetBulkStateRequest_MetadataEntry {
    const message = {
      ...baseGetBulkStateRequest_MetadataEntry,
    } as GetBulkStateRequest_MetadataEntry;
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

const baseGetBulkStateResponse: object = {};

export const GetBulkStateResponse = {
  encode(
    message: GetBulkStateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      BulkStateItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetBulkStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetBulkStateResponse } as GetBulkStateResponse;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(BulkStateItem.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBulkStateResponse {
    const message = { ...baseGetBulkStateResponse } as GetBulkStateResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(BulkStateItem.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GetBulkStateResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? BulkStateItem.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GetBulkStateResponse>): GetBulkStateResponse {
    const message = { ...baseGetBulkStateResponse } as GetBulkStateResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(BulkStateItem.fromPartial(e));
      }
    }
    return message;
  },
};

const baseBulkStateItem: object = { key: "", etag: "", error: "" };

export const BulkStateItem = {
  encode(
    message: BulkStateItem,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.etag !== "") {
      writer.uint32(26).string(message.etag);
    }
    if (message.error !== "") {
      writer.uint32(34).string(message.error);
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      BulkStateItem_MetadataEntry.encode(
        { key: key as any, value },
        writer.uint32(42).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BulkStateItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBulkStateItem } as BulkStateItem;
    message.metadata = {};
    message.data = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.data = reader.bytes() as Buffer;
          break;
        case 3:
          message.etag = reader.string();
          break;
        case 4:
          message.error = reader.string();
          break;
        case 5:
          const entry5 = BulkStateItem_MetadataEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.metadata[entry5.key] = entry5.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BulkStateItem {
    const message = { ...baseBulkStateItem } as BulkStateItem;
    message.metadata = {};
    message.data = Buffer.alloc(0);
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Buffer.from(bytesFromBase64(object.data));
    }
    if (object.etag !== undefined && object.etag !== null) {
      message.etag = String(object.etag);
    } else {
      message.etag = "";
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = String(object.error);
    } else {
      message.error = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      Object.entries(object.metadata).forEach(([key, value]) => {
        message.metadata[key] = String(value);
      });
    }
    return message;
  },

  toJSON(message: BulkStateItem): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : Buffer.alloc(0)
      ));
    message.etag !== undefined && (obj.etag = message.etag);
    message.error !== undefined && (obj.error = message.error);
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<BulkStateItem>): BulkStateItem {
    const message = { ...baseBulkStateItem } as BulkStateItem;
    message.metadata = {};
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = Buffer.alloc(0);
    }
    if (object.etag !== undefined && object.etag !== null) {
      message.etag = object.etag;
    } else {
      message.etag = "";
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    } else {
      message.error = "";
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

const baseBulkStateItem_MetadataEntry: object = { key: "", value: "" };

export const BulkStateItem_MetadataEntry = {
  encode(
    message: BulkStateItem_MetadataEntry,
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
  ): BulkStateItem_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBulkStateItem_MetadataEntry,
    } as BulkStateItem_MetadataEntry;
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

  fromJSON(object: any): BulkStateItem_MetadataEntry {
    const message = {
      ...baseBulkStateItem_MetadataEntry,
    } as BulkStateItem_MetadataEntry;
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

  toJSON(message: BulkStateItem_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<BulkStateItem_MetadataEntry>
  ): BulkStateItem_MetadataEntry {
    const message = {
      ...baseBulkStateItem_MetadataEntry,
    } as BulkStateItem_MetadataEntry;
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

const baseGetStateResponse: object = { etag: "" };

export const GetStateResponse = {
  encode(
    message: GetStateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.etag !== "") {
      writer.uint32(18).string(message.etag);
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      GetStateResponse_MetadataEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetStateResponse } as GetStateResponse;
    message.metadata = {};
    message.data = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes() as Buffer;
          break;
        case 2:
          message.etag = reader.string();
          break;
        case 3:
          const entry3 = GetStateResponse_MetadataEntry.decode(
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

  fromJSON(object: any): GetStateResponse {
    const message = { ...baseGetStateResponse } as GetStateResponse;
    message.metadata = {};
    message.data = Buffer.alloc(0);
    if (object.data !== undefined && object.data !== null) {
      message.data = Buffer.from(bytesFromBase64(object.data));
    }
    if (object.etag !== undefined && object.etag !== null) {
      message.etag = String(object.etag);
    } else {
      message.etag = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      Object.entries(object.metadata).forEach(([key, value]) => {
        message.metadata[key] = String(value);
      });
    }
    return message;
  },

  toJSON(message: GetStateResponse): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : Buffer.alloc(0)
      ));
    message.etag !== undefined && (obj.etag = message.etag);
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GetStateResponse>): GetStateResponse {
    const message = { ...baseGetStateResponse } as GetStateResponse;
    message.metadata = {};
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = Buffer.alloc(0);
    }
    if (object.etag !== undefined && object.etag !== null) {
      message.etag = object.etag;
    } else {
      message.etag = "";
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

const baseGetStateResponse_MetadataEntry: object = { key: "", value: "" };

export const GetStateResponse_MetadataEntry = {
  encode(
    message: GetStateResponse_MetadataEntry,
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
  ): GetStateResponse_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetStateResponse_MetadataEntry,
    } as GetStateResponse_MetadataEntry;
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

  fromJSON(object: any): GetStateResponse_MetadataEntry {
    const message = {
      ...baseGetStateResponse_MetadataEntry,
    } as GetStateResponse_MetadataEntry;
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

  toJSON(message: GetStateResponse_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetStateResponse_MetadataEntry>
  ): GetStateResponse_MetadataEntry {
    const message = {
      ...baseGetStateResponse_MetadataEntry,
    } as GetStateResponse_MetadataEntry;
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

const baseDeleteStateRequest: object = { storeName: "", key: "" };

export const DeleteStateRequest = {
  encode(
    message: DeleteStateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.storeName !== "") {
      writer.uint32(10).string(message.storeName);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    if (message.etag !== undefined) {
      Etag.encode(message.etag, writer.uint32(26).fork()).ldelim();
    }
    if (message.options !== undefined) {
      StateOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      DeleteStateRequest_MetadataEntry.encode(
        { key: key as any, value },
        writer.uint32(42).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteStateRequest } as DeleteStateRequest;
    message.metadata = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storeName = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        case 3:
          message.etag = Etag.decode(reader, reader.uint32());
          break;
        case 4:
          message.options = StateOptions.decode(reader, reader.uint32());
          break;
        case 5:
          const entry5 = DeleteStateRequest_MetadataEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.metadata[entry5.key] = entry5.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteStateRequest {
    const message = { ...baseDeleteStateRequest } as DeleteStateRequest;
    message.metadata = {};
    if (object.storeName !== undefined && object.storeName !== null) {
      message.storeName = String(object.storeName);
    } else {
      message.storeName = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.etag !== undefined && object.etag !== null) {
      message.etag = Etag.fromJSON(object.etag);
    } else {
      message.etag = undefined;
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = StateOptions.fromJSON(object.options);
    } else {
      message.options = undefined;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      Object.entries(object.metadata).forEach(([key, value]) => {
        message.metadata[key] = String(value);
      });
    }
    return message;
  },

  toJSON(message: DeleteStateRequest): unknown {
    const obj: any = {};
    message.storeName !== undefined && (obj.storeName = message.storeName);
    message.key !== undefined && (obj.key = message.key);
    message.etag !== undefined &&
      (obj.etag = message.etag ? Etag.toJSON(message.etag) : undefined);
    message.options !== undefined &&
      (obj.options = message.options
        ? StateOptions.toJSON(message.options)
        : undefined);
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<DeleteStateRequest>): DeleteStateRequest {
    const message = { ...baseDeleteStateRequest } as DeleteStateRequest;
    message.metadata = {};
    if (object.storeName !== undefined && object.storeName !== null) {
      message.storeName = object.storeName;
    } else {
      message.storeName = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.etag !== undefined && object.etag !== null) {
      message.etag = Etag.fromPartial(object.etag);
    } else {
      message.etag = undefined;
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = StateOptions.fromPartial(object.options);
    } else {
      message.options = undefined;
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

const baseDeleteStateRequest_MetadataEntry: object = { key: "", value: "" };

export const DeleteStateRequest_MetadataEntry = {
  encode(
    message: DeleteStateRequest_MetadataEntry,
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
  ): DeleteStateRequest_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteStateRequest_MetadataEntry,
    } as DeleteStateRequest_MetadataEntry;
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

  fromJSON(object: any): DeleteStateRequest_MetadataEntry {
    const message = {
      ...baseDeleteStateRequest_MetadataEntry,
    } as DeleteStateRequest_MetadataEntry;
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

  toJSON(message: DeleteStateRequest_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteStateRequest_MetadataEntry>
  ): DeleteStateRequest_MetadataEntry {
    const message = {
      ...baseDeleteStateRequest_MetadataEntry,
    } as DeleteStateRequest_MetadataEntry;
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

const baseDeleteBulkStateRequest: object = { storeName: "" };

export const DeleteBulkStateRequest = {
  encode(
    message: DeleteBulkStateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.storeName !== "") {
      writer.uint32(10).string(message.storeName);
    }
    for (const v of message.states) {
      StateItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteBulkStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteBulkStateRequest } as DeleteBulkStateRequest;
    message.states = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storeName = reader.string();
          break;
        case 2:
          message.states.push(StateItem.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteBulkStateRequest {
    const message = { ...baseDeleteBulkStateRequest } as DeleteBulkStateRequest;
    message.states = [];
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
    return message;
  },

  toJSON(message: DeleteBulkStateRequest): unknown {
    const obj: any = {};
    message.storeName !== undefined && (obj.storeName = message.storeName);
    if (message.states) {
      obj.states = message.states.map((e) =>
        e ? StateItem.toJSON(e) : undefined
      );
    } else {
      obj.states = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteBulkStateRequest>
  ): DeleteBulkStateRequest {
    const message = { ...baseDeleteBulkStateRequest } as DeleteBulkStateRequest;
    message.states = [];
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
    return message;
  },
};

const baseSaveStateRequest: object = { storeName: "" };

export const SaveStateRequest = {
  encode(
    message: SaveStateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.storeName !== "") {
      writer.uint32(10).string(message.storeName);
    }
    for (const v of message.states) {
      StateItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SaveStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSaveStateRequest } as SaveStateRequest;
    message.states = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storeName = reader.string();
          break;
        case 2:
          message.states.push(StateItem.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SaveStateRequest {
    const message = { ...baseSaveStateRequest } as SaveStateRequest;
    message.states = [];
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
    return message;
  },

  toJSON(message: SaveStateRequest): unknown {
    const obj: any = {};
    message.storeName !== undefined && (obj.storeName = message.storeName);
    if (message.states) {
      obj.states = message.states.map((e) =>
        e ? StateItem.toJSON(e) : undefined
      );
    } else {
      obj.states = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<SaveStateRequest>): SaveStateRequest {
    const message = { ...baseSaveStateRequest } as SaveStateRequest;
    message.states = [];
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
    return message;
  },
};

const basePublishEventRequest: object = {
  pubsubName: "",
  topic: "",
  dataContentType: "",
};

export const PublishEventRequest = {
  encode(
    message: PublishEventRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pubsubName !== "") {
      writer.uint32(10).string(message.pubsubName);
    }
    if (message.topic !== "") {
      writer.uint32(18).string(message.topic);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    if (message.dataContentType !== "") {
      writer.uint32(34).string(message.dataContentType);
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      PublishEventRequest_MetadataEntry.encode(
        { key: key as any, value },
        writer.uint32(42).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishEventRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePublishEventRequest } as PublishEventRequest;
    message.metadata = {};
    message.data = Buffer.alloc(0);
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
          message.data = reader.bytes() as Buffer;
          break;
        case 4:
          message.dataContentType = reader.string();
          break;
        case 5:
          const entry5 = PublishEventRequest_MetadataEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.metadata[entry5.key] = entry5.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PublishEventRequest {
    const message = { ...basePublishEventRequest } as PublishEventRequest;
    message.metadata = {};
    message.data = Buffer.alloc(0);
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
    if (object.data !== undefined && object.data !== null) {
      message.data = Buffer.from(bytesFromBase64(object.data));
    }
    if (
      object.dataContentType !== undefined &&
      object.dataContentType !== null
    ) {
      message.dataContentType = String(object.dataContentType);
    } else {
      message.dataContentType = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      Object.entries(object.metadata).forEach(([key, value]) => {
        message.metadata[key] = String(value);
      });
    }
    return message;
  },

  toJSON(message: PublishEventRequest): unknown {
    const obj: any = {};
    message.pubsubName !== undefined && (obj.pubsubName = message.pubsubName);
    message.topic !== undefined && (obj.topic = message.topic);
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : Buffer.alloc(0)
      ));
    message.dataContentType !== undefined &&
      (obj.dataContentType = message.dataContentType);
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<PublishEventRequest>): PublishEventRequest {
    const message = { ...basePublishEventRequest } as PublishEventRequest;
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
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = Buffer.alloc(0);
    }
    if (
      object.dataContentType !== undefined &&
      object.dataContentType !== null
    ) {
      message.dataContentType = object.dataContentType;
    } else {
      message.dataContentType = "";
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

const basePublishEventRequest_MetadataEntry: object = { key: "", value: "" };

export const PublishEventRequest_MetadataEntry = {
  encode(
    message: PublishEventRequest_MetadataEntry,
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
  ): PublishEventRequest_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePublishEventRequest_MetadataEntry,
    } as PublishEventRequest_MetadataEntry;
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

  fromJSON(object: any): PublishEventRequest_MetadataEntry {
    const message = {
      ...basePublishEventRequest_MetadataEntry,
    } as PublishEventRequest_MetadataEntry;
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

  toJSON(message: PublishEventRequest_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<PublishEventRequest_MetadataEntry>
  ): PublishEventRequest_MetadataEntry {
    const message = {
      ...basePublishEventRequest_MetadataEntry,
    } as PublishEventRequest_MetadataEntry;
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

const baseInvokeBindingRequest: object = { name: "", operation: "" };

export const InvokeBindingRequest = {
  encode(
    message: InvokeBindingRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      InvokeBindingRequest_MetadataEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    if (message.operation !== "") {
      writer.uint32(34).string(message.operation);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InvokeBindingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvokeBindingRequest } as InvokeBindingRequest;
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
          const entry3 = InvokeBindingRequest_MetadataEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.metadata[entry3.key] = entry3.value;
          }
          break;
        case 4:
          message.operation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InvokeBindingRequest {
    const message = { ...baseInvokeBindingRequest } as InvokeBindingRequest;
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
    if (object.operation !== undefined && object.operation !== null) {
      message.operation = String(object.operation);
    } else {
      message.operation = "";
    }
    return message;
  },

  toJSON(message: InvokeBindingRequest): unknown {
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
    message.operation !== undefined && (obj.operation = message.operation);
    return obj;
  },

  fromPartial(object: DeepPartial<InvokeBindingRequest>): InvokeBindingRequest {
    const message = { ...baseInvokeBindingRequest } as InvokeBindingRequest;
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
    if (object.operation !== undefined && object.operation !== null) {
      message.operation = object.operation;
    } else {
      message.operation = "";
    }
    return message;
  },
};

const baseInvokeBindingRequest_MetadataEntry: object = { key: "", value: "" };

export const InvokeBindingRequest_MetadataEntry = {
  encode(
    message: InvokeBindingRequest_MetadataEntry,
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
  ): InvokeBindingRequest_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseInvokeBindingRequest_MetadataEntry,
    } as InvokeBindingRequest_MetadataEntry;
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

  fromJSON(object: any): InvokeBindingRequest_MetadataEntry {
    const message = {
      ...baseInvokeBindingRequest_MetadataEntry,
    } as InvokeBindingRequest_MetadataEntry;
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

  toJSON(message: InvokeBindingRequest_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<InvokeBindingRequest_MetadataEntry>
  ): InvokeBindingRequest_MetadataEntry {
    const message = {
      ...baseInvokeBindingRequest_MetadataEntry,
    } as InvokeBindingRequest_MetadataEntry;
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

const baseInvokeBindingResponse: object = {};

export const InvokeBindingResponse = {
  encode(
    message: InvokeBindingResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      InvokeBindingResponse_MetadataEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InvokeBindingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvokeBindingResponse } as InvokeBindingResponse;
    message.metadata = {};
    message.data = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes() as Buffer;
          break;
        case 2:
          const entry2 = InvokeBindingResponse_MetadataEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry2.value !== undefined) {
            message.metadata[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InvokeBindingResponse {
    const message = { ...baseInvokeBindingResponse } as InvokeBindingResponse;
    message.metadata = {};
    message.data = Buffer.alloc(0);
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

  toJSON(message: InvokeBindingResponse): unknown {
    const obj: any = {};
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

  fromPartial(
    object: DeepPartial<InvokeBindingResponse>
  ): InvokeBindingResponse {
    const message = { ...baseInvokeBindingResponse } as InvokeBindingResponse;
    message.metadata = {};
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

const baseInvokeBindingResponse_MetadataEntry: object = { key: "", value: "" };

export const InvokeBindingResponse_MetadataEntry = {
  encode(
    message: InvokeBindingResponse_MetadataEntry,
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
  ): InvokeBindingResponse_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseInvokeBindingResponse_MetadataEntry,
    } as InvokeBindingResponse_MetadataEntry;
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

  fromJSON(object: any): InvokeBindingResponse_MetadataEntry {
    const message = {
      ...baseInvokeBindingResponse_MetadataEntry,
    } as InvokeBindingResponse_MetadataEntry;
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

  toJSON(message: InvokeBindingResponse_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<InvokeBindingResponse_MetadataEntry>
  ): InvokeBindingResponse_MetadataEntry {
    const message = {
      ...baseInvokeBindingResponse_MetadataEntry,
    } as InvokeBindingResponse_MetadataEntry;
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

const baseGetSecretRequest: object = { storeName: "", key: "" };

export const GetSecretRequest = {
  encode(
    message: GetSecretRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.storeName !== "") {
      writer.uint32(10).string(message.storeName);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      GetSecretRequest_MetadataEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSecretRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetSecretRequest } as GetSecretRequest;
    message.metadata = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storeName = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        case 3:
          const entry3 = GetSecretRequest_MetadataEntry.decode(
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

  fromJSON(object: any): GetSecretRequest {
    const message = { ...baseGetSecretRequest } as GetSecretRequest;
    message.metadata = {};
    if (object.storeName !== undefined && object.storeName !== null) {
      message.storeName = String(object.storeName);
    } else {
      message.storeName = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      Object.entries(object.metadata).forEach(([key, value]) => {
        message.metadata[key] = String(value);
      });
    }
    return message;
  },

  toJSON(message: GetSecretRequest): unknown {
    const obj: any = {};
    message.storeName !== undefined && (obj.storeName = message.storeName);
    message.key !== undefined && (obj.key = message.key);
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GetSecretRequest>): GetSecretRequest {
    const message = { ...baseGetSecretRequest } as GetSecretRequest;
    message.metadata = {};
    if (object.storeName !== undefined && object.storeName !== null) {
      message.storeName = object.storeName;
    } else {
      message.storeName = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
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

const baseGetSecretRequest_MetadataEntry: object = { key: "", value: "" };

export const GetSecretRequest_MetadataEntry = {
  encode(
    message: GetSecretRequest_MetadataEntry,
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
  ): GetSecretRequest_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetSecretRequest_MetadataEntry,
    } as GetSecretRequest_MetadataEntry;
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

  fromJSON(object: any): GetSecretRequest_MetadataEntry {
    const message = {
      ...baseGetSecretRequest_MetadataEntry,
    } as GetSecretRequest_MetadataEntry;
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

  toJSON(message: GetSecretRequest_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetSecretRequest_MetadataEntry>
  ): GetSecretRequest_MetadataEntry {
    const message = {
      ...baseGetSecretRequest_MetadataEntry,
    } as GetSecretRequest_MetadataEntry;
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

const baseGetSecretResponse: object = {};

export const GetSecretResponse = {
  encode(
    message: GetSecretResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.data).forEach(([key, value]) => {
      GetSecretResponse_DataEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSecretResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetSecretResponse } as GetSecretResponse;
    message.data = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = GetSecretResponse_DataEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.data[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetSecretResponse {
    const message = { ...baseGetSecretResponse } as GetSecretResponse;
    message.data = {};
    if (object.data !== undefined && object.data !== null) {
      Object.entries(object.data).forEach(([key, value]) => {
        message.data[key] = String(value);
      });
    }
    return message;
  },

  toJSON(message: GetSecretResponse): unknown {
    const obj: any = {};
    obj.data = {};
    if (message.data) {
      Object.entries(message.data).forEach(([k, v]) => {
        obj.data[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GetSecretResponse>): GetSecretResponse {
    const message = { ...baseGetSecretResponse } as GetSecretResponse;
    message.data = {};
    if (object.data !== undefined && object.data !== null) {
      Object.entries(object.data).forEach(([key, value]) => {
        if (value !== undefined) {
          message.data[key] = String(value);
        }
      });
    }
    return message;
  },
};

const baseGetSecretResponse_DataEntry: object = { key: "", value: "" };

export const GetSecretResponse_DataEntry = {
  encode(
    message: GetSecretResponse_DataEntry,
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
  ): GetSecretResponse_DataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetSecretResponse_DataEntry,
    } as GetSecretResponse_DataEntry;
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

  fromJSON(object: any): GetSecretResponse_DataEntry {
    const message = {
      ...baseGetSecretResponse_DataEntry,
    } as GetSecretResponse_DataEntry;
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

  toJSON(message: GetSecretResponse_DataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetSecretResponse_DataEntry>
  ): GetSecretResponse_DataEntry {
    const message = {
      ...baseGetSecretResponse_DataEntry,
    } as GetSecretResponse_DataEntry;
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

const baseGetBulkSecretRequest: object = { storeName: "" };

export const GetBulkSecretRequest = {
  encode(
    message: GetBulkSecretRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.storeName !== "") {
      writer.uint32(10).string(message.storeName);
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      GetBulkSecretRequest_MetadataEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetBulkSecretRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetBulkSecretRequest } as GetBulkSecretRequest;
    message.metadata = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storeName = reader.string();
          break;
        case 2:
          const entry2 = GetBulkSecretRequest_MetadataEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry2.value !== undefined) {
            message.metadata[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBulkSecretRequest {
    const message = { ...baseGetBulkSecretRequest } as GetBulkSecretRequest;
    message.metadata = {};
    if (object.storeName !== undefined && object.storeName !== null) {
      message.storeName = String(object.storeName);
    } else {
      message.storeName = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      Object.entries(object.metadata).forEach(([key, value]) => {
        message.metadata[key] = String(value);
      });
    }
    return message;
  },

  toJSON(message: GetBulkSecretRequest): unknown {
    const obj: any = {};
    message.storeName !== undefined && (obj.storeName = message.storeName);
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GetBulkSecretRequest>): GetBulkSecretRequest {
    const message = { ...baseGetBulkSecretRequest } as GetBulkSecretRequest;
    message.metadata = {};
    if (object.storeName !== undefined && object.storeName !== null) {
      message.storeName = object.storeName;
    } else {
      message.storeName = "";
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

const baseGetBulkSecretRequest_MetadataEntry: object = { key: "", value: "" };

export const GetBulkSecretRequest_MetadataEntry = {
  encode(
    message: GetBulkSecretRequest_MetadataEntry,
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
  ): GetBulkSecretRequest_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetBulkSecretRequest_MetadataEntry,
    } as GetBulkSecretRequest_MetadataEntry;
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

  fromJSON(object: any): GetBulkSecretRequest_MetadataEntry {
    const message = {
      ...baseGetBulkSecretRequest_MetadataEntry,
    } as GetBulkSecretRequest_MetadataEntry;
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

  toJSON(message: GetBulkSecretRequest_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetBulkSecretRequest_MetadataEntry>
  ): GetBulkSecretRequest_MetadataEntry {
    const message = {
      ...baseGetBulkSecretRequest_MetadataEntry,
    } as GetBulkSecretRequest_MetadataEntry;
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

const baseSecretResponse: object = {};

export const SecretResponse = {
  encode(
    message: SecretResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.secrets).forEach(([key, value]) => {
      SecretResponse_SecretsEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SecretResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSecretResponse } as SecretResponse;
    message.secrets = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = SecretResponse_SecretsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.secrets[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SecretResponse {
    const message = { ...baseSecretResponse } as SecretResponse;
    message.secrets = {};
    if (object.secrets !== undefined && object.secrets !== null) {
      Object.entries(object.secrets).forEach(([key, value]) => {
        message.secrets[key] = String(value);
      });
    }
    return message;
  },

  toJSON(message: SecretResponse): unknown {
    const obj: any = {};
    obj.secrets = {};
    if (message.secrets) {
      Object.entries(message.secrets).forEach(([k, v]) => {
        obj.secrets[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<SecretResponse>): SecretResponse {
    const message = { ...baseSecretResponse } as SecretResponse;
    message.secrets = {};
    if (object.secrets !== undefined && object.secrets !== null) {
      Object.entries(object.secrets).forEach(([key, value]) => {
        if (value !== undefined) {
          message.secrets[key] = String(value);
        }
      });
    }
    return message;
  },
};

const baseSecretResponse_SecretsEntry: object = { key: "", value: "" };

export const SecretResponse_SecretsEntry = {
  encode(
    message: SecretResponse_SecretsEntry,
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
  ): SecretResponse_SecretsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSecretResponse_SecretsEntry,
    } as SecretResponse_SecretsEntry;
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

  fromJSON(object: any): SecretResponse_SecretsEntry {
    const message = {
      ...baseSecretResponse_SecretsEntry,
    } as SecretResponse_SecretsEntry;
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

  toJSON(message: SecretResponse_SecretsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SecretResponse_SecretsEntry>
  ): SecretResponse_SecretsEntry {
    const message = {
      ...baseSecretResponse_SecretsEntry,
    } as SecretResponse_SecretsEntry;
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

const baseGetBulkSecretResponse: object = {};

export const GetBulkSecretResponse = {
  encode(
    message: GetBulkSecretResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.data).forEach(([key, value]) => {
      GetBulkSecretResponse_DataEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetBulkSecretResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetBulkSecretResponse } as GetBulkSecretResponse;
    message.data = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = GetBulkSecretResponse_DataEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.data[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBulkSecretResponse {
    const message = { ...baseGetBulkSecretResponse } as GetBulkSecretResponse;
    message.data = {};
    if (object.data !== undefined && object.data !== null) {
      Object.entries(object.data).forEach(([key, value]) => {
        message.data[key] = SecretResponse.fromJSON(value);
      });
    }
    return message;
  },

  toJSON(message: GetBulkSecretResponse): unknown {
    const obj: any = {};
    obj.data = {};
    if (message.data) {
      Object.entries(message.data).forEach(([k, v]) => {
        obj.data[k] = SecretResponse.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetBulkSecretResponse>
  ): GetBulkSecretResponse {
    const message = { ...baseGetBulkSecretResponse } as GetBulkSecretResponse;
    message.data = {};
    if (object.data !== undefined && object.data !== null) {
      Object.entries(object.data).forEach(([key, value]) => {
        if (value !== undefined) {
          message.data[key] = SecretResponse.fromPartial(value);
        }
      });
    }
    return message;
  },
};

const baseGetBulkSecretResponse_DataEntry: object = { key: "" };

export const GetBulkSecretResponse_DataEntry = {
  encode(
    message: GetBulkSecretResponse_DataEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      SecretResponse.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetBulkSecretResponse_DataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetBulkSecretResponse_DataEntry,
    } as GetBulkSecretResponse_DataEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = SecretResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBulkSecretResponse_DataEntry {
    const message = {
      ...baseGetBulkSecretResponse_DataEntry,
    } as GetBulkSecretResponse_DataEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = SecretResponse.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: GetBulkSecretResponse_DataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? SecretResponse.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetBulkSecretResponse_DataEntry>
  ): GetBulkSecretResponse_DataEntry {
    const message = {
      ...baseGetBulkSecretResponse_DataEntry,
    } as GetBulkSecretResponse_DataEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = SecretResponse.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTransactionalStateOperation: object = { operationType: "" };

export const TransactionalStateOperation = {
  encode(
    message: TransactionalStateOperation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.operationType !== "") {
      writer.uint32(10).string(message.operationType);
    }
    if (message.request !== undefined) {
      StateItem.encode(message.request, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TransactionalStateOperation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTransactionalStateOperation,
    } as TransactionalStateOperation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operationType = reader.string();
          break;
        case 2:
          message.request = StateItem.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransactionalStateOperation {
    const message = {
      ...baseTransactionalStateOperation,
    } as TransactionalStateOperation;
    if (object.operationType !== undefined && object.operationType !== null) {
      message.operationType = String(object.operationType);
    } else {
      message.operationType = "";
    }
    if (object.request !== undefined && object.request !== null) {
      message.request = StateItem.fromJSON(object.request);
    } else {
      message.request = undefined;
    }
    return message;
  },

  toJSON(message: TransactionalStateOperation): unknown {
    const obj: any = {};
    message.operationType !== undefined &&
      (obj.operationType = message.operationType);
    message.request !== undefined &&
      (obj.request = message.request
        ? StateItem.toJSON(message.request)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TransactionalStateOperation>
  ): TransactionalStateOperation {
    const message = {
      ...baseTransactionalStateOperation,
    } as TransactionalStateOperation;
    if (object.operationType !== undefined && object.operationType !== null) {
      message.operationType = object.operationType;
    } else {
      message.operationType = "";
    }
    if (object.request !== undefined && object.request !== null) {
      message.request = StateItem.fromPartial(object.request);
    } else {
      message.request = undefined;
    }
    return message;
  },
};

const baseExecuteStateTransactionRequest: object = { storeName: "" };

export const ExecuteStateTransactionRequest = {
  encode(
    message: ExecuteStateTransactionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.storeName !== "") {
      writer.uint32(10).string(message.storeName);
    }
    for (const v of message.operations) {
      TransactionalStateOperation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      ExecuteStateTransactionRequest_MetadataEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExecuteStateTransactionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseExecuteStateTransactionRequest,
    } as ExecuteStateTransactionRequest;
    message.operations = [];
    message.metadata = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storeName = reader.string();
          break;
        case 2:
          message.operations.push(
            TransactionalStateOperation.decode(reader, reader.uint32())
          );
          break;
        case 3:
          const entry3 = ExecuteStateTransactionRequest_MetadataEntry.decode(
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

  fromJSON(object: any): ExecuteStateTransactionRequest {
    const message = {
      ...baseExecuteStateTransactionRequest,
    } as ExecuteStateTransactionRequest;
    message.operations = [];
    message.metadata = {};
    if (object.storeName !== undefined && object.storeName !== null) {
      message.storeName = String(object.storeName);
    } else {
      message.storeName = "";
    }
    if (object.operations !== undefined && object.operations !== null) {
      for (const e of object.operations) {
        message.operations.push(TransactionalStateOperation.fromJSON(e));
      }
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      Object.entries(object.metadata).forEach(([key, value]) => {
        message.metadata[key] = String(value);
      });
    }
    return message;
  },

  toJSON(message: ExecuteStateTransactionRequest): unknown {
    const obj: any = {};
    message.storeName !== undefined && (obj.storeName = message.storeName);
    if (message.operations) {
      obj.operations = message.operations.map((e) =>
        e ? TransactionalStateOperation.toJSON(e) : undefined
      );
    } else {
      obj.operations = [];
    }
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ExecuteStateTransactionRequest>
  ): ExecuteStateTransactionRequest {
    const message = {
      ...baseExecuteStateTransactionRequest,
    } as ExecuteStateTransactionRequest;
    message.operations = [];
    message.metadata = {};
    if (object.storeName !== undefined && object.storeName !== null) {
      message.storeName = object.storeName;
    } else {
      message.storeName = "";
    }
    if (object.operations !== undefined && object.operations !== null) {
      for (const e of object.operations) {
        message.operations.push(TransactionalStateOperation.fromPartial(e));
      }
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

const baseExecuteStateTransactionRequest_MetadataEntry: object = {
  key: "",
  value: "",
};

export const ExecuteStateTransactionRequest_MetadataEntry = {
  encode(
    message: ExecuteStateTransactionRequest_MetadataEntry,
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
  ): ExecuteStateTransactionRequest_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseExecuteStateTransactionRequest_MetadataEntry,
    } as ExecuteStateTransactionRequest_MetadataEntry;
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

  fromJSON(object: any): ExecuteStateTransactionRequest_MetadataEntry {
    const message = {
      ...baseExecuteStateTransactionRequest_MetadataEntry,
    } as ExecuteStateTransactionRequest_MetadataEntry;
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

  toJSON(message: ExecuteStateTransactionRequest_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ExecuteStateTransactionRequest_MetadataEntry>
  ): ExecuteStateTransactionRequest_MetadataEntry {
    const message = {
      ...baseExecuteStateTransactionRequest_MetadataEntry,
    } as ExecuteStateTransactionRequest_MetadataEntry;
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

const baseRegisterActorTimerRequest: object = {
  actorType: "",
  actorId: "",
  name: "",
  dueTime: "",
  period: "",
  callback: "",
};

export const RegisterActorTimerRequest = {
  encode(
    message: RegisterActorTimerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.actorType !== "") {
      writer.uint32(10).string(message.actorType);
    }
    if (message.actorId !== "") {
      writer.uint32(18).string(message.actorId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.dueTime !== "") {
      writer.uint32(34).string(message.dueTime);
    }
    if (message.period !== "") {
      writer.uint32(42).string(message.period);
    }
    if (message.callback !== "") {
      writer.uint32(50).string(message.callback);
    }
    if (message.data.length !== 0) {
      writer.uint32(58).bytes(message.data);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RegisterActorTimerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRegisterActorTimerRequest,
    } as RegisterActorTimerRequest;
    message.data = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actorType = reader.string();
          break;
        case 2:
          message.actorId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.dueTime = reader.string();
          break;
        case 5:
          message.period = reader.string();
          break;
        case 6:
          message.callback = reader.string();
          break;
        case 7:
          message.data = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterActorTimerRequest {
    const message = {
      ...baseRegisterActorTimerRequest,
    } as RegisterActorTimerRequest;
    message.data = Buffer.alloc(0);
    if (object.actorType !== undefined && object.actorType !== null) {
      message.actorType = String(object.actorType);
    } else {
      message.actorType = "";
    }
    if (object.actorId !== undefined && object.actorId !== null) {
      message.actorId = String(object.actorId);
    } else {
      message.actorId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.dueTime !== undefined && object.dueTime !== null) {
      message.dueTime = String(object.dueTime);
    } else {
      message.dueTime = "";
    }
    if (object.period !== undefined && object.period !== null) {
      message.period = String(object.period);
    } else {
      message.period = "";
    }
    if (object.callback !== undefined && object.callback !== null) {
      message.callback = String(object.callback);
    } else {
      message.callback = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Buffer.from(bytesFromBase64(object.data));
    }
    return message;
  },

  toJSON(message: RegisterActorTimerRequest): unknown {
    const obj: any = {};
    message.actorType !== undefined && (obj.actorType = message.actorType);
    message.actorId !== undefined && (obj.actorId = message.actorId);
    message.name !== undefined && (obj.name = message.name);
    message.dueTime !== undefined && (obj.dueTime = message.dueTime);
    message.period !== undefined && (obj.period = message.period);
    message.callback !== undefined && (obj.callback = message.callback);
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : Buffer.alloc(0)
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<RegisterActorTimerRequest>
  ): RegisterActorTimerRequest {
    const message = {
      ...baseRegisterActorTimerRequest,
    } as RegisterActorTimerRequest;
    if (object.actorType !== undefined && object.actorType !== null) {
      message.actorType = object.actorType;
    } else {
      message.actorType = "";
    }
    if (object.actorId !== undefined && object.actorId !== null) {
      message.actorId = object.actorId;
    } else {
      message.actorId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.dueTime !== undefined && object.dueTime !== null) {
      message.dueTime = object.dueTime;
    } else {
      message.dueTime = "";
    }
    if (object.period !== undefined && object.period !== null) {
      message.period = object.period;
    } else {
      message.period = "";
    }
    if (object.callback !== undefined && object.callback !== null) {
      message.callback = object.callback;
    } else {
      message.callback = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = Buffer.alloc(0);
    }
    return message;
  },
};

const baseUnregisterActorTimerRequest: object = {
  actorType: "",
  actorId: "",
  name: "",
};

export const UnregisterActorTimerRequest = {
  encode(
    message: UnregisterActorTimerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.actorType !== "") {
      writer.uint32(10).string(message.actorType);
    }
    if (message.actorId !== "") {
      writer.uint32(18).string(message.actorId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UnregisterActorTimerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUnregisterActorTimerRequest,
    } as UnregisterActorTimerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actorType = reader.string();
          break;
        case 2:
          message.actorId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnregisterActorTimerRequest {
    const message = {
      ...baseUnregisterActorTimerRequest,
    } as UnregisterActorTimerRequest;
    if (object.actorType !== undefined && object.actorType !== null) {
      message.actorType = String(object.actorType);
    } else {
      message.actorType = "";
    }
    if (object.actorId !== undefined && object.actorId !== null) {
      message.actorId = String(object.actorId);
    } else {
      message.actorId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: UnregisterActorTimerRequest): unknown {
    const obj: any = {};
    message.actorType !== undefined && (obj.actorType = message.actorType);
    message.actorId !== undefined && (obj.actorId = message.actorId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UnregisterActorTimerRequest>
  ): UnregisterActorTimerRequest {
    const message = {
      ...baseUnregisterActorTimerRequest,
    } as UnregisterActorTimerRequest;
    if (object.actorType !== undefined && object.actorType !== null) {
      message.actorType = object.actorType;
    } else {
      message.actorType = "";
    }
    if (object.actorId !== undefined && object.actorId !== null) {
      message.actorId = object.actorId;
    } else {
      message.actorId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseRegisterActorReminderRequest: object = {
  actorType: "",
  actorId: "",
  name: "",
  dueTime: "",
  period: "",
};

export const RegisterActorReminderRequest = {
  encode(
    message: RegisterActorReminderRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.actorType !== "") {
      writer.uint32(10).string(message.actorType);
    }
    if (message.actorId !== "") {
      writer.uint32(18).string(message.actorId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.dueTime !== "") {
      writer.uint32(34).string(message.dueTime);
    }
    if (message.period !== "") {
      writer.uint32(42).string(message.period);
    }
    if (message.data.length !== 0) {
      writer.uint32(50).bytes(message.data);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RegisterActorReminderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRegisterActorReminderRequest,
    } as RegisterActorReminderRequest;
    message.data = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actorType = reader.string();
          break;
        case 2:
          message.actorId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.dueTime = reader.string();
          break;
        case 5:
          message.period = reader.string();
          break;
        case 6:
          message.data = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterActorReminderRequest {
    const message = {
      ...baseRegisterActorReminderRequest,
    } as RegisterActorReminderRequest;
    message.data = Buffer.alloc(0);
    if (object.actorType !== undefined && object.actorType !== null) {
      message.actorType = String(object.actorType);
    } else {
      message.actorType = "";
    }
    if (object.actorId !== undefined && object.actorId !== null) {
      message.actorId = String(object.actorId);
    } else {
      message.actorId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.dueTime !== undefined && object.dueTime !== null) {
      message.dueTime = String(object.dueTime);
    } else {
      message.dueTime = "";
    }
    if (object.period !== undefined && object.period !== null) {
      message.period = String(object.period);
    } else {
      message.period = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Buffer.from(bytesFromBase64(object.data));
    }
    return message;
  },

  toJSON(message: RegisterActorReminderRequest): unknown {
    const obj: any = {};
    message.actorType !== undefined && (obj.actorType = message.actorType);
    message.actorId !== undefined && (obj.actorId = message.actorId);
    message.name !== undefined && (obj.name = message.name);
    message.dueTime !== undefined && (obj.dueTime = message.dueTime);
    message.period !== undefined && (obj.period = message.period);
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : Buffer.alloc(0)
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<RegisterActorReminderRequest>
  ): RegisterActorReminderRequest {
    const message = {
      ...baseRegisterActorReminderRequest,
    } as RegisterActorReminderRequest;
    if (object.actorType !== undefined && object.actorType !== null) {
      message.actorType = object.actorType;
    } else {
      message.actorType = "";
    }
    if (object.actorId !== undefined && object.actorId !== null) {
      message.actorId = object.actorId;
    } else {
      message.actorId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.dueTime !== undefined && object.dueTime !== null) {
      message.dueTime = object.dueTime;
    } else {
      message.dueTime = "";
    }
    if (object.period !== undefined && object.period !== null) {
      message.period = object.period;
    } else {
      message.period = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = Buffer.alloc(0);
    }
    return message;
  },
};

const baseUnregisterActorReminderRequest: object = {
  actorType: "",
  actorId: "",
  name: "",
};

export const UnregisterActorReminderRequest = {
  encode(
    message: UnregisterActorReminderRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.actorType !== "") {
      writer.uint32(10).string(message.actorType);
    }
    if (message.actorId !== "") {
      writer.uint32(18).string(message.actorId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UnregisterActorReminderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUnregisterActorReminderRequest,
    } as UnregisterActorReminderRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actorType = reader.string();
          break;
        case 2:
          message.actorId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnregisterActorReminderRequest {
    const message = {
      ...baseUnregisterActorReminderRequest,
    } as UnregisterActorReminderRequest;
    if (object.actorType !== undefined && object.actorType !== null) {
      message.actorType = String(object.actorType);
    } else {
      message.actorType = "";
    }
    if (object.actorId !== undefined && object.actorId !== null) {
      message.actorId = String(object.actorId);
    } else {
      message.actorId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: UnregisterActorReminderRequest): unknown {
    const obj: any = {};
    message.actorType !== undefined && (obj.actorType = message.actorType);
    message.actorId !== undefined && (obj.actorId = message.actorId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UnregisterActorReminderRequest>
  ): UnregisterActorReminderRequest {
    const message = {
      ...baseUnregisterActorReminderRequest,
    } as UnregisterActorReminderRequest;
    if (object.actorType !== undefined && object.actorType !== null) {
      message.actorType = object.actorType;
    } else {
      message.actorType = "";
    }
    if (object.actorId !== undefined && object.actorId !== null) {
      message.actorId = object.actorId;
    } else {
      message.actorId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseGetActorStateRequest: object = {
  actorType: "",
  actorId: "",
  key: "",
};

export const GetActorStateRequest = {
  encode(
    message: GetActorStateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.actorType !== "") {
      writer.uint32(10).string(message.actorType);
    }
    if (message.actorId !== "") {
      writer.uint32(18).string(message.actorId);
    }
    if (message.key !== "") {
      writer.uint32(26).string(message.key);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetActorStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetActorStateRequest } as GetActorStateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actorType = reader.string();
          break;
        case 2:
          message.actorId = reader.string();
          break;
        case 3:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetActorStateRequest {
    const message = { ...baseGetActorStateRequest } as GetActorStateRequest;
    if (object.actorType !== undefined && object.actorType !== null) {
      message.actorType = String(object.actorType);
    } else {
      message.actorType = "";
    }
    if (object.actorId !== undefined && object.actorId !== null) {
      message.actorId = String(object.actorId);
    } else {
      message.actorId = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    return message;
  },

  toJSON(message: GetActorStateRequest): unknown {
    const obj: any = {};
    message.actorType !== undefined && (obj.actorType = message.actorType);
    message.actorId !== undefined && (obj.actorId = message.actorId);
    message.key !== undefined && (obj.key = message.key);
    return obj;
  },

  fromPartial(object: DeepPartial<GetActorStateRequest>): GetActorStateRequest {
    const message = { ...baseGetActorStateRequest } as GetActorStateRequest;
    if (object.actorType !== undefined && object.actorType !== null) {
      message.actorType = object.actorType;
    } else {
      message.actorType = "";
    }
    if (object.actorId !== undefined && object.actorId !== null) {
      message.actorId = object.actorId;
    } else {
      message.actorId = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    return message;
  },
};

const baseGetActorStateResponse: object = {};

export const GetActorStateResponse = {
  encode(
    message: GetActorStateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetActorStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetActorStateResponse } as GetActorStateResponse;
    message.data = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetActorStateResponse {
    const message = { ...baseGetActorStateResponse } as GetActorStateResponse;
    message.data = Buffer.alloc(0);
    if (object.data !== undefined && object.data !== null) {
      message.data = Buffer.from(bytesFromBase64(object.data));
    }
    return message;
  },

  toJSON(message: GetActorStateResponse): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : Buffer.alloc(0)
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetActorStateResponse>
  ): GetActorStateResponse {
    const message = { ...baseGetActorStateResponse } as GetActorStateResponse;
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = Buffer.alloc(0);
    }
    return message;
  },
};

const baseExecuteActorStateTransactionRequest: object = {
  actorType: "",
  actorId: "",
};

export const ExecuteActorStateTransactionRequest = {
  encode(
    message: ExecuteActorStateTransactionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.actorType !== "") {
      writer.uint32(10).string(message.actorType);
    }
    if (message.actorId !== "") {
      writer.uint32(18).string(message.actorId);
    }
    for (const v of message.operations) {
      TransactionalActorStateOperation.encode(
        v!,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExecuteActorStateTransactionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseExecuteActorStateTransactionRequest,
    } as ExecuteActorStateTransactionRequest;
    message.operations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actorType = reader.string();
          break;
        case 2:
          message.actorId = reader.string();
          break;
        case 3:
          message.operations.push(
            TransactionalActorStateOperation.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExecuteActorStateTransactionRequest {
    const message = {
      ...baseExecuteActorStateTransactionRequest,
    } as ExecuteActorStateTransactionRequest;
    message.operations = [];
    if (object.actorType !== undefined && object.actorType !== null) {
      message.actorType = String(object.actorType);
    } else {
      message.actorType = "";
    }
    if (object.actorId !== undefined && object.actorId !== null) {
      message.actorId = String(object.actorId);
    } else {
      message.actorId = "";
    }
    if (object.operations !== undefined && object.operations !== null) {
      for (const e of object.operations) {
        message.operations.push(TransactionalActorStateOperation.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ExecuteActorStateTransactionRequest): unknown {
    const obj: any = {};
    message.actorType !== undefined && (obj.actorType = message.actorType);
    message.actorId !== undefined && (obj.actorId = message.actorId);
    if (message.operations) {
      obj.operations = message.operations.map((e) =>
        e ? TransactionalActorStateOperation.toJSON(e) : undefined
      );
    } else {
      obj.operations = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ExecuteActorStateTransactionRequest>
  ): ExecuteActorStateTransactionRequest {
    const message = {
      ...baseExecuteActorStateTransactionRequest,
    } as ExecuteActorStateTransactionRequest;
    message.operations = [];
    if (object.actorType !== undefined && object.actorType !== null) {
      message.actorType = object.actorType;
    } else {
      message.actorType = "";
    }
    if (object.actorId !== undefined && object.actorId !== null) {
      message.actorId = object.actorId;
    } else {
      message.actorId = "";
    }
    if (object.operations !== undefined && object.operations !== null) {
      for (const e of object.operations) {
        message.operations.push(
          TransactionalActorStateOperation.fromPartial(e)
        );
      }
    }
    return message;
  },
};

const baseTransactionalActorStateOperation: object = {
  operationType: "",
  key: "",
};

export const TransactionalActorStateOperation = {
  encode(
    message: TransactionalActorStateOperation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.operationType !== "") {
      writer.uint32(10).string(message.operationType);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    if (message.value !== undefined) {
      Any.encode(message.value, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TransactionalActorStateOperation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTransactionalActorStateOperation,
    } as TransactionalActorStateOperation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operationType = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        case 3:
          message.value = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransactionalActorStateOperation {
    const message = {
      ...baseTransactionalActorStateOperation,
    } as TransactionalActorStateOperation;
    if (object.operationType !== undefined && object.operationType !== null) {
      message.operationType = String(object.operationType);
    } else {
      message.operationType = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Any.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: TransactionalActorStateOperation): unknown {
    const obj: any = {};
    message.operationType !== undefined &&
      (obj.operationType = message.operationType);
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Any.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TransactionalActorStateOperation>
  ): TransactionalActorStateOperation {
    const message = {
      ...baseTransactionalActorStateOperation,
    } as TransactionalActorStateOperation;
    if (object.operationType !== undefined && object.operationType !== null) {
      message.operationType = object.operationType;
    } else {
      message.operationType = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Any.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseInvokeActorRequest: object = {
  actorType: "",
  actorId: "",
  method: "",
};

export const InvokeActorRequest = {
  encode(
    message: InvokeActorRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.actorType !== "") {
      writer.uint32(10).string(message.actorType);
    }
    if (message.actorId !== "") {
      writer.uint32(18).string(message.actorId);
    }
    if (message.method !== "") {
      writer.uint32(26).string(message.method);
    }
    if (message.data.length !== 0) {
      writer.uint32(34).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvokeActorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvokeActorRequest } as InvokeActorRequest;
    message.data = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actorType = reader.string();
          break;
        case 2:
          message.actorId = reader.string();
          break;
        case 3:
          message.method = reader.string();
          break;
        case 4:
          message.data = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InvokeActorRequest {
    const message = { ...baseInvokeActorRequest } as InvokeActorRequest;
    message.data = Buffer.alloc(0);
    if (object.actorType !== undefined && object.actorType !== null) {
      message.actorType = String(object.actorType);
    } else {
      message.actorType = "";
    }
    if (object.actorId !== undefined && object.actorId !== null) {
      message.actorId = String(object.actorId);
    } else {
      message.actorId = "";
    }
    if (object.method !== undefined && object.method !== null) {
      message.method = String(object.method);
    } else {
      message.method = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Buffer.from(bytesFromBase64(object.data));
    }
    return message;
  },

  toJSON(message: InvokeActorRequest): unknown {
    const obj: any = {};
    message.actorType !== undefined && (obj.actorType = message.actorType);
    message.actorId !== undefined && (obj.actorId = message.actorId);
    message.method !== undefined && (obj.method = message.method);
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : Buffer.alloc(0)
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<InvokeActorRequest>): InvokeActorRequest {
    const message = { ...baseInvokeActorRequest } as InvokeActorRequest;
    if (object.actorType !== undefined && object.actorType !== null) {
      message.actorType = object.actorType;
    } else {
      message.actorType = "";
    }
    if (object.actorId !== undefined && object.actorId !== null) {
      message.actorId = object.actorId;
    } else {
      message.actorId = "";
    }
    if (object.method !== undefined && object.method !== null) {
      message.method = object.method;
    } else {
      message.method = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = Buffer.alloc(0);
    }
    return message;
  },
};

const baseInvokeActorResponse: object = {};

export const InvokeActorResponse = {
  encode(
    message: InvokeActorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvokeActorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvokeActorResponse } as InvokeActorResponse;
    message.data = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InvokeActorResponse {
    const message = { ...baseInvokeActorResponse } as InvokeActorResponse;
    message.data = Buffer.alloc(0);
    if (object.data !== undefined && object.data !== null) {
      message.data = Buffer.from(bytesFromBase64(object.data));
    }
    return message;
  },

  toJSON(message: InvokeActorResponse): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : Buffer.alloc(0)
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<InvokeActorResponse>): InvokeActorResponse {
    const message = { ...baseInvokeActorResponse } as InvokeActorResponse;
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = Buffer.alloc(0);
    }
    return message;
  },
};

const baseGetMetadataResponse: object = { id: "" };

export const GetMetadataResponse = {
  encode(
    message: GetMetadataResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.activeActorsCount) {
      ActiveActorsCount.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.registeredComponents) {
      RegisteredComponents.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    Object.entries(message.extendedMetadata).forEach(([key, value]) => {
      GetMetadataResponse_ExtendedMetadataEntry.encode(
        { key: key as any, value },
        writer.uint32(34).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetMetadataResponse } as GetMetadataResponse;
    message.activeActorsCount = [];
    message.registeredComponents = [];
    message.extendedMetadata = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.activeActorsCount.push(
            ActiveActorsCount.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.registeredComponents.push(
            RegisteredComponents.decode(reader, reader.uint32())
          );
          break;
        case 4:
          const entry4 = GetMetadataResponse_ExtendedMetadataEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.extendedMetadata[entry4.key] = entry4.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMetadataResponse {
    const message = { ...baseGetMetadataResponse } as GetMetadataResponse;
    message.activeActorsCount = [];
    message.registeredComponents = [];
    message.extendedMetadata = {};
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (
      object.activeActorsCount !== undefined &&
      object.activeActorsCount !== null
    ) {
      for (const e of object.activeActorsCount) {
        message.activeActorsCount.push(ActiveActorsCount.fromJSON(e));
      }
    }
    if (
      object.registeredComponents !== undefined &&
      object.registeredComponents !== null
    ) {
      for (const e of object.registeredComponents) {
        message.registeredComponents.push(RegisteredComponents.fromJSON(e));
      }
    }
    if (
      object.extendedMetadata !== undefined &&
      object.extendedMetadata !== null
    ) {
      Object.entries(object.extendedMetadata).forEach(([key, value]) => {
        message.extendedMetadata[key] = String(value);
      });
    }
    return message;
  },

  toJSON(message: GetMetadataResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.activeActorsCount) {
      obj.activeActorsCount = message.activeActorsCount.map((e) =>
        e ? ActiveActorsCount.toJSON(e) : undefined
      );
    } else {
      obj.activeActorsCount = [];
    }
    if (message.registeredComponents) {
      obj.registeredComponents = message.registeredComponents.map((e) =>
        e ? RegisteredComponents.toJSON(e) : undefined
      );
    } else {
      obj.registeredComponents = [];
    }
    obj.extendedMetadata = {};
    if (message.extendedMetadata) {
      Object.entries(message.extendedMetadata).forEach(([k, v]) => {
        obj.extendedMetadata[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GetMetadataResponse>): GetMetadataResponse {
    const message = { ...baseGetMetadataResponse } as GetMetadataResponse;
    message.activeActorsCount = [];
    message.registeredComponents = [];
    message.extendedMetadata = {};
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (
      object.activeActorsCount !== undefined &&
      object.activeActorsCount !== null
    ) {
      for (const e of object.activeActorsCount) {
        message.activeActorsCount.push(ActiveActorsCount.fromPartial(e));
      }
    }
    if (
      object.registeredComponents !== undefined &&
      object.registeredComponents !== null
    ) {
      for (const e of object.registeredComponents) {
        message.registeredComponents.push(RegisteredComponents.fromPartial(e));
      }
    }
    if (
      object.extendedMetadata !== undefined &&
      object.extendedMetadata !== null
    ) {
      Object.entries(object.extendedMetadata).forEach(([key, value]) => {
        if (value !== undefined) {
          message.extendedMetadata[key] = String(value);
        }
      });
    }
    return message;
  },
};

const baseGetMetadataResponse_ExtendedMetadataEntry: object = {
  key: "",
  value: "",
};

export const GetMetadataResponse_ExtendedMetadataEntry = {
  encode(
    message: GetMetadataResponse_ExtendedMetadataEntry,
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
  ): GetMetadataResponse_ExtendedMetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetMetadataResponse_ExtendedMetadataEntry,
    } as GetMetadataResponse_ExtendedMetadataEntry;
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

  fromJSON(object: any): GetMetadataResponse_ExtendedMetadataEntry {
    const message = {
      ...baseGetMetadataResponse_ExtendedMetadataEntry,
    } as GetMetadataResponse_ExtendedMetadataEntry;
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

  toJSON(message: GetMetadataResponse_ExtendedMetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetMetadataResponse_ExtendedMetadataEntry>
  ): GetMetadataResponse_ExtendedMetadataEntry {
    const message = {
      ...baseGetMetadataResponse_ExtendedMetadataEntry,
    } as GetMetadataResponse_ExtendedMetadataEntry;
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

const baseActiveActorsCount: object = { type: "", count: 0 };

export const ActiveActorsCount = {
  encode(
    message: ActiveActorsCount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.count !== 0) {
      writer.uint32(16).int32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActiveActorsCount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseActiveActorsCount } as ActiveActorsCount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.count = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActiveActorsCount {
    const message = { ...baseActiveActorsCount } as ActiveActorsCount;
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = Number(object.count);
    } else {
      message.count = 0;
    }
    return message;
  },

  toJSON(message: ActiveActorsCount): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.count !== undefined && (obj.count = message.count);
    return obj;
  },

  fromPartial(object: DeepPartial<ActiveActorsCount>): ActiveActorsCount {
    const message = { ...baseActiveActorsCount } as ActiveActorsCount;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    } else {
      message.count = 0;
    }
    return message;
  },
};

const baseRegisteredComponents: object = { name: "", type: "", version: "" };

export const RegisteredComponents = {
  encode(
    message: RegisteredComponents,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RegisteredComponents {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRegisteredComponents } as RegisteredComponents;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          message.version = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisteredComponents {
    const message = { ...baseRegisteredComponents } as RegisteredComponents;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = String(object.version);
    } else {
      message.version = "";
    }
    return message;
  },

  toJSON(message: RegisteredComponents): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = message.type);
    message.version !== undefined && (obj.version = message.version);
    return obj;
  },

  fromPartial(object: DeepPartial<RegisteredComponents>): RegisteredComponents {
    const message = { ...baseRegisteredComponents } as RegisteredComponents;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    } else {
      message.version = "";
    }
    return message;
  },
};

const baseSetMetadataRequest: object = { key: "", value: "" };

export const SetMetadataRequest = {
  encode(
    message: SetMetadataRequest,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SetMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSetMetadataRequest } as SetMetadataRequest;
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

  fromJSON(object: any): SetMetadataRequest {
    const message = { ...baseSetMetadataRequest } as SetMetadataRequest;
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

  toJSON(message: SetMetadataRequest): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<SetMetadataRequest>): SetMetadataRequest {
    const message = { ...baseSetMetadataRequest } as SetMetadataRequest;
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

/** Dapr service provides APIs to user application to access Dapr building blocks. */
export const DaprService = {
  /** Invokes a method on a remote Dapr app. */
  invokeService: {
    path: "/dapr.proto.runtime.v1.Dapr/InvokeService",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: InvokeServiceRequest) =>
      Buffer.from(InvokeServiceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => InvokeServiceRequest.decode(value),
    responseSerialize: (value: InvokeResponse) =>
      Buffer.from(InvokeResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => InvokeResponse.decode(value),
  },
  /** Gets the state for a specific key. */
  getState: {
    path: "/dapr.proto.runtime.v1.Dapr/GetState",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetStateRequest) =>
      Buffer.from(GetStateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetStateRequest.decode(value),
    responseSerialize: (value: GetStateResponse) =>
      Buffer.from(GetStateResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetStateResponse.decode(value),
  },
  /** Gets a bulk of state items for a list of keys */
  getBulkState: {
    path: "/dapr.proto.runtime.v1.Dapr/GetBulkState",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetBulkStateRequest) =>
      Buffer.from(GetBulkStateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetBulkStateRequest.decode(value),
    responseSerialize: (value: GetBulkStateResponse) =>
      Buffer.from(GetBulkStateResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetBulkStateResponse.decode(value),
  },
  /** Saves the state for a specific key. */
  saveState: {
    path: "/dapr.proto.runtime.v1.Dapr/SaveState",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SaveStateRequest) =>
      Buffer.from(SaveStateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SaveStateRequest.decode(value),
    responseSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
  /** Deletes the state for a specific key. */
  deleteState: {
    path: "/dapr.proto.runtime.v1.Dapr/DeleteState",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteStateRequest) =>
      Buffer.from(DeleteStateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteStateRequest.decode(value),
    responseSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
  /** Deletes a bulk of state items for a list of keys */
  deleteBulkState: {
    path: "/dapr.proto.runtime.v1.Dapr/DeleteBulkState",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteBulkStateRequest) =>
      Buffer.from(DeleteBulkStateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteBulkStateRequest.decode(value),
    responseSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
  /** Executes transactions for a specified store */
  executeStateTransaction: {
    path: "/dapr.proto.runtime.v1.Dapr/ExecuteStateTransaction",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ExecuteStateTransactionRequest) =>
      Buffer.from(ExecuteStateTransactionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ExecuteStateTransactionRequest.decode(value),
    responseSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
  /** Publishes events to the specific topic. */
  publishEvent: {
    path: "/dapr.proto.runtime.v1.Dapr/PublishEvent",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PublishEventRequest) =>
      Buffer.from(PublishEventRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PublishEventRequest.decode(value),
    responseSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
  /** Invokes binding data to specific output bindings */
  invokeBinding: {
    path: "/dapr.proto.runtime.v1.Dapr/InvokeBinding",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: InvokeBindingRequest) =>
      Buffer.from(InvokeBindingRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => InvokeBindingRequest.decode(value),
    responseSerialize: (value: InvokeBindingResponse) =>
      Buffer.from(InvokeBindingResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => InvokeBindingResponse.decode(value),
  },
  /** Gets secrets from secret stores. */
  getSecret: {
    path: "/dapr.proto.runtime.v1.Dapr/GetSecret",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetSecretRequest) =>
      Buffer.from(GetSecretRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetSecretRequest.decode(value),
    responseSerialize: (value: GetSecretResponse) =>
      Buffer.from(GetSecretResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetSecretResponse.decode(value),
  },
  /** Gets a bulk of secrets */
  getBulkSecret: {
    path: "/dapr.proto.runtime.v1.Dapr/GetBulkSecret",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetBulkSecretRequest) =>
      Buffer.from(GetBulkSecretRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetBulkSecretRequest.decode(value),
    responseSerialize: (value: GetBulkSecretResponse) =>
      Buffer.from(GetBulkSecretResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetBulkSecretResponse.decode(value),
  },
  /** Register an actor timer. */
  registerActorTimer: {
    path: "/dapr.proto.runtime.v1.Dapr/RegisterActorTimer",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RegisterActorTimerRequest) =>
      Buffer.from(RegisterActorTimerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      RegisterActorTimerRequest.decode(value),
    responseSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
  /** Unregister an actor timer. */
  unregisterActorTimer: {
    path: "/dapr.proto.runtime.v1.Dapr/UnregisterActorTimer",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UnregisterActorTimerRequest) =>
      Buffer.from(UnregisterActorTimerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UnregisterActorTimerRequest.decode(value),
    responseSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
  /** Register an actor reminder. */
  registerActorReminder: {
    path: "/dapr.proto.runtime.v1.Dapr/RegisterActorReminder",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RegisterActorReminderRequest) =>
      Buffer.from(RegisterActorReminderRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      RegisterActorReminderRequest.decode(value),
    responseSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
  /** Unregister an actor reminder. */
  unregisterActorReminder: {
    path: "/dapr.proto.runtime.v1.Dapr/UnregisterActorReminder",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UnregisterActorReminderRequest) =>
      Buffer.from(UnregisterActorReminderRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UnregisterActorReminderRequest.decode(value),
    responseSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
  /** Gets the state for a specific actor. */
  getActorState: {
    path: "/dapr.proto.runtime.v1.Dapr/GetActorState",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetActorStateRequest) =>
      Buffer.from(GetActorStateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetActorStateRequest.decode(value),
    responseSerialize: (value: GetActorStateResponse) =>
      Buffer.from(GetActorStateResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetActorStateResponse.decode(value),
  },
  /** Executes state transactions for a specified actor */
  executeActorStateTransaction: {
    path: "/dapr.proto.runtime.v1.Dapr/ExecuteActorStateTransaction",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ExecuteActorStateTransactionRequest) =>
      Buffer.from(ExecuteActorStateTransactionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ExecuteActorStateTransactionRequest.decode(value),
    responseSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
  /** InvokeActor calls a method on an actor. */
  invokeActor: {
    path: "/dapr.proto.runtime.v1.Dapr/InvokeActor",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: InvokeActorRequest) =>
      Buffer.from(InvokeActorRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => InvokeActorRequest.decode(value),
    responseSerialize: (value: InvokeActorResponse) =>
      Buffer.from(InvokeActorResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => InvokeActorResponse.decode(value),
  },
  /** Gets metadata of the sidecar */
  getMetadata: {
    path: "/dapr.proto.runtime.v1.Dapr/GetMetadata",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Empty.decode(value),
    responseSerialize: (value: GetMetadataResponse) =>
      Buffer.from(GetMetadataResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetMetadataResponse.decode(value),
  },
  /** Sets value in extended metadata of the sidecar */
  setMetadata: {
    path: "/dapr.proto.runtime.v1.Dapr/SetMetadata",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetMetadataRequest) =>
      Buffer.from(SetMetadataRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetMetadataRequest.decode(value),
    responseSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
  /** Shutdown the sidecar */
  shutdown: {
    path: "/dapr.proto.runtime.v1.Dapr/Shutdown",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Empty.decode(value),
    responseSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
} as const;

export interface DaprServer extends UntypedServiceImplementation {
  /** Invokes a method on a remote Dapr app. */
  invokeService: handleUnaryCall<InvokeServiceRequest, InvokeResponse>;
  /** Gets the state for a specific key. */
  getState: handleUnaryCall<GetStateRequest, GetStateResponse>;
  /** Gets a bulk of state items for a list of keys */
  getBulkState: handleUnaryCall<GetBulkStateRequest, GetBulkStateResponse>;
  /** Saves the state for a specific key. */
  saveState: handleUnaryCall<SaveStateRequest, Empty>;
  /** Deletes the state for a specific key. */
  deleteState: handleUnaryCall<DeleteStateRequest, Empty>;
  /** Deletes a bulk of state items for a list of keys */
  deleteBulkState: handleUnaryCall<DeleteBulkStateRequest, Empty>;
  /** Executes transactions for a specified store */
  executeStateTransaction: handleUnaryCall<
    ExecuteStateTransactionRequest,
    Empty
  >;
  /** Publishes events to the specific topic. */
  publishEvent: handleUnaryCall<PublishEventRequest, Empty>;
  /** Invokes binding data to specific output bindings */
  invokeBinding: handleUnaryCall<InvokeBindingRequest, InvokeBindingResponse>;
  /** Gets secrets from secret stores. */
  getSecret: handleUnaryCall<GetSecretRequest, GetSecretResponse>;
  /** Gets a bulk of secrets */
  getBulkSecret: handleUnaryCall<GetBulkSecretRequest, GetBulkSecretResponse>;
  /** Register an actor timer. */
  registerActorTimer: handleUnaryCall<RegisterActorTimerRequest, Empty>;
  /** Unregister an actor timer. */
  unregisterActorTimer: handleUnaryCall<UnregisterActorTimerRequest, Empty>;
  /** Register an actor reminder. */
  registerActorReminder: handleUnaryCall<RegisterActorReminderRequest, Empty>;
  /** Unregister an actor reminder. */
  unregisterActorReminder: handleUnaryCall<
    UnregisterActorReminderRequest,
    Empty
  >;
  /** Gets the state for a specific actor. */
  getActorState: handleUnaryCall<GetActorStateRequest, GetActorStateResponse>;
  /** Executes state transactions for a specified actor */
  executeActorStateTransaction: handleUnaryCall<
    ExecuteActorStateTransactionRequest,
    Empty
  >;
  /** InvokeActor calls a method on an actor. */
  invokeActor: handleUnaryCall<InvokeActorRequest, InvokeActorResponse>;
  /** Gets metadata of the sidecar */
  getMetadata: handleUnaryCall<Empty, GetMetadataResponse>;
  /** Sets value in extended metadata of the sidecar */
  setMetadata: handleUnaryCall<SetMetadataRequest, Empty>;
  /** Shutdown the sidecar */
  shutdown: handleUnaryCall<Empty, Empty>;
}

export interface DaprClient extends Client {
  /** Invokes a method on a remote Dapr app. */
  invokeService(
    request: InvokeServiceRequest,
    callback: (error: ServiceError | null, response: InvokeResponse) => void
  ): ClientUnaryCall;
  invokeService(
    request: InvokeServiceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: InvokeResponse) => void
  ): ClientUnaryCall;
  invokeService(
    request: InvokeServiceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: InvokeResponse) => void
  ): ClientUnaryCall;
  /** Gets the state for a specific key. */
  getState(
    request: GetStateRequest,
    callback: (error: ServiceError | null, response: GetStateResponse) => void
  ): ClientUnaryCall;
  getState(
    request: GetStateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetStateResponse) => void
  ): ClientUnaryCall;
  getState(
    request: GetStateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetStateResponse) => void
  ): ClientUnaryCall;
  /** Gets a bulk of state items for a list of keys */
  getBulkState(
    request: GetBulkStateRequest,
    callback: (
      error: ServiceError | null,
      response: GetBulkStateResponse
    ) => void
  ): ClientUnaryCall;
  getBulkState(
    request: GetBulkStateRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetBulkStateResponse
    ) => void
  ): ClientUnaryCall;
  getBulkState(
    request: GetBulkStateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetBulkStateResponse
    ) => void
  ): ClientUnaryCall;
  /** Saves the state for a specific key. */
  saveState(
    request: SaveStateRequest,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  saveState(
    request: SaveStateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  saveState(
    request: SaveStateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  /** Deletes the state for a specific key. */
  deleteState(
    request: DeleteStateRequest,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  deleteState(
    request: DeleteStateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  deleteState(
    request: DeleteStateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  /** Deletes a bulk of state items for a list of keys */
  deleteBulkState(
    request: DeleteBulkStateRequest,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  deleteBulkState(
    request: DeleteBulkStateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  deleteBulkState(
    request: DeleteBulkStateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  /** Executes transactions for a specified store */
  executeStateTransaction(
    request: ExecuteStateTransactionRequest,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  executeStateTransaction(
    request: ExecuteStateTransactionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  executeStateTransaction(
    request: ExecuteStateTransactionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  /** Publishes events to the specific topic. */
  publishEvent(
    request: PublishEventRequest,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  publishEvent(
    request: PublishEventRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  publishEvent(
    request: PublishEventRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  /** Invokes binding data to specific output bindings */
  invokeBinding(
    request: InvokeBindingRequest,
    callback: (
      error: ServiceError | null,
      response: InvokeBindingResponse
    ) => void
  ): ClientUnaryCall;
  invokeBinding(
    request: InvokeBindingRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: InvokeBindingResponse
    ) => void
  ): ClientUnaryCall;
  invokeBinding(
    request: InvokeBindingRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: InvokeBindingResponse
    ) => void
  ): ClientUnaryCall;
  /** Gets secrets from secret stores. */
  getSecret(
    request: GetSecretRequest,
    callback: (error: ServiceError | null, response: GetSecretResponse) => void
  ): ClientUnaryCall;
  getSecret(
    request: GetSecretRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetSecretResponse) => void
  ): ClientUnaryCall;
  getSecret(
    request: GetSecretRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetSecretResponse) => void
  ): ClientUnaryCall;
  /** Gets a bulk of secrets */
  getBulkSecret(
    request: GetBulkSecretRequest,
    callback: (
      error: ServiceError | null,
      response: GetBulkSecretResponse
    ) => void
  ): ClientUnaryCall;
  getBulkSecret(
    request: GetBulkSecretRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetBulkSecretResponse
    ) => void
  ): ClientUnaryCall;
  getBulkSecret(
    request: GetBulkSecretRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetBulkSecretResponse
    ) => void
  ): ClientUnaryCall;
  /** Register an actor timer. */
  registerActorTimer(
    request: RegisterActorTimerRequest,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  registerActorTimer(
    request: RegisterActorTimerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  registerActorTimer(
    request: RegisterActorTimerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  /** Unregister an actor timer. */
  unregisterActorTimer(
    request: UnregisterActorTimerRequest,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  unregisterActorTimer(
    request: UnregisterActorTimerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  unregisterActorTimer(
    request: UnregisterActorTimerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  /** Register an actor reminder. */
  registerActorReminder(
    request: RegisterActorReminderRequest,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  registerActorReminder(
    request: RegisterActorReminderRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  registerActorReminder(
    request: RegisterActorReminderRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  /** Unregister an actor reminder. */
  unregisterActorReminder(
    request: UnregisterActorReminderRequest,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  unregisterActorReminder(
    request: UnregisterActorReminderRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  unregisterActorReminder(
    request: UnregisterActorReminderRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  /** Gets the state for a specific actor. */
  getActorState(
    request: GetActorStateRequest,
    callback: (
      error: ServiceError | null,
      response: GetActorStateResponse
    ) => void
  ): ClientUnaryCall;
  getActorState(
    request: GetActorStateRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetActorStateResponse
    ) => void
  ): ClientUnaryCall;
  getActorState(
    request: GetActorStateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetActorStateResponse
    ) => void
  ): ClientUnaryCall;
  /** Executes state transactions for a specified actor */
  executeActorStateTransaction(
    request: ExecuteActorStateTransactionRequest,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  executeActorStateTransaction(
    request: ExecuteActorStateTransactionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  executeActorStateTransaction(
    request: ExecuteActorStateTransactionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  /** InvokeActor calls a method on an actor. */
  invokeActor(
    request: InvokeActorRequest,
    callback: (
      error: ServiceError | null,
      response: InvokeActorResponse
    ) => void
  ): ClientUnaryCall;
  invokeActor(
    request: InvokeActorRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: InvokeActorResponse
    ) => void
  ): ClientUnaryCall;
  invokeActor(
    request: InvokeActorRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: InvokeActorResponse
    ) => void
  ): ClientUnaryCall;
  /** Gets metadata of the sidecar */
  getMetadata(
    request: Empty,
    callback: (
      error: ServiceError | null,
      response: GetMetadataResponse
    ) => void
  ): ClientUnaryCall;
  getMetadata(
    request: Empty,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetMetadataResponse
    ) => void
  ): ClientUnaryCall;
  getMetadata(
    request: Empty,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetMetadataResponse
    ) => void
  ): ClientUnaryCall;
  /** Sets value in extended metadata of the sidecar */
  setMetadata(
    request: SetMetadataRequest,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  setMetadata(
    request: SetMetadataRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  setMetadata(
    request: SetMetadataRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  /** Shutdown the sidecar */
  shutdown(
    request: Empty,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  shutdown(
    request: Empty,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  shutdown(
    request: Empty,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
}

export const DaprClient = (makeGenericClientConstructor(
  DaprService,
  "dapr.proto.runtime.v1.Dapr"
) as unknown) as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): DaprClient;
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
