import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriesService {
  userToken;
  constructor(
    private http:Http
  ) { }

  createCategory(newCategory){
    let headers=new Headers();
    this.loadToken();
    headers.append('Authorization',this.userToken);
    headers.append('Content-type','application/json');
    return this.http.post('api/create/category',newCategory,{headers:headers})
      .map(res=>res.json());
  }
  getAllCategories(){
    let headers=new Headers();
    headers.append('Content-type','application/json');
    return this.http.get('api/categories/all',{headers:headers})
      .map(res=>res.json());
  }
  getAllCategoryWithSpecificTopicId(topic_id){
    let headers=new Headers();
    headers.append('Content-type','application/json');
    return this.http.get('api/categories/'+topic_id,{headers:headers})
      .map(res=>res.json());
  }

  getContentCategory(category_id){
    let headers=new Headers();
    headers.append('Content-type','application/json');
    return this.http.get('api/categories/specific/'+category_id,{headers:headers})
      .map(res=>res.json());
  }

  loadToken(){
    const token=localStorage.getItem('Zero_token');
    this.userToken= token;
  }
}
