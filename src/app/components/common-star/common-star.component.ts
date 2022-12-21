import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs';
import { FolderService } from 'src/app/services/folder.service';

@Component({
  selector: 'app-common-star',
  templateUrl: './common-star.component.html',
})
export class CommonStarComponent implements OnInit {
  constructor() {
  }

  count: number;
  ngOnInit(): void {

  }

  @Input()
  entity: boolean;
  @Output()
  starEmail = new EventEmitter<any>();
  @Input()
  miao : string;

  onToggleStar() {
    this.entity = !this.entity;
    this.starEmail.emit(this.entity);
  }
}
