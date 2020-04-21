import { Component } from "@angular/core"
@Component({
    selector: "order-app",
    template: `
               <div>
                  <nav class='navbar navbar-inverse'>
                       <div class='container-fluid'>
                         <ul class='nav navbar-nav'>
                           <li><a [routerLink]="['order']">List all Orders</a></li>
                           <li><a [routerLink]="['addOrder']">Add an Order</a></li>
                      </ul>
                      </div>
                 </nav>    
              <div class='container'>
                <router-outlet></router-outlet>
              </div>
             </div>          
`

})

export class AppComponent {

}