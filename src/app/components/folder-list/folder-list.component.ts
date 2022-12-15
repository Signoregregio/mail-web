import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
})
export class FolderListComponent implements OnInit {
  @Input()
  public currentFolder: number;
  @Input()
  public allowCreate: boolean;
  @Input()
  public title: string;
  @Input()
  public folderList: any[];
  @Output()
  folderSelected = new EventEmitter<any>();

  onFolderSelected(event: any){
    let folderAttributes = {
      id: event.target.id,
      name: event.target.title
    }
    console.log(folderAttributes)
    this.folderSelected.emit(folderAttributes)
  }

  constructor() {}

  newFolderName = '';

  ngOnInit(): void {
  }
}
