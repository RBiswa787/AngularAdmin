import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SmallCompComponent } from './small-comp/small-comp.component';
import { ChartCompComponent } from './chart-comp/chart-comp.component';
import { NgChartsModule } from 'ng2-charts';
import { SmallCardComponent } from './small-card/small-card.component';
import 'angular-feather';
import { BlankComponent } from './blank/blank.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { LandingComponent } from './landing/landing.component';
import { MarketComponent } from './market/market.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    SidebarComponent,
    SmallCompComponent,
    ChartCompComponent,
    SmallCardComponent,
    BlankComponent,
    DashboardComponent,
    ProductsComponent,
    ProductEditComponent,
    ProductCreateComponent,
    LandingComponent,
    MarketComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
