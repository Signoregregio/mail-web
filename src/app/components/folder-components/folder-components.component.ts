import { Component, OnInit } from '@angular/core';
import { FolderService } from 'src/app/services/folder.service';
import { SpinnerStateService } from 'src/app/services/spinner-state.service';
import { TemplateService } from 'src/app/services/template.service';

@Component({
  selector: 'app-folder-components',
  templateUrl: './folder-components.component.html',
})
export class FolderComponentsComponent implements OnInit {
  //to do display case
  // get folderList
  constructor(
    private spinner: SpinnerStateService,
    protected folderService: FolderService,
    private templateService: TemplateService,
  ) {}
  ngOnInit(): void {
  }

  currentFolderName: string = 'inbox'; //prendero dall'url
  currentFolderNumber: number = this.folderService.getNumber(
    this.currentFolderName
  );

  composeEmail() {
    this.templateService.setDisplayCase('newMail')
  }

  onFolderSelected(folderNameSelected: string) {
    this.currentFolderNumber = this.folderService.getNumber(folderNameSelected);
    this.folderService.setCurrentFolderName(folderNameSelected)
  }
}
