import { Injectable } from '@angular/core';
import { Config } from './config';

@Injectable()
export default class CustomConfig extends Config {
  apiBaseUrl = 'https://justalk.com';
}
