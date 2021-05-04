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
exports.DaprService = exports.SetMetadataRequest = exports.RegisteredComponents = exports.ActiveActorsCount = exports.GetMetadataResponse_ExtendedMetadataEntry = exports.GetMetadataResponse = exports.InvokeActorResponse = exports.InvokeActorRequest = exports.TransactionalActorStateOperation = exports.ExecuteActorStateTransactionRequest = exports.GetActorStateResponse = exports.GetActorStateRequest = exports.UnregisterActorReminderRequest = exports.RegisterActorReminderRequest = exports.UnregisterActorTimerRequest = exports.RegisterActorTimerRequest = exports.ExecuteStateTransactionRequest_MetadataEntry = exports.ExecuteStateTransactionRequest = exports.TransactionalStateOperation = exports.GetBulkSecretResponse_DataEntry = exports.GetBulkSecretResponse = exports.SecretResponse_SecretsEntry = exports.SecretResponse = exports.GetBulkSecretRequest_MetadataEntry = exports.GetBulkSecretRequest = exports.GetSecretResponse_DataEntry = exports.GetSecretResponse = exports.GetSecretRequest_MetadataEntry = exports.GetSecretRequest = exports.InvokeBindingResponse_MetadataEntry = exports.InvokeBindingResponse = exports.InvokeBindingRequest_MetadataEntry = exports.InvokeBindingRequest = exports.PublishEventRequest_MetadataEntry = exports.PublishEventRequest = exports.SaveStateRequest = exports.DeleteBulkStateRequest = exports.DeleteStateRequest_MetadataEntry = exports.DeleteStateRequest = exports.GetStateResponse_MetadataEntry = exports.GetStateResponse = exports.BulkStateItem_MetadataEntry = exports.BulkStateItem = exports.GetBulkStateResponse = exports.GetBulkStateRequest_MetadataEntry = exports.GetBulkStateRequest = exports.GetStateRequest_MetadataEntry = exports.GetStateRequest = exports.InvokeServiceRequest = exports.protobufPackage = void 0;
exports.DaprClient = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var grpc_js_1 = require("@grpc/grpc-js");
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var common_1 = require("../../../../dapr/proto/common/v1/common");
var any_1 = require("../../../../google/protobuf/any");
var empty_1 = require("../../../../google/protobuf/empty");
exports.protobufPackage = "dapr.proto.runtime.v1";
var baseInvokeServiceRequest = { id: "" };
exports.InvokeServiceRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.message !== undefined) {
            common_1.InvokeRequest.encode(message.message, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseInvokeServiceRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 3:
                    message.message = common_1.InvokeRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseInvokeServiceRequest);
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = common_1.InvokeRequest.fromJSON(object.message);
        }
        else {
            message.message = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.message !== undefined &&
            (obj.message = message.message
                ? common_1.InvokeRequest.toJSON(message.message)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseInvokeServiceRequest);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = common_1.InvokeRequest.fromPartial(object.message);
        }
        else {
            message.message = undefined;
        }
        return message;
    }
};
var baseGetStateRequest = { storeName: "", key: "", consistency: 0 };
exports.GetStateRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.storeName !== "") {
            writer.uint32(10).string(message.storeName);
        }
        if (message.key !== "") {
            writer.uint32(18).string(message.key);
        }
        if (message.consistency !== 0) {
            writer.uint32(24).int32(message.consistency);
        }
        Object.entries(message.metadata).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.GetStateRequest_MetadataEntry.encode({ key: key, value: value }, writer.uint32(34).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseGetStateRequest);
        message.metadata = {};
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storeName = reader.string();
                    break;
                case 2:
                    message.key = reader.string();
                    break;
                case 3:
                    message.consistency = reader.int32();
                    break;
                case 4:
                    var entry4 = exports.GetStateRequest_MetadataEntry.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        var message = __assign({}, baseGetStateRequest);
        message.metadata = {};
        if (object.storeName !== undefined && object.storeName !== null) {
            message.storeName = String(object.storeName);
        }
        else {
            message.storeName = "";
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.consistency !== undefined && object.consistency !== null) {
            message.consistency = common_1.stateOptions_StateConsistencyFromJSON(object.consistency);
        }
        else {
            message.consistency = 0;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.metadata[key] = String(value);
            });
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.storeName !== undefined && (obj.storeName = message.storeName);
        message.key !== undefined && (obj.key = message.key);
        message.consistency !== undefined &&
            (obj.consistency = common_1.stateOptions_StateConsistencyToJSON(message.consistency));
        obj.metadata = {};
        if (message.metadata) {
            Object.entries(message.metadata).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.metadata[k] = v;
            });
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseGetStateRequest);
        message.metadata = {};
        if (object.storeName !== undefined && object.storeName !== null) {
            message.storeName = object.storeName;
        }
        else {
            message.storeName = "";
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.consistency !== undefined && object.consistency !== null) {
            message.consistency = object.consistency;
        }
        else {
            message.consistency = 0;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.metadata[key] = String(value);
                }
            });
        }
        return message;
    }
};
var baseGetStateRequest_MetadataEntry = { key: "", value: "" };
exports.GetStateRequest_MetadataEntry = {
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
        var message = __assign({}, baseGetStateRequest_MetadataEntry);
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
        var message = __assign({}, baseGetStateRequest_MetadataEntry);
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
        var message = __assign({}, baseGetStateRequest_MetadataEntry);
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
var baseGetBulkStateRequest = {
    storeName: "",
    keys: "",
    parallelism: 0
};
exports.GetBulkStateRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.storeName !== "") {
            writer.uint32(10).string(message.storeName);
        }
        for (var _i = 0, _a = message.keys; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        if (message.parallelism !== 0) {
            writer.uint32(24).int32(message.parallelism);
        }
        Object.entries(message.metadata).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.GetBulkStateRequest_MetadataEntry.encode({ key: key, value: value }, writer.uint32(34).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseGetBulkStateRequest);
        message.keys = [];
        message.metadata = {};
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    var entry4 = exports.GetBulkStateRequest_MetadataEntry.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        var message = __assign({}, baseGetBulkStateRequest);
        message.keys = [];
        message.metadata = {};
        if (object.storeName !== undefined && object.storeName !== null) {
            message.storeName = String(object.storeName);
        }
        else {
            message.storeName = "";
        }
        if (object.keys !== undefined && object.keys !== null) {
            for (var _i = 0, _a = object.keys; _i < _a.length; _i++) {
                var e = _a[_i];
                message.keys.push(String(e));
            }
        }
        if (object.parallelism !== undefined && object.parallelism !== null) {
            message.parallelism = Number(object.parallelism);
        }
        else {
            message.parallelism = 0;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.metadata[key] = String(value);
            });
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.storeName !== undefined && (obj.storeName = message.storeName);
        if (message.keys) {
            obj.keys = message.keys.map(function (e) { return e; });
        }
        else {
            obj.keys = [];
        }
        message.parallelism !== undefined &&
            (obj.parallelism = message.parallelism);
        obj.metadata = {};
        if (message.metadata) {
            Object.entries(message.metadata).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.metadata[k] = v;
            });
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseGetBulkStateRequest);
        message.keys = [];
        message.metadata = {};
        if (object.storeName !== undefined && object.storeName !== null) {
            message.storeName = object.storeName;
        }
        else {
            message.storeName = "";
        }
        if (object.keys !== undefined && object.keys !== null) {
            for (var _i = 0, _a = object.keys; _i < _a.length; _i++) {
                var e = _a[_i];
                message.keys.push(e);
            }
        }
        if (object.parallelism !== undefined && object.parallelism !== null) {
            message.parallelism = object.parallelism;
        }
        else {
            message.parallelism = 0;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.metadata[key] = String(value);
                }
            });
        }
        return message;
    }
};
var baseGetBulkStateRequest_MetadataEntry = { key: "", value: "" };
exports.GetBulkStateRequest_MetadataEntry = {
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
        var message = __assign({}, baseGetBulkStateRequest_MetadataEntry);
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
        var message = __assign({}, baseGetBulkStateRequest_MetadataEntry);
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
        var message = __assign({}, baseGetBulkStateRequest_MetadataEntry);
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
var baseGetBulkStateResponse = {};
exports.GetBulkStateResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        for (var _i = 0, _a = message.items; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.BulkStateItem.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseGetBulkStateResponse);
        message.items = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.items.push(exports.BulkStateItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseGetBulkStateResponse);
        message.items = [];
        if (object.items !== undefined && object.items !== null) {
            for (var _i = 0, _a = object.items; _i < _a.length; _i++) {
                var e = _a[_i];
                message.items.push(exports.BulkStateItem.fromJSON(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        if (message.items) {
            obj.items = message.items.map(function (e) {
                return e ? exports.BulkStateItem.toJSON(e) : undefined;
            });
        }
        else {
            obj.items = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseGetBulkStateResponse);
        message.items = [];
        if (object.items !== undefined && object.items !== null) {
            for (var _i = 0, _a = object.items; _i < _a.length; _i++) {
                var e = _a[_i];
                message.items.push(exports.BulkStateItem.fromPartial(e));
            }
        }
        return message;
    }
};
var baseBulkStateItem = { key: "", etag: "", error: "" };
exports.BulkStateItem = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
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
        Object.entries(message.metadata).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.BulkStateItem_MetadataEntry.encode({ key: key, value: value }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseBulkStateItem);
        message.metadata = {};
        message.data = Buffer.alloc(0);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.etag = reader.string();
                    break;
                case 4:
                    message.error = reader.string();
                    break;
                case 5:
                    var entry5 = exports.BulkStateItem_MetadataEntry.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        var message = __assign({}, baseBulkStateItem);
        message.metadata = {};
        message.data = Buffer.alloc(0);
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = Buffer.from(bytesFromBase64(object.data));
        }
        if (object.etag !== undefined && object.etag !== null) {
            message.etag = String(object.etag);
        }
        else {
            message.etag = "";
        }
        if (object.error !== undefined && object.error !== null) {
            message.error = String(object.error);
        }
        else {
            message.error = "";
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.metadata[key] = String(value);
            });
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
        message.etag !== undefined && (obj.etag = message.etag);
        message.error !== undefined && (obj.error = message.error);
        obj.metadata = {};
        if (message.metadata) {
            Object.entries(message.metadata).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.metadata[k] = v;
            });
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseBulkStateItem);
        message.metadata = {};
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = Buffer.alloc(0);
        }
        if (object.etag !== undefined && object.etag !== null) {
            message.etag = object.etag;
        }
        else {
            message.etag = "";
        }
        if (object.error !== undefined && object.error !== null) {
            message.error = object.error;
        }
        else {
            message.error = "";
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.metadata[key] = String(value);
                }
            });
        }
        return message;
    }
};
var baseBulkStateItem_MetadataEntry = { key: "", value: "" };
exports.BulkStateItem_MetadataEntry = {
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
        var message = __assign({}, baseBulkStateItem_MetadataEntry);
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
        var message = __assign({}, baseBulkStateItem_MetadataEntry);
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
        var message = __assign({}, baseBulkStateItem_MetadataEntry);
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
var baseGetStateResponse = { etag: "" };
exports.GetStateResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.etag !== "") {
            writer.uint32(18).string(message.etag);
        }
        Object.entries(message.metadata).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.GetStateResponse_MetadataEntry.encode({ key: key, value: value }, writer.uint32(26).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseGetStateResponse);
        message.metadata = {};
        message.data = Buffer.alloc(0);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                case 2:
                    message.etag = reader.string();
                    break;
                case 3:
                    var entry3 = exports.GetStateResponse_MetadataEntry.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        var message = __assign({}, baseGetStateResponse);
        message.metadata = {};
        message.data = Buffer.alloc(0);
        if (object.data !== undefined && object.data !== null) {
            message.data = Buffer.from(bytesFromBase64(object.data));
        }
        if (object.etag !== undefined && object.etag !== null) {
            message.etag = String(object.etag);
        }
        else {
            message.etag = "";
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.metadata[key] = String(value);
            });
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
        message.etag !== undefined && (obj.etag = message.etag);
        obj.metadata = {};
        if (message.metadata) {
            Object.entries(message.metadata).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.metadata[k] = v;
            });
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseGetStateResponse);
        message.metadata = {};
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = Buffer.alloc(0);
        }
        if (object.etag !== undefined && object.etag !== null) {
            message.etag = object.etag;
        }
        else {
            message.etag = "";
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.metadata[key] = String(value);
                }
            });
        }
        return message;
    }
};
var baseGetStateResponse_MetadataEntry = { key: "", value: "" };
exports.GetStateResponse_MetadataEntry = {
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
        var message = __assign({}, baseGetStateResponse_MetadataEntry);
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
        var message = __assign({}, baseGetStateResponse_MetadataEntry);
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
        var message = __assign({}, baseGetStateResponse_MetadataEntry);
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
var baseDeleteStateRequest = { storeName: "", key: "" };
exports.DeleteStateRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.storeName !== "") {
            writer.uint32(10).string(message.storeName);
        }
        if (message.key !== "") {
            writer.uint32(18).string(message.key);
        }
        if (message.etag !== undefined) {
            common_1.Etag.encode(message.etag, writer.uint32(26).fork()).ldelim();
        }
        if (message.options !== undefined) {
            common_1.StateOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
        }
        Object.entries(message.metadata).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.DeleteStateRequest_MetadataEntry.encode({ key: key, value: value }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseDeleteStateRequest);
        message.metadata = {};
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storeName = reader.string();
                    break;
                case 2:
                    message.key = reader.string();
                    break;
                case 3:
                    message.etag = common_1.Etag.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.options = common_1.StateOptions.decode(reader, reader.uint32());
                    break;
                case 5:
                    var entry5 = exports.DeleteStateRequest_MetadataEntry.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        var message = __assign({}, baseDeleteStateRequest);
        message.metadata = {};
        if (object.storeName !== undefined && object.storeName !== null) {
            message.storeName = String(object.storeName);
        }
        else {
            message.storeName = "";
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.etag !== undefined && object.etag !== null) {
            message.etag = common_1.Etag.fromJSON(object.etag);
        }
        else {
            message.etag = undefined;
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = common_1.StateOptions.fromJSON(object.options);
        }
        else {
            message.options = undefined;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.metadata[key] = String(value);
            });
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.storeName !== undefined && (obj.storeName = message.storeName);
        message.key !== undefined && (obj.key = message.key);
        message.etag !== undefined &&
            (obj.etag = message.etag ? common_1.Etag.toJSON(message.etag) : undefined);
        message.options !== undefined &&
            (obj.options = message.options
                ? common_1.StateOptions.toJSON(message.options)
                : undefined);
        obj.metadata = {};
        if (message.metadata) {
            Object.entries(message.metadata).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.metadata[k] = v;
            });
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseDeleteStateRequest);
        message.metadata = {};
        if (object.storeName !== undefined && object.storeName !== null) {
            message.storeName = object.storeName;
        }
        else {
            message.storeName = "";
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.etag !== undefined && object.etag !== null) {
            message.etag = common_1.Etag.fromPartial(object.etag);
        }
        else {
            message.etag = undefined;
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = common_1.StateOptions.fromPartial(object.options);
        }
        else {
            message.options = undefined;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.metadata[key] = String(value);
                }
            });
        }
        return message;
    }
};
var baseDeleteStateRequest_MetadataEntry = { key: "", value: "" };
exports.DeleteStateRequest_MetadataEntry = {
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
        var message = __assign({}, baseDeleteStateRequest_MetadataEntry);
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
        var message = __assign({}, baseDeleteStateRequest_MetadataEntry);
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
        var message = __assign({}, baseDeleteStateRequest_MetadataEntry);
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
var baseDeleteBulkStateRequest = { storeName: "" };
exports.DeleteBulkStateRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.storeName !== "") {
            writer.uint32(10).string(message.storeName);
        }
        for (var _i = 0, _a = message.states; _i < _a.length; _i++) {
            var v = _a[_i];
            common_1.StateItem.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseDeleteBulkStateRequest);
        message.states = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storeName = reader.string();
                    break;
                case 2:
                    message.states.push(common_1.StateItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseDeleteBulkStateRequest);
        message.states = [];
        if (object.storeName !== undefined && object.storeName !== null) {
            message.storeName = String(object.storeName);
        }
        else {
            message.storeName = "";
        }
        if (object.states !== undefined && object.states !== null) {
            for (var _i = 0, _a = object.states; _i < _a.length; _i++) {
                var e = _a[_i];
                message.states.push(common_1.StateItem.fromJSON(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.storeName !== undefined && (obj.storeName = message.storeName);
        if (message.states) {
            obj.states = message.states.map(function (e) {
                return e ? common_1.StateItem.toJSON(e) : undefined;
            });
        }
        else {
            obj.states = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseDeleteBulkStateRequest);
        message.states = [];
        if (object.storeName !== undefined && object.storeName !== null) {
            message.storeName = object.storeName;
        }
        else {
            message.storeName = "";
        }
        if (object.states !== undefined && object.states !== null) {
            for (var _i = 0, _a = object.states; _i < _a.length; _i++) {
                var e = _a[_i];
                message.states.push(common_1.StateItem.fromPartial(e));
            }
        }
        return message;
    }
};
var baseSaveStateRequest = { storeName: "" };
exports.SaveStateRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.storeName !== "") {
            writer.uint32(10).string(message.storeName);
        }
        for (var _i = 0, _a = message.states; _i < _a.length; _i++) {
            var v = _a[_i];
            common_1.StateItem.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseSaveStateRequest);
        message.states = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storeName = reader.string();
                    break;
                case 2:
                    message.states.push(common_1.StateItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseSaveStateRequest);
        message.states = [];
        if (object.storeName !== undefined && object.storeName !== null) {
            message.storeName = String(object.storeName);
        }
        else {
            message.storeName = "";
        }
        if (object.states !== undefined && object.states !== null) {
            for (var _i = 0, _a = object.states; _i < _a.length; _i++) {
                var e = _a[_i];
                message.states.push(common_1.StateItem.fromJSON(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.storeName !== undefined && (obj.storeName = message.storeName);
        if (message.states) {
            obj.states = message.states.map(function (e) {
                return e ? common_1.StateItem.toJSON(e) : undefined;
            });
        }
        else {
            obj.states = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseSaveStateRequest);
        message.states = [];
        if (object.storeName !== undefined && object.storeName !== null) {
            message.storeName = object.storeName;
        }
        else {
            message.storeName = "";
        }
        if (object.states !== undefined && object.states !== null) {
            for (var _i = 0, _a = object.states; _i < _a.length; _i++) {
                var e = _a[_i];
                message.states.push(common_1.StateItem.fromPartial(e));
            }
        }
        return message;
    }
};
var basePublishEventRequest = {
    pubsubName: "",
    topic: "",
    dataContentType: ""
};
exports.PublishEventRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
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
        Object.entries(message.metadata).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.PublishEventRequest_MetadataEntry.encode({ key: key, value: value }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, basePublishEventRequest);
        message.metadata = {};
        message.data = Buffer.alloc(0);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pubsubName = reader.string();
                    break;
                case 2:
                    message.topic = reader.string();
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                case 4:
                    message.dataContentType = reader.string();
                    break;
                case 5:
                    var entry5 = exports.PublishEventRequest_MetadataEntry.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        var message = __assign({}, basePublishEventRequest);
        message.metadata = {};
        message.data = Buffer.alloc(0);
        if (object.pubsubName !== undefined && object.pubsubName !== null) {
            message.pubsubName = String(object.pubsubName);
        }
        else {
            message.pubsubName = "";
        }
        if (object.topic !== undefined && object.topic !== null) {
            message.topic = String(object.topic);
        }
        else {
            message.topic = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = Buffer.from(bytesFromBase64(object.data));
        }
        if (object.dataContentType !== undefined &&
            object.dataContentType !== null) {
            message.dataContentType = String(object.dataContentType);
        }
        else {
            message.dataContentType = "";
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.metadata[key] = String(value);
            });
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.pubsubName !== undefined && (obj.pubsubName = message.pubsubName);
        message.topic !== undefined && (obj.topic = message.topic);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
        message.dataContentType !== undefined &&
            (obj.dataContentType = message.dataContentType);
        obj.metadata = {};
        if (message.metadata) {
            Object.entries(message.metadata).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.metadata[k] = v;
            });
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, basePublishEventRequest);
        message.metadata = {};
        if (object.pubsubName !== undefined && object.pubsubName !== null) {
            message.pubsubName = object.pubsubName;
        }
        else {
            message.pubsubName = "";
        }
        if (object.topic !== undefined && object.topic !== null) {
            message.topic = object.topic;
        }
        else {
            message.topic = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = Buffer.alloc(0);
        }
        if (object.dataContentType !== undefined &&
            object.dataContentType !== null) {
            message.dataContentType = object.dataContentType;
        }
        else {
            message.dataContentType = "";
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.metadata[key] = String(value);
                }
            });
        }
        return message;
    }
};
var basePublishEventRequest_MetadataEntry = { key: "", value: "" };
exports.PublishEventRequest_MetadataEntry = {
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
        var message = __assign({}, basePublishEventRequest_MetadataEntry);
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
        var message = __assign({}, basePublishEventRequest_MetadataEntry);
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
        var message = __assign({}, basePublishEventRequest_MetadataEntry);
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
var baseInvokeBindingRequest = { name: "", operation: "" };
exports.InvokeBindingRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        Object.entries(message.metadata).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.InvokeBindingRequest_MetadataEntry.encode({ key: key, value: value }, writer.uint32(26).fork()).ldelim();
        });
        if (message.operation !== "") {
            writer.uint32(34).string(message.operation);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseInvokeBindingRequest);
        message.metadata = {};
        message.data = Buffer.alloc(0);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    var entry3 = exports.InvokeBindingRequest_MetadataEntry.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        var message = __assign({}, baseInvokeBindingRequest);
        message.metadata = {};
        message.data = Buffer.alloc(0);
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = Buffer.from(bytesFromBase64(object.data));
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.metadata[key] = String(value);
            });
        }
        if (object.operation !== undefined && object.operation !== null) {
            message.operation = String(object.operation);
        }
        else {
            message.operation = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
        obj.metadata = {};
        if (message.metadata) {
            Object.entries(message.metadata).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.metadata[k] = v;
            });
        }
        message.operation !== undefined && (obj.operation = message.operation);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseInvokeBindingRequest);
        message.metadata = {};
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = Buffer.alloc(0);
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.metadata[key] = String(value);
                }
            });
        }
        if (object.operation !== undefined && object.operation !== null) {
            message.operation = object.operation;
        }
        else {
            message.operation = "";
        }
        return message;
    }
};
var baseInvokeBindingRequest_MetadataEntry = { key: "", value: "" };
exports.InvokeBindingRequest_MetadataEntry = {
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
        var message = __assign({}, baseInvokeBindingRequest_MetadataEntry);
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
        var message = __assign({}, baseInvokeBindingRequest_MetadataEntry);
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
        var message = __assign({}, baseInvokeBindingRequest_MetadataEntry);
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
var baseInvokeBindingResponse = {};
exports.InvokeBindingResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        Object.entries(message.metadata).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.InvokeBindingResponse_MetadataEntry.encode({ key: key, value: value }, writer.uint32(18).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseInvokeBindingResponse);
        message.metadata = {};
        message.data = Buffer.alloc(0);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                case 2:
                    var entry2 = exports.InvokeBindingResponse_MetadataEntry.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        var message = __assign({}, baseInvokeBindingResponse);
        message.metadata = {};
        message.data = Buffer.alloc(0);
        if (object.data !== undefined && object.data !== null) {
            message.data = Buffer.from(bytesFromBase64(object.data));
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.metadata[key] = String(value);
            });
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
        obj.metadata = {};
        if (message.metadata) {
            Object.entries(message.metadata).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.metadata[k] = v;
            });
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseInvokeBindingResponse);
        message.metadata = {};
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = Buffer.alloc(0);
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.metadata[key] = String(value);
                }
            });
        }
        return message;
    }
};
var baseInvokeBindingResponse_MetadataEntry = { key: "", value: "" };
exports.InvokeBindingResponse_MetadataEntry = {
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
        var message = __assign({}, baseInvokeBindingResponse_MetadataEntry);
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
        var message = __assign({}, baseInvokeBindingResponse_MetadataEntry);
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
        var message = __assign({}, baseInvokeBindingResponse_MetadataEntry);
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
var baseGetSecretRequest = { storeName: "", key: "" };
exports.GetSecretRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.storeName !== "") {
            writer.uint32(10).string(message.storeName);
        }
        if (message.key !== "") {
            writer.uint32(18).string(message.key);
        }
        Object.entries(message.metadata).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.GetSecretRequest_MetadataEntry.encode({ key: key, value: value }, writer.uint32(26).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseGetSecretRequest);
        message.metadata = {};
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storeName = reader.string();
                    break;
                case 2:
                    message.key = reader.string();
                    break;
                case 3:
                    var entry3 = exports.GetSecretRequest_MetadataEntry.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        var message = __assign({}, baseGetSecretRequest);
        message.metadata = {};
        if (object.storeName !== undefined && object.storeName !== null) {
            message.storeName = String(object.storeName);
        }
        else {
            message.storeName = "";
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.metadata[key] = String(value);
            });
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.storeName !== undefined && (obj.storeName = message.storeName);
        message.key !== undefined && (obj.key = message.key);
        obj.metadata = {};
        if (message.metadata) {
            Object.entries(message.metadata).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.metadata[k] = v;
            });
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseGetSecretRequest);
        message.metadata = {};
        if (object.storeName !== undefined && object.storeName !== null) {
            message.storeName = object.storeName;
        }
        else {
            message.storeName = "";
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.metadata[key] = String(value);
                }
            });
        }
        return message;
    }
};
var baseGetSecretRequest_MetadataEntry = { key: "", value: "" };
exports.GetSecretRequest_MetadataEntry = {
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
        var message = __assign({}, baseGetSecretRequest_MetadataEntry);
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
        var message = __assign({}, baseGetSecretRequest_MetadataEntry);
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
        var message = __assign({}, baseGetSecretRequest_MetadataEntry);
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
var baseGetSecretResponse = {};
exports.GetSecretResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        Object.entries(message.data).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.GetSecretResponse_DataEntry.encode({ key: key, value: value }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseGetSecretResponse);
        message.data = {};
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    var entry1 = exports.GetSecretResponse_DataEntry.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        var message = __assign({}, baseGetSecretResponse);
        message.data = {};
        if (object.data !== undefined && object.data !== null) {
            Object.entries(object.data).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.data[key] = String(value);
            });
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        obj.data = {};
        if (message.data) {
            Object.entries(message.data).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.data[k] = v;
            });
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseGetSecretResponse);
        message.data = {};
        if (object.data !== undefined && object.data !== null) {
            Object.entries(object.data).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.data[key] = String(value);
                }
            });
        }
        return message;
    }
};
var baseGetSecretResponse_DataEntry = { key: "", value: "" };
exports.GetSecretResponse_DataEntry = {
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
        var message = __assign({}, baseGetSecretResponse_DataEntry);
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
        var message = __assign({}, baseGetSecretResponse_DataEntry);
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
        var message = __assign({}, baseGetSecretResponse_DataEntry);
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
var baseGetBulkSecretRequest = { storeName: "" };
exports.GetBulkSecretRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.storeName !== "") {
            writer.uint32(10).string(message.storeName);
        }
        Object.entries(message.metadata).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.GetBulkSecretRequest_MetadataEntry.encode({ key: key, value: value }, writer.uint32(18).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseGetBulkSecretRequest);
        message.metadata = {};
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storeName = reader.string();
                    break;
                case 2:
                    var entry2 = exports.GetBulkSecretRequest_MetadataEntry.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        var message = __assign({}, baseGetBulkSecretRequest);
        message.metadata = {};
        if (object.storeName !== undefined && object.storeName !== null) {
            message.storeName = String(object.storeName);
        }
        else {
            message.storeName = "";
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.metadata[key] = String(value);
            });
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.storeName !== undefined && (obj.storeName = message.storeName);
        obj.metadata = {};
        if (message.metadata) {
            Object.entries(message.metadata).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.metadata[k] = v;
            });
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseGetBulkSecretRequest);
        message.metadata = {};
        if (object.storeName !== undefined && object.storeName !== null) {
            message.storeName = object.storeName;
        }
        else {
            message.storeName = "";
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.metadata[key] = String(value);
                }
            });
        }
        return message;
    }
};
var baseGetBulkSecretRequest_MetadataEntry = { key: "", value: "" };
exports.GetBulkSecretRequest_MetadataEntry = {
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
        var message = __assign({}, baseGetBulkSecretRequest_MetadataEntry);
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
        var message = __assign({}, baseGetBulkSecretRequest_MetadataEntry);
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
        var message = __assign({}, baseGetBulkSecretRequest_MetadataEntry);
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
var baseSecretResponse = {};
exports.SecretResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        Object.entries(message.secrets).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.SecretResponse_SecretsEntry.encode({ key: key, value: value }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseSecretResponse);
        message.secrets = {};
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    var entry1 = exports.SecretResponse_SecretsEntry.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        var message = __assign({}, baseSecretResponse);
        message.secrets = {};
        if (object.secrets !== undefined && object.secrets !== null) {
            Object.entries(object.secrets).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.secrets[key] = String(value);
            });
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        obj.secrets = {};
        if (message.secrets) {
            Object.entries(message.secrets).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.secrets[k] = v;
            });
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseSecretResponse);
        message.secrets = {};
        if (object.secrets !== undefined && object.secrets !== null) {
            Object.entries(object.secrets).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.secrets[key] = String(value);
                }
            });
        }
        return message;
    }
};
var baseSecretResponse_SecretsEntry = { key: "", value: "" };
exports.SecretResponse_SecretsEntry = {
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
        var message = __assign({}, baseSecretResponse_SecretsEntry);
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
        var message = __assign({}, baseSecretResponse_SecretsEntry);
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
        var message = __assign({}, baseSecretResponse_SecretsEntry);
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
var baseGetBulkSecretResponse = {};
exports.GetBulkSecretResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        Object.entries(message.data).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.GetBulkSecretResponse_DataEntry.encode({ key: key, value: value }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseGetBulkSecretResponse);
        message.data = {};
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    var entry1 = exports.GetBulkSecretResponse_DataEntry.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        var message = __assign({}, baseGetBulkSecretResponse);
        message.data = {};
        if (object.data !== undefined && object.data !== null) {
            Object.entries(object.data).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.data[key] = exports.SecretResponse.fromJSON(value);
            });
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        obj.data = {};
        if (message.data) {
            Object.entries(message.data).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.data[k] = exports.SecretResponse.toJSON(v);
            });
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseGetBulkSecretResponse);
        message.data = {};
        if (object.data !== undefined && object.data !== null) {
            Object.entries(object.data).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.data[key] = exports.SecretResponse.fromPartial(value);
                }
            });
        }
        return message;
    }
};
var baseGetBulkSecretResponse_DataEntry = { key: "" };
exports.GetBulkSecretResponse_DataEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.SecretResponse.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseGetBulkSecretResponse_DataEntry);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.SecretResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseGetBulkSecretResponse_DataEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.SecretResponse.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value
                ? exports.SecretResponse.toJSON(message.value)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseGetBulkSecretResponse_DataEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.SecretResponse.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    }
};
var baseTransactionalStateOperation = { operationType: "" };
exports.TransactionalStateOperation = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.operationType !== "") {
            writer.uint32(10).string(message.operationType);
        }
        if (message.request !== undefined) {
            common_1.StateItem.encode(message.request, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseTransactionalStateOperation);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operationType = reader.string();
                    break;
                case 2:
                    message.request = common_1.StateItem.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseTransactionalStateOperation);
        if (object.operationType !== undefined && object.operationType !== null) {
            message.operationType = String(object.operationType);
        }
        else {
            message.operationType = "";
        }
        if (object.request !== undefined && object.request !== null) {
            message.request = common_1.StateItem.fromJSON(object.request);
        }
        else {
            message.request = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.operationType !== undefined &&
            (obj.operationType = message.operationType);
        message.request !== undefined &&
            (obj.request = message.request
                ? common_1.StateItem.toJSON(message.request)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseTransactionalStateOperation);
        if (object.operationType !== undefined && object.operationType !== null) {
            message.operationType = object.operationType;
        }
        else {
            message.operationType = "";
        }
        if (object.request !== undefined && object.request !== null) {
            message.request = common_1.StateItem.fromPartial(object.request);
        }
        else {
            message.request = undefined;
        }
        return message;
    }
};
var baseExecuteStateTransactionRequest = { storeName: "" };
exports.ExecuteStateTransactionRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.storeName !== "") {
            writer.uint32(10).string(message.storeName);
        }
        for (var _i = 0, _a = message.operations; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.TransactionalStateOperation.encode(v, writer.uint32(18).fork()).ldelim();
        }
        Object.entries(message.metadata).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.ExecuteStateTransactionRequest_MetadataEntry.encode({ key: key, value: value }, writer.uint32(26).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseExecuteStateTransactionRequest);
        message.operations = [];
        message.metadata = {};
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storeName = reader.string();
                    break;
                case 2:
                    message.operations.push(exports.TransactionalStateOperation.decode(reader, reader.uint32()));
                    break;
                case 3:
                    var entry3 = exports.ExecuteStateTransactionRequest_MetadataEntry.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        var message = __assign({}, baseExecuteStateTransactionRequest);
        message.operations = [];
        message.metadata = {};
        if (object.storeName !== undefined && object.storeName !== null) {
            message.storeName = String(object.storeName);
        }
        else {
            message.storeName = "";
        }
        if (object.operations !== undefined && object.operations !== null) {
            for (var _i = 0, _a = object.operations; _i < _a.length; _i++) {
                var e = _a[_i];
                message.operations.push(exports.TransactionalStateOperation.fromJSON(e));
            }
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.metadata[key] = String(value);
            });
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.storeName !== undefined && (obj.storeName = message.storeName);
        if (message.operations) {
            obj.operations = message.operations.map(function (e) {
                return e ? exports.TransactionalStateOperation.toJSON(e) : undefined;
            });
        }
        else {
            obj.operations = [];
        }
        obj.metadata = {};
        if (message.metadata) {
            Object.entries(message.metadata).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.metadata[k] = v;
            });
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseExecuteStateTransactionRequest);
        message.operations = [];
        message.metadata = {};
        if (object.storeName !== undefined && object.storeName !== null) {
            message.storeName = object.storeName;
        }
        else {
            message.storeName = "";
        }
        if (object.operations !== undefined && object.operations !== null) {
            for (var _i = 0, _a = object.operations; _i < _a.length; _i++) {
                var e = _a[_i];
                message.operations.push(exports.TransactionalStateOperation.fromPartial(e));
            }
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.metadata[key] = String(value);
                }
            });
        }
        return message;
    }
};
var baseExecuteStateTransactionRequest_MetadataEntry = {
    key: "",
    value: ""
};
exports.ExecuteStateTransactionRequest_MetadataEntry = {
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
        var message = __assign({}, baseExecuteStateTransactionRequest_MetadataEntry);
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
        var message = __assign({}, baseExecuteStateTransactionRequest_MetadataEntry);
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
        var message = __assign({}, baseExecuteStateTransactionRequest_MetadataEntry);
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
var baseRegisterActorTimerRequest = {
    actorType: "",
    actorId: "",
    name: "",
    dueTime: "",
    period: "",
    callback: ""
};
exports.RegisterActorTimerRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseRegisterActorTimerRequest);
        message.data = Buffer.alloc(0);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseRegisterActorTimerRequest);
        message.data = Buffer.alloc(0);
        if (object.actorType !== undefined && object.actorType !== null) {
            message.actorType = String(object.actorType);
        }
        else {
            message.actorType = "";
        }
        if (object.actorId !== undefined && object.actorId !== null) {
            message.actorId = String(object.actorId);
        }
        else {
            message.actorId = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.dueTime !== undefined && object.dueTime !== null) {
            message.dueTime = String(object.dueTime);
        }
        else {
            message.dueTime = "";
        }
        if (object.period !== undefined && object.period !== null) {
            message.period = String(object.period);
        }
        else {
            message.period = "";
        }
        if (object.callback !== undefined && object.callback !== null) {
            message.callback = String(object.callback);
        }
        else {
            message.callback = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = Buffer.from(bytesFromBase64(object.data));
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.actorType !== undefined && (obj.actorType = message.actorType);
        message.actorId !== undefined && (obj.actorId = message.actorId);
        message.name !== undefined && (obj.name = message.name);
        message.dueTime !== undefined && (obj.dueTime = message.dueTime);
        message.period !== undefined && (obj.period = message.period);
        message.callback !== undefined && (obj.callback = message.callback);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseRegisterActorTimerRequest);
        if (object.actorType !== undefined && object.actorType !== null) {
            message.actorType = object.actorType;
        }
        else {
            message.actorType = "";
        }
        if (object.actorId !== undefined && object.actorId !== null) {
            message.actorId = object.actorId;
        }
        else {
            message.actorId = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.dueTime !== undefined && object.dueTime !== null) {
            message.dueTime = object.dueTime;
        }
        else {
            message.dueTime = "";
        }
        if (object.period !== undefined && object.period !== null) {
            message.period = object.period;
        }
        else {
            message.period = "";
        }
        if (object.callback !== undefined && object.callback !== null) {
            message.callback = object.callback;
        }
        else {
            message.callback = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = Buffer.alloc(0);
        }
        return message;
    }
};
var baseUnregisterActorTimerRequest = {
    actorType: "",
    actorId: "",
    name: ""
};
exports.UnregisterActorTimerRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseUnregisterActorTimerRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseUnregisterActorTimerRequest);
        if (object.actorType !== undefined && object.actorType !== null) {
            message.actorType = String(object.actorType);
        }
        else {
            message.actorType = "";
        }
        if (object.actorId !== undefined && object.actorId !== null) {
            message.actorId = String(object.actorId);
        }
        else {
            message.actorId = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.actorType !== undefined && (obj.actorType = message.actorType);
        message.actorId !== undefined && (obj.actorId = message.actorId);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseUnregisterActorTimerRequest);
        if (object.actorType !== undefined && object.actorType !== null) {
            message.actorType = object.actorType;
        }
        else {
            message.actorType = "";
        }
        if (object.actorId !== undefined && object.actorId !== null) {
            message.actorId = object.actorId;
        }
        else {
            message.actorId = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        return message;
    }
};
var baseRegisterActorReminderRequest = {
    actorType: "",
    actorId: "",
    name: "",
    dueTime: "",
    period: ""
};
exports.RegisterActorReminderRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseRegisterActorReminderRequest);
        message.data = Buffer.alloc(0);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseRegisterActorReminderRequest);
        message.data = Buffer.alloc(0);
        if (object.actorType !== undefined && object.actorType !== null) {
            message.actorType = String(object.actorType);
        }
        else {
            message.actorType = "";
        }
        if (object.actorId !== undefined && object.actorId !== null) {
            message.actorId = String(object.actorId);
        }
        else {
            message.actorId = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.dueTime !== undefined && object.dueTime !== null) {
            message.dueTime = String(object.dueTime);
        }
        else {
            message.dueTime = "";
        }
        if (object.period !== undefined && object.period !== null) {
            message.period = String(object.period);
        }
        else {
            message.period = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = Buffer.from(bytesFromBase64(object.data));
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.actorType !== undefined && (obj.actorType = message.actorType);
        message.actorId !== undefined && (obj.actorId = message.actorId);
        message.name !== undefined && (obj.name = message.name);
        message.dueTime !== undefined && (obj.dueTime = message.dueTime);
        message.period !== undefined && (obj.period = message.period);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseRegisterActorReminderRequest);
        if (object.actorType !== undefined && object.actorType !== null) {
            message.actorType = object.actorType;
        }
        else {
            message.actorType = "";
        }
        if (object.actorId !== undefined && object.actorId !== null) {
            message.actorId = object.actorId;
        }
        else {
            message.actorId = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.dueTime !== undefined && object.dueTime !== null) {
            message.dueTime = object.dueTime;
        }
        else {
            message.dueTime = "";
        }
        if (object.period !== undefined && object.period !== null) {
            message.period = object.period;
        }
        else {
            message.period = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = Buffer.alloc(0);
        }
        return message;
    }
};
var baseUnregisterActorReminderRequest = {
    actorType: "",
    actorId: "",
    name: ""
};
exports.UnregisterActorReminderRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseUnregisterActorReminderRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseUnregisterActorReminderRequest);
        if (object.actorType !== undefined && object.actorType !== null) {
            message.actorType = String(object.actorType);
        }
        else {
            message.actorType = "";
        }
        if (object.actorId !== undefined && object.actorId !== null) {
            message.actorId = String(object.actorId);
        }
        else {
            message.actorId = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.actorType !== undefined && (obj.actorType = message.actorType);
        message.actorId !== undefined && (obj.actorId = message.actorId);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseUnregisterActorReminderRequest);
        if (object.actorType !== undefined && object.actorType !== null) {
            message.actorType = object.actorType;
        }
        else {
            message.actorType = "";
        }
        if (object.actorId !== undefined && object.actorId !== null) {
            message.actorId = object.actorId;
        }
        else {
            message.actorId = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        return message;
    }
};
var baseGetActorStateRequest = {
    actorType: "",
    actorId: "",
    key: ""
};
exports.GetActorStateRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseGetActorStateRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseGetActorStateRequest);
        if (object.actorType !== undefined && object.actorType !== null) {
            message.actorType = String(object.actorType);
        }
        else {
            message.actorType = "";
        }
        if (object.actorId !== undefined && object.actorId !== null) {
            message.actorId = String(object.actorId);
        }
        else {
            message.actorId = "";
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.actorType !== undefined && (obj.actorType = message.actorType);
        message.actorId !== undefined && (obj.actorId = message.actorId);
        message.key !== undefined && (obj.key = message.key);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseGetActorStateRequest);
        if (object.actorType !== undefined && object.actorType !== null) {
            message.actorType = object.actorType;
        }
        else {
            message.actorType = "";
        }
        if (object.actorId !== undefined && object.actorId !== null) {
            message.actorId = object.actorId;
        }
        else {
            message.actorId = "";
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        return message;
    }
};
var baseGetActorStateResponse = {};
exports.GetActorStateResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseGetActorStateResponse);
        message.data = Buffer.alloc(0);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseGetActorStateResponse);
        message.data = Buffer.alloc(0);
        if (object.data !== undefined && object.data !== null) {
            message.data = Buffer.from(bytesFromBase64(object.data));
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseGetActorStateResponse);
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = Buffer.alloc(0);
        }
        return message;
    }
};
var baseExecuteActorStateTransactionRequest = {
    actorType: "",
    actorId: ""
};
exports.ExecuteActorStateTransactionRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.actorType !== "") {
            writer.uint32(10).string(message.actorType);
        }
        if (message.actorId !== "") {
            writer.uint32(18).string(message.actorId);
        }
        for (var _i = 0, _a = message.operations; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.TransactionalActorStateOperation.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseExecuteActorStateTransactionRequest);
        message.operations = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.actorType = reader.string();
                    break;
                case 2:
                    message.actorId = reader.string();
                    break;
                case 3:
                    message.operations.push(exports.TransactionalActorStateOperation.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseExecuteActorStateTransactionRequest);
        message.operations = [];
        if (object.actorType !== undefined && object.actorType !== null) {
            message.actorType = String(object.actorType);
        }
        else {
            message.actorType = "";
        }
        if (object.actorId !== undefined && object.actorId !== null) {
            message.actorId = String(object.actorId);
        }
        else {
            message.actorId = "";
        }
        if (object.operations !== undefined && object.operations !== null) {
            for (var _i = 0, _a = object.operations; _i < _a.length; _i++) {
                var e = _a[_i];
                message.operations.push(exports.TransactionalActorStateOperation.fromJSON(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.actorType !== undefined && (obj.actorType = message.actorType);
        message.actorId !== undefined && (obj.actorId = message.actorId);
        if (message.operations) {
            obj.operations = message.operations.map(function (e) {
                return e ? exports.TransactionalActorStateOperation.toJSON(e) : undefined;
            });
        }
        else {
            obj.operations = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseExecuteActorStateTransactionRequest);
        message.operations = [];
        if (object.actorType !== undefined && object.actorType !== null) {
            message.actorType = object.actorType;
        }
        else {
            message.actorType = "";
        }
        if (object.actorId !== undefined && object.actorId !== null) {
            message.actorId = object.actorId;
        }
        else {
            message.actorId = "";
        }
        if (object.operations !== undefined && object.operations !== null) {
            for (var _i = 0, _a = object.operations; _i < _a.length; _i++) {
                var e = _a[_i];
                message.operations.push(exports.TransactionalActorStateOperation.fromPartial(e));
            }
        }
        return message;
    }
};
var baseTransactionalActorStateOperation = {
    operationType: "",
    key: ""
};
exports.TransactionalActorStateOperation = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.operationType !== "") {
            writer.uint32(10).string(message.operationType);
        }
        if (message.key !== "") {
            writer.uint32(18).string(message.key);
        }
        if (message.value !== undefined) {
            any_1.Any.encode(message.value, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseTransactionalActorStateOperation);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operationType = reader.string();
                    break;
                case 2:
                    message.key = reader.string();
                    break;
                case 3:
                    message.value = any_1.Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseTransactionalActorStateOperation);
        if (object.operationType !== undefined && object.operationType !== null) {
            message.operationType = String(object.operationType);
        }
        else {
            message.operationType = "";
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = any_1.Any.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.operationType !== undefined &&
            (obj.operationType = message.operationType);
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? any_1.Any.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseTransactionalActorStateOperation);
        if (object.operationType !== undefined && object.operationType !== null) {
            message.operationType = object.operationType;
        }
        else {
            message.operationType = "";
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = any_1.Any.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    }
};
var baseInvokeActorRequest = {
    actorType: "",
    actorId: "",
    method: ""
};
exports.InvokeActorRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseInvokeActorRequest);
        message.data = Buffer.alloc(0);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseInvokeActorRequest);
        message.data = Buffer.alloc(0);
        if (object.actorType !== undefined && object.actorType !== null) {
            message.actorType = String(object.actorType);
        }
        else {
            message.actorType = "";
        }
        if (object.actorId !== undefined && object.actorId !== null) {
            message.actorId = String(object.actorId);
        }
        else {
            message.actorId = "";
        }
        if (object.method !== undefined && object.method !== null) {
            message.method = String(object.method);
        }
        else {
            message.method = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = Buffer.from(bytesFromBase64(object.data));
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.actorType !== undefined && (obj.actorType = message.actorType);
        message.actorId !== undefined && (obj.actorId = message.actorId);
        message.method !== undefined && (obj.method = message.method);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseInvokeActorRequest);
        if (object.actorType !== undefined && object.actorType !== null) {
            message.actorType = object.actorType;
        }
        else {
            message.actorType = "";
        }
        if (object.actorId !== undefined && object.actorId !== null) {
            message.actorId = object.actorId;
        }
        else {
            message.actorId = "";
        }
        if (object.method !== undefined && object.method !== null) {
            message.method = object.method;
        }
        else {
            message.method = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = Buffer.alloc(0);
        }
        return message;
    }
};
var baseInvokeActorResponse = {};
exports.InvokeActorResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseInvokeActorResponse);
        message.data = Buffer.alloc(0);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseInvokeActorResponse);
        message.data = Buffer.alloc(0);
        if (object.data !== undefined && object.data !== null) {
            message.data = Buffer.from(bytesFromBase64(object.data));
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseInvokeActorResponse);
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = Buffer.alloc(0);
        }
        return message;
    }
};
var baseGetMetadataResponse = { id: "" };
exports.GetMetadataResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        for (var _i = 0, _a = message.activeActorsCount; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ActiveActorsCount.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.registeredComponents; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.RegisteredComponents.encode(v, writer.uint32(26).fork()).ldelim();
        }
        Object.entries(message.extendedMetadata).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.GetMetadataResponse_ExtendedMetadataEntry.encode({ key: key, value: value }, writer.uint32(34).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseGetMetadataResponse);
        message.activeActorsCount = [];
        message.registeredComponents = [];
        message.extendedMetadata = {};
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.activeActorsCount.push(exports.ActiveActorsCount.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.registeredComponents.push(exports.RegisteredComponents.decode(reader, reader.uint32()));
                    break;
                case 4:
                    var entry4 = exports.GetMetadataResponse_ExtendedMetadataEntry.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        var message = __assign({}, baseGetMetadataResponse);
        message.activeActorsCount = [];
        message.registeredComponents = [];
        message.extendedMetadata = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.activeActorsCount !== undefined &&
            object.activeActorsCount !== null) {
            for (var _i = 0, _a = object.activeActorsCount; _i < _a.length; _i++) {
                var e = _a[_i];
                message.activeActorsCount.push(exports.ActiveActorsCount.fromJSON(e));
            }
        }
        if (object.registeredComponents !== undefined &&
            object.registeredComponents !== null) {
            for (var _b = 0, _c = object.registeredComponents; _b < _c.length; _b++) {
                var e = _c[_b];
                message.registeredComponents.push(exports.RegisteredComponents.fromJSON(e));
            }
        }
        if (object.extendedMetadata !== undefined &&
            object.extendedMetadata !== null) {
            Object.entries(object.extendedMetadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.extendedMetadata[key] = String(value);
            });
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        if (message.activeActorsCount) {
            obj.activeActorsCount = message.activeActorsCount.map(function (e) {
                return e ? exports.ActiveActorsCount.toJSON(e) : undefined;
            });
        }
        else {
            obj.activeActorsCount = [];
        }
        if (message.registeredComponents) {
            obj.registeredComponents = message.registeredComponents.map(function (e) {
                return e ? exports.RegisteredComponents.toJSON(e) : undefined;
            });
        }
        else {
            obj.registeredComponents = [];
        }
        obj.extendedMetadata = {};
        if (message.extendedMetadata) {
            Object.entries(message.extendedMetadata).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.extendedMetadata[k] = v;
            });
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseGetMetadataResponse);
        message.activeActorsCount = [];
        message.registeredComponents = [];
        message.extendedMetadata = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.activeActorsCount !== undefined &&
            object.activeActorsCount !== null) {
            for (var _i = 0, _a = object.activeActorsCount; _i < _a.length; _i++) {
                var e = _a[_i];
                message.activeActorsCount.push(exports.ActiveActorsCount.fromPartial(e));
            }
        }
        if (object.registeredComponents !== undefined &&
            object.registeredComponents !== null) {
            for (var _b = 0, _c = object.registeredComponents; _b < _c.length; _b++) {
                var e = _c[_b];
                message.registeredComponents.push(exports.RegisteredComponents.fromPartial(e));
            }
        }
        if (object.extendedMetadata !== undefined &&
            object.extendedMetadata !== null) {
            Object.entries(object.extendedMetadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.extendedMetadata[key] = String(value);
                }
            });
        }
        return message;
    }
};
var baseGetMetadataResponse_ExtendedMetadataEntry = {
    key: "",
    value: ""
};
exports.GetMetadataResponse_ExtendedMetadataEntry = {
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
        var message = __assign({}, baseGetMetadataResponse_ExtendedMetadataEntry);
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
        var message = __assign({}, baseGetMetadataResponse_ExtendedMetadataEntry);
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
        var message = __assign({}, baseGetMetadataResponse_ExtendedMetadataEntry);
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
var baseActiveActorsCount = { type: "", count: 0 };
exports.ActiveActorsCount = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.count !== 0) {
            writer.uint32(16).int32(message.count);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseActiveActorsCount);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseActiveActorsCount);
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = "";
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = Number(object.count);
        }
        else {
            message.count = 0;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.type !== undefined && (obj.type = message.type);
        message.count !== undefined && (obj.count = message.count);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseActiveActorsCount);
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = "";
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = object.count;
        }
        else {
            message.count = 0;
        }
        return message;
    }
};
var baseRegisteredComponents = { name: "", type: "", version: "" };
exports.RegisteredComponents = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseRegisteredComponents);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseRegisteredComponents);
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = "";
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        }
        else {
            message.version = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.type !== undefined && (obj.type = message.type);
        message.version !== undefined && (obj.version = message.version);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseRegisteredComponents);
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = "";
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = "";
        }
        return message;
    }
};
var baseSetMetadataRequest = { key: "", value: "" };
exports.SetMetadataRequest = {
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
        var message = __assign({}, baseSetMetadataRequest);
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
        var message = __assign({}, baseSetMetadataRequest);
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
        var message = __assign({}, baseSetMetadataRequest);
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
/** Dapr service provides APIs to user application to access Dapr building blocks. */
exports.DaprService = {
    /** Invokes a method on a remote Dapr app. */
    invokeService: {
        path: "/dapr.proto.runtime.v1.Dapr/InvokeService",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(exports.InvokeServiceRequest.encode(value).finish());
        },
        requestDeserialize: function (value) { return exports.InvokeServiceRequest.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(common_1.InvokeResponse.encode(value).finish());
        },
        responseDeserialize: function (value) { return common_1.InvokeResponse.decode(value); }
    },
    /** Gets the state for a specific key. */
    getState: {
        path: "/dapr.proto.runtime.v1.Dapr/GetState",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(exports.GetStateRequest.encode(value).finish());
        },
        requestDeserialize: function (value) { return exports.GetStateRequest.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(exports.GetStateResponse.encode(value).finish());
        },
        responseDeserialize: function (value) { return exports.GetStateResponse.decode(value); }
    },
    /** Gets a bulk of state items for a list of keys */
    getBulkState: {
        path: "/dapr.proto.runtime.v1.Dapr/GetBulkState",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(exports.GetBulkStateRequest.encode(value).finish());
        },
        requestDeserialize: function (value) { return exports.GetBulkStateRequest.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(exports.GetBulkStateResponse.encode(value).finish());
        },
        responseDeserialize: function (value) { return exports.GetBulkStateResponse.decode(value); }
    },
    /** Saves the state for a specific key. */
    saveState: {
        path: "/dapr.proto.runtime.v1.Dapr/SaveState",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(exports.SaveStateRequest.encode(value).finish());
        },
        requestDeserialize: function (value) { return exports.SaveStateRequest.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(empty_1.Empty.encode(value).finish());
        },
        responseDeserialize: function (value) { return empty_1.Empty.decode(value); }
    },
    /** Deletes the state for a specific key. */
    deleteState: {
        path: "/dapr.proto.runtime.v1.Dapr/DeleteState",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(exports.DeleteStateRequest.encode(value).finish());
        },
        requestDeserialize: function (value) { return exports.DeleteStateRequest.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(empty_1.Empty.encode(value).finish());
        },
        responseDeserialize: function (value) { return empty_1.Empty.decode(value); }
    },
    /** Deletes a bulk of state items for a list of keys */
    deleteBulkState: {
        path: "/dapr.proto.runtime.v1.Dapr/DeleteBulkState",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(exports.DeleteBulkStateRequest.encode(value).finish());
        },
        requestDeserialize: function (value) { return exports.DeleteBulkStateRequest.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(empty_1.Empty.encode(value).finish());
        },
        responseDeserialize: function (value) { return empty_1.Empty.decode(value); }
    },
    /** Executes transactions for a specified store */
    executeStateTransaction: {
        path: "/dapr.proto.runtime.v1.Dapr/ExecuteStateTransaction",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(exports.ExecuteStateTransactionRequest.encode(value).finish());
        },
        requestDeserialize: function (value) {
            return exports.ExecuteStateTransactionRequest.decode(value);
        },
        responseSerialize: function (value) {
            return Buffer.from(empty_1.Empty.encode(value).finish());
        },
        responseDeserialize: function (value) { return empty_1.Empty.decode(value); }
    },
    /** Publishes events to the specific topic. */
    publishEvent: {
        path: "/dapr.proto.runtime.v1.Dapr/PublishEvent",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(exports.PublishEventRequest.encode(value).finish());
        },
        requestDeserialize: function (value) { return exports.PublishEventRequest.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(empty_1.Empty.encode(value).finish());
        },
        responseDeserialize: function (value) { return empty_1.Empty.decode(value); }
    },
    /** Invokes binding data to specific output bindings */
    invokeBinding: {
        path: "/dapr.proto.runtime.v1.Dapr/InvokeBinding",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(exports.InvokeBindingRequest.encode(value).finish());
        },
        requestDeserialize: function (value) { return exports.InvokeBindingRequest.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(exports.InvokeBindingResponse.encode(value).finish());
        },
        responseDeserialize: function (value) { return exports.InvokeBindingResponse.decode(value); }
    },
    /** Gets secrets from secret stores. */
    getSecret: {
        path: "/dapr.proto.runtime.v1.Dapr/GetSecret",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(exports.GetSecretRequest.encode(value).finish());
        },
        requestDeserialize: function (value) { return exports.GetSecretRequest.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(exports.GetSecretResponse.encode(value).finish());
        },
        responseDeserialize: function (value) { return exports.GetSecretResponse.decode(value); }
    },
    /** Gets a bulk of secrets */
    getBulkSecret: {
        path: "/dapr.proto.runtime.v1.Dapr/GetBulkSecret",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(exports.GetBulkSecretRequest.encode(value).finish());
        },
        requestDeserialize: function (value) { return exports.GetBulkSecretRequest.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(exports.GetBulkSecretResponse.encode(value).finish());
        },
        responseDeserialize: function (value) { return exports.GetBulkSecretResponse.decode(value); }
    },
    /** Register an actor timer. */
    registerActorTimer: {
        path: "/dapr.proto.runtime.v1.Dapr/RegisterActorTimer",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(exports.RegisterActorTimerRequest.encode(value).finish());
        },
        requestDeserialize: function (value) {
            return exports.RegisterActorTimerRequest.decode(value);
        },
        responseSerialize: function (value) {
            return Buffer.from(empty_1.Empty.encode(value).finish());
        },
        responseDeserialize: function (value) { return empty_1.Empty.decode(value); }
    },
    /** Unregister an actor timer. */
    unregisterActorTimer: {
        path: "/dapr.proto.runtime.v1.Dapr/UnregisterActorTimer",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(exports.UnregisterActorTimerRequest.encode(value).finish());
        },
        requestDeserialize: function (value) {
            return exports.UnregisterActorTimerRequest.decode(value);
        },
        responseSerialize: function (value) {
            return Buffer.from(empty_1.Empty.encode(value).finish());
        },
        responseDeserialize: function (value) { return empty_1.Empty.decode(value); }
    },
    /** Register an actor reminder. */
    registerActorReminder: {
        path: "/dapr.proto.runtime.v1.Dapr/RegisterActorReminder",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(exports.RegisterActorReminderRequest.encode(value).finish());
        },
        requestDeserialize: function (value) {
            return exports.RegisterActorReminderRequest.decode(value);
        },
        responseSerialize: function (value) {
            return Buffer.from(empty_1.Empty.encode(value).finish());
        },
        responseDeserialize: function (value) { return empty_1.Empty.decode(value); }
    },
    /** Unregister an actor reminder. */
    unregisterActorReminder: {
        path: "/dapr.proto.runtime.v1.Dapr/UnregisterActorReminder",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(exports.UnregisterActorReminderRequest.encode(value).finish());
        },
        requestDeserialize: function (value) {
            return exports.UnregisterActorReminderRequest.decode(value);
        },
        responseSerialize: function (value) {
            return Buffer.from(empty_1.Empty.encode(value).finish());
        },
        responseDeserialize: function (value) { return empty_1.Empty.decode(value); }
    },
    /** Gets the state for a specific actor. */
    getActorState: {
        path: "/dapr.proto.runtime.v1.Dapr/GetActorState",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(exports.GetActorStateRequest.encode(value).finish());
        },
        requestDeserialize: function (value) { return exports.GetActorStateRequest.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(exports.GetActorStateResponse.encode(value).finish());
        },
        responseDeserialize: function (value) { return exports.GetActorStateResponse.decode(value); }
    },
    /** Executes state transactions for a specified actor */
    executeActorStateTransaction: {
        path: "/dapr.proto.runtime.v1.Dapr/ExecuteActorStateTransaction",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(exports.ExecuteActorStateTransactionRequest.encode(value).finish());
        },
        requestDeserialize: function (value) {
            return exports.ExecuteActorStateTransactionRequest.decode(value);
        },
        responseSerialize: function (value) {
            return Buffer.from(empty_1.Empty.encode(value).finish());
        },
        responseDeserialize: function (value) { return empty_1.Empty.decode(value); }
    },
    /** InvokeActor calls a method on an actor. */
    invokeActor: {
        path: "/dapr.proto.runtime.v1.Dapr/InvokeActor",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(exports.InvokeActorRequest.encode(value).finish());
        },
        requestDeserialize: function (value) { return exports.InvokeActorRequest.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(exports.InvokeActorResponse.encode(value).finish());
        },
        responseDeserialize: function (value) { return exports.InvokeActorResponse.decode(value); }
    },
    /** Gets metadata of the sidecar */
    getMetadata: {
        path: "/dapr.proto.runtime.v1.Dapr/GetMetadata",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(empty_1.Empty.encode(value).finish());
        },
        requestDeserialize: function (value) { return empty_1.Empty.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(exports.GetMetadataResponse.encode(value).finish());
        },
        responseDeserialize: function (value) { return exports.GetMetadataResponse.decode(value); }
    },
    /** Sets value in extended metadata of the sidecar */
    setMetadata: {
        path: "/dapr.proto.runtime.v1.Dapr/SetMetadata",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(exports.SetMetadataRequest.encode(value).finish());
        },
        requestDeserialize: function (value) { return exports.SetMetadataRequest.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(empty_1.Empty.encode(value).finish());
        },
        responseDeserialize: function (value) { return empty_1.Empty.decode(value); }
    },
    /** Shutdown the sidecar */
    shutdown: {
        path: "/dapr.proto.runtime.v1.Dapr/Shutdown",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(empty_1.Empty.encode(value).finish());
        },
        requestDeserialize: function (value) { return empty_1.Empty.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(empty_1.Empty.encode(value).finish());
        },
        responseDeserialize: function (value) { return empty_1.Empty.decode(value); }
    }
};
exports.DaprClient = grpc_js_1.makeGenericClientConstructor(exports.DaprService, "dapr.proto.runtime.v1.Dapr");
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
