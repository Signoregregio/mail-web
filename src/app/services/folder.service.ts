import { Injectable } from '@angular/core';

@Injectable()
export class FolderService {

  constructor() { }

  list: any[] = [
    {
    name: "Inbox",
    index: 0,
  },
    {
    name: "Trash",
    index: 1,
  },
    {
    name: "Sent",
    index: 2,
  },
]


custom = [
  {
  name: "Angular",
  index: 3,
},
  {
  name: "Typescript",
  index: 4,
},
]

}
