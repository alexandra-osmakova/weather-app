import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../service/api-call.service';
import { CityWeather, IncomeData } from '../interface';
import { elementClassProp } from '../../../node_modules/@angular/core/src/render3';

@Component({
  selector: 'app-main-weather-page',
  templateUrl: './main-weather-page.component.html',
  styleUrls: ['./main-weather-page.component.scss']
})
export class MainWeatherPageComponent implements OnInit {
  isModalOpen: boolean = false;
  addedCities: Array<CityWeather> = [];
  outputToChild: string = 'add';
  isError: boolean = false;

  constructor(
    private api: ApiCallService
  ) { }

  ngOnInit() {
    if (localStorage.getItem('usersCity')) {
      this.getCurrentWeather(localStorage.getItem('usersCity'), 'userCity');

      if (localStorage.getItem('selectedCities')) {
        const storageCities = JSON.parse(localStorage.getItem('selectedCities'));
        for (let i = 0; i < storageCities.length; i++) {
          this.getCurrentWeather(storageCities[i], 'addedCities')
        }
      }
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

  removeCity(name: string) {
    const selectedCities = this.addedCities.reduce((acc, el, index) => {
      if (el.name !== name) {
        if(el.default !== true) {
          acc.push(el.name);
        }
      } else {
        this.addedCities.splice(index, 1)
      }

      return acc;
    }, [])
    localStorage.setItem('selectedCities', JSON.stringify(selectedCities))
  }

  getCurrentWeather(city: string, id: string) {
    this.api.getWeather(city).subscribe(
      (data: IncomeData) => {
        this.extractData(data, id)
      },
      error => {
        this.isError = true;
        this.resetStorage()
      }
    )
  }

  resetStorage() {
    const selectedCities: Array<string> = JSON.parse(localStorage.getItem('selectedCities'));
    selectedCities.splice(selectedCities.length - 1, 1);
    localStorage.setItem('selectedCities', JSON.stringify(selectedCities))
  }

  extractData(data: IncomeData, id: string) {
    this.isError = false;
    const incomeCity: CityWeather = {
      name: data.name,
      clouds: data.clouds.all,
      humidity: data.main.humidity,
      temp: `${data.main.temp > 0 ? '+' : ''}${Math.round(data.main.temp)}`,
      description: data.weather[0].description,
      wind: data.wind.speed,
      default: id === 'userCity' ? true : false
    };

    this.addedCities.push(incomeCity);
  }

}
