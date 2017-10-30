import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'user-online',
  templateUrl: './user-online.component.html',
  styleUrls: ['./user-online.component.css']
})
export class UserOnlineComponent implements OnInit {
  hide:boolean=true;
  @Input('usersOnline') usersOnline;
  @Output('renderUserOnline') renderUserOnline=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  showTapChat(){
    this.hide=(this.hide)?false:true;
    if(!this.hide){
      this.renderUserOnline.emit({key:'render'});
    }
  }
}
