import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo2',
  templateUrl: './todo2.component.html',
  styleUrls: ['./todo2.component.css']
})
export class Todo2Component {
  public text:string='';
  public time:string='';

  constructor(private _todoservice:TodoService){
    _todoservice.getText().subscribe(
      (data:any)=>{
        this.text=data;
      }
    )
    _todoservice.getTime().subscribe(
      (data:any)=>{
        this.time=data;
      }
    )
  }
}
