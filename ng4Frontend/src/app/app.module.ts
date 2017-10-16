import { PostsComponent } from './components/pages/posts/posts.component';
import { MainTopicService } from './services/main-topic.service';
import { CategoriesService } from './services/categories.service';
import { SharedService } from './services/shared.service';
import { UserGuard } from './guards/user.guard';
import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarTopComponent } from './components/navbar-top/navbar-top.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ProfileComponent } from './components/users/profile/profile.component';
import { ChatComponent } from './components/chat/chat.component';
import { UserOnlineComponent } from './components/user-online/user-online.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CategoryComponent } from './components/pages/admin/category/category.component';
import { MainTopicComponent } from './components/pages/home/main-topic/main-topic.component';


const Routes=[
  {
    path:'',component: HomeComponent
  },
  {
    path:'register',component: RegisterComponent
  },
  {
    path:'login',component: LoginComponent
  },
  {
    path:'profile',component: ProfileComponent, canActivate: [UserGuard]
  },
  {
    path:'create/category' , component: CategoryComponent
  },
  {
    path:':categories_id', component : PostsComponent
  }
];



@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    ChatComponent,
    UserOnlineComponent,
    CategoryComponent,
    MainTopicComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FlashMessagesModule,
    NgxPaginationModule
  ],
  providers: [UserService,UserGuard,SharedService,CategoriesService,MainTopicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
