var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
var UserService = (function () {
    function UserService(logger, http) {
        this.logger = logger;
        this.http = http;
        this.isLoggedIn = false;
        this.userRegUrl = 'isUserReg';
    }
    UserService.prototype.isUserReg = function (name, password) {
        this.logger.log("checking weather the user has registered:" + name);
        return this.http.post(this.userRegUrl, JSON.stringify({ name: name, password: password }))
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        console.log('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return UserService;
}());
UserService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [LoggerService,
        Http])
], UserService);
export { UserService };
//# sourceMappingURL=E:/Sonicwall/project/Sonicwall_demo/Sonicwall_demo/typescript-angular2-client/app/services/users/user.service.js.map