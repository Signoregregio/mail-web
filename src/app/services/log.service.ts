import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  constructor() {}
  log(message: any) {
    console.log('LOG ' + message);
  }
}
