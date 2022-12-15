import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MailLogoComponent } from './components/mail-logo/mail-logo.component';
import { MessageViewerComponent } from './components/message-viewer/message-viewer.component';
import { MailViewComponent } from './mail-view/mail-view.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { CommonStarComponent } from './components/common-star/common-star.component';
import { FolderListComponent } from './components/folder-list/folder-list.component';
import { MailComposerComponent } from './components/mail-composer/mail-composer.component';
import { MailVoidComponent } from './components/mail-void/mail-void.component';
import { HighlightDirective } from './directive/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    MailLogoComponent,
    MessageViewerComponent,
    MailViewComponent,
    MessageListComponent,
    CommonStarComponent,
    FolderListComponent,
    MailComposerComponent,
    MailVoidComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
