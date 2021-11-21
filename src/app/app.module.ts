import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeteoComponent } from './meteo/meteo.component';
import { SearchComponent } from './search/search.component';
import { MeteoJourComponent } from './meteo-jour/meteo-jour.component';
import { MeteoSuivantComponent } from './meteo-suivant/meteo-suivant.component';

@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent,
    SearchComponent,
    MeteoJourComponent,
    MeteoSuivantComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
