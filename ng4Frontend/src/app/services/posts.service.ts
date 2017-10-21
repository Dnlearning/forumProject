
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
  userToken;
  constructor(
    private http:Http
  ) { }

  createPost(newPost){
    let headers=new Headers();
    this.loadToken();
    headers.append('Authorization',this.userToken);
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
  getAllPosts(){
    let headers=new Headers();
    headers.append('Content-type','application/json');
    return this.http.get('http://localhost:3000/api/posts/for/all',{headers:headers})
      .map(res=>res.json());
  }

  getHighestViews(){
    let headers=new Headers();
    headers.append('Content-type','application/json');
    return this.http.get('http://localhost:3000/api/posts/highest/views',{headers:headers})
      .map(res=>res.json());
  }


  deletePost(id){
    let headers=new Headers();
    this.loadToken();
    headers.append('Authorization',this.userToken);
    headers.append('Content-type','application/json');
    return this.http.delete('http://localhost:3000/api/posts/delete/'+id,{headers:headers})
      .map(res=>res.json());
  }
  updatePost(id,newPost){
    let headers=new Headers();
    this.loadToken();
    headers.append('Authorization',this.userToken);
    
    headers.append('Content-type','application/json');
    return this.http.put('http://localhost:3000/api/posts/update/'+id,newPost,{headers:headers})
      .map(res=>res.json());
  }



  loadToken(){
    const token=localStorage.getItem('Zero_token');
    this.userToken= token;
  }
  
}
