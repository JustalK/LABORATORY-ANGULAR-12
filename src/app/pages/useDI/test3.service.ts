import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class TestService3 {
  sayHello() {
    console.log(`From TestService3 --> Hello`);
  }
}
