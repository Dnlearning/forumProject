import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class CommentsService {
  userToken;
  constructor(
    private http:Http
  ) { }

  createComment(newComment){
    let headers=new Headers();
    this.loadToken();
    headers.append('Authorization',this.userToken);
    headers.append('Content-type','application/json');
    return this.http.post('api/create/comment',newComment,{headers:headers})
      .map(res=>res.json());
  }

  getAllCommentsWithSpecificPostId(post_id){
    let headers=new Headers();
    headers.append('Content-type','application/json');
    return this.http.get('api/comments/specific/'+post_id,{headers:headers})
      .map(res=>res.json());
  }
  
  deleteComment(id){
    let headers=new Headers();
    this.loadToken();
    headers.append('Authorization',this.userToken);
    headers.append('Content-type','application/json');
    return this.http.delete('api/comments/delete/'+id,{headers:headers})
      .map(res=>res.json());
  }

  updateComment(id,newComment){
    let headers=new Headers();
    this.loadToken();
    headers.append('Authorization',this.userToken);
    headers.append('Content-type','application/json');
    return this.http.put('api/comments/update/'+id,newComment,{headers:headers})
      .map(res=>res.json());
  }

  getCommentsUserCreated(user_id){
    let headers=new Headers();
    headers.append('Content-type','application/json');
    return this.http.get('api/comments/howmany/'+user_id,{headers:headers})
      .map(res=>res.json());
  }

  loadToken(){
    const token=localStorage.getItem('Zero_token');
    this.userToken= token;
  }

}
