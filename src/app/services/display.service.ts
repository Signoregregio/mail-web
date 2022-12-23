import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor() { }

  private displayCase$ = new Subject();
  private messageToDisplay$ = new Subject();

  getDisplayCase() {
    return this.displayCase$.asObservable();
  }

  setDisplayCase(caseToShow: string) {
    this.displayCase$.next(caseToShow);
  }
  
  getMessageToDisplay() {
    return this.displayCase$.asObservable();
  }

  setMessageToDisplay(newMessage: any) {
    this.messageToDisplay$.next(newMessage);
  }

}
