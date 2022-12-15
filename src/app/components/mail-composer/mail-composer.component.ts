import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mail-composer',
  templateUrl: './mail-composer.component.html',
})
export class MailComposerComponent implements OnInit {
  constructor() {}
  @Output()
  sendEmail = new EventEmitter<any>();

  @Output()
  cancelEmail = new EventEmitter<any>();

  ngOnInit(): void {}

  subjectError: boolean = false;
  receiverError: boolean = false;
  bodyError: boolean = false;

  mailRegex =
    /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
  onSubmit(f: any) {
    this.checkSubject(f.value.subject);
    this.checkTo(f.value.to);
    this.checkBody(f.value.body);

    this.sendEmail.emit(f.value);
  }

  onCancel() {
    this.cancelEmail.emit();
  }

  checkSubject(subject: string) {
    if (subject === null || subject.length <= 3) {
      this.subjectError = true;
    } else {
      this.subjectError = false;
    }
  }

  checkTo(to: string) {
    if (!this.mailRegex.test(to)) {
      this.receiverError = true;
    } else {
      this.receiverError = false;
    }
  }

  checkBody(body: string) {
    if (body === '') {
      this.bodyError = true;
    } else {
      this.bodyError = false;
    }
  }
}
