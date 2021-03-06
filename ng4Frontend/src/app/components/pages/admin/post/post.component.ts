import { Subscription } from 'rxjs/Subscription';
import { CategoriesService } from './../../../../services/categories.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PostsService } from './../../../../services/posts.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit,OnDestroy {
  ckeditorContent:string='';
  titlePost:string='';
  categoryId:string='';
  category:Object={};
  createPostSubscription:Subscription;
  constructor(
    private flashMessage:FlashMessagesService,
    private postsService:PostsService,
    private route:ActivatedRoute,
    private router:Router,
    private categoryService:CategoriesService,
  ) {
    this.ckeditorContent = `<p>My HTML</p>`;
   }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => {
      this.categoryId=params.get('category_id');
      return this.categoryService.getContentCategory(this.categoryId)
    })
    .subscribe(data=>{
      if(data.success){
        this.category=data.category;
      }
    },(err)=>console.log(err));
  }
  ngOnDestroy(){
    if(this.createPostSubscription){
      this.createPostSubscription.unsubscribe();      
    }
  }
  createPost(){
    if(this.titlePost==='' || this.ckeditorContent===''){
      this.flashMessage.show('Pls fill all fields',{cssClass:'alert-danger',timeout:3000});
      return false;
    }
    if(!JSON.parse(localStorage.getItem('Zero_user'))){
      return false;
    }
    let author_id=JSON.parse(localStorage.getItem('Zero_user')).id;
    let newPost={
      title:this.titlePost,
      body:this.ckeditorContent,
      author_id:author_id,
      category_id:this.categoryId
    }
    this.createPostSubscription=this.postsService.createPost(newPost).subscribe(data=>{
      if(data.success){
        this.flashMessage.show('Created Post Successfully!',{cssClass:'alert-success',timeout:3000});
        this.titlePost='';
        this.ckeditorContent='';
        this.router.navigate(['/categories/'+this.categoryId]);
        return false;
      }else{
        this.flashMessage.show(data.msg,{cssClass:'alert-danger',timeout:3000});        
        return false;
      }
    })
  }
}
