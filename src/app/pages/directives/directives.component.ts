import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './template.component.html',
})
export default class CustomComponent {
  books = [{ title: 'Title 1' }, { title: 'Title 2' }];
}
