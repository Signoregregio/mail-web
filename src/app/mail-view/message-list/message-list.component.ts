import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  constructor() { }
  @Input() 
  public messages : string[];
  
  if (messages ){
    console.log(messages)
  }
  
  ngOnInit(): void {
  }

}
