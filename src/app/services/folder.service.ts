import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
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
  index: 0,
},
  {
  name: "Typescript",
  index: 1,
},
]

}
