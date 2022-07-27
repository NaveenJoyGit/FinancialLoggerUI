import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTradeComponent } from './components/add-trade/add-trade.component';
import { FinLogLoginComponent } from './components/fin-log-login/fin-log-login.component';
import { HomeComponent } from './components/home-components/home/home.component';

const routes: Routes = [
  { path: 'login', component: FinLogLoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add-trade', component: AddTradeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
