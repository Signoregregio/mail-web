import { Component, OnInit } from '@angular/core';
import { FolderService } from '../services/folder.service';
import { MailService } from 'src/app/services/mail.service';
import { TemplateService } from '../services/template.service';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthGuard } from '../services/auth-guard';
import { map } from 'rxjs';

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
  ) {
    // route.paramMap.pipe(map(paramMap => paramMap.get('folder'))).subscribe(folder => {this.currentFolder = folder;
    // console.log(this.currentFolder)
    // console.log(folder)
  // })
  }

  messagesLoaded: Promise<boolean>;
  messages: any[];
  currentFolderPosition = 0;
  currentFolder: string = 'inbox';
  currentPage: number;
  allowCreate: boolean;
  displayCase: string;
  mailToShow: any;
  replyMail: any;
  forwardMail: any;


  async ngOnInit(): Promise<any> {
    this.currentFolder = this.route.snapshot.paramMap['folder'];
    this.currentPage = this.route.snapshot.params['page'];
    console.log(this.currentFolder)
    console.log(this.currentPage)

    // this.route.paramMap.subscribe(params => {
    //   console.log(params.get('folder'))
    // })

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
        this.forwardMail = this.mailTemplate.getForwardTemplate(
          this.mailToShow
        );
        console.log(this.forwardMail);
        this.displayCase = 'forward';
        break;
      case 'Delete':
        this.messages.splice(this.mailToShow.index, 1);
        this.mailList.mailDelete(this.mailToShow.index);
        console.log(this.messages);
        this.displayCase = 'delete';

        break;
    }
  }

  async onFolderSelected() {
    // la folder name la prenderei dal link e non dall'event, 
    // quindi avrei un evento senza variabili. però devo comunque 
    // caricare la mock fitlrata ogni volta che clicco sulla folder.
    // quindi qua cambio message che mi cambiera' la lista
    console.log(this.currentFolder)
    this.currentFolderPosition = this.folderList.getFolderPosition(this.currentFolder);
    this.messages = await this.mailList.getMessagesByFolder(this.currentFolder);
    this.mailList.log(this.currentFolder);
  }

  async onQueryChange(query: string) {
    this.messages = await this.mailList.getMessagesByFolder(this.currentFolder);

    this.messages = this.mailList.getMessagesBySearch(query, this.messages);
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

  onStarEmail(id: number) {
    let mailToStar = this.messages.filter((message) => message.id === id)[0];
    this.mailList.changeStar(mailToStar);
  }
}
