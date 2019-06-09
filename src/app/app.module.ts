import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityAcceptPageComponent } from './city-accept-page/city-accept-page.component';
import { MainWeatherPageComponent } from './main-weather-page/main-weather-page.component';
import { AddNewCityModalComponent } from './add-new-city-modal/add-new-city-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CityAcceptPageComponent,
    MainWeatherPageComponent,
    AddNewCityModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
