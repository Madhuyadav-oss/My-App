import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo1',
  templateUrl: './todo1.component.html',
  styleUrls: ['./todo1.component.css']
})
export class Todo1Component {
  public text:string='';
  public time:string='';

  constructor(private _todoservice:TodoService){}
  create(){
    this._todoservice.setText(this.text);
    this._todoservice.setText(this.time);
  }
  reset(){
    this.text="";
    this.time=""; 
  }

}
