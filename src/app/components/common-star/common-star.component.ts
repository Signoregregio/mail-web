import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-star',
  templateUrl: './common-star.component.html',
})
export class CommonStarComponent {
  @Input()
  entity: boolean;
  @Output()
  starEmail = new EventEmitter<any>();

  onToggleStar() {
    this.entity = !this.entity;
    this.starEmail.emit(this.entity);
  }
}
