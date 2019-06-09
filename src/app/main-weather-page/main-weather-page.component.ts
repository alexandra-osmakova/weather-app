import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../service/api-call.service';
import { CityWeather } from '../interface';

@Component({
  selector: 'app-main-weather-page',
  templateUrl: './main-weather-page.component.html',
  styleUrls: ['./main-weather-page.component.scss']
})
export class MainWeatherPageComponent implements OnInit {
  isModalOpen: boolean = false;
  userCity: CityWeather;
  addedCities: Array<CityWeather> = [];
  outputToChild: string = 'add'

  constructor(
    private api: ApiCallService) {
  }

  ngOnInit() {
    if (localStorage.getItem('usersCity') && localStorage.getItem('selectedCities')) {
      this.getCurrentWeather(localStorage.getItem('usersCity'), 'userCity');
      const storageCities = JSON.parse(localStorage.getItem('selectedCities'))
      for (let i = 0; i < storageCities.length; i++) {
        this.getCurrentWeather(storageCities[i], 'addedCities')
      }
    }
    else if (localStorage.getItem('usersCity')) {
      this.getCurrentWeather(localStorage.getItem('usersCity'), 'userCity');
    }
    else {
      this.getCurrentWeather(localStorage.getItem('usersCity'), 'userCity')
    }

  }

  receiveSelectedCity($event) {
    const incomeMessage = $event;
    this.getCurrentWeather(incomeMessage, 'addedCities')
  }

  receiveMessage($event) {
    this.isModalOpen = $event;
  }

  addNewCity() {
    this.isModalOpen = true;
    document.getElementById('modal_overlay_selector').style.display = 'block';
  }

  removeCity(index:number) {
    this.addedCities.splice(index, 1);
    if(localStorage.getItem('selectedCities')) {
      const selectedCities: Array<string> = JSON.parse(localStorage.getItem('selectedCities'))
      selectedCities.splice(index, 1);
      localStorage.setItem('selectedCities', JSON.stringify(selectedCities))
    }
  }

  getCurrentWeather(city: string, id: string) {
    this.api.getWeather(city).subscribe(
      (data: any) => {
        this.extractData(data, id)
      }
    )
  }

  extractData(data, id:string) {
    let incomeCity: CityWeather = {
      name: '',
      clouds: 0,
      humidity: 0,
      temp: '',
      description: '',
      wind: 0
    }

    incomeCity.name = data.name;
    incomeCity.clouds = data.clouds.all;
    incomeCity.humidity = data.main.humidity;
    if(Math.round(data.main.temp) > 0) {
      incomeCity.temp = `+${Math.round(data.main.temp)}`;
    }
    else {
      incomeCity.temp = `${Math.round(data.main.temp)}`;
    }
    incomeCity.description = data.weather[0].description;
    incomeCity.wind = data.wind.speed;

    if (id === 'userCity') {
      this.userCity = { ...incomeCity }
    }
    else if (id === 'addedCities') {
      this.addedCities.push(incomeCity);
    }
  }

}
