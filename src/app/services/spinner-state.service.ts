import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerStateService {

  constructor() { }

  private spinnerState$ = new Subject<boolean>();

  changeState(state: boolean){
    this.spinnerState$.next(state)
  }

  getState(){
    return this.spinnerState$.asObservable()
  }
}
