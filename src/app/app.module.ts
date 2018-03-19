import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { ProductsComponent } from './products/products.component';
import { MobileProductsComponent } from './mobile-products/mobile-products.component';

const appRoutes: Routes = [
  { path: 'tv', component: ProductsComponent },
  { path: 'mobile', component: MobileProductsComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    ShopCartComponent,
    ProductsComponent,
    MobileProductsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
