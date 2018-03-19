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

  
  public buy() {
    this.buyAllOrReset();
    this.sumCart = this.sum;
  }
  public reset() {
    this.buyAllOrReset();
    this.sumCart = null;
  }

}
