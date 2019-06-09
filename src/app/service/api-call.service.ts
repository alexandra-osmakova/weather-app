import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LibraryService } from './library.service';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  link: string = 'http://api.openweathermap.org/data/2.5/weather';
  token: string = this.lib.key;

  constructor(public http: HttpClient,
    private lib: LibraryService) { }

  getUserPosition() {
    const url = 'http://ip-api.com/json/';
    return this.http.get(url);
  }

  getWeather(query: string) {
    const url = `${this.link}?q=${query}&lang=ru&units=metric&appid=${this.token}`;
    return this.http.get(url);
  }
}
