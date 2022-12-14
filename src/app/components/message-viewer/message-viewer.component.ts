import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-viewer',
  templateUrl: './message-viewer.component.html',
})
export class MessageViewerComponent implements OnInit {

  @Output()
  starEmail = new EventEmitter<any>();
  @Output()
  btnPressed = new EventEmitter<any>();
  @Input()
  public message: any;
  todayDate = new Date();
  currentMessage: any;
  currentMessageIndex = 0;


  constructor() {}
  //enum
  onBtnPressed (event: any){
    this.btnPressed.emit(event.target.textContent)
  }

  onStarEmail (id: number){
    this.starEmail.emit(id)
  }
  
  ngOnInit(): void {
  }

}
