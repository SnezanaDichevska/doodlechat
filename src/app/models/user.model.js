"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var deserialization_basemodel_1 = require("./shared/deserialization.basemodel");
var cerialize_1 = require("cerialize");
var User = (function (_super) {
    __extends(User, _super);
    function User(email, password, name, photoUrl) {
        _super.call(this);
        if (email)
            this.email = email;
        if (password)
            this.password = password;
        if (name)
            this.name = name;
        if (photoUrl)
            this.photoUrl = photoUrl;
    }
    User.prototype.saveInStorage = function () {
        localStorage.setItem('currentUser', JSON.stringify(this.serialize()));
    };
    User.prototype.loadFromStorage = function () {
        var json = JSON.parse(localStorage.getItem('currentUser'));
        this.deserialize(json);
    };
    User.prototype.removeFromStorage = function () {
        localStorage.removeItem('currentUser');
    };
    __decorate([
        cerialize_1.autoserializeAs('displayName')
    ], User.prototype, "name", void 0);
    __decorate([
        cerialize_1.autoserializeAs('photoUrl')
    ], User.prototype, "photoUrl", void 0);
    __decorate([
        cerialize_1.autoserialize
    ], User.prototype, "email", void 0);
    __decorate([
        cerialize_1.autoserialize
    ], User.prototype, "password", void 0);
    __decorate([
        cerialize_1.autoserialize
    ], User.prototype, "uid", void 0);
    return User;
}(deserialization_basemodel_1.Deserialization));
exports.User = User;
