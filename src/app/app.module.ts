import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinLogButtonComponent } from './components/fin-log-button/fin-log-button.component';
import { FinLogLoginComponent } from './components/fin-log-login/fin-log-login.component';
import { FinLogHeaderComponent } from './components/fin-log-header/fin-log-header.component';
import { FinLogContainerCardComponent } from './components/fin-log-container-card/fin-log-container-card.component';
import { FinLogInputComponent } from './components/fin-log-input/fin-log-input.component';

@NgModule({
  declarations: [
    AppComponent,
    FinLogButtonComponent,
    FinLogLoginComponent,
    FinLogHeaderComponent,
    FinLogContainerCardComponent,
    FinLogInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
