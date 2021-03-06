import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UsernameValidationService {
  takenUsernames = ['hello', 'world', 'username'];

  checkIfUsernameExists(username: string): Observable<boolean> {
    // normally, this is where you will connect to your backend for validation lookup
    // using http, we simulate an internet connection by delaying it by a second
    return of(this.takenUsernames.includes(username)).pipe(delay(1000));
  }

  usernameValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> =>
      this.checkIfUsernameExists(control.value).pipe(map((res) => (res ? { usernameExists: true } : null)));
  }
}
