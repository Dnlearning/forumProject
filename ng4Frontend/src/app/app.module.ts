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
  }
];



@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FlashMessagesModule
  ],
  providers: [UserService,UserGuard,SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
