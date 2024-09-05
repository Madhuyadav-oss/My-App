import { Component } from '@angular/core';
import { StudentCardsService } from '../student-cards.service';

@Component({
  selector: 'app-student-cards',
  templateUrl: './student-cards.component.html',
  styleUrls: ['./student-cards.component.css']
})
export class StudentCardsComponent {
  public studentcards:any = [];
  public term:string = "";

  public column:string = "";
  public order:string = "";

  public count:number = 0;
  public page:number = 0;

  constructor(private _studentcardservice:StudentCardsService){
    _studentcardservice.getstudentcards().subscribe(
      (data:any)=>{
        this.studentcards = data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }
  fiiter(){
    this._studentcardservice.getFilterStudentCards(this.term).subscribe(
      (data:any)=>{
        this.studentcards = data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }
  sort(){
    this._studentcardservice.getSortedStudentCards(this.column,this.order).subscribe(
      (data:any)=>{
        this.studentcards = data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  
  }
  limit(){
    this._studentcardservice.getPaginationStudentCards(this.count, this.page).subscribe(
      (data:any)=>{
        this.studentcards = data;
      },
      (err:any)=>
        alert("internal server error")
    )
  }
  delete(id:string){
    this._studentcardservice.deleteStudentCards(id).subscribe(
      (data:any)=>{
        alert("deleted successfully");
        location.reload();
      },
      (err:any)=>{
        alert("deletion failed");
      }
    )
  }

}
