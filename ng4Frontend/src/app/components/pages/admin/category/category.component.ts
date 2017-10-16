import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MainTopicService } from './../../../../services/main-topic.service';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoriesService } from './../../../../services/categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  createCategoryForm;
  mainTopics:String[]=[];
  constructor(
    fb:FormBuilder,
    private categoryService:CategoriesService,
    private maintopicService:MainTopicService,
    private flashMsg:FlashMessagesService,
    private route:Router
  ) {
    this.createCategoryForm=fb.group({
      topic_id:['', Validators.required],
      category:['',Validators.required]
    });
   }
  createCategory(cC){
    let user_id=JSON.parse(localStorage.getItem('Zero_user')).id;
    if(!user_id){
      this.flashMsg.show('Check Your LocalStorage!',{ cssClass: 'alert-danger',timeout: 3000})
      return false;
    }
    let newCategory={
      category:cC.value.category,
      topic_id:cC.value.topic_id,
      create_user:user_id
    }
    this.categoryService.createCategory(newCategory).subscribe(
      data=>{
        if(data.success){
          this.flashMsg.show(data.msg,{ cssClass: 'alert-success',timeout: 3000})          
        }else{
          this.flashMsg.show(data.msg,{ cssClass: 'alert-danger',timeout: 3000})                    
        }
        this.createCategoryForm.reset();
      }
    );
  }
  ngOnInit() {
    this.maintopicService.getAllMainTopic()
      .subscribe(data=>{
        console.log(data);
        this.mainTopics=data.topics;
      });
  }

  get category(){
    return this.createCategoryForm.get('category');
  }

  get topic_id(){
    return this.createCategoryForm.get('topic_id');
  }

}
