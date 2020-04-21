import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from '../Service/order.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { IOrder } from '../Models/order';
import { IProduct } from '../Models/product';
import { Observable } from 'rxjs/Rx';
import { Global } from '../Shared/global';
import { forEach } from '@angular/router/src/utils/collection';


@Component({

    templateUrl: 'app/Components/addOrder.component.html'
})

export class addOrderComponent implements OnInit {
    @ViewChild('modal') modal: ModalComponent;
    products: IProduct[];
    product: IProduct;
    order: IOrder;
    orders: IOrder[];
    msg: string;
    indLoading: boolean = false;
    orderFrm: FormGroup;
    LastName: FormControl;
    FirstName: FormControl;
    modalTitle: string;
    modalBtnTitle: string;
    addedProducts: IProduct[];

    constructor(private fb: FormBuilder, private _orderService: OrderService) { }

    ngOnInit(): void {
        this.LastName = new FormControl('LastName');
        this.FirstName = new FormControl('FirstName')
        this.addedProducts = [];

        this.orderFrm = this.fb.group({
            FirstName: ['', Validators.required],
            LastName: ['', Validators.required]
        });

        this.LoadProducts();
    }


    addOrder() {
        this.SetControlsState(true);
        this.modalTitle = "Add New Order";
        this.modalBtnTitle = "Add";
        this.orderFrm.reset();
        this.modal.open();
    }

    SetControlsState(isEnable: boolean) {
        isEnable ? this.orderFrm.enable() : this.orderFrm.disable();
    }

    onSubmit(formData: any) {
        this.msg = "";
        this._orderService.post(Global.BASE_ORDER_ENDPOINT, formData._value, this.addedProducts).subscribe(
            data => {
                if (data == 1) //Success
                {
                    this.msg = "Data successfully added.";
                }
                else {
                    this.msg = "There is some issue in saving records, please contact to system administrator!"
                }

                this.modal.dismiss();
            },
            error => {
                this.msg = error;
            }
        );
    }

    LoadProducts(): void {
        this.indLoading = true;
        this._orderService.get(Global.BASE_PRODUCT_ENDPOINT)
            .subscribe(products => { this.products = products; this.indLoading = false; },
                error => this.msg = <any>error);
    }

    addProduct(product: IProduct) {
        if (product.Quantity == 0)
            return;
        var exists = false;
        this.addedProducts.forEach(element => {
            if (element.ProductId === product.ProductId) {
                element.Quantity = product.Quantity;
                exists = true;
            }
        })
        if (!exists)
            this.addedProducts.push(product);
    }

}
