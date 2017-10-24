import { CheckOutPaypalService } from './services/check-out-paypal.service';
import { CheckOutStripeService } from './services/check-out-stripe.service';
import { UploadImageService } from './services/upload-image.service';
import { CommentsService } from './services/comments.service';
import { UserCreatedPostGuard } from './guards/user-created-post.guard';
import { AdminGuard } from './guards/admin.guard';
import { PostsService } from './services/posts.service';
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
import { RouterModule, ParamMap } from '@angular/router'; 
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ProfileComponent } from './components/users/profile/profile.component';
import { ChatComponent } from './components/chat/chat.component';
import { UserOnlineComponent } from './components/user-online/user-online.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CategoryComponent } from './components/pages/admin/dashboard/category.component';
import { MainTopicComponent } from './components/pages/home/main-topic/main-topic.component';
import { UserCreatedCategoryComponent } from './components/pages/home/main-topic/user-created-category/user-created-category.component';
import { UserInfoComponent } from './components/pages/users/user-info/user-info.component';
import { PostComponent } from './components/pages/admin/post/post.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { EachPostComponent } from './components/pages/each-post/each-post.component';
import { EditPostComponent } from './components/pages/admin/edit-post/edit-post.component';
import { CommentsComponent } from './components/pages/each-post/comments/comments.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { EditCommentComponent } from './components/pages/each-post/comments/edit-comment/edit-comment.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductComponent } from './components/pages/shop/product/product.component';
import { CheckOutComponent } from './components/pages/shop/check-out/check-out.component';
import { CommonModule } from '@angular/common';
import { SuccessCheckoutComponent } from './components/pages/shop/success-checkout/success-checkout.component';
import { UserCreatedPostComponent } from './components/pages/posts/user-created-post/user-created-post.component';


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
    path:'create/admin' , component: CategoryComponent, canActivate:[AdminGuard]
  },
  {
    path:'create/post/:category_id' , component: PostComponent , canActivate: [UserGuard]
  },
  {
    path:'update/post/:post_id' , component: EditPostComponent,canActivate:[UserCreatedPostGuard]
  },
  {
    path:'categories/:category_id', component : PostsComponent
  },
  {
    path:'user/info/:user_id', component : UserInfoComponent
  },
  {
    path:'posts/:post_id', component : EachPostComponent
  },
  {
    path:'shop',component: ShopComponent
  },{
    path:'product/checkout', component :CheckOutComponent, canActivate: [UserGuard]
  },{
    path:'checkout/success',component:SuccessCheckoutComponent,canActivate: [UserGuard]
  },
  {
    path:'api/checkout/success' ,component:SuccessCheckoutComponent,canActivate: [UserGuard]
  },
  {
    path:"**", component:NotFoundComponent
  },
  
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
    PostsComponent,
    UserCreatedCategoryComponent,
    UserInfoComponent,
    PostComponent,
    EachPostComponent,
    EditPostComponent,
    CommentsComponent,
    ShopComponent,
    EditCommentComponent,
    NotFoundComponent,
    ProductComponent,
    CheckOutComponent,
    SuccessCheckoutComponent,
    UserCreatedPostComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(Routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FlashMessagesModule,
    NgxPaginationModule,
    CKEditorModule,
    
  ],
  providers: [CheckOutPaypalService,CheckOutStripeService,UploadImageService,CommentsService,UserCreatedPostGuard,UserService,UserGuard,SharedService,CategoriesService,MainTopicService,PostsService,AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
