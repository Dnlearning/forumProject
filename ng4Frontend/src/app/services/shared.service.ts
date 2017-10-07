import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable()
export class SharedService {
  
  private username =new BehaviorSubject<string>("");

  currentUsername=this.username.asObservable();

  constructor() { }

  changeUsername(username:string){
    this.username.next(username);
  }

  checkUserOnLocal(){
    let user=JSON.parse(localStorage.getItem('Zero_user'));
    if(!user) return false;
    let loginName:string=user.name;
    this.changeUsername(loginName);
  }

}
