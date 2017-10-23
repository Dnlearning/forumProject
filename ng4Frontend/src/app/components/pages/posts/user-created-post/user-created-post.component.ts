import { UserService } from './../../../../services/user.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'user-created-post',
  templateUrl: './user-created-post.component.html',
  styleUrls: ['./user-created-post.component.css']
})
export class UserCreatedPostComponent implements OnInit,OnDestroy {
  @Input('post') post;
  user_info=[];
  userInfoSubscription:Subscription;
  constructor(
    private userService:UserService,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
    this.userInfoSubscription=this.userService.getUserInfor(this.post.author_id).subscribe(data=>{
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
