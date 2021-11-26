import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

import { AppComponent } from './app.component';
import { MeteoComponent } from './meteo/meteo.component';
import { SearchComponent } from './search/search.component';
import { MeteoJourComponent } from './meteo-jour/meteo-jour.component';
import { MeteoSuivantComponent } from './meteo-suivant/meteo-suivant.component';

const routerOptions: ExtraOptions = {
  onSameUrlNavigation: 'reload'
};

@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent,
    SearchComponent,
    MeteoJourComponent,
    MeteoSuivantComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: MeteoComponent },
      { path: 'ville/:villeId', component: MeteoComponent }
    ],{onSameUrlNavigation: 'reload'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
