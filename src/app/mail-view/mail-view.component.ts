import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-view',
  templateUrl: './mail-view.component.html',
  styleUrls: ['./mail-view.component.css']
})
export class MailViewComponent implements OnInit {

  constructor() { }
  messages : string[] = ['message1', 'message2']
  
  ngOnInit(): void {
  }

}
