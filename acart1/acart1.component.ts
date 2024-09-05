import { Component } from '@angular/core';
import { AmazonService } from '../amazon.service';

@Component({
  selector: 'app-acart1',
  templateUrl: './acart1.component.html',
  styleUrls: ['./acart1.component.css']
})
export class Acart1Component {
  public cart:number=0;

  constructor(private _amazonService:AmazonService){}
addItems(){
  this._amazonService.addToCart();

}
}
