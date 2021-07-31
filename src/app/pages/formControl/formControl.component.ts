import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './template.component.html',
})
export default class CustomComponent {
  title = new FormControl('');

  setValue() {
    this.title.setValue('TEST');
  }
}
