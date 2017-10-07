import { Router } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:Object;
  constructor(
    private userService:UserService,
    private route:Router
  ) { }

  ngOnInit() {
    this.userService.getProfile()
      .subscribe(profile=>{
        this.user=profile.user;
      },
    (err)=>{
      console.log(err);
      return false;
    })
  }

}
