import { Component, OnInit } from '@angular/core';
import { FolderService } from '../services/folder.service';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-mail-view',
  templateUrl: './mail-view.component.html',
})
export class MailViewComponent implements OnInit {

  constructor(protected folderList : FolderService, protected mailList : MailService) { }

  messages : any[] = this.mailList.getMessages();
  currentFolder: number = 0;
  allowCreate: boolean;


  ngOnInit(): void {
  }

  onBtnPressed(value: any){
    console.log(value)
  }

  onFolderSelected(folderSelected: any){
    this.currentFolder = folderSelected.id;
    this.messages = this.mailList.getMessagesByFolder(folderSelected.name);

    console.log(folderSelected)
  }
}
