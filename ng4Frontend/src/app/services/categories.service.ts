import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriesService {

  constructor(
    private http:Http
  ) { }

  createCategory(newCategory){
    let headers=new Headers();
    headers.append('Content-type','application/json');
    return this.http.post('http://localhost:3000/create/category',newCategory,{headers:headers})
      .map(res=>res.json());
  }
  getAllCategories(){
    let headers=new Headers();
    headers.append('Content-type','application/json');
    return this.http.get('http://localhost:3000/categories/all',{headers:headers})
      .map(res=>res.json());
  }
  getSpecificCategory(topic_id){
    let headers=new Headers();
    headers.append('Content-type','application/json');
    return this.http.get('http://localhost:3000/categories/'+topic_id,{headers:headers})
      .map(res=>res.json());
  }
}
