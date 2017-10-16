import { CategoriesService } from './../../../services/categories.service';
import { MainTopicService } from './../../../services/main-topic.service';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allUsers;
  p:number=1;
  itemsPerPage:number=5;
  maintopics;
  constructor(
    private userService:UserService, 
    private mainTopicService:MainTopicService,
    private categoryService:CategoriesService
  ) { 
  }

  ngOnInit() {
    if(this.userService.isLoggedIn()){
        if(!JSON.parse(localStorage.getItem('Zero_user'))) return false;
        let username=JSON.parse(localStorage.getItem('Zero_user')).username;
        this.userService.getAllUser(username).subscribe(users=>{
          this.allUsers=users;
        },
        (err:Response)=>{
          console.log(err);
        });  
    }
    this.mainTopicService.getAllMainTopic().
    subscribe(data=>{
      this.maintopics=data.topics;
    });
    
  }

  getFilterValue(value){
    this.itemsPerPage=value;
  }


}
