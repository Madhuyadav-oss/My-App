import { Component } from '@angular/core';
import { AmazonService } from '../amazon.service';

@Component({
  selector: 'app-acart3',
  templateUrl: './acart3.component.html',
  styleUrls: ['./acart3.component.css']
})
export class Acart3Component {
  public cart:number=0;
  constructor (private _amazonService:AmazonService){
    _amazonService.getItemsCount().subscribe(
      (data:any)=>{
        this.cart = data;
      }
    )
  }

}
