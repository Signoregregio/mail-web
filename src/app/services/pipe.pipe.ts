import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calendar',
})
export class PipePipe implements PipeTransform {
  transform(value: any, ccc: number): any {
    let dayInMonthBefore = new Date(value.yy, value.mm, 0).getDate();
    let dayInMonth = new Date(value.yy, value.mm + 1, 0).getDate();

    if (value.dd && value.dayOfTheWeek === ccc) {
      return value.dd;
    }
    //caso sabato primo giorno
    if (value.dayOfTheWeek === 6 && value.dd === 1) {
      return dayInMonthBefore - (6 - ccc);
    }
    //caso mese non inizia con domenica
    if (value.dd === 1 && ccc < value.dayOfTheWeek) {
      return dayInMonthBefore - (value.dayOfTheWeek - 1 - ccc);
    }

    if(value.dd === dayInMonth && ccc > value.dayOfTheWeek){
      console.log(value)
      console.log(dayInMonth, ' - ' , value.dd, ' - ', value.dayOfTheWeek, ' - ', ccc)
      return (ccc - value.dayOfTheWeek)
    }
  }

}
