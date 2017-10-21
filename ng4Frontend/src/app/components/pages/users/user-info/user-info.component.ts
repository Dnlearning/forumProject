import { CommentsService } from './../../../../services/comments.service';
import { PostsService } from './../../../../services/posts.service';
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
  howManyPosts:number=0;
  howManyComments:number=0;
  user_id:string='';
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
      this.postsService.getPostsUserCreated(this.user_id).subscribe(data=>{
        this.howManyPosts=data.length;
      });
      this.commentsService.getCommentsUserCreated(this.user_id).subscribe(data=>{
        this.howManyComments=data.length;
      })
    });
  }

}
