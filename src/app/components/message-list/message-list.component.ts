import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
})
export class MessageListComponent implements OnInit {

  constructor() { }

  @Input() 
  public messages : any[];
  
  ngOnInit(): void {
  }

  onStarEmail(entity: boolean){
    console.log(entity)
  }
}
