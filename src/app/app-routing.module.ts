import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityAcceptPageComponent } from './city-accept-page/city-accept-page.component';
import { MainWeatherPageComponent } from './main-weather-page/main-weather-page.component';

const routes: Routes = [
  {
    path: '',
    component: CityAcceptPageComponent
  },
  {
    path: 'main-weather-page',
    component: MainWeatherPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
