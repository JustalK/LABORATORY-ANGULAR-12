import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private dom,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    const hostName = 'https://www.example.com';
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      const rt = this.getChild(this.activatedRoute);

      rt.data.subscribe((data) => {
        this.titleService.setTitle(data.title);

        if (data.descrption) {
          this.metaService.updateTag({ name: 'description', content: data.descrption });
        } else {
          this.metaService.removeTag("name='description'");
        }

        if (data.canonical) {
          this.updateCanonicalUrl(hostName + data.canonical);
        } else {
          this.updateCanonicalUrl(hostName + this.router.url);
        }
      });
    });
  }

  updateCanonicalUrl(url: string) {
    const head = this.dom.getElementsByTagName('head')[0];
    let element: HTMLLinkElement = this.dom.querySelector(`link[rel='canonical']`) || null;
    if (element == null) {
      element = this.dom.createElement('link') as HTMLLinkElement;
      head.appendChild(element);
    }
    element.setAttribute('rel', 'canonical');
    element.setAttribute('href', url);
  }

  getChild(activatedRoute: ActivatedRoute) {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    }
    return activatedRoute;
  }
}
