import { Subscription } from 'rxjs/Subscription';
import { UploadImageService } from './../../../services/upload-image.service';
import { CommentsService } from './../../../services/comments.service';
import { PostsService } from './../../../services/posts.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/observable/combineLatest';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit,OnDestroy {
  user:Object={};
  file;
  howmanyPosts:number=0;
  howmanyComments:number=0;

  profileSubscription: Subscription;
  constructor(
    private userService:UserService,
    private postService:PostsService,
    private commentService:CommentsService,
    private route:Router,
    private uploadImageService: UploadImageService
  ) { 
  }

  ngOnInit() {
    let user_id=JSON.parse(localStorage.getItem('Zero_user')).id;
    console.log(user_id);
    this.profileSubscription=
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
  
  ngOnDestroy(){
    this.profileSubscription.unsubscribe();
  }
  onChange(event){
    this.file=event.srcElement.files;
    console.log(this.file[0]);
  }
  
}
