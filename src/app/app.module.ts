import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MailLogoComponent } from './components/mail-logo/mail-logo.component';
import { MessageViewerComponent } from './components/message-viewer/message-viewer.component';
import { MailViewComponent } from './mail-view/mail-view.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { CommonStarComponent } from './components/common-star/common-star.component';
import { FolderListComponent } from './folder-list/folder-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MailLogoComponent,
    MessageViewerComponent,
    MailViewComponent,
    MessageListComponent,
    CommonStarComponent,
    FolderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
