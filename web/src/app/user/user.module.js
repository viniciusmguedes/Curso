"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var password_component_1 = require('../user/components/password.component');
var profile_component_1 = require('../user/components/profile.component');
var login_component_1 = require('../user/components/login.component');
var logout_component_1 = require('../user/components/logout.component');
var auth_service_1 = require('./services/auth.service');
var appRoutes = [
    { path: 'password', component: password_component_1.PasswordComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'logout', component: logout_component_1.LogoutComponent },
];
var UserModule = (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(appRoutes)
            ],
            declarations: [
                password_component_1.PasswordComponent,
                profile_component_1.ProfileComponent,
                login_component_1.LoginComponent,
                logout_component_1.LogoutComponent,
            ],
            providers: [
                auth_service_1.AuthService,
            ]
        })
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;
