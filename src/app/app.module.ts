import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaLigaSquadsCarouselComponent } from './la-liga-squads-carousel/la-liga-squads-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    LaLigaSquadsCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
