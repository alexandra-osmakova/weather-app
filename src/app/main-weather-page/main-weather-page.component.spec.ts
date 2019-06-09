import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWeatherPageComponent } from './main-weather-page.component';

describe('MainWeatherPageComponent', () => {
  let component: MainWeatherPageComponent;
  let fixture: ComponentFixture<MainWeatherPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainWeatherPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWeatherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
