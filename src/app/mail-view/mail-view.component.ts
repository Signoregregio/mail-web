import { Component, OnInit } from '@angular/core';
import { FolderService } from '../services/folder.service';
import { MailService } from 'src/app/services/mail.service';
import { TemplateService } from '../services/template.service';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthGuard } from '../services/auth-guard';

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
    private route: ActivatedRoute,
  ) {}

  messagesLoaded: Promise<boolean>;
  messages: any[];
  currentFolder = 0;
  allowCreate: boolean;
  displayCase: string;
  mailToShow: any;
  replyMail: any;
  forwardMail: any;

  async ngOnInit(): Promise<any> {
    this.messages = await this.mailList.getMessagesByFolder('inbox');
    this.messagesLoaded = Promise.resolve(true);
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
        this.forwardMail = this.mailTemplate.getForwardTemplate(this.mailToShow);
        console.log(this.forwardMail);
        this.displayCase = 'forward'
        break;
      case 'Delete':
        this.messages.splice(this.mailToShow.index, 1);
        this.mailList.mailDelete(this.mailToShow.index);
        console.log(this.messages);
        this.displayCase = 'delete';
        
        break;
    }
  }

  async onFolderSelected(folderSelected: number) {
    this.currentFolder = folderSelected;
    let folderName = this.folderList.getName(folderSelected);
    this.messages = await this.mailList.getMessagesByFolder(folderName);
    this.mailList.log(folderName);
  }
  async onQueryChange(query: string){
    let folderName = this.folderList.getName(this.currentFolder);
    this.messages = await this.mailList.getMessagesByFolder(folderName);

    this.messages = this.mailList.getMessagesBySearch(query, this.messages)
  }

  onSendEmail(email: any) {
    console.log(email);
    let newMail = {
      to: email.email,
      from: 'l.scianna545344@gmail.com',
      subject: email.subject,
      body: email.body,
      starred: false,
      folder: this.currentFolder,
    };
    this.messages = [...this.messages, newMail];
    console.log(newMail)
    this.mailList.sendMessages(newMail);
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

  onStarEmail(id: number){
    let mailToStar = (this.messages.filter((message) => message.id === id))[0]
    this.mailList.changeStar(mailToStar);
  }
}
