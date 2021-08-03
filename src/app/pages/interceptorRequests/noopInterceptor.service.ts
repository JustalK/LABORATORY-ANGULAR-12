import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * You need to add the intercept inside the NgModule providers
 * */

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Interceptor');
    let secureReq;
    // Change the request and fix the wrong name azzets
    if (httpRequest.url.includes('azzets')) {
      secureReq = httpRequest.clone({
        url: httpRequest.url.replace('azzets', 'assets'),
      });
    } else {
      const API_KEY = '123456';
      secureReq = httpRequest.clone({ setHeaders: { API_KEY } });
    }
    return next.handle(secureReq);
  }
}
