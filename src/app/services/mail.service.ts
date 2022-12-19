import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogService } from './log.service';
@Injectable()
export class MailService {
  constructor(private logService: LogService, private http: HttpClient) {}

  mailUrl = 'https://63453f7439ca915a69f9a522.mockapi.io/api/mails';
  messages: any;

  log(message: any) {
    this.logService.log(message);
  }

  async getMessages() {
    this.messages = this.http.get<any>(this.mailUrl).toPromise();
    return this.messages;
  }

  // messages = [
  // {
  //   to: 'carlo.bonamico@gmail.com',
  //   from: 'sonia.pini@nispro.it',
  //   subject: 'Angular',
  //   body: ' a b c ',
  //   starred: false,
  // },
  // {
  //   to: 'carlo.bonamico@gmail.com',
  //   from: 'carlo.bonamico@nispro.it',
  //   subject: 'Typescript',
  //   body: ' a b c d e f  ',
  //   starred: false,
  // },
  // {
  //   to: 'carlo.bonamico@gmail.com',
  //   from: 'sonia.pini@nispro.it',
  //   subject: 'Flexbox how-to',
  //   body: ' a b c d e f  ',
  //   starred: false,
  // },
  // {
  //   to: 'carlo.bonamico@gmail.com',
  //   from: 'sonia.pini@nispro.it',
  //   subject: 'Re: ES6 tutorial',
  //   body: ' a b c d e f  ',
  //   starred: false,
  // },
  // ];

  // getMessages() {
  //   return this.messages;
  // }

    async getMessagesByFolder(folderName: string) {
      console.log(this.messages)

      let promise = this.getMessages()
      console.log(typeof promise)
      let filteredMail = await promise;
      console.log(typeof filteredMail)
    
      filteredMail = filteredMail.filter((mail:any) => mail.folder.toLowerCase() === folderName.toLowerCase() );
      console.log(filteredMail)
      return filteredMail;
  }

  // async getMessagesByFolder(folderName: string) {


    // console.log(this.messages.__zone_symbol__value)
  //   var messagess = [
  //     {
  //       to: 'carlo.bonamico@gmail.com',
  //       from: 'sonia.pini@nispro.it',
  //       subject: folderName + ' 1',
  //       body: ' a b c ',
  //       starred: false,
  //     },
  //     {
  //       to: 'carlo.bonamico@gmail.com',
  //       from: 'carlo.bonamico@nispro.it',
  //       subject: folderName + ' 2',
  //       body: ' a b c d e f  ',
  //       starred: false,
  //     },
  //     {
  //       to: 'carlo.bonamico@gmail.com',
  //       from: 'sonia.pini@nispro.it',
  //       subject: folderName + ' 3',
  //       body: ' a b c ',
  //       starred: false,
  //     },
  //     {
  //       to: 'carlo.bonamico@gmail.com',
  //       from: 'carlo.bonamico@nispro.it',
  //       subject: folderName + ' 4',
  //       body: ' a b c d e f  ',
  //       starred: false,
  //     },
  //     {
  //       to: 'carlo.bonamico@gmail.com',
  //       from: 'sonia.pini@nispro.it',
  //       subject: folderName + ' 5',
  //       body: ' a b c ',
  //       starred: false,
  //     },
  //     {
  //       to: 'carlo.bonamico@gmail.com',
  //       from: 'carlo.bonamico@nispro.it',
  //       subject: folderName + ' 6',
  //       body: ' a b c d e f  ',
  //       starred: false,
  //     },
  //   ];
  //   return messagess;
  // }

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

  mailDelete(id: Number){
    this.mailUrl
    this.messages = this.http.delete<any>((this.mailUrl + `/${id}`)).toPromise();

  }
}
