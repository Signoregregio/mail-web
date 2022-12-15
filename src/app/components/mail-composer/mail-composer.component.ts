import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mail-composer',
  templateUrl: './mail-composer.component.html',
})
export class MailComposerComponent implements OnInit {

  constructor() { }
  @Output()
  sendEmail = new EventEmitter<any>();

  ngOnInit(): void {
  }

  subjectError: boolean = false;
  receiverError: boolean = false;
  bodyError: boolean = false;
  onSubmit(f: any){
    // check input
    this.sendEmail.emit(f.value)
  }

  onCancel(f: any){
    console.log(f)
  }

}
