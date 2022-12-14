import { Injectable } from '@angular/core';
import { MailService } from './mail.service';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor() { }

  
  getReplyTemplate(message : any)
  {
      var newMessage = {
          to: message.from,
          subject: "Re:"+message.subject
      };
      return newMessage; 
  }
}
