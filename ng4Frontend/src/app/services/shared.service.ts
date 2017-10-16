import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable()
export class SharedService {
  
  private username =new BehaviorSubject<string>("");
  private login=new BehaviorSubject<boolean>(false);


  

  constructor() { }

  changeUsername(username:string){
    this.username.next(username);
  }

  checkUserOnLocal(){
    let user=JSON.parse(localStorage.getItem('Zero_user'));
    if(!user) return false;
    let loginName:string=user.name;
    this.changeUsername(loginName);
    this.loginStatus(true);
  }

  currentUsername=this.username.asObservable();

  loginStatus(login:boolean){
    this.login.next(login);
  }

  currentStatusLogin=this.login.asObservable();
  
  

}
