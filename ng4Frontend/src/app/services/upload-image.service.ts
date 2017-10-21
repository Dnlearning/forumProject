import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UploadImageService {
  userToken;
  constructor(
    private http:Http
  ) { }


  loadToken(){
    const token=localStorage.getItem('Zero_token');
    this.userToken= token;
  }
}
