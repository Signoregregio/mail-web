import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-message-viewer',
  templateUrl: './message-viewer.component.html',
  styleUrls: ['./message-viewer.component.css'],
})
export class MessageViewerComponent implements OnInit {

  @Output()
  btnPressed = new EventEmitter<any>();
  // @Output()
  // forwardPressed = new EventEmitter<any>();
  // @Output()
  // deletePressed = new EventEmitter<any>();
  currentMessage;
  currentMessageIndex = 0;


  constructor(protected mailService : MailService) { }
  
  onBtnPressed (event: any){
    this.btnPressed.emit(event.target.textContent)
  }
  
  ngOnInit(): void {
    console.log(this.mailService.getMessages())
  }
}
