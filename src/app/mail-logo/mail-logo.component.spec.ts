import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailLogoComponent } from './mail-logo.component';

describe('MailLogoComponent', () => {
  let component: MailLogoComponent;
  let fixture: ComponentFixture<MailLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
