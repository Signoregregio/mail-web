import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'subject': new FormControl({value: this.newMessage.subject, disabled: (this.isReplyng || this.isForwarding)}, [Validators.required, Validators.minLength(4)]),
      'email': new FormControl({value : this.newMessage.to, disabled: this.isReplyng}, [Validators.required, Validators.email]),
      'body': new FormControl({value: this.newMessage.body, disabled: this.isForwarding}, [Validators.required, Validators.minLength(1)])
    });
  }

 
  onSubmit(){
    console.log(this.signupForm)
    this.sendEmail.emit(this.signupForm.value);
  }

  onCancel() {
    this.cancelEmail.emit();
  }
}
