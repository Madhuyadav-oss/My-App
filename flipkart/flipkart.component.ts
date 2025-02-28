import { Component } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {

  public flipkart:any = [];
  constructor(private _flipkartservice:FlipkartService){
    _flipkartservice.getflipkart().subscribe(
      (data:any)=>{
        this.flipkart = data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }
}
