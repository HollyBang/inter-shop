import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {
  @Input() cart;
  @Input() sum;
  @Input()
  public back: Function; 

  
  constructor() { }

  ngOnInit() {
  }

}
