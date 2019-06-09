import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-city-modal',
  templateUrl: './add-new-city-modal.component.html',
  styleUrls: ['./add-new-city-modal.component.scss']
})
export class AddNewCityModalComponent implements OnInit {
  isModalOpen: boolean = false;
  selectedCityForm: FormGroup;

  @Output() modalEvent = new EventEmitter<boolean>();
  @Output() sendSelectedCity = new EventEmitter<string>();
  @Input() currentParentInput: string;

  constructor(private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  sendMessage() {
    const selectedCity = this.selectedCityForm.controls.selectedCity.value;
    console.log(selectedCity)
    if (this.currentParentInput === 'add') {
      if (localStorage.getItem('selectedCities')) {
        const userSelection = JSON.parse(localStorage.getItem('selectedCities'));
        userSelection.push(selectedCity);
        localStorage.setItem('selectedCities', JSON.stringify(userSelection));
      }
      else {
        const userSelection = [];
        userSelection.push(selectedCity);
        localStorage.setItem('selectedCities', JSON.stringify(userSelection));
      }
      this.sendSelectedCity.emit(selectedCity);
      this.closeModal();
    } else if (this.currentParentInput === 'default') {
      localStorage.setItem('usersCity', selectedCity);
      this.router.navigate(['main-weather-page'])
    }
  }

  closeModal() {
    this.modalEvent.emit(this.isModalOpen)
    if (document.getElementById('modal_overlay_selector')) {
      document.getElementById('modal_overlay_selector').style.display = 'none';
    }
  }

  private initForm(): void {
    this.selectedCityForm = this.fb.group({
      selectedCity: ['', Validators.required]
    })
  }

}
