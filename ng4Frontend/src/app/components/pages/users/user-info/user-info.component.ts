import { UserService } from './../../../../services/user.service';
import { ActivatedRoute ,ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  user_info=[];
  constructor(
    private route:ActivatedRoute,
    private userService:UserService
  ) { }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.userService.getUserInfor(params.get('user_id')))
    .subscribe(data => {
      this.user_info=data.user_info;
    });
  }

}
