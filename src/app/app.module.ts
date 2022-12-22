import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HighlightFolderDirective } from './directive/highlight-folder.directive';
import { HighlightMailListDirective } from './directive/highlight-mail-list.directive';
import { LogService } from './services/log.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MailLogoComponent } from './components/mail-logo/mail-logo.component';
import { MessageViewerComponent } from './components/message-viewer/message-viewer.component';
import { MailViewComponent } from './mail-view/mail-view.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { CommonStarComponent } from './components/common-star/common-star.component';
import { FolderListComponent } from './components/folder-components/folder-list/folder-list.component';
import { MailComposerComponent } from './components/mail-composer/mail-composer.component';
import { MailVoidComponent } from './components/mail-void/mail-void.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { FolderComponentsComponent } from './components/folder-components/folder-components.component';

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
    HighlightFolderDirective,
    HighlightMailListDirective,
    PageNotFoundComponent,
    SearchPanelComponent,
    LoadingSpinnerComponent,
    FolderComponentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [LogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
