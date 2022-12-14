import { Component, Input, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
})
export class MessageListComponent implements OnInit {

  constructor(protected mailService : MailService) { }

  @Input() 
  public messages : string[];
  
  ngOnInit(): void {
  }

}
