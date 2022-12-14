import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, lastValueFrom, map, Observable, Subject } from 'rxjs';
import { LogService } from './log.service';
@Injectable()
export class MailService {
  constructor(private logService: LogService, private http: HttpClient) {}

  mailUrl = 'https://63453f7439ca915a69f9a522.mockapi.io/api/mails';
  messages: any;
  

  log(message: any) {
    this.logService.log(message);
  }

  sendMessages(mail: any) : Observable<any> {
    return this.http.post<any>(this.mailUrl, mail);

  }

  getMessagesByFolder(folderName: string): Observable<any> {
    console.log(folderName);
    if (folderName === 'all messages') {
      return this.http
        .get<any>(this.mailUrl)
        .pipe(map((data) => data.filter((value: any) => !!value.folder)));
    }
    return this.http
      .get<any>(this.mailUrl)
      .pipe(
        map((data) => data.filter((value: any) => value.folder === folderName))
      );
  }

  getMessagesBySearch(query: string, messages: any) {
    //TODO replace this with a call to MessageSearchService.searchMessages(query)
    console.log(query);
    console.log(messages.length);
    messages = messages.filter((mail: any) =>{if(mail.subject === undefined){return true}
      return mail.subject.toLowerCase().includes(query.toLowerCase())}
    );
    console.log(
      'Sono presenti in questa query :\n\t\t\t\t\t' +
        messages.length +
        '\temails'
    );
    return messages;
  }

  mailDelete(id: Number): Observable<any> {
    return this.http.delete<any>(this.mailUrl + `/${id}`);
  }

  async changeStar(mail: any) {
    mail.starred = !mail.starred;
    let promise = lastValueFrom(
      this.http.put<any>(this.mailUrl + `/${mail.id}`, mail)
    );
    await promise;
  }
}
