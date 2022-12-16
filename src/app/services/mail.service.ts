import { Injectable } from '@angular/core';
import { LogService } from './log.service';
@Injectable()
export class MailService {
  constructor(private logService : LogService) {}

  log(message: any){
    this.logService.log(message)
  }
  
  messages = [
    {
      to: 'carlo.bonamico@gmail.com',
      from: 'sonia.pini@nispro.it',
      subject: 'Angular',
      body: ' a b c ',
      starred: false,
    },
    {
      to: 'carlo.bonamico@gmail.com',
      from: 'carlo.bonamico@nispro.it',
      subject: 'Typescript',
      body: ' a b c d e f  ',
      starred: false,
    },
    {
      to: 'carlo.bonamico@gmail.com',
      from: 'sonia.pini@nispro.it',
      subject: 'Flexbox how-to',
      body: ' a b c d e f  ',
      starred: false,
    },
    {
      to: 'carlo.bonamico@gmail.com',
      from: 'sonia.pini@nispro.it',
      subject: 'Re: ES6 tutorial',
      body: ' a b c d e f  ',
      starred: false,
    },
  ];

  getMessages() {
    return this.messages;
  }

  getMessagesByFolder(folderName: string) {
    var messages = [
      {
        to: 'carlo.bonamico@gmail.com',
        from: 'sonia.pini@nispro.it',
        subject: folderName + ' 1',
        body: ' a b c ',
        starred: false,
      },
      {
        to: 'carlo.bonamico@gmail.com',
        from: 'carlo.bonamico@nispro.it',
        subject: folderName + ' 2',
        body: ' a b c d e f  ',
        starred: false,
      },
      {
        to: 'carlo.bonamico@gmail.com',
        from: 'sonia.pini@nispro.it',
        subject: folderName + ' 3',
        body: ' a b c ',
        starred: false,
      },
      {
        to: 'carlo.bonamico@gmail.com',
        from: 'carlo.bonamico@nispro.it',
        subject: folderName + ' 4',
        body: ' a b c d e f  ',
        starred: false,
      },
      {
        to: 'carlo.bonamico@gmail.com',
        from: 'sonia.pini@nispro.it',
        subject: folderName + ' 5',
        body: ' a b c ',
        starred: false,
      },
      {
        to: 'carlo.bonamico@gmail.com',
        from: 'carlo.bonamico@nispro.it',
        subject: folderName + ' 6',
        body: ' a b c d e f  ',
        starred: false,
      },
    ];
    return messages;
  }

  getMessagesBySearch(query: string) {
    //TODO replace this with a call to MessageSearchService.searchMessages(query)
    var messages = [
      {
        to: 'carlo.bonamico@gmail.com',
        from: 'sonia.pini@nispro.it',
        subject: query + ' 1',
        body: ' a b c ',
        starred: false,
      },
      {
        to: 'carlo.bonamico@gmail.com',
        from: 'carlo.bonamico@nispro.it',
        subject: query + ' 2',
        body: ' a b c d e f  ',
        starred: false,
      },
      {
        to: 'carlo.bonamico@gmail.com',
        from: 'sonia.pini@nispro.it',
        subject: query + ' 3',
        body: ' a b c d e f  ',
        starred: false,
      },
    ];
    return messages;
  }
}
