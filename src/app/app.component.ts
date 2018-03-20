import { Component } from '@angular/core';
import { DatafnService } from './datafn.service';
import {tv, mobile} from './data/data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cart: Array<any> = [];
  sum: number = null;
  title: string = 'Shop';
  tvData = [...tv];
  mobileData = [...mobile];
  showHide = false;
  language = 'ltr';
  activeLink = null;
  message;



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
    
    this.tvData.map(item => {
      item.added = false;
    })
    this.mobileData.map(item => {
      item.added = false;
    })
  }

  public cartToggle(){
    this.showHide = !this.showHide;
  }

  public changeLanguage() {
    this.language = this.language == 'ltr' ? 'rtl' : 'ltr';
  }

  reciveTest($event) {
    this.buyAllOrReset();
  }

}
