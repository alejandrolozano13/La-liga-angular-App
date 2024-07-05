import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SquadsDetailPagesComponent } from './squads-detail-pages/squads-detail-pages.component';
import { AppComponent } from './app.component';
import { LaLigaSquadsCarouselComponent } from './la-liga-squads-carousel/la-liga-squads-carousel.component';

const routes: Routes = [
  {path: '', component: LaLigaSquadsCarouselComponent},
  {path: 'squad-detail/:name', component: SquadsDetailPagesComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }