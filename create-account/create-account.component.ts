import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankaccountService } from '../bankaccount.service';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  public accountForm:FormGroup = new FormGroup({
    account_name: new FormControl(),
    available_balance: new FormControl(),
    account_number: new FormControl(),
    city: new FormControl(),
    profie_picture: new FormControl(),
  })
  constructor(private _accountservice:BankaccountService){}
    create(){
      console.log(this.accountForm.value);
      this._accountservice.createAccount(this.accountForm.value).subscribe(
        (data:any)=>{
          alert("Created Successfully!!!");
          this.accountForm.reset();
        },
        (err:any)=>{
          alert("Creation Failed")
        }
      )
    }
  }

