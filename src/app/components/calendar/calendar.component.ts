import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
})
export class CalendarComponent implements OnInit {
  date = new Date;
  today : string;
  daysInMonth: Date;
  firstDayInMonth: Date;
  day : number;
  
  ngOnInit(){
    this.today = this.date.toISOString().split('T')[0]
    let month = this.today.slice(5,7)
    let year = this.today.slice(0,4);
    this.firstDayInMonth = new Date(+year, (+month - 1), 1);
    this.daysInMonth = new Date(+year, +month, 0);
  }

}
