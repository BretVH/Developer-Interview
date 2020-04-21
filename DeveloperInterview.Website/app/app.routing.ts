import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { OrderComponent } from './components/order.component';
import { addOrderComponent } from './components/addOrder.components';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'order', component: OrderComponent },
    { path: 'addOrder', component: addOrderComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);