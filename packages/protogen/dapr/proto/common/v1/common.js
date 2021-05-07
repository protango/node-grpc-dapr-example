"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.StateOptions = exports.Etag = exports.StateItem_MetadataEntry = exports.StateItem = exports.InvokeResponse = exports.InvokeRequest = exports.HTTPExtension = exports.stateOptions_StateConsistencyToJSON = exports.stateOptions_StateConsistencyFromJSON = exports.StateOptions_StateConsistency = exports.stateOptions_StateConcurrencyToJSON = exports.stateOptions_StateConcurrencyFromJSON = exports.StateOptions_StateConcurrency = exports.hTTPExtension_VerbToJSON = exports.hTTPExtension_VerbFromJSON = exports.HTTPExtension_Verb = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var any_1 = require("../../../../google/protobuf/any");
exports.protobufPackage = "dapr.proto.common.v1";
/**
 * Type of HTTP 1.1 Methods
 * RFC 7231: https://tools.ietf.org/html/rfc7231#page-24
 */
var HTTPExtension_Verb;
(function (HTTPExtension_Verb) {
    HTTPExtension_Verb[HTTPExtension_Verb["NONE"] = 0] = "NONE";
    HTTPExtension_Verb[HTTPExtension_Verb["GET"] = 1] = "GET";
    HTTPExtension_Verb[HTTPExtension_Verb["HEAD"] = 2] = "HEAD";
    HTTPExtension_Verb[HTTPExtension_Verb["POST"] = 3] = "POST";
    HTTPExtension_Verb[HTTPExtension_Verb["PUT"] = 4] = "PUT";
    HTTPExtension_Verb[HTTPExtension_Verb["DELETE"] = 5] = "DELETE";
    HTTPExtension_Verb[HTTPExtension_Verb["CONNECT"] = 6] = "CONNECT";
    HTTPExtension_Verb[HTTPExtension_Verb["OPTIONS"] = 7] = "OPTIONS";
    HTTPExtension_Verb[HTTPExtension_Verb["TRACE"] = 8] = "TRACE";
    HTTPExtension_Verb[HTTPExtension_Verb["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(HTTPExtension_Verb = exports.HTTPExtension_Verb || (exports.HTTPExtension_Verb = {}));
function hTTPExtension_VerbFromJSON(object) {
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
exports.hTTPExtension_VerbFromJSON = hTTPExtension_VerbFromJSON;
function hTTPExtension_VerbToJSON(object) {
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
exports.hTTPExtension_VerbToJSON = hTTPExtension_VerbToJSON;
/** Enum describing the supported concurrency for state. */
var StateOptions_StateConcurrency;
(function (StateOptions_StateConcurrency) {
    StateOptions_StateConcurrency[StateOptions_StateConcurrency["CONCURRENCY_UNSPECIFIED"] = 0] = "CONCURRENCY_UNSPECIFIED";
    StateOptions_StateConcurrency[StateOptions_StateConcurrency["CONCURRENCY_FIRST_WRITE"] = 1] = "CONCURRENCY_FIRST_WRITE";
    StateOptions_StateConcurrency[StateOptions_StateConcurrency["CONCURRENCY_LAST_WRITE"] = 2] = "CONCURRENCY_LAST_WRITE";
    StateOptions_StateConcurrency[StateOptions_StateConcurrency["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(StateOptions_StateConcurrency = exports.StateOptions_StateConcurrency || (exports.StateOptions_StateConcurrency = {}));
function stateOptions_StateConcurrencyFromJSON(object) {
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
exports.stateOptions_StateConcurrencyFromJSON = stateOptions_StateConcurrencyFromJSON;
function stateOptions_StateConcurrencyToJSON(object) {
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
exports.stateOptions_StateConcurrencyToJSON = stateOptions_StateConcurrencyToJSON;
/** Enum describing the supported consistency for state. */
var StateOptions_StateConsistency;
(function (StateOptions_StateConsistency) {
    StateOptions_StateConsistency[StateOptions_StateConsistency["CONSISTENCY_UNSPECIFIED"] = 0] = "CONSISTENCY_UNSPECIFIED";
    StateOptions_StateConsistency[StateOptions_StateConsistency["CONSISTENCY_EVENTUAL"] = 1] = "CONSISTENCY_EVENTUAL";
    StateOptions_StateConsistency[StateOptions_StateConsistency["CONSISTENCY_STRONG"] = 2] = "CONSISTENCY_STRONG";
    StateOptions_StateConsistency[StateOptions_StateConsistency["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(StateOptions_StateConsistency = exports.StateOptions_StateConsistency || (exports.StateOptions_StateConsistency = {}));
function stateOptions_StateConsistencyFromJSON(object) {
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
exports.stateOptions_StateConsistencyFromJSON = stateOptions_StateConsistencyFromJSON;
function stateOptions_StateConsistencyToJSON(object) {
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
exports.stateOptions_StateConsistencyToJSON = stateOptions_StateConsistencyToJSON;
var baseHTTPExtension = { verb: 0, querystring: "" };
exports.HTTPExtension = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.verb !== 0) {
            writer.uint32(8).int32(message.verb);
        }
        if (message.querystring !== "") {
            writer.uint32(18).string(message.querystring);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseHTTPExtension);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.verb = reader.int32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseHTTPExtension);
        if (object.verb !== undefined && object.verb !== null) {
            message.verb = hTTPExtension_VerbFromJSON(object.verb);
        }
        else {
            message.verb = 0;
        }
        if (object.querystring !== undefined && object.querystring !== null) {
            message.querystring = String(object.querystring);
        }
        else {
            message.querystring = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.verb !== undefined &&
            (obj.verb = hTTPExtension_VerbToJSON(message.verb));
        message.querystring !== undefined &&
            (obj.querystring = message.querystring);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseHTTPExtension);
        if (object.verb !== undefined && object.verb !== null) {
            message.verb = object.verb;
        }
        else {
            message.verb = 0;
        }
        if (object.querystring !== undefined && object.querystring !== null) {
            message.querystring = object.querystring;
        }
        else {
            message.querystring = "";
        }
        return message;
    }
};
var baseInvokeRequest = { method: "", contentType: "" };
exports.InvokeRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.method !== "") {
            writer.uint32(10).string(message.method);
        }
        if (message.data !== undefined) {
            any_1.Any.encode(message.data, writer.uint32(18).fork()).ldelim();
        }
        if (message.contentType !== "") {
            writer.uint32(26).string(message.contentType);
        }
        if (message.httpExtension !== undefined) {
            exports.HTTPExtension.encode(message.httpExtension, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseInvokeRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.method = reader.string();
                    break;
                case 2:
                    message.data = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.contentType = reader.string();
                    break;
                case 4:
                    message.httpExtension = exports.HTTPExtension.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseInvokeRequest);
        if (object.method !== undefined && object.method !== null) {
            message.method = String(object.method);
        }
        else {
            message.method = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = any_1.Any.fromJSON(object.data);
        }
        else {
            message.data = undefined;
        }
        if (object.contentType !== undefined && object.contentType !== null) {
            message.contentType = String(object.contentType);
        }
        else {
            message.contentType = "";
        }
        if (object.httpExtension !== undefined && object.httpExtension !== null) {
            message.httpExtension = exports.HTTPExtension.fromJSON(object.httpExtension);
        }
        else {
            message.httpExtension = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.method !== undefined && (obj.method = message.method);
        message.data !== undefined &&
            (obj.data = message.data ? any_1.Any.toJSON(message.data) : undefined);
        message.contentType !== undefined &&
            (obj.contentType = message.contentType);
        message.httpExtension !== undefined &&
            (obj.httpExtension = message.httpExtension
                ? exports.HTTPExtension.toJSON(message.httpExtension)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseInvokeRequest);
        if (object.method !== undefined && object.method !== null) {
            message.method = object.method;
        }
        else {
            message.method = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = any_1.Any.fromPartial(object.data);
        }
        else {
            message.data = undefined;
        }
        if (object.contentType !== undefined && object.contentType !== null) {
            message.contentType = object.contentType;
        }
        else {
            message.contentType = "";
        }
        if (object.httpExtension !== undefined && object.httpExtension !== null) {
            message.httpExtension = exports.HTTPExtension.fromPartial(object.httpExtension);
        }
        else {
            message.httpExtension = undefined;
        }
        return message;
    }
};
var baseInvokeResponse = { contentType: "" };
exports.InvokeResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.data !== undefined) {
            any_1.Any.encode(message.data, writer.uint32(10).fork()).ldelim();
        }
        if (message.contentType !== "") {
            writer.uint32(18).string(message.contentType);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseInvokeResponse);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = any_1.Any.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        var message = __assign({}, baseInvokeResponse);
        if (object.data !== undefined && object.data !== null) {
            message.data = any_1.Any.fromJSON(object.data);
        }
        else {
            message.data = undefined;
        }
        if (object.contentType !== undefined && object.contentType !== null) {
            message.contentType = String(object.contentType);
        }
        else {
            message.contentType = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.data !== undefined &&
            (obj.data = message.data ? any_1.Any.toJSON(message.data) : undefined);
        message.contentType !== undefined &&
            (obj.contentType = message.contentType);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseInvokeResponse);
        if (object.data !== undefined && object.data !== null) {
            message.data = any_1.Any.fromPartial(object.data);
        }
        else {
            message.data = undefined;
        }
        if (object.contentType !== undefined && object.contentType !== null) {
            message.contentType = object.contentType;
        }
        else {
            message.contentType = "";
        }
        return message;
    }
};
var baseStateItem = { key: "" };
exports.StateItem = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (message.etag !== undefined) {
            exports.Etag.encode(message.etag, writer.uint32(26).fork()).ldelim();
        }
        Object.entries(message.metadata).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.StateItem_MetadataEntry.encode({ key: key, value: value }, writer.uint32(34).fork()).ldelim();
        });
        if (message.options !== undefined) {
            exports.StateOptions.encode(message.options, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseStateItem);
        message.metadata = {};
        message.value = Buffer.alloc(0);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                case 3:
                    message.etag = exports.Etag.decode(reader, reader.uint32());
                    break;
                case 4:
                    var entry4 = exports.StateItem_MetadataEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.metadata[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.options = exports.StateOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseStateItem);
        message.metadata = {};
        message.value = Buffer.alloc(0);
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = Buffer.from(bytesFromBase64(object.value));
        }
        if (object.etag !== undefined && object.etag !== null) {
            message.etag = exports.Etag.fromJSON(object.etag);
        }
        else {
            message.etag = undefined;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.metadata[key] = String(value);
            });
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = exports.StateOptions.fromJSON(object.options);
        }
        else {
            message.options = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : Buffer.alloc(0)));
        message.etag !== undefined &&
            (obj.etag = message.etag ? exports.Etag.toJSON(message.etag) : undefined);
        obj.metadata = {};
        if (message.metadata) {
            Object.entries(message.metadata).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.metadata[k] = v;
            });
        }
        message.options !== undefined &&
            (obj.options = message.options
                ? exports.StateOptions.toJSON(message.options)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseStateItem);
        message.metadata = {};
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = Buffer.alloc(0);
        }
        if (object.etag !== undefined && object.etag !== null) {
            message.etag = exports.Etag.fromPartial(object.etag);
        }
        else {
            message.etag = undefined;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.metadata[key] = String(value);
                }
            });
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = exports.StateOptions.fromPartial(object.options);
        }
        else {
            message.options = undefined;
        }
        return message;
    }
};
var baseStateItem_MetadataEntry = { key: "", value: "" };
exports.StateItem_MetadataEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseStateItem_MetadataEntry);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseStateItem_MetadataEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseStateItem_MetadataEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = "";
        }
        return message;
    }
};
var baseEtag = { value: "" };
exports.Etag = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.value !== "") {
            writer.uint32(10).string(message.value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseEtag);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseEtag);
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseEtag);
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = "";
        }
        return message;
    }
};
var baseStateOptions = { concurrency: 0, consistency: 0 };
exports.StateOptions = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.concurrency !== 0) {
            writer.uint32(8).int32(message.concurrency);
        }
        if (message.consistency !== 0) {
            writer.uint32(16).int32(message.consistency);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseStateOptions);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.concurrency = reader.int32();
                    break;
                case 2:
                    message.consistency = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseStateOptions);
        if (object.concurrency !== undefined && object.concurrency !== null) {
            message.concurrency = stateOptions_StateConcurrencyFromJSON(object.concurrency);
        }
        else {
            message.concurrency = 0;
        }
        if (object.consistency !== undefined && object.consistency !== null) {
            message.consistency = stateOptions_StateConsistencyFromJSON(object.consistency);
        }
        else {
            message.consistency = 0;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.concurrency !== undefined &&
            (obj.concurrency = stateOptions_StateConcurrencyToJSON(message.concurrency));
        message.consistency !== undefined &&
            (obj.consistency = stateOptions_StateConsistencyToJSON(message.consistency));
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseStateOptions);
        if (object.concurrency !== undefined && object.concurrency !== null) {
            message.concurrency = object.concurrency;
        }
        else {
            message.concurrency = 0;
        }
        if (object.consistency !== undefined && object.consistency !== null) {
            message.consistency = object.consistency;
        }
        else {
            message.consistency = 0;
        }
        return message;
    }
};
var globalThis = (function () {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
var atob = globalThis.atob ||
    (function (b64) { return globalThis.Buffer.from(b64, "base64").toString("binary"); });
function bytesFromBase64(b64) {
    var bin = atob(b64);
    var arr = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
var btoa = globalThis.btoa ||
    (function (bin) { return globalThis.Buffer.from(bin, "binary").toString("base64"); });
function base64FromBytes(arr) {
    var bin = [];
    for (var i = 0; i < arr.byteLength; ++i) {
        bin.push(String.fromCharCode(arr[i]));
    }
    return btoa(bin.join(""));
}
if (minimal_1["default"].util.Long !== long_1["default"]) {
    minimal_1["default"].util.Long = long_1["default"];
    minimal_1["default"].configure();
}
