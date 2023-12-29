// deposit.component.ts
import { Component } from '@angular/core';
import { BankService } from '../bank.service';
@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss'],
})
export class DepositComponent {
  amount!: string;
  bankName: string = '';
  returnValue: string = '';

  constructor(public bankService: BankService) {}

  deposit() {

    console.log('Bank Name:', this.bankService.bankName);
  console.log('Amount:', this.amount);


    if (this.bankService.bankName === 'none') {
      alert('Please select the bank');
      return;
    }
    if (Number(this.amount) < 0) {
      alert('Amount cannot be less than 0');
      return;
    }

    const amount = Number(this.amount);
    this.bankService.updateBalance(this.bankService.bankName, amount);

    this.returnValue = `Amount Deposited into ${this.bankService.bankName}`;
    console.log('Updated Bank Details:', this.bankService.bankDetails);
  }
}
