import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  public age:number = 20;

  public name:string = 'Madhu'
  public isIndian:boolean= true;

  public isValid:boolean = true;
  //public url:string = '/assets/7866.png_1200.png'

  public phone:string = "+91 "

  submit(){
    alert("submitted!!!!");
  }
  typing(){
    alert("typing...");
  }
}
