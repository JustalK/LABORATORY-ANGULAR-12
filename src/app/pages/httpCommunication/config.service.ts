import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Config } from './config.interface';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  configUrl = 'assets/config.json';

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError('Something bad happened; please try again later.');
  }

  getConfig() {
    return this.http.get<Config>(this.configUrl);
  }

  getConfigResponse() {
    return this.http.get<Config>(this.configUrl, { observe: 'response' });
  }

  getHttpCall() {
    return this.http
      .jsonp('https://jsonplaceholder.typicode.com/todos/1', 'callback')
      .pipe(retry(3), catchError(this.handleError));
  }

  getFailHttpCall() {
    return this.http
      .jsonp('https://jsonplaceholder.typicode.com/asdasdasd', 'callback')
      .pipe(retry(3), catchError(this.handleError));
  }
}
