import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-pipes',
  templateUrl: './directives-pipes.component.html',
  styleUrls: ['./directives-pipes.component.css']
})
export class DirectivesPipesComponent {
  public ages: number[] = [10, 20, 30, 40, 50];
  public states: string[] = ["Telangana", "Andhra", "Karnataka", "Kerala"]


  public users: any = [
    { name: 'a', age: 10, phone: 9897454, marks: 80 },
    { name: 'b', age: 15, phone: 8875245, marks: 40 },
    { name: 'c', age: 16, phone: 6845454, marks: 20 },
    { name: 'd', age: 50, phone: 8874225, marks: -33 },
    { name: 'e', age: 60, phone: 4745524, marks: 38 },
  ]
  public today: any = new Date();
}


