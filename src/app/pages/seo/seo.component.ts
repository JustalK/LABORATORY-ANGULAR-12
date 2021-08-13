import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './template.component.html',
})
export default class CustomComponent implements OnInit {
  pageTitle = '';

  constructor(private title: Title, private metaService: Meta) {}

  ngOnInit() {
    this.title.setTitle('MY TITLE');
    this.pageTitle = 'MY TITLE';
    this.metaService.addTag({ name: 'description', content: 'Article Description' });
    this.metaService.addTag({ property: 'og:title', content: 'Content Title for social media' });
  }

  getTags() {
    console.log('only the one with name=description', this.metaService.getTag("name='description'"));
    console.log('only those with tag name', this.metaService.getTags('name'));
  }
}
