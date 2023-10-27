import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlankComponent } from './blank/blank.component';
import { ProductsComponent } from './products/products.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { MarketComponent } from './market/market.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: BlankComponent },
  { path: 'products', component: ProductsComponent},
  { path: 'products/edit/:id', component: ProductEditComponent},
  { path: 'products/create', component: ProductCreateComponent},
  { path: 'market', component : MarketComponent},
  { path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
