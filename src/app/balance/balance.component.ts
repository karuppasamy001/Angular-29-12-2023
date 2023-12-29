import { BankService } from '../bank.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent {
  balanceAmount: string = ""
  constructor(public bankService: BankService){}

  viewBalance(){
    switch(this.bankService.bankName){
      case 'sbi':
      this.balanceAmount = String(this.bankService.bankDetails.sbi)
      break
      case 'iob':
      this.balanceAmount = String(this.bankService.bankDetails.iob)
      break
      case 'ib':
      this.balanceAmount = String(this.bankService.bankDetails.ib)
      break
    }
  }
}
