import { DatafnService } from './datafn.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { ProductsComponent } from './products/products.component';
import { MobileProductsComponent } from './mobile-products/mobile-products.component';




@NgModule({
  declarations: [
    AppComponent,
    ShopCartComponent,
    ProductsComponent,
    MobileProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DatafnService],
  bootstrap: [AppComponent]
})
export class AppModule { }
