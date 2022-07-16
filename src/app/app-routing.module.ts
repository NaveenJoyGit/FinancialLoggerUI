import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinLogLoginComponent } from './components/fin-log-login/fin-log-login.component';

const routes: Routes = [
  { path: 'login', component: FinLogLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
