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

  public ngOnInit(){
    this.back = this.back.bind(this);
    this.buy = this.buy.bind(this);
  }
    precisionRound(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }
  public buy(item) {
    console.log('buy', item);
    item.added = !item.added;
    this.cart.push(item);
    this.sum += item.price;
    this.sum = this.precisionRound(this.sum, 2)
  }

  public back(item) {
    console.log('del', item);
    item.added = !item.added;
    this.cart.splice(this.cart.indexOf(item), 1);
    this.sum -= item.price;
    this.sum = this.precisionRound(this.sum, 2)
  }

}
