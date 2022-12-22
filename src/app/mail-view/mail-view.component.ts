import {
  Component,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { FolderService } from '../services/folder.service';
import { MailService } from 'src/app/services/mail.service';
import { TemplateService } from '../services/template.service';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthGuard } from '../services/auth-guard';
import { SpinnerStateService } from '../services/spinner-state.service';

@Component({
  selector: 'app-mail-view',
  templateUrl: './mail-view.component.html',
  providers: [MailService, FolderService, TemplateService],
})
export class MailViewComponent implements OnInit, OnChanges {
  constructor(
    protected folderList: FolderService,
    protected mailList: MailService,
    protected mailTemplate: TemplateService,
    private route: ActivatedRoute,
    private spinner: SpinnerStateService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    throw new Error('Method not implemented.');
  }

  messages: any[];
  currentFolderName = 'inbox';
  currentFolderNumber = 0;
  allowCreate: boolean;
  displayCase: string;
  mailToShow: any;
  replyMail: any;
  forwardMail: any;
  allowPage = false;

  myObserver = {
    next: (data: any) => (this.messages = data),
    error: (err: Error) =>
      console.error('Observerer ngOnInit got an Error' + err),
    complete: () => this.spinner.changeState(false),
  };

  ngOnInit(): void {
    this.mailList.getMessagesByFolder(this.currentFolderName).subscribe({
      next: (data) => (this.messages = data),
      error: (err: Error) =>
        console.error('Observerer ngOnInit got an Error' + err),
      complete: () => {
        this.allowPage = true;
      },
    });

    this.onChangeFolderObservable();
  }

  onBtnMessageViewerPressed(value: string) {
    console.log(value);
    switch (value) {
      case 'Reply':
        this.replyMail = this.mailTemplate.getReplyTemplate(this.mailToShow);
        console.log(this.replyMail);
        this.displayCase = 'reply';
        break;
      case 'Forward':
        this.forwardMail = this.mailTemplate.getForwardTemplate(
          this.mailToShow
        );
        console.log(this.forwardMail);
        this.displayCase = 'forward';
        break;
      case 'Delete':
        this.spinner.changeState(true);

        this.messages.splice(this.mailToShow.index, 1);
        this.mailList.mailDelete(this.mailToShow.index).subscribe({
          next: () => {
            this.mailList.log(
              `mail with id ${this.mailToShow.id} has been removed from the mock correctly`
            );
            this.spinner.changeState(false);
          },
          error: (err: Error) =>
            console.error('Observerer ngOnInit got an Error' + err),
        });
        console.log(this.messages);
        this.displayCase = 'delete';
        break;
    }
  }

  async onQueryChange(query: string) {
    this.spinner.changeState(true);

    this.mailList.getMessagesByFolder(this.currentFolderName).subscribe({
      next: (data) => (this.messages = data),
      error: (err: Error) =>
        console.error('Observerer ngOnInit got an Error' + err),
      complete: () => {
        this.messages = this.mailList.getMessagesBySearch(query, this.messages);
        this.spinner.changeState(false);
      },
    });
  }

  onSendEmail(email: any) {
    this.spinner.changeState(true);
    console.log(email);
    let newMail = {
      to: email.email,
      from: 'l.scianna545344@gmail.com',
      subject: email.subject,
      body: email.body,
      starred: false,
      folder: this.currentFolderName,
    };
    this.messages = [...this.messages, newMail];
    console.log(newMail);
    this.mailList.sendMessages(newMail).subscribe({
      next: () => {
        this.mailList.log(`mail has been post`);
        this.spinner.changeState(false);
      },
      error: (err: Error) =>
        console.error('Observerer sendMessage got an Error' + err),
    });
    console.log(this.messages);
  }

  onCancelEmail() {
    this.displayCase = 'none';
  }

  onSelectEmail(index: number) {
    console.log(index);
    this.mailToShow = this.messages[index];
    this.mailToShow.index = index;
    console.log(this.mailToShow);
    this.displayCase = 'show';
  }

  onStarEmail(id: number) {
    let mailToStar = this.messages.filter((message) => message.id === id)[0];
    this.mailList.changeStar(mailToStar);
  }

  onChangeFolderObservable(){
    this.folderList.getCurrentFolderName().subscribe({
      next: (data) => {
        this.currentFolderName = data;
        this.mailList.getMessagesByFolder(this.currentFolderName).subscribe({
          next: (data) => (this.messages = data),
          error: (err: Error) =>
            console.error('Observerer ngOnInit got an Error' + err),
          complete: () => {
            this.allowPage = true;
          },
        })
      },
      error: (err: Error) => console.error(err),
    });
  }
}

// this.spinner.changeState(true);

// this.currentFolderName = folderNameSelected;
// this.currentFolderNumber = this.folderService.getNumber(folderNameSelected);
// this.mailList
//   .getMessagesByFolder(this.currentFolderName)
//   .subscribe(this.myObserver);
// this.mailList.log(folderNameSelected);
