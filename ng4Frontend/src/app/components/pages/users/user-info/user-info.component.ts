import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { CommentsService } from './../../../../services/comments.service';
import { PostsService } from './../../../../services/posts.service';
import { UserService } from './../../../../services/user.service';
import { ActivatedRoute ,ParamMap } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/combineLatest';
@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit,OnDestroy {
  user_info=[];
  howManyPosts:number=0;
  howManyComments:number=0;
  user_id:string='';
  infoSubscription:Subscription;
  constructor(
    private route:ActivatedRoute,
    private userService:UserService,
    private postsService:PostsService,
    private commentsService:CommentsService
  ) { }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => {
      this.user_id=params.get('user_id');
      return this.userService.getUserInfor(this.user_id);
    })
    .subscribe(data => {
      this.user_info=data.user_info;
      console.log(this.user_info);
      this.infoSubscription=Observable.combineLatest([
        this.postsService.getPostsUserCreated(this.user_id),
        this.commentsService.getCommentsUserCreated(this.user_id)
      ])
      .subscribe(data=>{
        this.howManyPosts=data[0].length;
        this.howManyComments=data[1].length;
      })
    });
  }
  ngOnDestroy(){
    this.infoSubscription.unsubscribe();
  }
}
