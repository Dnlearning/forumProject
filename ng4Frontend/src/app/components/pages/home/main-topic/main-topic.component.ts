import { Subscription } from 'rxjs/Subscription';
import { CategoriesService } from './../../../../services/categories.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'main-topic',
  templateUrl: './main-topic.component.html',
  styleUrls: ['./main-topic.component.css']
})
export class MainTopicComponent implements OnInit,OnDestroy {
  @Input('topic') topic;
  categories;
  categorySubscription :Subscription;
  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {

    this.categorySubscription=this.categoriesService.getAllCategoryWithSpecificTopicId(this.topic._id).subscribe(data=>{
      this.categories=data.categories;
    },
    (err)=>{console.log(err);})
  }
  ngOnDestroy(){
    this.categorySubscription.unsubscribe();
  }
}
