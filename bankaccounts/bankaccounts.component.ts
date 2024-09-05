import { Component } from '@angular/core';
import { BankaccountService } from '../bankaccount.service';

@Component({
  selector: 'app-bankaccounts',
  templateUrl: './bankaccounts.component.html',
  styleUrls: ['./bankaccounts.component.css']
})
export class BankaccountsComponent {

  public accounts:any = [];
  public term:string = "";

  public column:string = "";
  public order:string = "";

  public count:number = 0;
  public page:number = 0;

  

  constructor(private _bankAccountservice:BankaccountService){
    _bankAccountservice.getbankaccounts().subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("Internal server erroe");
      }
    )
  }
  filter(){
    this._bankAccountservice.getFilterBankAccounts(this.term).subscribe(
      (data:any)=>{
        this.accounts = data;
        
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }
  sort(){
    this._bankAccountservice.getSortedBankAccounts(this.column, this.order).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }
  limit(){
    this._bankAccountservice.getPaginationBankAccounts(this.count, this.page).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }
  delete(id:string){
    this._bankAccountservice.deleteBankAccounts(id).subscribe(
      (data:any)=>{
        alert("deleted successfully!!!");
        location.reload();
      },
      (err:any)=>{
        alert("deletion failed");
      }
    )
  }
  
}
