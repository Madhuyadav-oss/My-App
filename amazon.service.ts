import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmazonService {

  private cartSubject:BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { }

  setCart(value:number){
    this.cartSubject.next(value);
  }
  getCart(){
    return this.cartSubject;
  }
  private addItemsCount=0;
  private addItemsCountsubject:BehaviorSubject<number>=new BehaviorSubject(this.addItemsCount);
  
  addToCart(){
    this.addItemsCount++;
    this.addItemsCountsubject.next(this.addItemsCount);
  }
  getItemsCount(){
    return this.addItemsCountsubject;
    
  }
}
