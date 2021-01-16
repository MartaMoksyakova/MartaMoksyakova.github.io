import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { BasketComponent } from './pages/basket/basket.component';

import { AdminComponent } from './admin/admin.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../app/shared/guards/auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './pages/product/product.component';



const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'product/:category', component: ProductComponent },
  { path: 'product-details/:category/:id', component: ProductDetailsComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], children: [
    { path: '', pathMatch:'full', redirectTo: 'category' },
    { path: 'category', component: AdminCategoryComponent },
    { path: 'orders', component: AdminOrdersComponent },
    { path: 'products', component: AdminProductsComponent },
  ]},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
