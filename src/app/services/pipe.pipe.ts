import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calendar'
})
export class PipePipe implements PipeTransform {

  transform(value: any, ccc: number): any {
    let days = ['Do','Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa']
    if(value.dd && value.dayOfTheWeek === ccc){
      return value.dd;
    }

    if(value.dayOfTheWeek === 0 && value.dd === 1){
      return days[ccc]
    }
    
    if(value.dd === 1 && ccc < value.dayOfTheWeek && ccc > 0){
      console.log(ccc + " - " + value.dayOfTheWeek + " - " + value.dd)
    return days[ccc];}
  }

}
