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
exports.AppCallbackClient = exports.AppCallbackService = exports.ListInputBindingsResponse = exports.TopicSubscription_MetadataEntry = exports.TopicSubscription = exports.ListTopicSubscriptionsResponse = exports.BindingEventResponse = exports.BindingEventRequest_MetadataEntry = exports.BindingEventRequest = exports.TopicEventResponse = exports.TopicEventRequest = exports.bindingEventResponse_BindingEventConcurrencyToJSON = exports.bindingEventResponse_BindingEventConcurrencyFromJSON = exports.BindingEventResponse_BindingEventConcurrency = exports.topicEventResponse_TopicEventResponseStatusToJSON = exports.topicEventResponse_TopicEventResponseStatusFromJSON = exports.TopicEventResponse_TopicEventResponseStatus = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var grpc_js_1 = require("@grpc/grpc-js");
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var common_1 = require("../../../../dapr/proto/common/v1/common");
var empty_1 = require("../../../../google/protobuf/empty");
exports.protobufPackage = "dapr.proto.runtime.v1";
/** TopicEventResponseStatus allows apps to have finer control over handling of the message. */
var TopicEventResponse_TopicEventResponseStatus;
(function (TopicEventResponse_TopicEventResponseStatus) {
    /** SUCCESS - SUCCESS is the default behavior: message is acknowledged and not retried or logged. */
    TopicEventResponse_TopicEventResponseStatus[TopicEventResponse_TopicEventResponseStatus["SUCCESS"] = 0] = "SUCCESS";
    /** RETRY - RETRY status signals Dapr to retry the message as part of an expected scenario (no warning is logged). */
    TopicEventResponse_TopicEventResponseStatus[TopicEventResponse_TopicEventResponseStatus["RETRY"] = 1] = "RETRY";
    /** DROP - DROP status signals Dapr to drop the message as part of an unexpected scenario (warning is logged). */
    TopicEventResponse_TopicEventResponseStatus[TopicEventResponse_TopicEventResponseStatus["DROP"] = 2] = "DROP";
    TopicEventResponse_TopicEventResponseStatus[TopicEventResponse_TopicEventResponseStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TopicEventResponse_TopicEventResponseStatus = exports.TopicEventResponse_TopicEventResponseStatus || (exports.TopicEventResponse_TopicEventResponseStatus = {}));
function topicEventResponse_TopicEventResponseStatusFromJSON(object) {
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
exports.topicEventResponse_TopicEventResponseStatusFromJSON = topicEventResponse_TopicEventResponseStatusFromJSON;
function topicEventResponse_TopicEventResponseStatusToJSON(object) {
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
exports.topicEventResponse_TopicEventResponseStatusToJSON = topicEventResponse_TopicEventResponseStatusToJSON;
/** BindingEventConcurrency is the kind of concurrency */
var BindingEventResponse_BindingEventConcurrency;
(function (BindingEventResponse_BindingEventConcurrency) {
    /** SEQUENTIAL - SEQUENTIAL sends data to output bindings specified in "to" sequentially. */
    BindingEventResponse_BindingEventConcurrency[BindingEventResponse_BindingEventConcurrency["SEQUENTIAL"] = 0] = "SEQUENTIAL";
    /** PARALLEL - PARALLEL sends data to output bindings specified in "to" in parallel. */
    BindingEventResponse_BindingEventConcurrency[BindingEventResponse_BindingEventConcurrency["PARALLEL"] = 1] = "PARALLEL";
    BindingEventResponse_BindingEventConcurrency[BindingEventResponse_BindingEventConcurrency["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BindingEventResponse_BindingEventConcurrency = exports.BindingEventResponse_BindingEventConcurrency || (exports.BindingEventResponse_BindingEventConcurrency = {}));
function bindingEventResponse_BindingEventConcurrencyFromJSON(object) {
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
exports.bindingEventResponse_BindingEventConcurrencyFromJSON = bindingEventResponse_BindingEventConcurrencyFromJSON;
function bindingEventResponse_BindingEventConcurrencyToJSON(object) {
    switch (object) {
        case BindingEventResponse_BindingEventConcurrency.SEQUENTIAL:
            return "SEQUENTIAL";
        case BindingEventResponse_BindingEventConcurrency.PARALLEL:
            return "PARALLEL";
        default:
            return "UNKNOWN";
    }
}
exports.bindingEventResponse_BindingEventConcurrencyToJSON = bindingEventResponse_BindingEventConcurrencyToJSON;
var baseTopicEventRequest = {
    id: "",
    source: "",
    type: "",
    specVersion: "",
    dataContentType: "",
    topic: "",
    pubsubName: ""
};
exports.TopicEventRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseTopicEventRequest);
        message.data = Buffer.alloc(0);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.data = reader.bytes();
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
    fromJSON: function (object) {
        var message = __assign({}, baseTopicEventRequest);
        message.data = Buffer.alloc(0);
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.source !== undefined && object.source !== null) {
            message.source = String(object.source);
        }
        else {
            message.source = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = "";
        }
        if (object.specVersion !== undefined && object.specVersion !== null) {
            message.specVersion = String(object.specVersion);
        }
        else {
            message.specVersion = "";
        }
        if (object.dataContentType !== undefined &&
            object.dataContentType !== null) {
            message.dataContentType = String(object.dataContentType);
        }
        else {
            message.dataContentType = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = Buffer.from(bytesFromBase64(object.data));
        }
        if (object.topic !== undefined && object.topic !== null) {
            message.topic = String(object.topic);
        }
        else {
            message.topic = "";
        }
        if (object.pubsubName !== undefined && object.pubsubName !== null) {
            message.pubsubName = String(object.pubsubName);
        }
        else {
            message.pubsubName = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.source !== undefined && (obj.source = message.source);
        message.type !== undefined && (obj.type = message.type);
        message.specVersion !== undefined &&
            (obj.specVersion = message.specVersion);
        message.dataContentType !== undefined &&
            (obj.dataContentType = message.dataContentType);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
        message.topic !== undefined && (obj.topic = message.topic);
        message.pubsubName !== undefined && (obj.pubsubName = message.pubsubName);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseTopicEventRequest);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.source !== undefined && object.source !== null) {
            message.source = object.source;
        }
        else {
            message.source = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = "";
        }
        if (object.specVersion !== undefined && object.specVersion !== null) {
            message.specVersion = object.specVersion;
        }
        else {
            message.specVersion = "";
        }
        if (object.dataContentType !== undefined &&
            object.dataContentType !== null) {
            message.dataContentType = object.dataContentType;
        }
        else {
            message.dataContentType = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = Buffer.alloc(0);
        }
        if (object.topic !== undefined && object.topic !== null) {
            message.topic = object.topic;
        }
        else {
            message.topic = "";
        }
        if (object.pubsubName !== undefined && object.pubsubName !== null) {
            message.pubsubName = object.pubsubName;
        }
        else {
            message.pubsubName = "";
        }
        return message;
    }
};
var baseTopicEventResponse = { status: 0 };
exports.TopicEventResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseTopicEventResponse);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseTopicEventResponse);
        if (object.status !== undefined && object.status !== null) {
            message.status = topicEventResponse_TopicEventResponseStatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.status !== undefined &&
            (obj.status = topicEventResponse_TopicEventResponseStatusToJSON(message.status));
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseTopicEventResponse);
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        return message;
    }
};
var baseBindingEventRequest = { name: "" };
exports.BindingEventRequest = {
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
            exports.BindingEventRequest_MetadataEntry.encode({ key: key, value: value }, writer.uint32(26).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseBindingEventRequest);
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
                    var entry3 = exports.BindingEventRequest_MetadataEntry.decode(reader, reader.uint32());
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
        var message = __assign({}, baseBindingEventRequest);
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
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseBindingEventRequest);
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
        return message;
    }
};
var baseBindingEventRequest_MetadataEntry = { key: "", value: "" };
exports.BindingEventRequest_MetadataEntry = {
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
        var message = __assign({}, baseBindingEventRequest_MetadataEntry);
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
        var message = __assign({}, baseBindingEventRequest_MetadataEntry);
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
        var message = __assign({}, baseBindingEventRequest_MetadataEntry);
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
var baseBindingEventResponse = {
    storeName: "",
    to: "",
    concurrency: 0
};
exports.BindingEventResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.storeName !== "") {
            writer.uint32(10).string(message.storeName);
        }
        for (var _i = 0, _a = message.states; _i < _a.length; _i++) {
            var v = _a[_i];
            common_1.StateItem.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.to; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.uint32(26).string(v);
        }
        if (message.data.length !== 0) {
            writer.uint32(34).bytes(message.data);
        }
        if (message.concurrency !== 0) {
            writer.uint32(40).int32(message.concurrency);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseBindingEventResponse);
        message.states = [];
        message.to = [];
        message.data = Buffer.alloc(0);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storeName = reader.string();
                    break;
                case 2:
                    message.states.push(common_1.StateItem.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.to.push(reader.string());
                    break;
                case 4:
                    message.data = reader.bytes();
                    break;
                case 5:
                    message.concurrency = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseBindingEventResponse);
        message.states = [];
        message.to = [];
        message.data = Buffer.alloc(0);
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
        if (object.to !== undefined && object.to !== null) {
            for (var _b = 0, _c = object.to; _b < _c.length; _b++) {
                var e = _c[_b];
                message.to.push(String(e));
            }
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = Buffer.from(bytesFromBase64(object.data));
        }
        if (object.concurrency !== undefined && object.concurrency !== null) {
            message.concurrency = bindingEventResponse_BindingEventConcurrencyFromJSON(object.concurrency);
        }
        else {
            message.concurrency = 0;
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
        if (message.to) {
            obj.to = message.to.map(function (e) { return e; });
        }
        else {
            obj.to = [];
        }
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
        message.concurrency !== undefined &&
            (obj.concurrency = bindingEventResponse_BindingEventConcurrencyToJSON(message.concurrency));
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseBindingEventResponse);
        message.states = [];
        message.to = [];
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
        if (object.to !== undefined && object.to !== null) {
            for (var _b = 0, _c = object.to; _b < _c.length; _b++) {
                var e = _c[_b];
                message.to.push(e);
            }
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = Buffer.alloc(0);
        }
        if (object.concurrency !== undefined && object.concurrency !== null) {
            message.concurrency = object.concurrency;
        }
        else {
            message.concurrency = 0;
        }
        return message;
    }
};
var baseListTopicSubscriptionsResponse = {};
exports.ListTopicSubscriptionsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        for (var _i = 0, _a = message.subscriptions; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.TopicSubscription.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseListTopicSubscriptionsResponse);
        message.subscriptions = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subscriptions.push(exports.TopicSubscription.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseListTopicSubscriptionsResponse);
        message.subscriptions = [];
        if (object.subscriptions !== undefined && object.subscriptions !== null) {
            for (var _i = 0, _a = object.subscriptions; _i < _a.length; _i++) {
                var e = _a[_i];
                message.subscriptions.push(exports.TopicSubscription.fromJSON(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        if (message.subscriptions) {
            obj.subscriptions = message.subscriptions.map(function (e) {
                return e ? exports.TopicSubscription.toJSON(e) : undefined;
            });
        }
        else {
            obj.subscriptions = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseListTopicSubscriptionsResponse);
        message.subscriptions = [];
        if (object.subscriptions !== undefined && object.subscriptions !== null) {
            for (var _i = 0, _a = object.subscriptions; _i < _a.length; _i++) {
                var e = _a[_i];
                message.subscriptions.push(exports.TopicSubscription.fromPartial(e));
            }
        }
        return message;
    }
};
var baseTopicSubscription = { pubsubName: "", topic: "" };
exports.TopicSubscription = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.pubsubName !== "") {
            writer.uint32(10).string(message.pubsubName);
        }
        if (message.topic !== "") {
            writer.uint32(18).string(message.topic);
        }
        Object.entries(message.metadata).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.TopicSubscription_MetadataEntry.encode({ key: key, value: value }, writer.uint32(26).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseTopicSubscription);
        message.metadata = {};
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
                    var entry3 = exports.TopicSubscription_MetadataEntry.decode(reader, reader.uint32());
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
        var message = __assign({}, baseTopicSubscription);
        message.metadata = {};
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
        var message = __assign({}, baseTopicSubscription);
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
var baseTopicSubscription_MetadataEntry = { key: "", value: "" };
exports.TopicSubscription_MetadataEntry = {
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
        var message = __assign({}, baseTopicSubscription_MetadataEntry);
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
        var message = __assign({}, baseTopicSubscription_MetadataEntry);
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
        var message = __assign({}, baseTopicSubscription_MetadataEntry);
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
var baseListInputBindingsResponse = { bindings: "" };
exports.ListInputBindingsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        for (var _i = 0, _a = message.bindings; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseListInputBindingsResponse);
        message.bindings = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseListInputBindingsResponse);
        message.bindings = [];
        if (object.bindings !== undefined && object.bindings !== null) {
            for (var _i = 0, _a = object.bindings; _i < _a.length; _i++) {
                var e = _a[_i];
                message.bindings.push(String(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        if (message.bindings) {
            obj.bindings = message.bindings.map(function (e) { return e; });
        }
        else {
            obj.bindings = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseListInputBindingsResponse);
        message.bindings = [];
        if (object.bindings !== undefined && object.bindings !== null) {
            for (var _i = 0, _a = object.bindings; _i < _a.length; _i++) {
                var e = _a[_i];
                message.bindings.push(e);
            }
        }
        return message;
    }
};
/**
 * AppCallback V1 allows user application to interact with Dapr runtime.
 * User application needs to implement AppCallback service if it needs to
 * receive message from dapr runtime.
 */
exports.AppCallbackService = {
    /** Invokes service method with InvokeRequest. */
    onInvoke: {
        path: "/dapr.proto.runtime.v1.AppCallback/OnInvoke",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(common_1.InvokeRequest.encode(value).finish());
        },
        requestDeserialize: function (value) { return common_1.InvokeRequest.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(common_1.InvokeResponse.encode(value).finish());
        },
        responseDeserialize: function (value) { return common_1.InvokeResponse.decode(value); }
    },
    /** Lists all topics subscribed by this app. */
    listTopicSubscriptions: {
        path: "/dapr.proto.runtime.v1.AppCallback/ListTopicSubscriptions",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(empty_1.Empty.encode(value).finish());
        },
        requestDeserialize: function (value) { return empty_1.Empty.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(exports.ListTopicSubscriptionsResponse.encode(value).finish());
        },
        responseDeserialize: function (value) {
            return exports.ListTopicSubscriptionsResponse.decode(value);
        }
    },
    /** Subscribes events from Pubsub */
    onTopicEvent: {
        path: "/dapr.proto.runtime.v1.AppCallback/OnTopicEvent",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(exports.TopicEventRequest.encode(value).finish());
        },
        requestDeserialize: function (value) { return exports.TopicEventRequest.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(exports.TopicEventResponse.encode(value).finish());
        },
        responseDeserialize: function (value) { return exports.TopicEventResponse.decode(value); }
    },
    /** Lists all input bindings subscribed by this app. */
    listInputBindings: {
        path: "/dapr.proto.runtime.v1.AppCallback/ListInputBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(empty_1.Empty.encode(value).finish());
        },
        requestDeserialize: function (value) { return empty_1.Empty.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(exports.ListInputBindingsResponse.encode(value).finish());
        },
        responseDeserialize: function (value) {
            return exports.ListInputBindingsResponse.decode(value);
        }
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
        requestSerialize: function (value) {
            return Buffer.from(exports.BindingEventRequest.encode(value).finish());
        },
        requestDeserialize: function (value) { return exports.BindingEventRequest.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(exports.BindingEventResponse.encode(value).finish());
        },
        responseDeserialize: function (value) { return exports.BindingEventResponse.decode(value); }
    }
};
exports.AppCallbackClient = grpc_js_1.makeGenericClientConstructor(exports.AppCallbackService, "dapr.proto.runtime.v1.AppCallback");
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
