import { Component } from '@angular/core';
import { AmazonService } from '../amazon.service';

@Component({
  selector: 'app-acart4',
  templateUrl: './acart4.component.html',
  styleUrls: ['./acart4.component.css']
})
export class Acart4Component {
  public cart: number = 0;
  constructor (private _amazonService:AmazonService){

    _amazonService.getItemsCount().subscribe(
      (data:any)=>{
        this.cart = data;
      }
    )
  }

}
