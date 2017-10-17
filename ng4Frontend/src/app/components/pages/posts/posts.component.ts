import { UserService } from './../../../services/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { PostsService } from './../../../services/posts.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  categoryId:string="agsgdagsagagdsa";
  posts=[];
  p:number=1;
  itemsPerPage:number=5;
  constructor(
    private route:ActivatedRoute,
    private postsService: PostsService,
    private flashMessage:FlashMessagesService,
    private userService:UserService,
    private router:Router
  ) {
    
   }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.categoryId=params.get('category_id'))
    .subscribe(data=>{},(err)=>console.log(err));

    this.postsService.getAllPostsSpecificCategory(this.categoryId).subscribe(data=>{
      if(data.success){
        this.posts=data.posts;
      }else{
        this.flashMessage.show(data.msg,{cssClass:'alert-danger',timeout:3000});
        return false;
      }
    });
  }

  getFilterValue(value){
    this.itemsPerPage=value;
  }
  deletePost(post){
    let index=this.posts.indexOf(post);
    this.posts.splice(index,1);
    this.postsService.deletePost(post._id).subscribe(data=>{
      if(data.success){
        this.flashMessage.show(data.msg +" "+ post['title'],{cssClass:'alert-success',timeout:3000});        
      }
    },
    (err:Response)=>{
      this.posts.splice(index,0,post);
    })
    
  }
}