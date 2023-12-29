import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  deposit: boolean = false
  balance: boolean = false

  depositClick(){
    this.deposit = true
    this.balance = false
  }

  balanceClick(){
    this.deposit = false
    this.balance = true
  }

}
