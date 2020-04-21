"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var order_service_1 = require("../Service/order.service");
var forms_1 = require("@angular/forms");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var global_1 = require("../Shared/global");
var OrderComponent = /** @class */ (function () {
    function OrderComponent(fb, _orderService) {
        this.fb = fb;
        this._orderService = _orderService;
        this.indLoading = false;
    }
    OrderComponent.prototype.ngOnInit = function () {
        this.orderFrm = this.fb.group({
            OrderId: [''],
            FirstName: ['', forms_1.Validators.required],
            LastName: [''],
            ProductId: [''],
            ProductName: [''],
            Price: [''],
            OrderDate: [''],
            CustomerId: [''],
            ProductRating: [''],
            Quantity: [''],
        });
        this.LoadOrders();
    };
    OrderComponent.prototype.LoadOrders = function () {
        var _this = this;
        this.indLoading = true;
        this._orderService.get(global_1.Global.BASE_ORDER_ENDPOINT)
            .subscribe(function (orders) { _this.orders = orders; _this.indLoading = false; }, function (error) { return _this.msg = error; });
    };
    __decorate([
        core_1.ViewChild('modal'),
        __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
    ], OrderComponent.prototype, "modal", void 0);
    OrderComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/Components/order.component.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, order_service_1.OrderService])
    ], OrderComponent);
    return OrderComponent;
}());
exports.OrderComponent = OrderComponent;
//# sourceMappingURL=order.component.js.map