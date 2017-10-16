import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class MainTopicService {

  constructor(
    private http:Http
  ) { }

  getAllMainTopic(){
    let headers=new Headers();
    headers.append('Content-type','application/json');
    return this.http.get('http://localhost:3000/api/maintopics/all',{headers:headers})
      .map(res=>res.json());
  }

}


