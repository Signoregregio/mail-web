import { Injectable } from '@angular/core';

@Injectable()
export class FolderService {
  constructor() {}

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
    }
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
}
