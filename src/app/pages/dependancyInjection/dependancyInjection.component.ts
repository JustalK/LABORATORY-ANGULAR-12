import { Component } from '@angular/core';
import { DependancyInjectionService } from './dependancyInjection.service';

@Component({
  selector: 'app-home',
  templateUrl: './template.component.html',
})
export default class CustomComponent {
  constructor(private dependencyInjectionService: DependancyInjectionService) {}
}
