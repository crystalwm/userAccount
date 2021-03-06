var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, Input } from '@angular/core';
import * as Chartist from 'chartist';
var WmChartistComponent = (function () {
    function WmChartistComponent(element) {
        this.element = element.nativeElement;
    }
    WmChartistComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.type || !this.data) {
            Promise.reject("Expected at least type and data.");
        }
        return this.renderChart().then(function (chart) {
            if (_this.events !== undefined) {
                _this.bindEvents(chart);
            }
            return chart;
        });
    };
    WmChartistComponent.prototype.ngOnChanges = function (changes) {
        this.update(changes);
    };
    WmChartistComponent.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.detach();
        }
    };
    WmChartistComponent.prototype.renderChart = function () {
        var _this = this;
        var promises = [
            this.type,
            this.element,
            this.data,
            this.options,
            this.responsiveOptions
        ];
        return Promise.all(promises).then(function (values) {
            var type = values[0], args = values.slice(1);
            if (!(type in Chartist)) {
                throw new Error(type + " is not a valid chart type");
            }
            _this.chart = (_a = Chartist)[type].apply(_a, args);
            return _this.chart;
            var _a;
        });
    };
    WmChartistComponent.prototype.update = function (changes) {
        if (!this.chart || 'type' in changes) {
            this.renderChart();
        }
        else {
            if (changes['data']) {
                this.data = changes['data'].currentValue;
            }
            if (changes['options']) {
                this.options = changes['options'].currentValue;
            }
            this.chart.update(this.data, this.options);
        }
    };
    WmChartistComponent.prototype.bindEvents = function (chart) {
        for (var _i = 0, _a = Object.keys(this.events); _i < _a.length; _i++) {
            var event_1 = _a[_i];
            chart.on(event_1, this.events[event_1]);
        }
    };
    return WmChartistComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], WmChartistComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], WmChartistComponent.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], WmChartistComponent.prototype, "options", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], WmChartistComponent.prototype, "responsiveOptions", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], WmChartistComponent.prototype, "events", void 0);
WmChartistComponent = __decorate([
    Component({
        selector: 'wm-chartist',
        template: '<ng-content></ng-content>'
    }),
    __metadata("design:paramtypes", [ElementRef])
], WmChartistComponent);
export { WmChartistComponent };
//# sourceMappingURL=E:/Sonicwall/project/Sonicwall_demo/Sonicwall_demo/typescript-angular2-client/app/admin/theme/components/wmChartist/wmChartist.component.js.map