"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var environment_1 = require('../../../environments/environment');
var LoginComponent = (function () {
    function LoginComponent(AuthService, router) {
        this.AuthService = AuthService;
        this.router = router;
        this.user = {
            username: null,
            password: null,
        };
    }
    LoginComponent.prototype.login = function (e) {
        var _this = this;
        e.preventDefault();
        if (!this.user.username || !this.user.password) {
            window.Materialize.toast('Preencha o formulário', 3000, 'red');
            return;
        }
        var data = {
            grant_type: 'password',
            client_id: environment_1.environment.client_id,
            client_secret: environment_1.environment.client_secret,
            username: this.user.username,
            password: this.user.password,
            scope: ''
        };
        this.AuthService.login(data).then(function (res) {
            document.cookie = "token=" + res.access_token + "; expires=" + res.expires_in;
            _this.AuthService.setAccessToken();
            _this.router.navigate(['/']);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styles: ["\n        #loginForm {\n            margin-top: 50px;\n        }\n    "]
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
