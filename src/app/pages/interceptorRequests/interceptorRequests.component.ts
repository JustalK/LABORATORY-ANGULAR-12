import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './template.component.html',
})
export default class CustomComponent {
  constructor(private httpClient: HttpClient) {}

  showHttpJson() {
    this.httpClient.get('assets/config.json').subscribe((data) => {
      console.log(data);
    });
  }

  showWrongHttpJson() {
    this.httpClient.get('azzets/config.json').subscribe((data) => {
      console.log(data);
    });
  }
}
