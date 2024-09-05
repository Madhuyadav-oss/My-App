import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
  public radius:number=0;
  public result:string="";
  area(){
    this.result=(Math.PI*this.radius).toFixed(2)
  }
  perimter(){
    this.result=(2*Math.PI*this.radius).toFixed(2)
  }

}
