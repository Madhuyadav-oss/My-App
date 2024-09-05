import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component {
public count: number=0;

  constructor(private _commonSerivice:CommonService){}
  countChange(){
    this._commonSerivice.setCount(this.count);
  }
  add(){
    this._commonSerivice.addToCart();
  }
  

}
