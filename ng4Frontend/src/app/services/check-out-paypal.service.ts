import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CheckOutPaypalService {
  userToken;
  constructor(
    private http:Http
  ) { }
  
  checkoutPaypal(bill){
    let headers=new Headers();
    this.loadToken();
    headers.append('Authorization',this.userToken);
    headers.append('Content-type','application/json');
    return this.http.post('http://localhost:3000/api/checkout/paypal',bill,{headers:headers})
      .map(res=>res.json());
  }

  loadToken(){
    const token=localStorage.getItem('Zero_token');
    this.userToken= token;
  }
}
