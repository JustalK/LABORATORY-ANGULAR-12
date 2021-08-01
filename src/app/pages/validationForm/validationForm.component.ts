import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}

export function underAgeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isMinor = parseInt(control.value, 10) <= 18;
    return isMinor ? { isMinor: { value: control.value } } : null;
  };
}

@Component({
  selector: 'app-home',
  templateUrl: './template.component.html',
})
export default class CustomComponent {
  identityForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(4), forbiddenNameValidator(/bob/i)]),
    lastName: new FormControl(''),
    age: new FormControl('', [Validators.required, underAgeValidator()]),
  });

  get firstName() {
    return this.identityForm.get('firstName');
  }

  get age() {
    return this.identityForm.get('age');
  }

  callingFunction() {
    console.log(this.identityForm.value);
  }
}
