
import { CategoriesService } from './../../../../services/categories.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PostsService } from './../../../../services/posts.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  ckeditorContent:string='';
  titlePost:string='';
  postId:string='';
  author_id:string='';
  category_id:string='';
  constructor(
    private flashMessage:FlashMessagesService,
    private postsService:PostsService,
    private route:ActivatedRoute,
    private router:Router,
  ) {
    this.ckeditorContent = `<p>My HTML</p>`;
   }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.postsService.getPostContent(params.get('post_id')))
    .subscribe(data=>{
      this.postId=data.post[0]._id;
      this.titlePost=data.post[0].title;
      this.ckeditorContent=data.post[0].body;
      this.author_id=data.post[0].author_id;
      this.category_id=data.post[0].category_id;
    },(err)=>console.log(err));
    
  }

  updatePost(){

    let newPost={
      title:this.titlePost,
      body:this.ckeditorContent,
      author_id:this.author_id,
      category_id:this.category_id
    }
    // console.log(this.postId);
    this.postsService.updatePost(this.postId,newPost).subscribe(data=>{
      if(data.success){
        this.flashMessage.show('updated Post ' + this.titlePost, {cssClass:'alert alert-success',timeout:2000});
        this.router.navigate(['/categories/'+this.category_id]);
      }else{
        this.flashMessage.show(data.msg, {cssClass:'alert alert-danger',timeout:2000});
        return false;
      }
    },
    (err:Response)=>{
      console.log(err);
    })
  }

  
}
