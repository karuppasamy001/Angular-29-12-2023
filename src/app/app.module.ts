import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepositComponent } from './deposit/deposit.component';
import { BalanceComponent } from './balance/balance.component';
import { FormsModule } from '@angular/forms';
import { SelectBanksComponent } from './select-banks/select-banks.component';
import { BankService } from './bank.service';

@NgModule({
  declarations: [
    AppComponent,
    DepositComponent,
    BalanceComponent,
    SelectBanksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BankService],
  bootstrap: [AppComponent, DepositComponent, BalanceComponent]
})
export class AppModule { }
