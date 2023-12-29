// bank.service.ts
import { Injectable } from '@angular/core';
import { Bank } from './interfaceAndType';

@Injectable({
  providedIn: 'root',
})
export class BankService {
  bankDetails: Bank = {
    sbi: 0,
    iob: 0,
    ib: 0,
  };

  bankName!: string

  updateBalance(bankName: string, amount: number): void {
    switch(bankName){
    case 'sbi':
        this.bankDetails.sbi += amount;
        break;
      case 'iob':
        this.bankDetails.iob += amount;
        break;
      case 'ib':
        this.bankDetails.ib += amount;
        break;
      default: 
        alert("Please Select Bank Name")  
    }

  }
}
