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
    return this.http.get('api/users/'+username)
      .map(res=>res.json())
  }
  checkEmailExist(email:String){
    return this.http.get('api/users/'+email)
      .map(res=>res.json())
  }

  registerUser(newUser){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('api/users/register',newUser,{headers:headers})
      .map(res=>res.json());
  }


  authenticateUser(user){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('api/users/authenticate',user,{headers:headers})
      .map(res=>res.json());
  }

  getProfile(){
    let headers=new Headers();
    this.loadToken();
    headers.append('Authorization',this.userToken);
    headers.append('Content-Type','application/json');
    return this.http.get('api/users/profile',{headers:headers})
      .map(res=>res.json());
  }
  getAllUser(username){
    let headers=new Headers();
    this.loadToken();
    headers.append('Authorization',this.userToken);
    headers.append('Content-Type','application/json');
    return this.http.get('api/users/all/'+username,{headers:headers})
      .map(res=>res.json());
  }

  storeUserDate(token,user){
    localStorage.setItem('Zero_token',token);
    localStorage.setItem('Zero_user',JSON.stringify(user));
    this.userToken=token;
    this.user=user;
  }
  getUserInfor(user_id){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('api/users/infos/'+user_id,{headers:headers})
      .map(res=>res.json());
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

  isAdmin(){
    if(this.isLoggedIn()){
      let user=JSON.parse(localStorage.getItem('Zero_user'));
      if(user.roles.includes('admin')){
        return true;
      }else{
        return false;
      }
    }
  }

  isUserCreatedComment(user_id){
    if(this.isLoggedIn()){
      let user=JSON.parse(localStorage.getItem('Zero_user'));
      if(user.username==user_id){
        return true;
      }else{
        return false;
      }
    }
  }
  isUserCreatedPost(user_id){
    if(this.isLoggedIn()){
      let user=JSON.parse(localStorage.getItem('Zero_user'));
      // console.log("author_id: "+ user_id);
      // console.log("local user id: "+ user.id);

      if(user.id==user_id){
        return true;
      }else{
        return false;
      }
    }
  }

  updateUserInfo(user_id,newRoles){
    let headers=new Headers();
    this.loadToken();
    headers.append('Authorization',this.userToken);
    headers.append('Content-Type','application/json');
    return this.http.put('api/users/infos/update/'+user_id,newRoles,{headers:headers})
      .map(res=>res.json());
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
