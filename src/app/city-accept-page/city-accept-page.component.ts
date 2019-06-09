import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from '../service/api-call.service';

@Component({
  selector: 'app-city-accept-page',
  templateUrl: './city-accept-page.component.html',
  styleUrls: ['./city-accept-page.component.scss']
})
export class CityAcceptPageComponent implements OnInit {
  userCity: string;
  isModalOpen: boolean = false;
  outputToChild: string = 'default'

  constructor(private router: Router,
    private api: ApiCallService) { }

  ngOnInit() {
    this.checkUserPlace()
  }

  checkUserPlace() {
    this.api.getUserPosition().subscribe(
      (data: { city: string }) => {
        if(data.city[data.city.length-1] === "’") {
          data.city = data.city.slice(0, -1)
        }
        this.userCity = data.city;
        localStorage.setItem('usersCity', data.city)
      })
  }

  goToWeatherPage() {
    this.router.navigate(['main-weather-page'])
  }

  addDefaultCity() {
    this.isModalOpen = true;
  }

  receiveMessage($event) {
    this.isModalOpen = $event;
  }

}
