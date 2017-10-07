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
  username:String ='';



  constructor(
    private userService:UserService,
    private route:Router,
    private flashMsg:FlashMessagesService,
    private sharedService:SharedService
  ) { }

  ngOnInit() {
    this.sharedService.checkUserOnLocal();
    this.sharedService.currentUsername.subscribe(username=>this.username=username);
  }


  toggleState(){
    this.openmenu=(this.openmenu==false)?true:false;
  }


  onLogoutClick(){
    this.userService.logout();
    this.flashMsg.show('You are logged out',{cssClass:'alert-success',timeout:3000});
    this.route.navigate(['/login']);
    return false;
  }
}
