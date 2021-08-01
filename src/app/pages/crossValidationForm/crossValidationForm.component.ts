import { Component } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export const identityValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const firstName = control.get('firstName');
  const lastName = control.get('lastName');

  return firstName && lastName && firstName.value === lastName.value ? { identity: true } : null;
};

@Component({
  selector: 'app-home',
  templateUrl: './template.component.html',
})
export default class CustomComponent {
  identityForm = new FormGroup(
    {
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      age: new FormControl(''),
    },
    { validators: identityValidator }
  );

  callingFunction() {
    console.log(this.identityForm.value);
  }
}
