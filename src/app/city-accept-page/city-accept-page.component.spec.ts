import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityAcceptPageComponent } from './city-accept-page.component';

describe('CityAcceptPageComponent', () => {
  let component: CityAcceptPageComponent;
  let fixture: ComponentFixture<CityAcceptPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityAcceptPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityAcceptPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
