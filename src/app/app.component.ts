import { Component } from '@angular/core';

import {data} from './data/data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cart = [];
  sum: number = null;
  title = 'Shop';
  products = data;
  showHide = false;
  language = 'ltr';

  public ngOnInit(){
    this.back = this.back.bind(this);
    this.buyAllOrReset = this.buyAllOrReset.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }
    precisionRound(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }
  public addToCart(item) {
    item.added = !item.added;
    this.cart.push(item);
    this.sum += item.price;
    this.sum = this.precisionRound(this.sum, 2)
  }

  public back(item) {
    item.added = !item.added;
    this.cart.splice(this.cart.indexOf(item), 1);
    this.sum -= item.price;
    this.sum = this.precisionRound(this.sum, 2)
  }

  public buyAllOrReset(){
    this.cart = [];
    this.sum = null;
    this.products.map(item => {
      item.added = false;
    })
  }

  public cartToggle(){
    this.showHide = !this.showHide;
  }

  public changeLanguage() {
    this.language = this.language == 'ltr' ? 'rtl' : 'ltr';
    console.log(this.language);
  }

}
