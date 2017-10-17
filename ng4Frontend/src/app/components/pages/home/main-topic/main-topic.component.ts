import { CategoriesService } from './../../../../services/categories.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'main-topic',
  templateUrl: './main-topic.component.html',
  styleUrls: ['./main-topic.component.css']
})
export class MainTopicComponent implements OnInit {
  @Input('topic') topic;
  categories;
  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {

    this.categoriesService.getAllCategoryWithSpecificTopicId(this.topic._id).subscribe(data=>{
      this.categories=data.categories;
    },
    (err)=>{console.log(err);})
  }

}
