import { UserService } from './../../../services/user.service';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CannotContainSpace } from '../../../common/nospace.validators';
import { usernameTaken } from '../../../common/usernameRegister.validators';
import { emailTaken } from '../../../common/emailRegister.validators';
import { incorrectMailFormat } from '../../../common/formatemail.validators';
import { FlashMessagesService } from 'angular2-flash-messages';



import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm;
  enableR:boolean=false;
  constructor(
    fb:FormBuilder,
    private userService:UserService,
    private route:Router,
    private flashMsg: FlashMessagesService
  ) { 
    this.registerForm=fb.group({
      name:['', Validators.required],
      username:['',[Validators.required,CannotContainSpace],usernameTaken(userService)],
      email:['',[Validators.required,CannotContainSpace,incorrectMailFormat],emailTaken(userService)],
      password:['',Validators.required]
    });
  }

  
 
  ngOnInit() {
  }

  onRegister(rf){
    if(!rf.valid){return false};
    this.enableR=true;
    this.userService.registerUser(rf.value)
      .subscribe(data=>{
        if(data.success){
          this.flashMsg.show('Register successfully! You are now can login',{ cssClass: 'alert-success',timeout: 3000})
          this.route.navigate(['/login']);
        }else{
          this.flashMsg.show('Something went Wrong!',{ cssClass: 'alert-danger',timeout: 3000});
          this.route.navigate(['/register']);
        }
      })
  }


  get name(){
    return this.registerForm.get('name');
  }
  get password(){
    return this.registerForm.get('password');
  }
  get email(){
    return this.registerForm.get('email');
  }
  get username(){
    return this.registerForm.get('username');
  }
}
