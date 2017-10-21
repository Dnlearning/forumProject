import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { SharedService } from './../../../services/shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UserService } from './../../../services/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CannotContainSpace } from '../../../common/nospace.validators';
import { incorrectMailFormat } from '../../../common/formatemail.validators';

import 'rxjs/add/observable/combineLatest';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  enableR:boolean=false;
  nameLogin:string;
  status:boolean;
  shareSubscription:Subscription;
  form=new FormGroup({
    username: new FormControl('',[Validators.required, CannotContainSpace]),
    password: new FormControl('',Validators.required)
  })
  
  constructor(
    private userService:UserService,
    private flashMsg:FlashMessagesService,
    private router:Router,
    private route:ActivatedRoute,
    private sharedService:SharedService
  ) { }

  ngOnInit() {
    //check infos from local
    this.shareSubscription=Observable.combineLatest([
      this.sharedService.currentUsername,
      this.sharedService.currentStatusLogin
    ])
    .subscribe(data=>{
      this.nameLogin=data[0];
      this.status=Boolean(data[1]);
    })
  }
  ngOnDestroy(){
    this.shareSubscription.unsubscribe();
  }
  onSubmit(rf){
    this.enableR=true;
    this.userService.authenticateUser(rf.value)
    .subscribe(data=>{
      if(data.success){
        this.userService.storeUserDate(data.token,data.user);

        //change username on shared service
        this.sharedService.changeUsername(data.user.name);
        this.sharedService.loginStatus(true);

        this.flashMsg.show('You are Logged In',{ cssClass: 'alert-success',timeout: 2000})

        let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigate([returnUrl || '/']);
        
      }else{
        this.flashMsg.show(data.msg,{ cssClass: 'alert-danger',timeout: 3000});
        this.router.navigate(['/login']);
      }

      
    })
  }

  get username(){
    return this.form.get('username');
  }
  get password(){
    return this.form.get('password');
  }
}
