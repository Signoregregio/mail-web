import { Component, OnInit } from '@angular/core';
import { FolderService } from 'src/app/services/folder.service';


@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
})
export class FolderListComponent implements OnInit {

  constructor(protected folderList : FolderService) { }

  ngOnInit(): void {
    console.log(this.folderList.list)
  }

}
