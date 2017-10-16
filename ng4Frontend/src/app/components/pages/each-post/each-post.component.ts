import { FlashMessagesService } from 'angular2-flash-messages';
import { PostsService } from './../../../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-each-post',
  templateUrl: './each-post.component.html',
  styleUrls: ['./each-post.component.css']
})
export class EachPostComponent implements OnInit {
  post:Object={};
  constructor(
    private route:ActivatedRoute,
    private postService:PostsService,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.postService.getPostContent(params.get('post_id')))
    .subscribe(data=>{
      if(data.success) {
        this.post=data.post[0];
        document.getElementById('body-post').innerHTML=data.post[0].body;
      }else{
        this.flashMessage.show(data.msg,{cssClass:'alert-danger',timeout:3000});
        return false;
      }
    },(err)=>console.log(err));
  }

}
