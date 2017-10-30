import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CommentsService } from './../../../../services/comments.service';
import { UserService } from './../../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

declare var $ :any;
@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  show:boolean=false;
  comment:string=''
  comments=[];
  indexCommentEdit:number=0;
  postId:string='';
  showEdit:boolean=false;
  p:number=1;
  commentEdit=[];
  itemsPerPage:number=5;
  constructor(
    private userService:UserService,
    private commentService: CommentsService,
    private route:ActivatedRoute,
    private flashMessage:FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.itemsPerPage=5;
    this.route.paramMap
    .switchMap((params: ParamMap) =>{ 
      this.postId=params.get('post_id');
      return this.commentService.getAllCommentsWithSpecificPostId(this.postId);
    })
    .subscribe(data=>{
      if(data.success){
        this.comments=data.comments;
      }
    },
  (err:Response)=>{
    console.log(err);
  })
  }
  deleteComment(comment){
    this.showEdit=false;
    let index=this.comments.indexOf(comment);
    this.comments.splice(index,1);
    this.commentService.deleteComment(comment._id).subscribe(null,(error:Response)=>{
      console.log(error);
      this.comments.splice(index,0,comment);
    })
  }

  editComment(comment){
    this.commentEdit=comment;
    this.indexCommentEdit=this.comments.indexOf(comment);  
    this.showEdit=(this.showEdit)?false:true;
  }

  showFormComment(){
    this.show=(this.show)?false:true;
    this.showEdit=false;
  }

  updateComment(data){
    if(data.cancel){
      this.comments[data.index]=data.content;
      this.showEdit=false;
      return false;
    }
    let comment_id =data.content._id;
    let newComment={
      body:data.content.body
    }
    this.comments[data.index]=data.content;
    this.commentService.updateComment(comment_id,newComment).subscribe(data=>{
    });
    this.showEdit=false;
  }
  leaveComment(){
    if(!this.userService.isLoggedIn()){
      return false;
    }
    this.showEdit=false;
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
      if(data.success){
        this.comments.unshift(data.comment);
      }
    });
    this.comment='';
    this.show=false;
  }
}
