import { Component, OnInit } from '@angular/core';
import { FolderService } from '../services/folder.service';

@Component({
  selector: 'app-mail-view',
  templateUrl: './mail-view.component.html',
})
export class MailViewComponent implements OnInit {

  constructor(protected folderList : FolderService) { }

  messages : string[] = ['message1', 'message2']
  currentFolder: number = 0;
  allowCreate: boolean;


  ngOnInit(): void {
  }

  onBtnPressed(value: any){
    console.log(this.folderList)
  }
}
