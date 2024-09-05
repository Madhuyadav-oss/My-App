import { Component } from '@angular/core';
import { AmazonService } from '../amazon.service';

@Component({
  selector: 'app-amazon-cart',
  templateUrl: './amazon-cart.component.html',
  styleUrls: ['./amazon-cart.component.css']
})
export class AmazonCartComponent {
  constructor (private _amazonService:AmazonService){}

}
