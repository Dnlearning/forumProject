import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-checkout',
  templateUrl: './success-checkout.component.html',
  styleUrls: ['./success-checkout.component.css']
})
export class SuccessCheckoutComponent implements OnInit {
  bill:Object;
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    localStorage.removeItem('Zero_carts');
    if(JSON.parse(localStorage.getItem('yourBill'))){
      this.bill=JSON.parse(localStorage.getItem('yourBill'));
    }
  }
  redirect(returnUrl){
    localStorage.removeItem('yourBill');
    this.router.navigate(['/'+ returnUrl]);
  }
}
