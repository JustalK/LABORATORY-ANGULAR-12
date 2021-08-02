import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidationService } from './usernames.service';

@Component({
  selector: 'app-home',
  templateUrl: './template.component.html',
})
export default class CustomComponent {
  identityForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl('', [Validators.required], [this.usernameService.usernameValidator()]),
  });

  constructor(private usernameService: UsernameValidationService) {}

  callingFunction() {
    console.log(this.identityForm.value);
  }
}
