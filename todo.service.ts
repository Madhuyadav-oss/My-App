import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private text:string='';
  private date:string='';

private textSubject:BehaviorSubject<string> = new BehaviorSubject(this.text);
private timeSubject:BehaviorSubject<string> = new BehaviorSubject(this.date);
  constructor() {}
  setText(textValue:any){
    this.textSubject.next(textValue);
  }
  getText(){
    return this.textSubject;
  }
 setTime(dateValue:any){
  this.timeSubject.next(dateValue);
 }
 getTime(){
  return this.timeSubject; 
 }
  
  }

