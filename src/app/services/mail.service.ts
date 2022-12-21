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

  async getMessagesByFolder(folderName: string) {
    let promise = this.getMessages();
    let filteredMail = await promise;

    if (folderName.toLowerCase() === 'all messages') {
      return filteredMail;
    }
    filteredMail = filteredMail.filter(
      (mail: any) => mail.folder.toLowerCase() === folderName.toLowerCase()
    );
    console.log("Sono presenti in questa cartella :\n\t\t\t\t\t" + filteredMail.length + "\temails");
    return filteredMail;
  }

    getMessagesBySearch(query: string, messages: any) {
    //TODO replace this with a call to MessageSearchService.searchMessages(query)
    console.log(query);
    console.log(messages.length);
    messages = messages.filter(
      (mail: any) =>
        mail.subject.toLowerCase().includes(query.toLowerCase())
    );
    console.log("Sono presenti in questa query :\n\t\t\t\t\t" + messages.length + "\temails");
    return messages;
  }

  mailDelete(id: Number) {
    this.mailUrl;
    this.messages = this.http.delete<any>(this.mailUrl + `/${id}`).toPromise();
  }

  async changeStar(mail: any) {
    mail.starred = !mail.starred;
    let promise =  this.http.put<any>(this.mailUrl + `/${mail.id}`, mail).toPromise();
    await promise;
  }
}
