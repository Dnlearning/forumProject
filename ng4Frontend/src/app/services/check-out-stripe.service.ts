import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CheckOutStripeService {
  userToken;
  constructor(
    private http:Http
  ) { }
  
  checkoutStripe(bill){
    let headers=new Headers();
    this.loadToken();
    headers.append('Authorization',this.userToken);
    headers.append('Content-type','application/json');
    return this.http.post('api/checkout/stripe',bill,{headers:headers})
      .map(res=>res.json());
  }

  getPublishKey(){
    let headers=new Headers();
    this.loadToken();
    headers.append('Authorization',this.userToken);
    headers.append('Content-type','application/json');
    return this.http.get('api/checkout/stripe',{headers:headers})
      .map(res=>res.json());
  }

  loadToken(){
    const token=localStorage.getItem('Zero_token');
    this.userToken= token;
  }
}
