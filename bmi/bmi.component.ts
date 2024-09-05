import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  public hgt:number = 0;
  public wgt:number = 0;
  public result:number = 0;

  calculate(){
    this.result = this.wgt / ((this.hgt/100)*(this.hgt/100));
  }

}
