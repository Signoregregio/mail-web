import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, lastValueFrom, map, Observable } from 'rxjs';
import { LogService } from './log.service';
@Injectable()
export class MailService {
  constructor(private logService: LogService, private http: HttpClient) {}

  mailUrl = 'https://63453f7439ca915a69f9a522.mockapi.io/api/mails';
  messages: any;

  log(message: any) {
    this.logService.log(message);
  }


  getMessages(): Observable<any> {
    return this.http.get<any>(this.mailUrl);
  }

  // sendMessages(mail: any) {
  //   this.messages = lastValueFrom(this.http.post<any>(this.mailUrl, mail));
  //   return this.messages;
  // }

  getMessagesByFolder(folderName: string): Observable<any> {
    console.log(folderName)
    return this.http
      .get<any>(this.mailUrl).pipe(map(data => data.filter((value: any) => value.folder === folderName)))

  }

  getMessagesBySearch(query: string, messages: any) {
    //TODO replace this with a call to MessageSearchService.searchMessages(query)
    console.log(query);
    console.log(messages.length);
    messages = messages.filter((mail: any) =>
      mail.subject.toLowerCase().includes(query.toLowerCase())
    );
    console.log(
      'Sono presenti in questa query :\n\t\t\t\t\t' +
        messages.length +
        '\temails'
    );
    return messages;
  }

  mailDelete(id: Number) {
    this.mailUrl;
    this.messages = lastValueFrom(
      this.http.delete<any>(this.mailUrl + `/${id}`)
    );
  }

  async changeStar(mail: any) {
    mail.starred = !mail.starred;
    let promise = lastValueFrom(
      this.http.put<any>(this.mailUrl + `/${mail.id}`, mail)
    );
    await promise;
  }
}
