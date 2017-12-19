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
var core_1 = require('@angular/core');
var app_http_service_1 = require('../../app-http.service');
var environment_1 = require('../../../environments/environment');
require('rxjs/add/operator/toPromise');
var AuthService = (function (_super) {
    __extends(AuthService, _super);
    function AuthService() {
        _super.apply(this, arguments);
        this.eventEmitter = new core_1.EventEmitter();
    }
    AuthService.prototype.builder = function (resource) {
        if (resource === void 0) { resource = ''; }
        return _super.prototype.builder.call(this, 'auth' + resource);
    };
    AuthService.prototype.getUser = function () {
        return this.builder('/me')
            .list();
    };
    AuthService.prototype.changePassword = function (data) {
        var observable = this.http.post(this.url + '/change-password', data, { headers: this.header });
        return this.toPromise(observable);
    };
    AuthService.prototype.editProfile = function (data) {
        var observable = this.http.post(this.url + '/edit-profile', data, { headers: this.header });
        return this.toPromise(observable);
    };
    AuthService.prototype.login = function (data) {
        var _this = this;
        var observable = this.http.post(environment_1.environment.server_url + '/oauth/token', data);
        return this.toPromise(observable).then(function (res) {
            _this.eventEmitter.emit();
            return res;
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        var observable = this.http.get(this.url + '/logout', { headers: this.header });
        return this.toPromise(observable).then(function (res) {
            _this.eventEmitter.emit();
            return res;
        });
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}(app_http_service_1.AppHttpService));
exports.AuthService = AuthService;
