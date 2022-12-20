import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, map, of, Subject } from 'rxjs';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
})
export class SearchPanelComponent implements OnInit {
  @Output()
  queryInserted = new EventEmitter<any>();

  private subjectKeyUp = new Subject<any>();

  ngOnInit(): void {
    this.subjectKeyUp
      .pipe(
        map((event) => event.target.value),
        debounceTime(500)
      )
      .subscribe((debouncedQuery) => this.queryInserted.emit(debouncedQuery));
  }
  onChange(query: any) {
    this.subjectKeyUp.next(query);
  }
}
