import { CheckOutPaypalService } from './../../../../services/check-out-paypal.service';
import { Subscription } from 'rxjs/Subscription';
import { FlashMessagesService, FlashMessagesModule } from 'angular2-flash-messages';
import { CheckOutStripeService } from './../../../../services/check-out-stripe.service';
import { Router } from '@angular/router';
import { Cart } from './../cart';
import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
declare var StripeCheckout:any;
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit,OnDestroy {
  carts:Cart[]=[];
  totalPrice:number=0;
  handler:any;
  desc:string='';
  stripeDisable:boolean=false;
  paypalDisable:boolean=false;
  userCheckout;
  publishableKey:string='';
  getPublishableKey:Subscription;
  checkoutStripe:Subscription;
  token_triggered = false;
  constructor(
    private router:Router,
    private checkOutStripeService:CheckOutStripeService,
    private checkOutPaypalService:CheckOutPaypalService,
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
      this.getPublishableKey=this.checkOutStripeService.getPublishKey().subscribe(data=>{
        this.publishableKey=data.publishKey;
        this.handler = StripeCheckout.configure({
          key: this.publishableKey,
          image: 'assets/images/logoZeroToZ_black.png',
          locale: 'auto',
          closed: ()=> {
            if (!this.token_triggered) {
                this.stripeDisable=false;
            } else {
                // payment completion behavior goes here
            }
          },
          token: (token) => {
            this.token_triggered = true;
            let bill={
              token:token,
              user:this.userCheckout,
              desc:this.desc,
              amount:this.totalPrice*100
            }
            this.checkoutStripe=this.checkOutStripeService.checkoutStripe(bill)
            .subscribe(data=>{
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

  
  ngOnDestroy(){
    if(this.getPublishableKey){
      this.getPublishableKey.unsubscribe();
    }
    if(this.checkoutStripe){
      this.checkoutStripe.unsubscribe();
    }
    
  }

  openCheckout(e){
    this.stripeDisable=true;
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

  paypalCheckout(){
    this.paypalDisable=true;
    this.stripeDisable=true;
    let bill={
      user:this.userCheckout,
      products:this.carts
    }
    this.checkOutPaypalService.checkoutPaypal(bill)
      .subscribe(data=>{
        if(data.success){
          window.location.href=data.link;
        }else{
          this.flashMsg.show(data.msg,{cssClass:'alert-danger',timeout:3000});
          return false;
        }
      })
  }



}
