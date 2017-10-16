import { FlashMessagesService } from 'angular2-flash-messages';
import { PostsService } from './../../../services/posts.service';
import { ActivatedRoute,ParamMap } from '@angular/router';
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
  constructor(
    private route:ActivatedRoute,
    private postsService: PostsService,
    private flashMessage:FlashMessagesService
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

}
