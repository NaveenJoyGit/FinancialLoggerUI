import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTradeComponent } from './components/add-trade/add-trade.component';
import { FinLogLoginComponent } from './components/fin-log-login/fin-log-login.component';
import { HomeComponent } from './components/home-components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { ViewTradeComponent } from './components/view-trade/view-trade.component';

const routes: Routes = [
  { path: 'login', component: FinLogLoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add-trade', component: AddTradeComponent },
  { path: 'view-trades', component: ViewTradeComponent },
  { path: 'sign-up', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
