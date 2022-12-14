import { Input } from '@angular/core';
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
  
  constructor() { }


  newFolderName= '';
  
  ngOnInit(): void {
    console.log(this.title)
  }

}
