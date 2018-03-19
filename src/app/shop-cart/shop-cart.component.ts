import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {
  @Input() cart;
  @Input() sum;
  @Input() public back: Function; 
  @Input() public buyAllOrReset: Function; 

  sumCart: string = null;
  
  constructor() {
    
   }

  ngOnInit() {
    
  }

  
  public buy(cart) {
    this.buyAllOrReset();
    console.log('buy');
    console.log('cart arr',this.cart);
    this.sumCart = this.sum;
    console.log('sumCart',this.sumCart);
    console.log('sum',this.sum);
  }
  public reset() {
    console.log('reset');
    this.buyAllOrReset();
    this.sumCart = null;
  }

}
