import { Subscription } from 'rxjs/Subscription';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UserService } from './../../../../../services/user.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'user-created-category',
  templateUrl: './user-created-category.component.html',
  styleUrls: ['./user-created-category.component.css']
})
export class UserCreatedCategoryComponent implements OnInit,OnDestroy {
  @Input('createUser') createUser;
  user_info=[];
  userInfoSubscription: Subscription
  constructor(
    private userService:UserService,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
    this.userInfoSubscription=this.userService.getUserInfor(this.createUser).subscribe(data=>{
      if(data.success){
        this.user_info=data.user_info;
        this.user_info['created_date']=this.convertDateTime(this.user_info['created_date']);
      }else{
        this.flashMessage.show(data.msg,{ cssClass: 'alert-danger',timeout: 3000});
        return false;
      }
    })
  }
  ngOnDestroy(){
    this.userInfoSubscription.unsubscribe();
  }
  
  convertDateTime(datetime){
    let timeDisplay=new Date(datetime);
    let time =timeDisplay.getFullYear()+'-' + (timeDisplay.getMonth()+1) + '-'+timeDisplay.getDate();
    return time;
  }
}
