import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './template.component.html',
})
export default class CustomComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
    });
  }

  goToExperience1() {
    this.router.navigate(['/experience_0001']);
  }
}
