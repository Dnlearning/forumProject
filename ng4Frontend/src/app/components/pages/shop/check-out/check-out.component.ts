import { FlashMessagesService } from 'angular2-flash-messages';
import { CheckOutStripeService } from './../../../../services/check-out-stripe.service';
import { Router } from '@angular/router';
import { Cart } from './../cart';
import { Component, OnInit, HostListener } from '@angular/core';
declare var StripeCheckout:any;
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  carts:Cart[]=[];
  totalPrice:number=0;
  handler:any;
  desc:string='';
  stripeDisable:boolean=false;
  paypalDisable:boolean=false;
  userCheckout;
  publishableKey:string='';
  constructor(
    private router:Router,
    private checkOutService:CheckOutStripeService,
    private flashMsg:FlashMessagesService
  ) { }
  
  ngOnInit() {

    this.carts=JSON.parse(localStorage.getItem('Zero_carts'));

    this.totalPrice=0;
    this.carts.map(cart=>{
      this.totalPrice+=cart.quantity*cart.price;
      this.desc+=cart.quantity+' '+cart.name+ ' ';
    });
    this.userCheckout=JSON.parse(localStorage.getItem('Zero_user'));

    if(this.userCheckout){
      this.checkOutService.getPublishKey().subscribe(data=>{
        this.publishableKey=data.publishKey;
        this.handler = StripeCheckout.configure({
          key: this.publishableKey,
          image: 'assets/images/logoZeroToZ_black.png',
          locale: 'auto',
          token: (token) => {
            let bill={
              token:token,
              user:this.userCheckout,
              desc:this.desc,
              amount:this.totalPrice*100
            }
            this.checkOutService.checkoutStripe(bill)
            .subscribe(data=>{
              console.log(data);
              if(data.success){
                localStorage.setItem('yourBill',JSON.stringify(data.bill));
                localStorage.removeItem('Zero_carts');
                this.router.navigate(['/checkout/success']);
              }else{
                this.flashMsg.show(data.msg,{cssClass:'alert-danger',timeout:3000});
              }
            })
          }
        });
      })
    }
  }


  openCheckout(e){
    this.handler.open({
      name: 'Pay Product',
      description: this.desc,
      amount: this.totalPrice*100
    });
    e.stopPropagation();
  }

  @HostListener('window:popstate')
    onPopstate(){
      this.handler.close();
    }


}
