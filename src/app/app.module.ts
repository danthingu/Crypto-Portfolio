import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CryptocurrenciesComponent } from './cryptocurrencies/cryptocurrencies.component';

import { GrabCryptoServiceService } from './service/grabCryptoService.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    CryptocurrenciesComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [GrabCryptoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
