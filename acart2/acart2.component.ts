import { Component } from '@angular/core';
import { AmazonService } from '../amazon.service';

@Component({
  selector: 'app-acart2',
  templateUrl: './acart2.component.html',
  styleUrls: ['./acart2.component.css']
})
export class Acart2Component {
  public cart:number=0;
  constructor (private _amazonService:AmazonService){
    _amazonService.getItemsCount().subscribe(
      (data:any)=>{
        this.cart = data;
      }
    )
  }

}
