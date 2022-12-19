import { Component, OnInit } from '@angular/core';
import { FolderService } from '../services/folder.service';
import { MailService } from 'src/app/services/mail.service';
import { TemplateService } from '../services/template.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-mail-view',
  templateUrl: './mail-view.component.html',
  providers: [MailService, FolderService, TemplateService],
})
export class MailViewComponent implements OnInit {
  constructor(
    protected folderList: FolderService,
    protected mailList: MailService,
    protected mailTemplate: TemplateService,
    private route: ActivatedRoute
  ) {}

  messages: any[] = this.mailList.getMessages();
  currentFolder = 0;
  allowCreate: boolean;
  displayCase: string;
  mailToShow: any;
  replyMail: any;
  forwardMail: any;

  ngOnInit(): void {}

  onBtnMessageViewerPressed(value: string) {
    console.log(value);
    switch (value) {
      case 'Reply':
        this.replyMail = this.mailTemplate.getReplyTemplate(this.mailToShow);
        console.log(this.replyMail);
        this.displayCase = 'reply';
        break;
      case 'Forward':
        this.forwardMail = this.mailTemplate.getForwardTemplate(this.mailToShow);
        console.log(this.forwardMail);
        this.displayCase = 'forward'
        break;
      case 'Delete':
        this.messages.splice(this.mailToShow.index, 1);
        console.log(this.messages);
        this.displayCase = 'delete'
        break;
    }
  }

  onFolderSelected(folderSelected: number) {
    this.currentFolder = folderSelected;
    let folderName = this.folderList.getName(folderSelected);
    this.messages = this.mailList.getMessagesByFolder(folderName);
    this.mailList.log(folderName);
  }

  onSendEmail(email: any) {
    console.log(email);
    let newMail = {
      to: email.to,
      from: 'l.scianna545344@gmail.com',
      subject: email.subject,
      body: email.body,
      starred: false,
    };
    this.messages = [...this.messages, newMail];
    console.log(this.messages);
  }

  onCancelEmail() {
    this.displayCase = 'none';
  }

  composeEmail() {
    this.displayCase = 'newMail';
    console.log(this.displayCase);
  }

  onSelectEmail(index: number) {
    console.log(index);
    this.mailToShow = this.messages[index];
    this.mailToShow.index = index;
    console.log(this.mailToShow);
    this.displayCase = 'show';
  }
}
