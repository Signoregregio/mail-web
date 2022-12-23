import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'setId'
})
export class IdPipe implements PipeTransform {

  transform(value: any, ccc :number): string {
    let dayInMonthBefore = new Date(value.yy, value.mm, 0).getDate();
    let dayInMonth = new Date(value.yy, value.mm + 1, 0).getDate();

    if (value.dd && value.dayOfTheWeek === ccc) {
      return `${value.enum}`;
    }
    //caso sabato primo giorno
    if (value.dayOfTheWeek === 6 && value.dd === 1) {
      return `${value.enum - (5 - ccc)}`;
    }
    //caso mese non inizia con domenica
    if (value.dd === 1 && ccc < value.dayOfTheWeek) {
      return `${value.enum - (value.dayOfTheWeek - ccc)}`;
    }

    if(value.dd === dayInMonth && ccc > value.dayOfTheWeek){
      return `${value.enum + (ccc - value.dayOfTheWeek)}`
    }
    return '';
  }

}
