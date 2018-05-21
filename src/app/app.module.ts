import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import {CarouselModule} from 'primeng/carousel';
import {GrowlModule} from 'primeng/primeng';
import {OrderListModule} from 'primeng/primeng';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CryptocurrenciesComponent } from './cryptocurrencies/cryptocurrencies.component';

import { GrabCryptoServiceService } from './service/grabCryptoService.service';
import { FilterComponent } from './filter/filter.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    CryptocurrenciesComponent,
    FilterComponent,
    CarouselComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule,
    GrowlModule,
    OrderListModule
  ],
  providers: [GrabCryptoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
