var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { datas } from '../mock-data';
var DonutComponent = (function () {
    function DonutComponent() {
        this.chart = {
            type: 'Pie',
            data: datas['simpleDonutData'],
            options: datas['simpleDonutData'].options
        };
    }
    return DonutComponent;
}());
DonutComponent = __decorate([
    Component({
        moduleId: module.id,
        templateUrl: './donut.html'
    }),
    __metadata("design:paramtypes", [])
], DonutComponent);
export { DonutComponent };
//# sourceMappingURL=E:/Sonicwall/project/Sonicwall_demo/Sonicwall_demo/typescript-angular2-client/app/admin/pages/charts/donut/donut.component.js.map