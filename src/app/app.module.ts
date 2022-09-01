import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http' 

//Material Library imports
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinLogButtonComponent } from './components/fin-log-button/fin-log-button.component';
import { FinLogLoginComponent } from './components/fin-log-login/fin-log-login.component';
import { FinLogHeaderComponent } from './components/fin-log-header/fin-log-header.component';
import { FinLogContainerCardComponent } from './components/fin-log-container-card/fin-log-container-card.component';
import { authInterceptorProviders } from './helpers/auth-interceptor';
import { HomeComponent } from './components/home-components/home/home.component';
import { AddTradeComponent } from './components/add-trade/add-trade.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewTradeComponent } from './components/view-trade/view-trade.component';

@NgModule({
  declarations: [
    AppComponent,
    FinLogButtonComponent,
    FinLogLoginComponent,
    FinLogHeaderComponent,
    FinLogContainerCardComponent,
    HomeComponent,
    AddTradeComponent,
    ViewTradeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
