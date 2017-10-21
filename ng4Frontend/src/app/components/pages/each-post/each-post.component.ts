import { Subscription } from 'rxjs/Subscription';
import { CategoriesService } from './../../../services/categories.service';
import { UserService } from './../../../services/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { PostsService } from './../../../services/posts.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-each-post',
  templateUrl: './each-post.component.html',
  styleUrls: ['./each-post.component.css']
})
export class EachPostComponent implements OnInit, OnDestroy {
  post:Object={};
  post_id:string='';
  author:string='';
  categoryName:string='';
  postSubscription:Subscription;
  userSubscription:Subscription;
  categorySubscription:Subscription;

  constructor(
    private route:ActivatedRoute,
    private postService:PostsService,
    private flashMessage:FlashMessagesService,
    private userService:UserService,
    private router:Router,
    private categoryService:CategoriesService
  ) { }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => {
      this.post_id=params.get('post_id');
      return this.postService.getPostContent(this.post_id);
    })
    .subscribe(data=>{
      if(data.success) {
        this.post=data.post;
        // console.log(this.post);
        document.getElementById('body-post').innerHTML=data.post.body;
        this.userSubscription=this.userService.getUserInfor(this.post['author_id']).subscribe(data=>{
          this.author=data.user_info.username;
        })
        this.categorySubscription=this.categoryService.getContentCategory(this.post['category_id']).subscribe(data=>{
          this.categoryName=data.category.category;
          // console.log(data);
        });
      }else{
        this.flashMessage.show(data.msg,{cssClass:'alert-danger',timeout:3000});
        return false;
      }
    },(err)=>console.log(err));
  }
  ngOnDestroy(){
    this.userSubscription.unsubscribe();
    this.categorySubscription.unsubscribe();
    if(this.postSubscription){
      this.postSubscription.unsubscribe();
    }
  }

  deletePost(id){
    this.postSubscription=this.postService.deletePost(id).subscribe(data=>{
      if(data.success){
        this.flashMessage.show(data.msg +" "+ this.post['title'],{cssClass:'alert-success',timeout:3000});
        this.router.navigate(['/categories/'+this.post['category_id']]);
      }
    },(error:Response)=>{
      console.log(error);
    })
  }
  editPost(id){
    this.router.navigate(['/update/post/'+id]);
  }

}
