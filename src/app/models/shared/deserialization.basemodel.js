"use strict";
var serialize_1 = require("cerialize/dist/serialize");
serialize_1.DeserializeKeysFrom(serialize_1.UnderscoreCase);
serialize_1.SerializeKeysTo(serialize_1.UnderscoreCase);
//https://github.com/weichx/cerialize
var Deserialization = (function () {
    function Deserialization() {
    }
    Deserialization.prototype.deserialize = function (json) {
        return serialize_1.DeserializeInto(json, this.constructor, this);
    };
    Deserialization.prototype.deserializeGeneric = function (json, clazz) {
        //Each Generic should implement this
    };
    Deserialization.prototype.serialize = function () {
        return serialize_1.Serialize(this);
    };
    return Deserialization;
}());
exports.Deserialization = Deserialization;
