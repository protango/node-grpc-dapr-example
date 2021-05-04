/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { StateOptions_StateConsistency, InvokeRequest, Etag, StateOptions, StateItem, InvokeResponse } from "../../../../dapr/proto/common/v1/common";
import { Any } from "../../../../google/protobuf/any";
import { Empty } from "../../../../google/protobuf/empty";
export declare const protobufPackage = "dapr.proto.runtime.v1";
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
    metadata: {
        [key: string]: string;
    };
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
    metadata: {
        [key: string]: string;
    };
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
    metadata: {
        [key: string]: string;
    };
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
    metadata: {
        [key: string]: string;
    };
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
    metadata: {
        [key: string]: string;
    };
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
    metadata: {
        [key: string]: string;
    };
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
    metadata: {
        [key: string]: string;
    };
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
    metadata: {
        [key: string]: string;
    };
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
    metadata: {
        [key: string]: string;
    };
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
    data: {
        [key: string]: string;
    };
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
    metadata: {
        [key: string]: string;
    };
}
export interface GetBulkSecretRequest_MetadataEntry {
    key: string;
    value: string;
}
/** SecretResponse is a map of decrypted string/string values */
export interface SecretResponse {
    secrets: {
        [key: string]: string;
    };
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
    data: {
        [key: string]: SecretResponse;
    };
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
    metadata: {
        [key: string]: string;
    };
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
    extendedMetadata: {
        [key: string]: string;
    };
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
export declare const InvokeServiceRequest: {
    encode(message: InvokeServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvokeServiceRequest;
    fromJSON(object: any): InvokeServiceRequest;
    toJSON(message: InvokeServiceRequest): unknown;
    fromPartial(object: DeepPartial<InvokeServiceRequest>): InvokeServiceRequest;
};
export declare const GetStateRequest: {
    encode(message: GetStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetStateRequest;
    fromJSON(object: any): GetStateRequest;
    toJSON(message: GetStateRequest): unknown;
    fromPartial(object: DeepPartial<GetStateRequest>): GetStateRequest;
};
export declare const GetStateRequest_MetadataEntry: {
    encode(message: GetStateRequest_MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetStateRequest_MetadataEntry;
    fromJSON(object: any): GetStateRequest_MetadataEntry;
    toJSON(message: GetStateRequest_MetadataEntry): unknown;
    fromPartial(object: DeepPartial<GetStateRequest_MetadataEntry>): GetStateRequest_MetadataEntry;
};
export declare const GetBulkStateRequest: {
    encode(message: GetBulkStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBulkStateRequest;
    fromJSON(object: any): GetBulkStateRequest;
    toJSON(message: GetBulkStateRequest): unknown;
    fromPartial(object: DeepPartial<GetBulkStateRequest>): GetBulkStateRequest;
};
export declare const GetBulkStateRequest_MetadataEntry: {
    encode(message: GetBulkStateRequest_MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBulkStateRequest_MetadataEntry;
    fromJSON(object: any): GetBulkStateRequest_MetadataEntry;
    toJSON(message: GetBulkStateRequest_MetadataEntry): unknown;
    fromPartial(object: DeepPartial<GetBulkStateRequest_MetadataEntry>): GetBulkStateRequest_MetadataEntry;
};
export declare const GetBulkStateResponse: {
    encode(message: GetBulkStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBulkStateResponse;
    fromJSON(object: any): GetBulkStateResponse;
    toJSON(message: GetBulkStateResponse): unknown;
    fromPartial(object: DeepPartial<GetBulkStateResponse>): GetBulkStateResponse;
};
export declare const BulkStateItem: {
    encode(message: BulkStateItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BulkStateItem;
    fromJSON(object: any): BulkStateItem;
    toJSON(message: BulkStateItem): unknown;
    fromPartial(object: DeepPartial<BulkStateItem>): BulkStateItem;
};
export declare const BulkStateItem_MetadataEntry: {
    encode(message: BulkStateItem_MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BulkStateItem_MetadataEntry;
    fromJSON(object: any): BulkStateItem_MetadataEntry;
    toJSON(message: BulkStateItem_MetadataEntry): unknown;
    fromPartial(object: DeepPartial<BulkStateItem_MetadataEntry>): BulkStateItem_MetadataEntry;
};
export declare const GetStateResponse: {
    encode(message: GetStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetStateResponse;
    fromJSON(object: any): GetStateResponse;
    toJSON(message: GetStateResponse): unknown;
    fromPartial(object: DeepPartial<GetStateResponse>): GetStateResponse;
};
export declare const GetStateResponse_MetadataEntry: {
    encode(message: GetStateResponse_MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetStateResponse_MetadataEntry;
    fromJSON(object: any): GetStateResponse_MetadataEntry;
    toJSON(message: GetStateResponse_MetadataEntry): unknown;
    fromPartial(object: DeepPartial<GetStateResponse_MetadataEntry>): GetStateResponse_MetadataEntry;
};
export declare const DeleteStateRequest: {
    encode(message: DeleteStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteStateRequest;
    fromJSON(object: any): DeleteStateRequest;
    toJSON(message: DeleteStateRequest): unknown;
    fromPartial(object: DeepPartial<DeleteStateRequest>): DeleteStateRequest;
};
export declare const DeleteStateRequest_MetadataEntry: {
    encode(message: DeleteStateRequest_MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteStateRequest_MetadataEntry;
    fromJSON(object: any): DeleteStateRequest_MetadataEntry;
    toJSON(message: DeleteStateRequest_MetadataEntry): unknown;
    fromPartial(object: DeepPartial<DeleteStateRequest_MetadataEntry>): DeleteStateRequest_MetadataEntry;
};
export declare const DeleteBulkStateRequest: {
    encode(message: DeleteBulkStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBulkStateRequest;
    fromJSON(object: any): DeleteBulkStateRequest;
    toJSON(message: DeleteBulkStateRequest): unknown;
    fromPartial(object: DeepPartial<DeleteBulkStateRequest>): DeleteBulkStateRequest;
};
export declare const SaveStateRequest: {
    encode(message: SaveStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SaveStateRequest;
    fromJSON(object: any): SaveStateRequest;
    toJSON(message: SaveStateRequest): unknown;
    fromPartial(object: DeepPartial<SaveStateRequest>): SaveStateRequest;
};
export declare const PublishEventRequest: {
    encode(message: PublishEventRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PublishEventRequest;
    fromJSON(object: any): PublishEventRequest;
    toJSON(message: PublishEventRequest): unknown;
    fromPartial(object: DeepPartial<PublishEventRequest>): PublishEventRequest;
};
export declare const PublishEventRequest_MetadataEntry: {
    encode(message: PublishEventRequest_MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PublishEventRequest_MetadataEntry;
    fromJSON(object: any): PublishEventRequest_MetadataEntry;
    toJSON(message: PublishEventRequest_MetadataEntry): unknown;
    fromPartial(object: DeepPartial<PublishEventRequest_MetadataEntry>): PublishEventRequest_MetadataEntry;
};
export declare const InvokeBindingRequest: {
    encode(message: InvokeBindingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvokeBindingRequest;
    fromJSON(object: any): InvokeBindingRequest;
    toJSON(message: InvokeBindingRequest): unknown;
    fromPartial(object: DeepPartial<InvokeBindingRequest>): InvokeBindingRequest;
};
export declare const InvokeBindingRequest_MetadataEntry: {
    encode(message: InvokeBindingRequest_MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvokeBindingRequest_MetadataEntry;
    fromJSON(object: any): InvokeBindingRequest_MetadataEntry;
    toJSON(message: InvokeBindingRequest_MetadataEntry): unknown;
    fromPartial(object: DeepPartial<InvokeBindingRequest_MetadataEntry>): InvokeBindingRequest_MetadataEntry;
};
export declare const InvokeBindingResponse: {
    encode(message: InvokeBindingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvokeBindingResponse;
    fromJSON(object: any): InvokeBindingResponse;
    toJSON(message: InvokeBindingResponse): unknown;
    fromPartial(object: DeepPartial<InvokeBindingResponse>): InvokeBindingResponse;
};
export declare const InvokeBindingResponse_MetadataEntry: {
    encode(message: InvokeBindingResponse_MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvokeBindingResponse_MetadataEntry;
    fromJSON(object: any): InvokeBindingResponse_MetadataEntry;
    toJSON(message: InvokeBindingResponse_MetadataEntry): unknown;
    fromPartial(object: DeepPartial<InvokeBindingResponse_MetadataEntry>): InvokeBindingResponse_MetadataEntry;
};
export declare const GetSecretRequest: {
    encode(message: GetSecretRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSecretRequest;
    fromJSON(object: any): GetSecretRequest;
    toJSON(message: GetSecretRequest): unknown;
    fromPartial(object: DeepPartial<GetSecretRequest>): GetSecretRequest;
};
export declare const GetSecretRequest_MetadataEntry: {
    encode(message: GetSecretRequest_MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSecretRequest_MetadataEntry;
    fromJSON(object: any): GetSecretRequest_MetadataEntry;
    toJSON(message: GetSecretRequest_MetadataEntry): unknown;
    fromPartial(object: DeepPartial<GetSecretRequest_MetadataEntry>): GetSecretRequest_MetadataEntry;
};
export declare const GetSecretResponse: {
    encode(message: GetSecretResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSecretResponse;
    fromJSON(object: any): GetSecretResponse;
    toJSON(message: GetSecretResponse): unknown;
    fromPartial(object: DeepPartial<GetSecretResponse>): GetSecretResponse;
};
export declare const GetSecretResponse_DataEntry: {
    encode(message: GetSecretResponse_DataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSecretResponse_DataEntry;
    fromJSON(object: any): GetSecretResponse_DataEntry;
    toJSON(message: GetSecretResponse_DataEntry): unknown;
    fromPartial(object: DeepPartial<GetSecretResponse_DataEntry>): GetSecretResponse_DataEntry;
};
export declare const GetBulkSecretRequest: {
    encode(message: GetBulkSecretRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBulkSecretRequest;
    fromJSON(object: any): GetBulkSecretRequest;
    toJSON(message: GetBulkSecretRequest): unknown;
    fromPartial(object: DeepPartial<GetBulkSecretRequest>): GetBulkSecretRequest;
};
export declare const GetBulkSecretRequest_MetadataEntry: {
    encode(message: GetBulkSecretRequest_MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBulkSecretRequest_MetadataEntry;
    fromJSON(object: any): GetBulkSecretRequest_MetadataEntry;
    toJSON(message: GetBulkSecretRequest_MetadataEntry): unknown;
    fromPartial(object: DeepPartial<GetBulkSecretRequest_MetadataEntry>): GetBulkSecretRequest_MetadataEntry;
};
export declare const SecretResponse: {
    encode(message: SecretResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SecretResponse;
    fromJSON(object: any): SecretResponse;
    toJSON(message: SecretResponse): unknown;
    fromPartial(object: DeepPartial<SecretResponse>): SecretResponse;
};
export declare const SecretResponse_SecretsEntry: {
    encode(message: SecretResponse_SecretsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SecretResponse_SecretsEntry;
    fromJSON(object: any): SecretResponse_SecretsEntry;
    toJSON(message: SecretResponse_SecretsEntry): unknown;
    fromPartial(object: DeepPartial<SecretResponse_SecretsEntry>): SecretResponse_SecretsEntry;
};
export declare const GetBulkSecretResponse: {
    encode(message: GetBulkSecretResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBulkSecretResponse;
    fromJSON(object: any): GetBulkSecretResponse;
    toJSON(message: GetBulkSecretResponse): unknown;
    fromPartial(object: DeepPartial<GetBulkSecretResponse>): GetBulkSecretResponse;
};
export declare const GetBulkSecretResponse_DataEntry: {
    encode(message: GetBulkSecretResponse_DataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBulkSecretResponse_DataEntry;
    fromJSON(object: any): GetBulkSecretResponse_DataEntry;
    toJSON(message: GetBulkSecretResponse_DataEntry): unknown;
    fromPartial(object: DeepPartial<GetBulkSecretResponse_DataEntry>): GetBulkSecretResponse_DataEntry;
};
export declare const TransactionalStateOperation: {
    encode(message: TransactionalStateOperation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransactionalStateOperation;
    fromJSON(object: any): TransactionalStateOperation;
    toJSON(message: TransactionalStateOperation): unknown;
    fromPartial(object: DeepPartial<TransactionalStateOperation>): TransactionalStateOperation;
};
export declare const ExecuteStateTransactionRequest: {
    encode(message: ExecuteStateTransactionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExecuteStateTransactionRequest;
    fromJSON(object: any): ExecuteStateTransactionRequest;
    toJSON(message: ExecuteStateTransactionRequest): unknown;
    fromPartial(object: DeepPartial<ExecuteStateTransactionRequest>): ExecuteStateTransactionRequest;
};
export declare const ExecuteStateTransactionRequest_MetadataEntry: {
    encode(message: ExecuteStateTransactionRequest_MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExecuteStateTransactionRequest_MetadataEntry;
    fromJSON(object: any): ExecuteStateTransactionRequest_MetadataEntry;
    toJSON(message: ExecuteStateTransactionRequest_MetadataEntry): unknown;
    fromPartial(object: DeepPartial<ExecuteStateTransactionRequest_MetadataEntry>): ExecuteStateTransactionRequest_MetadataEntry;
};
export declare const RegisterActorTimerRequest: {
    encode(message: RegisterActorTimerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterActorTimerRequest;
    fromJSON(object: any): RegisterActorTimerRequest;
    toJSON(message: RegisterActorTimerRequest): unknown;
    fromPartial(object: DeepPartial<RegisterActorTimerRequest>): RegisterActorTimerRequest;
};
export declare const UnregisterActorTimerRequest: {
    encode(message: UnregisterActorTimerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnregisterActorTimerRequest;
    fromJSON(object: any): UnregisterActorTimerRequest;
    toJSON(message: UnregisterActorTimerRequest): unknown;
    fromPartial(object: DeepPartial<UnregisterActorTimerRequest>): UnregisterActorTimerRequest;
};
export declare const RegisterActorReminderRequest: {
    encode(message: RegisterActorReminderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterActorReminderRequest;
    fromJSON(object: any): RegisterActorReminderRequest;
    toJSON(message: RegisterActorReminderRequest): unknown;
    fromPartial(object: DeepPartial<RegisterActorReminderRequest>): RegisterActorReminderRequest;
};
export declare const UnregisterActorReminderRequest: {
    encode(message: UnregisterActorReminderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnregisterActorReminderRequest;
    fromJSON(object: any): UnregisterActorReminderRequest;
    toJSON(message: UnregisterActorReminderRequest): unknown;
    fromPartial(object: DeepPartial<UnregisterActorReminderRequest>): UnregisterActorReminderRequest;
};
export declare const GetActorStateRequest: {
    encode(message: GetActorStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetActorStateRequest;
    fromJSON(object: any): GetActorStateRequest;
    toJSON(message: GetActorStateRequest): unknown;
    fromPartial(object: DeepPartial<GetActorStateRequest>): GetActorStateRequest;
};
export declare const GetActorStateResponse: {
    encode(message: GetActorStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetActorStateResponse;
    fromJSON(object: any): GetActorStateResponse;
    toJSON(message: GetActorStateResponse): unknown;
    fromPartial(object: DeepPartial<GetActorStateResponse>): GetActorStateResponse;
};
export declare const ExecuteActorStateTransactionRequest: {
    encode(message: ExecuteActorStateTransactionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExecuteActorStateTransactionRequest;
    fromJSON(object: any): ExecuteActorStateTransactionRequest;
    toJSON(message: ExecuteActorStateTransactionRequest): unknown;
    fromPartial(object: DeepPartial<ExecuteActorStateTransactionRequest>): ExecuteActorStateTransactionRequest;
};
export declare const TransactionalActorStateOperation: {
    encode(message: TransactionalActorStateOperation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransactionalActorStateOperation;
    fromJSON(object: any): TransactionalActorStateOperation;
    toJSON(message: TransactionalActorStateOperation): unknown;
    fromPartial(object: DeepPartial<TransactionalActorStateOperation>): TransactionalActorStateOperation;
};
export declare const InvokeActorRequest: {
    encode(message: InvokeActorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvokeActorRequest;
    fromJSON(object: any): InvokeActorRequest;
    toJSON(message: InvokeActorRequest): unknown;
    fromPartial(object: DeepPartial<InvokeActorRequest>): InvokeActorRequest;
};
export declare const InvokeActorResponse: {
    encode(message: InvokeActorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvokeActorResponse;
    fromJSON(object: any): InvokeActorResponse;
    toJSON(message: InvokeActorResponse): unknown;
    fromPartial(object: DeepPartial<InvokeActorResponse>): InvokeActorResponse;
};
export declare const GetMetadataResponse: {
    encode(message: GetMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMetadataResponse;
    fromJSON(object: any): GetMetadataResponse;
    toJSON(message: GetMetadataResponse): unknown;
    fromPartial(object: DeepPartial<GetMetadataResponse>): GetMetadataResponse;
};
export declare const GetMetadataResponse_ExtendedMetadataEntry: {
    encode(message: GetMetadataResponse_ExtendedMetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMetadataResponse_ExtendedMetadataEntry;
    fromJSON(object: any): GetMetadataResponse_ExtendedMetadataEntry;
    toJSON(message: GetMetadataResponse_ExtendedMetadataEntry): unknown;
    fromPartial(object: DeepPartial<GetMetadataResponse_ExtendedMetadataEntry>): GetMetadataResponse_ExtendedMetadataEntry;
};
export declare const ActiveActorsCount: {
    encode(message: ActiveActorsCount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActiveActorsCount;
    fromJSON(object: any): ActiveActorsCount;
    toJSON(message: ActiveActorsCount): unknown;
    fromPartial(object: DeepPartial<ActiveActorsCount>): ActiveActorsCount;
};
export declare const RegisteredComponents: {
    encode(message: RegisteredComponents, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredComponents;
    fromJSON(object: any): RegisteredComponents;
    toJSON(message: RegisteredComponents): unknown;
    fromPartial(object: DeepPartial<RegisteredComponents>): RegisteredComponents;
};
export declare const SetMetadataRequest: {
    encode(message: SetMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetMetadataRequest;
    fromJSON(object: any): SetMetadataRequest;
    toJSON(message: SetMetadataRequest): unknown;
    fromPartial(object: DeepPartial<SetMetadataRequest>): SetMetadataRequest;
};
/** Dapr service provides APIs to user application to access Dapr building blocks. */
export declare const DaprService: {
    /** Invokes a method on a remote Dapr app. */
    readonly invokeService: {
        readonly path: "/dapr.proto.runtime.v1.Dapr/InvokeService";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: InvokeServiceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => InvokeServiceRequest;
        readonly responseSerialize: (value: InvokeResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => InvokeResponse;
    };
    /** Gets the state for a specific key. */
    readonly getState: {
        readonly path: "/dapr.proto.runtime.v1.Dapr/GetState";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetStateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetStateRequest;
        readonly responseSerialize: (value: GetStateResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetStateResponse;
    };
    /** Gets a bulk of state items for a list of keys */
    readonly getBulkState: {
        readonly path: "/dapr.proto.runtime.v1.Dapr/GetBulkState";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetBulkStateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetBulkStateRequest;
        readonly responseSerialize: (value: GetBulkStateResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetBulkStateResponse;
    };
    /** Saves the state for a specific key. */
    readonly saveState: {
        readonly path: "/dapr.proto.runtime.v1.Dapr/SaveState";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SaveStateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SaveStateRequest;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    /** Deletes the state for a specific key. */
    readonly deleteState: {
        readonly path: "/dapr.proto.runtime.v1.Dapr/DeleteState";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteStateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteStateRequest;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    /** Deletes a bulk of state items for a list of keys */
    readonly deleteBulkState: {
        readonly path: "/dapr.proto.runtime.v1.Dapr/DeleteBulkState";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteBulkStateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteBulkStateRequest;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    /** Executes transactions for a specified store */
    readonly executeStateTransaction: {
        readonly path: "/dapr.proto.runtime.v1.Dapr/ExecuteStateTransaction";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ExecuteStateTransactionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ExecuteStateTransactionRequest;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    /** Publishes events to the specific topic. */
    readonly publishEvent: {
        readonly path: "/dapr.proto.runtime.v1.Dapr/PublishEvent";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: PublishEventRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => PublishEventRequest;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    /** Invokes binding data to specific output bindings */
    readonly invokeBinding: {
        readonly path: "/dapr.proto.runtime.v1.Dapr/InvokeBinding";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: InvokeBindingRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => InvokeBindingRequest;
        readonly responseSerialize: (value: InvokeBindingResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => InvokeBindingResponse;
    };
    /** Gets secrets from secret stores. */
    readonly getSecret: {
        readonly path: "/dapr.proto.runtime.v1.Dapr/GetSecret";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetSecretRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetSecretRequest;
        readonly responseSerialize: (value: GetSecretResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetSecretResponse;
    };
    /** Gets a bulk of secrets */
    readonly getBulkSecret: {
        readonly path: "/dapr.proto.runtime.v1.Dapr/GetBulkSecret";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetBulkSecretRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetBulkSecretRequest;
        readonly responseSerialize: (value: GetBulkSecretResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetBulkSecretResponse;
    };
    /** Register an actor timer. */
    readonly registerActorTimer: {
        readonly path: "/dapr.proto.runtime.v1.Dapr/RegisterActorTimer";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RegisterActorTimerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RegisterActorTimerRequest;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    /** Unregister an actor timer. */
    readonly unregisterActorTimer: {
        readonly path: "/dapr.proto.runtime.v1.Dapr/UnregisterActorTimer";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UnregisterActorTimerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UnregisterActorTimerRequest;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    /** Register an actor reminder. */
    readonly registerActorReminder: {
        readonly path: "/dapr.proto.runtime.v1.Dapr/RegisterActorReminder";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RegisterActorReminderRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RegisterActorReminderRequest;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    /** Unregister an actor reminder. */
    readonly unregisterActorReminder: {
        readonly path: "/dapr.proto.runtime.v1.Dapr/UnregisterActorReminder";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UnregisterActorReminderRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UnregisterActorReminderRequest;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    /** Gets the state for a specific actor. */
    readonly getActorState: {
        readonly path: "/dapr.proto.runtime.v1.Dapr/GetActorState";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetActorStateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetActorStateRequest;
        readonly responseSerialize: (value: GetActorStateResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetActorStateResponse;
    };
    /** Executes state transactions for a specified actor */
    readonly executeActorStateTransaction: {
        readonly path: "/dapr.proto.runtime.v1.Dapr/ExecuteActorStateTransaction";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ExecuteActorStateTransactionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ExecuteActorStateTransactionRequest;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    /** InvokeActor calls a method on an actor. */
    readonly invokeActor: {
        readonly path: "/dapr.proto.runtime.v1.Dapr/InvokeActor";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: InvokeActorRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => InvokeActorRequest;
        readonly responseSerialize: (value: InvokeActorResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => InvokeActorResponse;
    };
    /** Gets metadata of the sidecar */
    readonly getMetadata: {
        readonly path: "/dapr.proto.runtime.v1.Dapr/GetMetadata";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: Empty) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Empty;
        readonly responseSerialize: (value: GetMetadataResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetMetadataResponse;
    };
    /** Sets value in extended metadata of the sidecar */
    readonly setMetadata: {
        readonly path: "/dapr.proto.runtime.v1.Dapr/SetMetadata";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetMetadataRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetMetadataRequest;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    /** Shutdown the sidecar */
    readonly shutdown: {
        readonly path: "/dapr.proto.runtime.v1.Dapr/Shutdown";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: Empty) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Empty;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
};
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
    executeStateTransaction: handleUnaryCall<ExecuteStateTransactionRequest, Empty>;
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
    unregisterActorReminder: handleUnaryCall<UnregisterActorReminderRequest, Empty>;
    /** Gets the state for a specific actor. */
    getActorState: handleUnaryCall<GetActorStateRequest, GetActorStateResponse>;
    /** Executes state transactions for a specified actor */
    executeActorStateTransaction: handleUnaryCall<ExecuteActorStateTransactionRequest, Empty>;
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
    invokeService(request: InvokeServiceRequest, callback: (error: ServiceError | null, response: InvokeResponse) => void): ClientUnaryCall;
    invokeService(request: InvokeServiceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: InvokeResponse) => void): ClientUnaryCall;
    invokeService(request: InvokeServiceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: InvokeResponse) => void): ClientUnaryCall;
    /** Gets the state for a specific key. */
    getState(request: GetStateRequest, callback: (error: ServiceError | null, response: GetStateResponse) => void): ClientUnaryCall;
    getState(request: GetStateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetStateResponse) => void): ClientUnaryCall;
    getState(request: GetStateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetStateResponse) => void): ClientUnaryCall;
    /** Gets a bulk of state items for a list of keys */
    getBulkState(request: GetBulkStateRequest, callback: (error: ServiceError | null, response: GetBulkStateResponse) => void): ClientUnaryCall;
    getBulkState(request: GetBulkStateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetBulkStateResponse) => void): ClientUnaryCall;
    getBulkState(request: GetBulkStateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetBulkStateResponse) => void): ClientUnaryCall;
    /** Saves the state for a specific key. */
    saveState(request: SaveStateRequest, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    saveState(request: SaveStateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    saveState(request: SaveStateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    /** Deletes the state for a specific key. */
    deleteState(request: DeleteStateRequest, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    deleteState(request: DeleteStateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    deleteState(request: DeleteStateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    /** Deletes a bulk of state items for a list of keys */
    deleteBulkState(request: DeleteBulkStateRequest, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    deleteBulkState(request: DeleteBulkStateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    deleteBulkState(request: DeleteBulkStateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    /** Executes transactions for a specified store */
    executeStateTransaction(request: ExecuteStateTransactionRequest, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    executeStateTransaction(request: ExecuteStateTransactionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    executeStateTransaction(request: ExecuteStateTransactionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    /** Publishes events to the specific topic. */
    publishEvent(request: PublishEventRequest, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    publishEvent(request: PublishEventRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    publishEvent(request: PublishEventRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    /** Invokes binding data to specific output bindings */
    invokeBinding(request: InvokeBindingRequest, callback: (error: ServiceError | null, response: InvokeBindingResponse) => void): ClientUnaryCall;
    invokeBinding(request: InvokeBindingRequest, metadata: Metadata, callback: (error: ServiceError | null, response: InvokeBindingResponse) => void): ClientUnaryCall;
    invokeBinding(request: InvokeBindingRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: InvokeBindingResponse) => void): ClientUnaryCall;
    /** Gets secrets from secret stores. */
    getSecret(request: GetSecretRequest, callback: (error: ServiceError | null, response: GetSecretResponse) => void): ClientUnaryCall;
    getSecret(request: GetSecretRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetSecretResponse) => void): ClientUnaryCall;
    getSecret(request: GetSecretRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetSecretResponse) => void): ClientUnaryCall;
    /** Gets a bulk of secrets */
    getBulkSecret(request: GetBulkSecretRequest, callback: (error: ServiceError | null, response: GetBulkSecretResponse) => void): ClientUnaryCall;
    getBulkSecret(request: GetBulkSecretRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetBulkSecretResponse) => void): ClientUnaryCall;
    getBulkSecret(request: GetBulkSecretRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetBulkSecretResponse) => void): ClientUnaryCall;
    /** Register an actor timer. */
    registerActorTimer(request: RegisterActorTimerRequest, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    registerActorTimer(request: RegisterActorTimerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    registerActorTimer(request: RegisterActorTimerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    /** Unregister an actor timer. */
    unregisterActorTimer(request: UnregisterActorTimerRequest, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    unregisterActorTimer(request: UnregisterActorTimerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    unregisterActorTimer(request: UnregisterActorTimerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    /** Register an actor reminder. */
    registerActorReminder(request: RegisterActorReminderRequest, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    registerActorReminder(request: RegisterActorReminderRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    registerActorReminder(request: RegisterActorReminderRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    /** Unregister an actor reminder. */
    unregisterActorReminder(request: UnregisterActorReminderRequest, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    unregisterActorReminder(request: UnregisterActorReminderRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    unregisterActorReminder(request: UnregisterActorReminderRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    /** Gets the state for a specific actor. */
    getActorState(request: GetActorStateRequest, callback: (error: ServiceError | null, response: GetActorStateResponse) => void): ClientUnaryCall;
    getActorState(request: GetActorStateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetActorStateResponse) => void): ClientUnaryCall;
    getActorState(request: GetActorStateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetActorStateResponse) => void): ClientUnaryCall;
    /** Executes state transactions for a specified actor */
    executeActorStateTransaction(request: ExecuteActorStateTransactionRequest, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    executeActorStateTransaction(request: ExecuteActorStateTransactionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    executeActorStateTransaction(request: ExecuteActorStateTransactionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    /** InvokeActor calls a method on an actor. */
    invokeActor(request: InvokeActorRequest, callback: (error: ServiceError | null, response: InvokeActorResponse) => void): ClientUnaryCall;
    invokeActor(request: InvokeActorRequest, metadata: Metadata, callback: (error: ServiceError | null, response: InvokeActorResponse) => void): ClientUnaryCall;
    invokeActor(request: InvokeActorRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: InvokeActorResponse) => void): ClientUnaryCall;
    /** Gets metadata of the sidecar */
    getMetadata(request: Empty, callback: (error: ServiceError | null, response: GetMetadataResponse) => void): ClientUnaryCall;
    getMetadata(request: Empty, metadata: Metadata, callback: (error: ServiceError | null, response: GetMetadataResponse) => void): ClientUnaryCall;
    getMetadata(request: Empty, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetMetadataResponse) => void): ClientUnaryCall;
    /** Sets value in extended metadata of the sidecar */
    setMetadata(request: SetMetadataRequest, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    setMetadata(request: SetMetadataRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    setMetadata(request: SetMetadataRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    /** Shutdown the sidecar */
    shutdown(request: Empty, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    shutdown(request: Empty, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    shutdown(request: Empty, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
}
export declare const DaprClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>) => DaprClient;
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
