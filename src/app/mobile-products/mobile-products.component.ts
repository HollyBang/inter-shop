import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-products',
  templateUrl: './mobile-products.component.html',
  styleUrls: ['./mobile-products.component.css']
})
export class MobileProductsComponent implements OnInit {
  @Input() products;
  @Input()
  public addToCart: Function; 
  constructor() { }

  ngOnInit() {
  }

}
