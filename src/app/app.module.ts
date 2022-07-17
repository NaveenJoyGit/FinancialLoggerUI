import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinLogButtonComponent } from './components/fin-log-button/fin-log-button.component';
import { FinLogLoginComponent } from './components/fin-log-login/fin-log-login.component';
import { FinLogHeaderComponent } from './components/fin-log-header/fin-log-header.component';
import { FinLogContainerCardComponent } from './components/fin-log-container-card/fin-log-container-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FinLogButtonComponent,
    FinLogLoginComponent,
    FinLogHeaderComponent,
    FinLogContainerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
