import { SharedService } from './services/shared.service';
import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  usersOnline;
  usersOffline;
  usersInChat;
  socket;
  socket_id;
  showForum:boolean=false;
  showGroup:boolean=true;
  username:string="";
  forumMsg:string="";
  groupMsg:string="";
  right=170;
  messages=[];
  status:boolean=false;
  newMessage:boolean=false;

  constructor(
    private userService:UserService,
    private sharedService:SharedService
  ){

    this.socket=io();
    this.socket.on('socket_id',(data)=>{
      this.socket_id=data.socket_id;
      if(this.status){
        this.socket.emit("addUserToChat",{username:this.username,socket_id:this.socket_id})
      }
    });


    this.socket.on("showOnlineUser",(users)=>{
      // console.log(users.userOnline);

      this.usersInChat=JSON.parse(users.userOnline).map((onlineU)=>{
        return onlineU.username;
      })

      // if(this.allUsers){ 
      //   this.usersOffline=this.allUsers.filter((user)=>{
      //     if(this.usersInChat.indexOf(user.username)==-1){
      //       return true;
      //     }
      //   });
      //   this.usersOnline=this.allUsers.filter((user)=>{
      //     if(this.usersInChat.indexOf(user.username)>-1){
      //       return true;
      //     }
      //   });
      // }
    })
    this.socket.on('forumSendMessage',(data)=>{
      this.messages.push(data);
      // console.log(this.messages);
      this.newMessage=true;
    });

    this.socket.on('userLeft',(data)=>{
      let username=data.map(user=>{return user.username});
      this.messages.push({type:'info',username:username, msg:' disconnected!'});
      // console.log(this.messages);
    })
    
    this.socket.on('userIn',(data)=>{
      this.messages.push({type:'info',username:data.username, msg:' connected!'});
      // console.log(this.messages);
    });
  }
  messageCome(data){
    this.socket.emit('forumSendMessage',{ type:"msg" , username:this.username,msg:data});
  }
  
  takeUsersOnline(data){
   this.usersInChat=this.usersInChat;
  //  console.log(this.usersInChat);
  }

  seen(seen){
    this.newMessage=seen;
  }
  ngOnInit(){
    this.sharedService.checkUserOnLocal();    
    this.sharedService.currentStatusLogin.subscribe((status)=>{
      this.status=status;
      if(status){
        if(!JSON.parse(localStorage.getItem('Zero_user'))) return false;
        let username=JSON.parse(localStorage.getItem('Zero_user')).username;
        this.username=username;
        if(this.socket_id){
          this.socket.emit("addUserToChat",{username:this.username,socket_id:this.socket_id});
          // console.log("false");
        }
      }else{
        if(this.socket_id){
          this.socket.emit('removeUser',{username:this.username, socket_id: this.socket_id});
          // console.log("false");
        }
      }
    });
    
  }
}
