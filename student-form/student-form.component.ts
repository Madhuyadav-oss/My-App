import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  public studentForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    class: new FormControl('',[Validators.required,Validators.min(3),Validators.max(6)]),
    fatherName: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    dob: new FormControl('',[Validators.required]),
    address: new FormGroup({
      addressLine: new FormControl('',[Validators.required]),
      city: new FormControl('',[Validators.required,Validators.minLength(3)]),
      state: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      pincode: new FormControl('',[Validators.required,Validators.min(10000),Validators.max(666666)]),

    }),
    type: new FormControl(),
    marks: new FormArray([])
  });
  get marksFormArray(){
    return this.studentForm.get('marks') as FormArray;
  }
  studentprogress(){
    this.marksFormArray.push(
      new FormGroup({
        class: new FormControl('',[Validators.required,Validators.min(3),Validators.max(6)]),
        year: new FormControl('',[Validators.required]),
        percentage: new FormControl('',[Validators.required,Validators.min(0),Validators.max(100)]),
      })
    )
  }
  delete(i:number){
    this.marksFormArray.removeAt(i);
  }
constructor(){
  this.studentForm.get('type')?.valueChanges.subscribe(
    (data:any)=>{
      if(data=='dayScholor'){
        this.studentForm.addControl('busfee',new FormControl());
        this.studentForm.removeControl('hostelFee');
      }
      else if(data='residential'){
        this.studentForm.addControl('busfee',new FormControl());
        this.studentForm.removeControl('busfee');
      }
    }
  )
}
submit(){
  console.log(this.studentForm);
}
}
