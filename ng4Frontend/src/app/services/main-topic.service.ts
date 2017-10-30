import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class MainTopicService {
  userToken
  constructor(
    private http:Http
  ) { }

  getAllMainTopic(){
    let headers=new Headers();
    headers.append('Content-type','application/json');
    return this.http.get('api/maintopics/all',{headers:headers})
      .map(res=>res.json());
  }

  createMaintopic(newMaintopic){
    let headers=new Headers();
    this.loadToken();
    headers.append('Authorization',this.userToken);
    headers.append('Content-type','application/json');
    return this.http.post('api/create/maintopic',newMaintopic,{headers:headers})
      .map(res=>res.json());
  }
  
  loadToken(){
    const token=localStorage.getItem('Zero_token');
    this.userToken= token;
  }
}


