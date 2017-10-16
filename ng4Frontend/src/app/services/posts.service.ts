
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(
    private http:Http
  ) { }

  createPost(newPost){
    let headers=new Headers();
    headers.append('Content-type','application/json');
    return this.http.post('http://localhost:3000/api/create/post',newPost,{headers:headers})
      .map(res=>res.json());
  }
  
  getAllPostsSpecificCategory(category_id){
    let headers=new Headers();
    headers.append('Content-type','application/json');
    return this.http.get('http://localhost:3000/api/posts/'+category_id,{headers:headers})
      .map(res=>res.json());
  }

  getPostContent(post_id){
    let headers=new Headers();
    headers.append('Content-type','application/json');
    return this.http.get('http://localhost:3000/api/posts/specific/'+post_id,{headers:headers})
      .map(res=>res.json());
  }

}
