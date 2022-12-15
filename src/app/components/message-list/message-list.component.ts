import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
})
export class MessageListComponent implements OnInit {
  constructor() {}
  mailsShowed = 3;
  sliceStart = 0;
  sliceEnd = this.mailsShowed;

  @Input()
  public messages: any[];
  @Output()
  selectEmail = new EventEmitter<any>();

  ngOnInit(): void {}

  onStarEmail(entity: boolean) {
    console.log(entity);
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
}
