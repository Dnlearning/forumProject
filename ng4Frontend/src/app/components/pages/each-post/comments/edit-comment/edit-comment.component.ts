
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {
  @Input('comment') editComment=[];
  @Input('index') indexCommentEdit:number=0;
  @Output('update') changeComment=new EventEmitter();
  newbody:string='';
  constructor(
  ) { }

  ngOnInit() {
    console.log(this.indexCommentEdit);
    this.newbody=this.editComment['body'];
  }
  updateComment(){
    this.editComment['body']=this.newbody;
    this.changeComment.emit({cancel:false,index:this.indexCommentEdit,content:this.editComment});
    this.editComment=[];
  }
  cancel(){
    this.changeComment.emit({cancel:true,index:this.indexCommentEdit,content:this.editComment});
  }
}
