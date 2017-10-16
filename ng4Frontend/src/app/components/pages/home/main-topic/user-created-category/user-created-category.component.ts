import { FlashMessagesService } from 'angular2-flash-messages';
import { UserService } from './../../../../../services/user.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-created-category',
  templateUrl: './user-created-category.component.html',
  styleUrls: ['./user-created-category.component.css']
})
export class UserCreatedCategoryComponent implements OnInit {
  @Input('createUser') createUser;
  user_info=[];
  constructor(
    private userService:UserService,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
    this.userService.getUserInfor(this.createUser).subscribe(data=>{
      if(data.success){
        this.user_info=data.user_info;
        this.user_info=this.user_info[0];
      }else{
        this.flashMessage.show(data.msg,{ cssClass: 'alert-danger',timeout: 3000});
        return false;
      }
    })
  }

}
