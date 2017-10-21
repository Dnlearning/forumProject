import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { PostsService } from './../../../services/posts.service';
import { CategoriesService } from './../../../services/categories.service';
import { MainTopicService } from './../../../services/main-topic.service';
import { UserService } from './../../../services/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as io from 'socket.io-client';
import 'rxjs/add/observable/combineLatest';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  allUsers;
  p:number=1;
  itemsPerPage:number=5;
  maintopics;
  categories=[];
  posts=[];
  mode:string='newpost';
  highestViewsPost=[];
  userSubscription:Subscription;
  infosSubcription: Subscription;
  constructor(
    private userService:UserService, 
    private mainTopicService:MainTopicService,
    private categoryService:CategoriesService,
    private postsService :PostsService
  ) { 
  }

  ngOnInit() {
    if(this.userService.isLoggedIn()){
        if(!JSON.parse(localStorage.getItem('Zero_user'))) return false;
        let username=JSON.parse(localStorage.getItem('Zero_user')).username;
        this.userSubscription=this.userService.getAllUser(username).subscribe(users=>{
          this.allUsers=users;
        },
        (err:Response)=>{
          console.log(err);
        });  
    }

    this.infosSubcription=Observable.combineLatest([
      this.mainTopicService.getAllMainTopic(),
      this.postsService.getAllPosts(),
      this.categoryService.getAllCategories(),
      this.postsService.getHighestViews()
    ])
    .subscribe(data=>{
      this.maintopics=data[0].topics;
      this.posts=data[1].posts;
      this.categories=data[2].topics;
      this.highestViewsPost=data[3].posts;
    })
  }
  ngOnDestroy(){
    this.infosSubcription.unsubscribe();
    if(this.userSubscription){
      this.userSubscription.unsubscribe();
    }
  }

  getFilterValue(value){
    console.log(value);
    this.itemsPerPage=value;
  }


}
