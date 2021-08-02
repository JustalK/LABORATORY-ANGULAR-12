import { Component } from '@angular/core';
import { ConfigService } from './config.service';
import { Config } from './config.interface';

@Component({
  selector: 'app-home',
  templateUrl: './template.component.html',
})
export default class CustomComponent {
  config;

  constructor(private configService: ConfigService) {}

  showConfig() {
    this.configService.getConfig().subscribe((data: Config) => {
      this.config = {
        heroesUrl: data.heroesUrl,
        textfile: data.textfile,
        date: data.date,
      };
    });
  }
}
