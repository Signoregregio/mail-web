import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calendar',
})
export class PipePipe implements PipeTransform {
  transform(value: any, ccc: number): any {
    let dayInMonthBefore = new Date(value.yy, value.mm, 0).getDate();
    let dayInMonth = new Date(value.yy, value.mm + 1, 0).getDate();

    if (value.dd && value.dayOfTheWeek === ccc) {
      console.log(value.dd)
      return value.dd;
    }
    //caso domenica primo giorno
    if (value.dayOfTheWeek === 0 && value.dd === 1) {
      console.log(ccc + ' - ' + value.dayOfTheWeek);
      return dayInMonthBefore - (6 - ccc);
    }
    //caso mese non inizia con Lunedì e non Domenica
    if (value.dd === 1 && ccc < value.dayOfTheWeek && ccc > 0) {
      return dayInMonthBefore - (value.dayOfTheWeek - 1 - ccc);
    }

    // if (value.dd === dayInMonth) {
    //   console.log(value.dd + '-' + ccc + '-' + value.dayOfTheWeek);
    //   return ccc - value.dayOfTheWeek;
    // }
  }

  // caso mese finisce  non di Domenica
}
