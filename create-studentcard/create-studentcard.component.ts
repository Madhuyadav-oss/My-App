import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentCardsService } from '../student-cards.service';

@Component({
  selector: 'app-create-studentcard',
  templateUrl: './create-studentcard.component.html',
  styleUrls: ['./create-studentcard.component.css']
})
export class CreateStudentcardComponent {
  public studentcardForm:FormGroup = new FormGroup({
    name: new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
    dob: new FormControl(),
    profile_picture: new FormControl(),
    email: new FormControl(),
    school_logo: new FormControl(),
    school_name: new FormControl(),
    school_city: new FormControl(),
    school_pin: new FormControl(),
  })
  constructor(private _studentcardservice:StudentCardsService){}
  create(){
    console.log(this.studentcardForm.value);
    this._studentcardservice.createStudentCard(this.studentcardForm.value).subscribe(
      (data:any)=>{
        alert("Created Successfully!!!");
        this.studentcardForm.reset();
      },
      (err:any)=>{
        alert("Creation Failed")
      }
    )
  }

}
