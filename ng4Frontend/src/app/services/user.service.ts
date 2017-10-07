import { Injectable } from '@angular/core';
import {Http ,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class UserService {
  userToken:any;
  user:any;

  constructor(private http: Http) { }

  checkUsernameExist(username:String){
    return this.http.get('http://localhost:3000/users/'+username)
      .map(res=>res.json())
  }
  checkEmailExist(email:String){
    return this.http.get('http://localhost:3000/users/'+email)
      .map(res=>res.json())
  }

  registerUser(newUser){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/register',newUser,{headers:headers})
      .map(res=>res.json());
  }


  authenticateUser(user){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/authenticate',user,{headers:headers})
      .map(res=>res.json());
  }

  getProfile(){
    let headers=new Headers();
    this.loadToken();
    headers.append('Authorization',this.userToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/users/profile',{headers:headers})
      .map(res=>res.json());
  }

  storeUserDate(token,user){
    localStorage.setItem('Zero_token',token);
    localStorage.setItem('Zero_user',JSON.stringify(user));
    this.userToken=token;
    this.user=user;
  }
  loadToken(){
    const token=localStorage.getItem('Zero_token');
    this.userToken= token;
  }
  logout(){
    this.userToken=null;
    this.user=null;
    localStorage.removeItem('Zero_token');
    localStorage.removeItem('Zero_user');
  }

  isLoggedIn(){
    let jwtHelper=new JwtHelper();
    let token=localStorage.getItem('Zero_token');
    if(!token){return false};
    let expirationDate=jwtHelper.getTokenExpirationDate(token);
    let isExpired=jwtHelper.isTokenExpired(token);
    return !isExpired;
  }

}
