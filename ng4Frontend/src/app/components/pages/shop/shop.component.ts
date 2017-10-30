import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, RouterStateSnapshot } from '@angular/router';
import { Cart } from './cart';
import { Component, OnInit } from '@angular/core';
declare var $ :any;


@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products=[];
  
  carts:Cart[]=[];
  myModal;
  totalQuantity:number=0;
  returnUrl;
  constructor(
    private router:Router,
    private flashMsg:FlashMessagesService,
  ) {
    const snapshot: RouterStateSnapshot = router.routerState.snapshot;
    this.returnUrl=snapshot.url;
  }
  ngOnInit() {
    this.products=[
      {'name':'product1' , src:'assets/images/pro1.png'},
      {'name':'product2' , src:'assets/images/pro2.png'},
      {'name':'product3' , src:'assets/images/pro3.png'}
    ];
    if(JSON.parse(localStorage.getItem('Zero_carts'))){
      this.carts=JSON.parse(localStorage.getItem('Zero_carts'));
      this.carts.map(cart=>{
        this.totalQuantity+=cart.quantity;
      })
    }
  }
  cartChanged(event){
    let cartsName=this.carts.map(cart=>{return cart.name});

    localStorage.removeItem('yourBill');
    switch(event.type){
      case 'add': this.carts.push(event.cart);break;
      case 'increase':
        let indexInc= cartsName.indexOf(event.cart.name);
        this.carts[indexInc]=event.cart;
        break;
      case 'decrease': 
        let indexDec= cartsName.indexOf(event.cart.name);
        this.carts[indexDec]=event.cart;
        if(this.carts[indexDec].quantity==0){
          this.carts.splice(indexDec,1);
        }
        break;
    }

    this.totalQuantity=0;
    this.carts.map(cart=>{
      this.totalQuantity+=cart.quantity;
    })
    localStorage.setItem('Zero_carts',JSON.stringify(this.carts));
  }
  checkout(){
    if(this.totalQuantity==0) return false;
    if(!JSON.parse(localStorage.getItem('Zero_user'))){
      this.flashMsg.show('Pls login to check out',{cssClass:'alert-danger',timeout:3000});
      this.router.navigate(['/login'],{queryParams:{returnUrl: '/product/checkout'}});
      return false;
    }
    this.router.navigate(['/product/checkout']);
  }
}
