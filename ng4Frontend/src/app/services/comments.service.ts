import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class CommentsService {

  constructor(
    private http:Http
  ) { }

  createComment(newComment){
    let headers=new Headers();
    headers.append('Content-type','application/json');
    return this.http.post('http://localhost:3000/api/create/comment',newComment,{headers:headers})
      .map(res=>res.json());
  }

  getAllCommentsWithSpecificPostId(post_id){
    let headers=new Headers();
    headers.append('Content-type','application/json');
    return this.http.get('http://localhost:3000/api/comments/specific/'+post_id,{headers:headers})
      .map(res=>res.json());
  }
  

}
