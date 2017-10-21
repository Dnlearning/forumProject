import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { UserService } from './../../../../services/user.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MainTopicService } from './../../../../services/main-topic.service';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoriesService } from './../../../../services/categories.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/observable/combineLatest';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit,OnDestroy {
  createCategoryForm;
  createMaintopicForm;
  mainTopics:String[]=[];
  switch:string='user';
  allUsers=[];
  selectedIndex:number=0;
  userInfo:Object={};
  showInfo:boolean=false;
  selectedUser_id:string='';

  createMaintopicSubscription:Subscription;
  createCategorySubscription:Subscription;
  infosSubscription:Subscription;
  changeInfoSubscription:Subscription;
  constructor(
    fb:FormBuilder,
    private categoryService:CategoriesService,
    private userService:UserService,
    private maintopicService:MainTopicService,
    private flashMsg:FlashMessagesService,
    private route:Router,
  ) {
    this.createCategoryForm=fb.group({
      topic_id:['', Validators.required],
      category:['',Validators.required]
    });
    this.createMaintopicForm=fb.group({
      maintopic:['',Validators.required]
    });
   }

  createMainTopic(cm){
    let user_id=JSON.parse(localStorage.getItem('Zero_user')).id;
    if(!user_id){
      return false;
    }
    let newMaintopic={
      topic: cm.value.maintopic,
      create_user: user_id
    }
    this.createMaintopicSubscription=this.maintopicService.createMaintopic(newMaintopic).subscribe(
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
    this.createCategorySubscription=this.categoryService.createCategory(newCategory).subscribe(
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
    let username=JSON.parse(localStorage.getItem('Zero_user')).username;
    this.infosSubscription=Observable.combineLatest([
      this.maintopicService.getAllMainTopic(),
      this.userService.getAllUser(username),
    ])
    .subscribe(data=>{
      this.mainTopics=data[0].topics;
      this.allUsers=data[1];
    })
    
  }
  ngOnDestroy(){
    this.infosSubscription.unsubscribe();
    if(this.createMaintopicSubscription){
      this.createMaintopicSubscription.unsubscribe();
    }
    if(this.createCategorySubscription){
      this.createCategorySubscription.unsubscribe();
    }
    if(this.changeInfoSubscription){
      this.changeInfoSubscription.unsubscribe();      
    }
  }
  get maintopic(){
    return this.createMaintopicForm.get('maintopic');
  }

  get category(){
    return this.createCategoryForm.get('category');
  }

  get topic_id(){
    return this.createCategoryForm.get('topic_id');
  }

  getFilterValue(user_id){
    this.selectedUser_id=user_id;
    let idArray=this.allUsers.map(user=> {return user._id});

    this.selectedIndex=idArray.indexOf(user_id);
    this.userInfo=this.allUsers[this.selectedIndex];
    this.showInfo=true;
  }

  setAdmin(){
    this.allUsers[this.selectedIndex].roles=["user","admin"];
    this.userInfo=this.allUsers[this.selectedIndex];
    this.changeInfoSubscription=this.userService.updateUserInfo(this.selectedUser_id,{roles:["user","admin"]})
    .subscribe(data=>{

    },
    (err:Response)=>{
      this.allUsers[this.selectedIndex].roles=["user"];
      this.userInfo=this.allUsers[this.selectedIndex];
    })
  }

  removeAdmin(){
    this.allUsers[this.selectedIndex].roles=["user"];
    this.userInfo=this.allUsers[this.selectedIndex];
    this.userService.updateUserInfo(this.selectedUser_id,{roles:["user"]})
    .subscribe(data=>{
      
    },
    (err:Response)=>{
      this.allUsers[this.selectedIndex].roles=["user","admin"];
      this.userInfo=this.allUsers[this.selectedIndex];
    })
  }


}
