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
  });

  callingFunction() {
    console.log(this.identityForm.value);
  }
}
