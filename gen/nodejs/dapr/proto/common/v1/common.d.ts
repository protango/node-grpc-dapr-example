/// <reference types="node" />
import _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
export declare const protobufPackage = "dapr.proto.common.v1";
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
export declare enum HTTPExtension_Verb {
    NONE = 0,
    GET = 1,
    HEAD = 2,
    POST = 3,
    PUT = 4,
    DELETE = 5,
    CONNECT = 6,
    OPTIONS = 7,
    TRACE = 8,
    UNRECOGNIZED = -1
}
export declare function hTTPExtension_VerbFromJSON(object: any): HTTPExtension_Verb;
export declare function hTTPExtension_VerbToJSON(object: HTTPExtension_Verb): string;
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
    metadata: {
        [key: string]: string;
    };
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
export declare enum StateOptions_StateConcurrency {
    CONCURRENCY_UNSPECIFIED = 0,
    CONCURRENCY_FIRST_WRITE = 1,
    CONCURRENCY_LAST_WRITE = 2,
    UNRECOGNIZED = -1
}
export declare function stateOptions_StateConcurrencyFromJSON(object: any): StateOptions_StateConcurrency;
export declare function stateOptions_StateConcurrencyToJSON(object: StateOptions_StateConcurrency): string;
/** Enum describing the supported consistency for state. */
export declare enum StateOptions_StateConsistency {
    CONSISTENCY_UNSPECIFIED = 0,
    CONSISTENCY_EVENTUAL = 1,
    CONSISTENCY_STRONG = 2,
    UNRECOGNIZED = -1
}
export declare function stateOptions_StateConsistencyFromJSON(object: any): StateOptions_StateConsistency;
export declare function stateOptions_StateConsistencyToJSON(object: StateOptions_StateConsistency): string;
export declare const HTTPExtension: {
    encode(message: HTTPExtension, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HTTPExtension;
    fromJSON(object: any): HTTPExtension;
    toJSON(message: HTTPExtension): unknown;
    fromPartial(object: DeepPartial<HTTPExtension>): HTTPExtension;
};
export declare const InvokeRequest: {
    encode(message: InvokeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvokeRequest;
    fromJSON(object: any): InvokeRequest;
    toJSON(message: InvokeRequest): unknown;
    fromPartial(object: DeepPartial<InvokeRequest>): InvokeRequest;
};
export declare const InvokeResponse: {
    encode(message: InvokeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvokeResponse;
    fromJSON(object: any): InvokeResponse;
    toJSON(message: InvokeResponse): unknown;
    fromPartial(object: DeepPartial<InvokeResponse>): InvokeResponse;
};
export declare const StateItem: {
    encode(message: StateItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StateItem;
    fromJSON(object: any): StateItem;
    toJSON(message: StateItem): unknown;
    fromPartial(object: DeepPartial<StateItem>): StateItem;
};
export declare const StateItem_MetadataEntry: {
    encode(message: StateItem_MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StateItem_MetadataEntry;
    fromJSON(object: any): StateItem_MetadataEntry;
    toJSON(message: StateItem_MetadataEntry): unknown;
    fromPartial(object: DeepPartial<StateItem_MetadataEntry>): StateItem_MetadataEntry;
};
export declare const Etag: {
    encode(message: Etag, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Etag;
    fromJSON(object: any): Etag;
    toJSON(message: Etag): unknown;
    fromPartial(object: DeepPartial<Etag>): Etag;
};
export declare const StateOptions: {
    encode(message: StateOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StateOptions;
    fromJSON(object: any): StateOptions;
    toJSON(message: StateOptions): unknown;
    fromPartial(object: DeepPartial<StateOptions>): StateOptions;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
