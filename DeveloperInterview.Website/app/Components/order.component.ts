import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from '../Service/order.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { IOrder } from '../Models/order';
import { Observable } from 'rxjs/Rx';
import { Global } from '../Shared/global';


@Component({

    templateUrl: 'app/Components/order.component.html'
})

export class OrderComponent implements OnInit {
    @ViewChild('modal') modal: ModalComponent;
    orders: IOrder[];
    order: IOrder;
    msg: string;
    indLoading: boolean = false;
    orderFrm: FormGroup;
    modalTitle: string;
    modalBtnTitle: string;

    constructor(private fb: FormBuilder, private _orderService: OrderService) { }

    ngOnInit(): void {

        this.orderFrm = this.fb.group({

            OrderId: [''],
            FirstName: ['', Validators.required],
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



    }

    LoadOrders(): void {
        this.indLoading = true;
        this._orderService.get(Global.BASE_ORDER_ENDPOINT)
            .subscribe(orders => { this.orders = orders; this.indLoading = false; },
                error => this.msg = <any>error);
    }


}