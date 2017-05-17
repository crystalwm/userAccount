"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BorderedTableComponent = (function () {
    function BorderedTableComponent() {
        this.metricsTableData = [
            {
                browser: 'Google Chrome', visits: 10392, isVisitsUp: true,
                purchases: 4214, isPurchasesUp: true, percent: 45, isPercentUp: true
            },
            {
                browser: 'Mozilla Firefox', visits: 7873, isVisitsUp: true,
                purchases: 3031, isPurchasesUp: false, percent: 28, isPercentUp: true
            },
            {
                browser: 'Internet Explorer', visits: 5890, isVisitsUp: false,
                purchases: 2102, isPurchasesUp: false, percent: 17, isPercentUp: false
            },
            {
                browser: 'Safari', visits: 4001, isVisitsUp: false,
                purchases: 1001, isPurchasesUp: false, percent: 14, isPercentUp: true
            },
            {
                browser: 'Opera', visits: 1833, isVisitsUp: true,
                purchases: 83, isPurchasesUp: true, percent: 5, isPercentUp: true
            }
        ];
    }
    return BorderedTableComponent;
}());
BorderedTableComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'bordered-table',
        templateUrl: './borderedTable.html'
    })
], BorderedTableComponent);
exports.BorderedTableComponent = BorderedTableComponent;
//# sourceMappingURL=E:/Sonicwall/project/Sonicwall_demo/Sonicwall_demo/typescript-angular2-client/app/admin/pages/tables/borderedTable/borderedTable.component.js.map