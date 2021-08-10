import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './template.component.html',
})
export default class CustomComponent {
  value: string = '';

  value2: string = '';

  value3: string = '';

  value4: string = '';

  value5: string = '';

  handleInput(event) {
    this.value = (event.target as HTMLInputElement).value;
  }

  handleInput2(element) {
    this.value2 = element.value;
  }

  handleInput4(value) {
    this.value4 = value;
  }

  handleInput5(event) {
    this.value5 = (event.target as HTMLInputElement).value;
  }
}
