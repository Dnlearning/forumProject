import { ActivatedRoute,ParamMap } from '@angular/router';
import { CommentsService } from './../../../../services/comments.service';
import { UserService } from './../../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  show:boolean=false;
  comment:string=''
  comments=[];
  postId:string='';

  p:number=1;
  itemsPerPage:number=5;
  constructor(
    private userService:UserService,
    private commentService: CommentsService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.itemsPerPage=5;
    this.route.paramMap
    .switchMap((params: ParamMap) => this.commentService.getAllCommentsWithSpecificPostId(this.postId=params.get('post_id')))
    .subscribe(data=>{
      console.log(this.postId);
      if(data.success){
        this.comments=data.comments;
      }
    },
  (err:Response)=>{
    console.log(err);
  })
  }

  showFormComment(){
    this.show=(this.show)?false:true;
  }

  leaveComment(){
    if(!this.userService.isLoggedIn()){
      return false;
    }
    let user=JSON.parse(localStorage.getItem('Zero_user'));
    let author_id=user.id;
    let username=user.username;
    let newComment={
      body:this.comment,
      author_id:author_id,
      post_id:this.postId,
      userComment:username
    }

    this.commentService.createComment(newComment).subscribe(data=>{
      console.log(data);
      if(data.success){
        this.comments.unshift(data.comment);
      }
    });
    this.show=false;
  }
}
