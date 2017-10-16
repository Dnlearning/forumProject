import { SharedService } from './../../services/shared.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.css']
})
export class NavbarTopComponent implements OnInit {
  openmenu:boolean=false;
  username:string ='';
  status:boolean=false;


  constructor(
    private userService:UserService,
    private route:Router,
    private flashMsg:FlashMessagesService,
    private sharedService:SharedService
  ) { }

  ngOnInit() {
    this.sharedService.checkUserOnLocal();
    this.sharedService.currentUsername.subscribe(username=>this.username=username);
    this.sharedService.currentStatusLogin.subscribe(status=>this.status=status);
  }


  toggleState(){
    this.openmenu=(this.openmenu==false)?true:false;
  }


  onLogoutClick(){
    this.userService.logout();
    this.route.navigate(['/login']);
    this.flashMsg.show('You are logged out',{cssClass:'alert-success',timeout:3000});
    this.sharedService.loginStatus(false);
    return false;
  }
}
