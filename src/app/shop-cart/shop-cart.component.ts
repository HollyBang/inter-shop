import { DatafnService } from './../datafn.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


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
  message: any;
  sumCart: string = null;
  @Output() testEvent = new EventEmitter<any>();
  
  constructor(private data: DatafnService) {
    
   }

  ngOnInit() {
    // this.data.curentMsg.subscribe(message => this.message = message)
  }
 

  sendMessage() {
    this.testEvent.emit(this.buyAllOrReset);
    this.sumCart = this.sum;
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

