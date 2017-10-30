import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Input('marginRight') marginRight=0;
  @Output('sendMessage') sendMessage=new EventEmitter();
  @Input('aMessage')  messages=[];
  @Input('username') username="";
  @Output('seen') seen=new EventEmitter();
  msg:string="";
  hide:boolean=true;
  @Input('newMessage') newMessage:boolean=false;

  constructor() { }

  ngOnInit() {
    document.getElementById('chat-box').style.right=this.marginRight+ "px";
  }

  sendMsg(){
    this.sendMessage.emit(this.msg);
    this.msg="";
  }

  showTapChat(){
    this.hide=(this.hide)?false:true;
    if(this.hide){
      this.seen.emit(false);
    }
  }
}
