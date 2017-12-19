"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var PasswordComponent = (function () {
    function PasswordComponent(authService) {
        this.authService = authService;
        this.user = {
            password: null,
            password_confirmation: null
        };
    }
    PasswordComponent.prototype.save = function (e) {
        e.preventDefault();
        if (this.user.password && this.user.password === this.user.password_confirmation) {
            this.authService.builder().changePassword(this.user)
                .then(function () {
                window.Materialize.toast('Salvo com sucesso', 3000);
            });
        }
        else {
            window.Materialize.toast('Verifique a senha', 3000, 'red');
        }
    };
    PasswordComponent = __decorate([
        core_1.Component({
            selector: 'app-password',
            templateUrl: 'password.component.html'
        })
    ], PasswordComponent);
    return PasswordComponent;
}());
exports.PasswordComponent = PasswordComponent;
