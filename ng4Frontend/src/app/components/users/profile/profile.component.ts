import { CommentsService } from './../../../services/comments.service';
import { PostsService } from './../../../services/posts.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/combineLatest';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:Object={};
  howmanyPosts:number=0;
  howmanyComments:number=0;
  constructor(
    private userService:UserService,
    private postService:PostsService,
    private commentService:CommentsService,
    private route:Router
  ) { }

  ngOnInit() {
    let user_id=JSON.parse(localStorage.getItem('Zero_user')).id;
    console.log(user_id);
    Observable.combineLatest([
      this.userService.getProfile(),
      this.postService.getPostsUserCreated(user_id),
      this.commentService.getCommentsUserCreated(user_id)
    ])
    .subscribe(data=>{
      this.user=data[0].user;
      this.howmanyPosts=data[1].length;
      this.howmanyComments=data[2].length;
    },
    (err:Response)=>{
      console.log(err);
    });
  }

}
