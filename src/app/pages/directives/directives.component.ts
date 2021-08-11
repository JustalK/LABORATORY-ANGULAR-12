import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './template.component.html',
})
export default class CustomComponent {
  books = [{ title: 'Title 1' }, { title: 'Title 2' }];

  isVisible = false;

  cssClasses: string[] = [];

  handleIsVisible() {
    this.isVisible = !this.isVisible;
  }

  changeClasses() {
    if (this.cssClasses.includes('red')) {
      this.cssClasses = [];
    } else {
      this.cssClasses.push('red');
    }
  }
}
