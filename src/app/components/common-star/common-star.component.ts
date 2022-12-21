import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs';
import { FolderService } from 'src/app/services/folder.service';

@Component({
  selector: 'app-common-star',
  templateUrl: './common-star.component.html',
})
export class CommonStarComponent implements OnInit {
  constructor(private folderService: FolderService) {

  }

  miao: string;
  count: number;
  ngOnInit(): void {
    this.folderService.currentFolderName$.subscribe(
      (data) => this.miao = data
    );
  }

  @Input()
  entity: boolean;
  @Output()
  starEmail = new EventEmitter<any>();

  onToggleStar() {
    this.entity = !this.entity;
    this.starEmail.emit(this.entity);
  }
}
