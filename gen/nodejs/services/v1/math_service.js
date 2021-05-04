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
exports.MathServiceClient = exports.MathServiceService = exports.MathResponse = exports.BasicMathRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var grpc_js_1 = require("@grpc/grpc-js");
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "services.v1";
var baseBasicMathRequest = { num1: 0, num2: 0 };
exports.BasicMathRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.num1 !== 0) {
            writer.uint32(9).double(message.num1);
        }
        if (message.num2 !== 0) {
            writer.uint32(17).double(message.num2);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseBasicMathRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseBasicMathRequest);
        if (object.num1 !== undefined && object.num1 !== null) {
            message.num1 = Number(object.num1);
        }
        else {
            message.num1 = 0;
        }
        if (object.num2 !== undefined && object.num2 !== null) {
            message.num2 = Number(object.num2);
        }
        else {
            message.num2 = 0;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.num1 !== undefined && (obj.num1 = message.num1);
        message.num2 !== undefined && (obj.num2 = message.num2);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseBasicMathRequest);
        if (object.num1 !== undefined && object.num1 !== null) {
            message.num1 = object.num1;
        }
        else {
            message.num1 = 0;
        }
        if (object.num2 !== undefined && object.num2 !== null) {
            message.num2 = object.num2;
        }
        else {
            message.num2 = 0;
        }
        return message;
    }
};
var baseMathResponse = { result: 0 };
exports.MathResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.result !== 0) {
            writer.uint32(9).double(message.result);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMathResponse);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseMathResponse);
        if (object.result !== undefined && object.result !== null) {
            message.result = Number(object.result);
        }
        else {
            message.result = 0;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined && (obj.result = message.result);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseMathResponse);
        if (object.result !== undefined && object.result !== null) {
            message.result = object.result;
        }
        else {
            message.result = 0;
        }
        return message;
    }
};
exports.MathServiceService = {
    add: {
        path: "/services.v1.MathService/Add",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(exports.BasicMathRequest.encode(value).finish());
        },
        requestDeserialize: function (value) { return exports.BasicMathRequest.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(exports.MathResponse.encode(value).finish());
        },
        responseDeserialize: function (value) { return exports.MathResponse.decode(value); }
    },
    subtract: {
        path: "/services.v1.MathService/Subtract",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(exports.BasicMathRequest.encode(value).finish());
        },
        requestDeserialize: function (value) { return exports.BasicMathRequest.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(exports.MathResponse.encode(value).finish());
        },
        responseDeserialize: function (value) { return exports.MathResponse.decode(value); }
    },
    multiply: {
        path: "/services.v1.MathService/Multiply",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(exports.BasicMathRequest.encode(value).finish());
        },
        requestDeserialize: function (value) { return exports.BasicMathRequest.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(exports.MathResponse.encode(value).finish());
        },
        responseDeserialize: function (value) { return exports.MathResponse.decode(value); }
    },
    divide: {
        path: "/services.v1.MathService/Divide",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(exports.BasicMathRequest.encode(value).finish());
        },
        requestDeserialize: function (value) { return exports.BasicMathRequest.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(exports.MathResponse.encode(value).finish());
        },
        responseDeserialize: function (value) { return exports.MathResponse.decode(value); }
    }
};
exports.MathServiceClient = grpc_js_1.makeGenericClientConstructor(exports.MathServiceService, "services.v1.MathService");
if (minimal_1["default"].util.Long !== long_1["default"]) {
    minimal_1["default"].util.Long = long_1["default"];
    minimal_1["default"].configure();
}
