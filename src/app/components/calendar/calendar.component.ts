import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
})
export class CalendarComponent implements OnInit {
  constructor(private changeDetection: ChangeDetectorRef) {}

  date = new Date();
  daysInMonth: number;
  // first [] [] [] [] []
  // if numero % 7 == 0, allora  fai <p>
  week = ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'];
  firstDay: string;
  allMonth: any[] = [];
  currentMonth = this.date.getMonth();
  currentYear = this.date.getFullYear();
  currentMonthReal: number;
  currentDate;
  
  ngOnInit() {
    this.createMonthArray();
    this.getCurrentMonth(this.currentMonth, this.currentYear);
  }

  getCurrentMonth(month: number, year: number) {
    this.allMonth.map((value, index) => {
      if (value[0].mm === month && value[0].yy === year) {
        this.currentMonth = index;
        this.currentYear = value[0].yy;
        this.currentMonthReal = value[0].mm;
      }
    });
    this.currentDate = new Date(this.currentYear, this.currentMonthReal)
  }

  createMonthArray() {
    this.allMonth = [];
    let monthNumber: number = 0;
    let year = this.currentYear - 1;
    for (let i = 0; i < 36; i++) {
      let monthArray = [];
      console.log(monthNumber + ' - ' + year);
      this.daysInMonth = new Date(year, monthNumber + 1, 0).getDate();
      for (let i = 1; i <= this.daysInMonth; i++) {
        let dayOfTheWeek = new Date(year, monthNumber, i).getDay();
        let day = {
          dd: i,
          mm: monthNumber,
          yy: year,
          dayOfTheWeek: dayOfTheWeek,
        };
        monthArray.push(day);
      }
      monthNumber++;
      if (monthNumber === 12) {
        monthNumber = 0;
        year++;
      }
      this.allMonth.push(monthArray);
    }
    console.log(this.allMonth);
  }

  onPrec() {
    this.currentMonth -= 1;
    // this.getMonthCalendar();
  }
  onSucc() {
    this.currentMonth += 1;
    // this.getMonthCalendar();
  }
}
