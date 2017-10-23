import { Cart } from './../cart';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input('product') product;
  @Output('cartChanged') cartchange=new EventEmitter();
  constructor() { }
  cart:Cart;
  carts:Cart[]=[];
  ngOnInit() {
    this.cart={
      name:this.product.name,
      price:1,
      quantity:0
    };
    if(JSON.parse(localStorage.getItem('Zero_carts'))){
      this.carts=JSON.parse(localStorage.getItem('Zero_carts'));
      if(this.carts.length!=0){
        this.carts.map(cart=>{
          if(this.cart.name==cart.name){
            this.cart.quantity=cart.quantity;
          }
        })
      }
    }
  }
  addCart(){
    this.cart.quantity=1;
    this.cartchange.emit({type:'add',cart: this.cart})
  }
  decrease(){
    this.cart.quantity-=1;
    this.cartchange.emit({type:'decrease',cart: this.cart});

  }
  increase(){
    this.cart.quantity+=1;
    this.cartchange.emit({type:'increase',cart: this.cart});
  }
}
