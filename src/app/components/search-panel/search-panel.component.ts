import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
})
export class SearchPanelComponent {
  @Output()
  queryInserted = new EventEmitter<any>()

  query = '';

  onChange(query: string){
    this.queryInserted.emit(query)
  }
}
