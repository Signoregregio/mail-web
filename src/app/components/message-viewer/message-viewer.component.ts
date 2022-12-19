import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-viewer',
  templateUrl: './message-viewer.component.html',
})
export class MessageViewerComponent implements OnInit {

  @Output()
  btnPressed = new EventEmitter<any>();
  @Input()
  public message: any;
  todayDate = new Date();
  currentMessage: any;
  currentMessageIndex = 0;


  constructor() { }
  
  onBtnPressed (event: any){
    this.btnPressed.emit(event.target.textContent)
  }
  
  ngOnInit(): void {
  }
}
