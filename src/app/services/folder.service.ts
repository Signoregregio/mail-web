import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class FolderService {
  constructor() {}

  private currentFolderName$ = new Subject<string>();

  getCurrentFolderName(){
    return this.currentFolderName$.asObservable()
  }
  
  setCurrentFolderName(folderName: string){ 
    this.currentFolderName$.next(folderName);
  }
  
  list = [
    {
      name: 'Inbox',
      index: 0,
    },
    {
      name: 'Trash',
      index: 1,
    },
    {
      name: 'Sent',
      index: 2,
    },
  ];

  customList = [
    {
      name: 'Angular',
      index: 3,
    },
    {
      name: 'Typescript',
      index: 4,
    },
    {
      name: 'All messages',
      index: 5,
    },
  ];

  getName(id: number) {
    let name: string;
    this.list.map((folder) => {
      if (folder.index === +id) {
        name = folder.name;
      }
      return name;
    });

    this.customList.map((folder) => {
      if (folder.index === +id) {
        name = folder.name;
      }
      return name;
    });
    return name;
  }

  getNumber(folderName: string) {
    let position: number;
    this.list.map((folder) => {
      if (folder.name.toLowerCase() === folderName.toLowerCase()) {
        position = folder.index;
      }
      return position;
    });
    this.customList.map((folder) => {
      if (folder.name.toLowerCase() === folderName.toLowerCase()) {
        position = folder.index;
      }
      return position;
    });
    return position;
  }
}
