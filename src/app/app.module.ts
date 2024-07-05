import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaLigaSquadsCarouselComponent } from './la-liga-squads-carousel/la-liga-squads-carousel.component';

import { register } from 'swiper/element/bundle';
import { SquadsDetailPagesComponent } from './squads-detail-pages/squads-detail-pages.component';

register();

@NgModule({
  declarations: [
    AppComponent,
    LaLigaSquadsCarouselComponent,
    SquadsDetailPagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
