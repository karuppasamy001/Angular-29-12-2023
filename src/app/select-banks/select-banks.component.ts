// select-banks.component.ts
import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-select-banks',
  templateUrl: './select-banks.component.html',
  styleUrls: ['./select-banks.component.scss'],
})
export class SelectBanksComponent {
  bankName: string = '';

  constructor(public bankService: BankService) {}
}
