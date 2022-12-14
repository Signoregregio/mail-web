import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-star',
  templateUrl: './common-star.component.html',
})
export class CommonStarComponent {
  @Input()
  entity: any; 
  toggleStar(){
      this.entity.starred = !this.entity.starred
  }

}
