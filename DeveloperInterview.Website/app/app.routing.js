"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home.component");
var order_component_1 = require("./components/order.component");
var addOrder_components_1 = require("./components/addOrder.components");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'order', component: order_component_1.OrderComponent },
    { path: 'addOrder', component: addOrder_components_1.addOrderComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map