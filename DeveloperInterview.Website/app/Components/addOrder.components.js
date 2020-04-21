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
var addOrderComponent = /** @class */ (function () {
    function addOrderComponent(fb, _orderService) {
        this.fb = fb;
        this._orderService = _orderService;
        this.indLoading = false;
    }
    addOrderComponent.prototype.ngOnInit = function () {
        this.LastName = new forms_1.FormControl('LastName');
        this.FirstName = new forms_1.FormControl('FirstName');
        this.addedProducts = [];
        this.orderFrm = this.fb.group({
            FirstName: ['', forms_1.Validators.required],
            LastName: ['', forms_1.Validators.required]
        });
        this.LoadProducts();
    };
    addOrderComponent.prototype.addOrder = function () {
        this.SetControlsState(true);
        this.modalTitle = "Add New Order";
        this.modalBtnTitle = "Add";
        this.orderFrm.reset();
        this.modal.open();
    };
    addOrderComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.orderFrm.enable() : this.orderFrm.disable();
    };
    addOrderComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.msg = "";
        this._orderService.post(global_1.Global.BASE_ORDER_ENDPOINT, formData._value, this.addedProducts).subscribe(function (data) {
            if (data == 1) //Success
             {
                _this.msg = "Data successfully added.";
            }
            else {
                _this.msg = "There is some issue in saving records, please contact to system administrator!";
            }
            _this.modal.dismiss();
        }, function (error) {
            _this.msg = error;
        });
    };
    addOrderComponent.prototype.LoadProducts = function () {
        var _this = this;
        this.indLoading = true;
        this._orderService.get(global_1.Global.BASE_PRODUCT_ENDPOINT)
            .subscribe(function (products) { _this.products = products; _this.indLoading = false; }, function (error) { return _this.msg = error; });
    };
    addOrderComponent.prototype.addProduct = function (product) {
        if (product.Quantity == 0)
            return;
        var exists = false;
        this.addedProducts.forEach(function (element) {
            if (element.ProductId === product.ProductId) {
                element.Quantity = product.Quantity;
                exists = true;
            }
        });
        if (!exists)
            this.addedProducts.push(product);
    };
    __decorate([
        core_1.ViewChild('modal'),
        __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
    ], addOrderComponent.prototype, "modal", void 0);
    addOrderComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/Components/addOrder.component.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, order_service_1.OrderService])
    ], addOrderComponent);
    return addOrderComponent;
}());
exports.addOrderComponent = addOrderComponent;
//# sourceMappingURL=addOrder.components.js.map