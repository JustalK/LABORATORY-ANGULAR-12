import { Component } from '@angular/core';
import { Config } from './config';

@Component({
  templateUrl: './template.component.html',
})
export default class CustomComponent {
  constructor(private config: Config) {
    console.log(config.apiBaseUrl);
  }
}
