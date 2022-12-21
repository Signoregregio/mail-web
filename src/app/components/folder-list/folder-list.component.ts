import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
})
export class FolderListComponent implements OnInit {
  constructor() {}

  @Input()
  public currentFolderNumber: number;
  @Input()
  public allowCreate: boolean;
  @Input()
  public title: string;
  @Input()
  public folderList: any[];
  @Output()
  folderSelected = new EventEmitter<any>();

  folderId: number;

  onFolderSelected(event: any) {
    (this.folderId = event.target.title.toLowerCase());
    this.folderSelected.emit(this.folderId);
  }

  newFolderName = '';

  ngOnInit(): void {}
}
