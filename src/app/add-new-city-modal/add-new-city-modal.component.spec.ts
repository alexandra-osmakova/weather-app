import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCityModalComponent } from './add-new-city-modal.component';

describe('AddNewCityModalComponent', () => {
  let component: AddNewCityModalComponent;
  let fixture: ComponentFixture<AddNewCityModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewCityModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewCityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
