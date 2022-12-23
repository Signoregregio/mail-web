import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TemplateService {
  constructor() {}
  
  getReplyTemplate(message: any) {
    let newTemplate = {
      to: message.from,
      subject: 'Re:' + message.subject,
      body: '> ' + message.body + '\n-------------------- \n',
    };
    return newTemplate;
  }

  getForwardTemplate(message: any) {
    let newTemplate = {
      to: '',
      subject: message.subject,
      body:
        'From : ' +
        message.from +
        '\nBody : ' +
        message.body +
        '\n \n-------------------- \n',
    };
    return newTemplate;
  }
}
