import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
})
export class MessageListComponent implements OnInit{
  constructor() {}
  mailsShowed = 5;
  sliceStart = 0;
  sliceEnd = this.mailsShowed;
  todayDate = new Date();

  @Input()
  public messages: any[];
  @Output()
  selectEmail = new EventEmitter<any>();
  @Output()
  starEmail = new EventEmitter<any>();

  ngOnInit(): void {}

  
  onStarEmail(id: number) {
    this.starEmail.emit(id)
  }

  onSelectEmail(index: number) {
    this.selectEmail.emit(index);
  }

  nextPage() {
    if (this.sliceEnd < this.messages.length) {
      this.sliceStart += this.mailsShowed;
      this.sliceEnd += this.mailsShowed;
    }
  }

  prevPage() {
    if (this.sliceStart - this.mailsShowed >= 0) {
      this.sliceStart -= this.mailsShowed;
      this.sliceEnd -= this.mailsShowed;
    }
  }

  resetPage(){
    this.sliceStart = 0;
    this.sliceEnd = this.mailsShowed;
  }

}
