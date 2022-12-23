import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calendar',
})
export class dateNumber implements PipeTransform {
  transform(value: any, ccc: number): any {
    let dayInMonthBefore = new Date(value.yy, value.mm, 0).getDate();
    let dayInMonth = new Date(value.yy, value.mm + 1, 0).getDate();

    // caso default
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

    // caso fine mese
    if(value.dd === dayInMonth && ccc > value.dayOfTheWeek){
      return (ccc - value.dayOfTheWeek)
    }
  }

}
