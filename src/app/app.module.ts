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
import {SidebarModule} from 'primeng/sidebar';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CryptocurrenciesComponent } from './cryptocurrencies/cryptocurrencies.component';
import { RegisterComponent } from './register/register.component';

import { GrabCryptoServiceService } from './service/grabCryptoService.service';
import { FilterComponent } from './filter/filter.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TransferServiceService } from './service/transferService.service';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    CryptocurrenciesComponent,
    FilterComponent,
    CarouselComponent,
    SideNavbarComponent,
    RegisterComponent
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
    OrderListModule,
    SidebarModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GrabCryptoServiceService, TransferServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
