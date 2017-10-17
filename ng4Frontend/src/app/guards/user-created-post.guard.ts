import { PostsService } from './../services/posts.service';
import { UserService } from './../services/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
@Injectable()
export class UserCreatedPostGuard implements CanActivate {
  constructor(
    private userService:UserService,
    private route:Router,
    private postService: PostsService
  ){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let post_id=state.url.split('/')[3];
      let author_id:string='';
      return new Promise((resolve,reject)=>{
        this.postService.getPostContent(post_id).subscribe(data=>{
          author_id=data.post[0].author_id;
          if(this.userService.isUserCreatedPost(author_id)){
            resolve(true);
          }else{
            this.route.navigate(['/']);
            resolve(false);        
          }
        })
      })
       
  }
}
