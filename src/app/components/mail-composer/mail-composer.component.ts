import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  @Input()
  public newMessage = {
    to: '',
    subject: '',
    body: '',
  };

  @Input()
  public isReplyng: boolean = false;
  
  @Input()
  public isForwarding: boolean = false;

  ngOnInit(): void {}

  subjectError: boolean = false;
  receiverError: boolean = false;
  bodyError: boolean = false;

  mailRegex =
    /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  onSubmit(formMail: any) {
    this.checkSubject(formMail.value.subject);
    this.checkTo(formMail.value.to);
    this.checkBody(formMail.value.body);

    if (this.subjectError || this.receiverError || this.bodyError) {
      return console.log('error: form is not complete or correct')
    }
    this.sendEmail.emit(formMail.value);
  }

  onCancel() {
    this.cancelEmail.emit();
  }

  checkSubject(subject: string) {
    if (subject === undefined || subject.length <= 3) {
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
