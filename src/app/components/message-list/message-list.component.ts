import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
})
export class MessageListComponent implements OnInit, OnChanges {
  constructor() {}
  mailsShowed = 3;
  sliceStart = 0;
  sliceEnd = this.mailsShowed;
  todayDate = new Date();

  @Input()
  public messages: any[];
  @Output()
  selectEmail = new EventEmitter<any>();

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
  }
  onStarEmail(entity: boolean) {
    console.log(entity);
  }

  onSelectEmail(index: number) {
    console.log(index)
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
