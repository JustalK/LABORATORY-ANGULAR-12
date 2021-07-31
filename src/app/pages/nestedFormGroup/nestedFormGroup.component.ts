import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './template.component.html',
})
export default class CustomComponent {
  identityForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
    }),
  });

  callingFunction() {
    console.log(this.identityForm.value);
  }

  updateProfile() {
    this.identityForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }

  setProfile() {
    this.identityForm.setValue({
      firstName: 'Kevin',
      lastName: 'Justa',
      age: '18',
      address: {
        street: '123 Drew Street',
        city: 'Manila',
        state: 'PH',
      },
    });
  }
}
