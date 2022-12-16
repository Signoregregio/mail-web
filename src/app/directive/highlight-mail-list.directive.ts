import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightMailList]',
})
export class HighlightMailListDirective {
  constructor() {}

  @HostBinding('style.backgroundColor') backgroundColor: string;

  some_text = 'Click Here';
  inside = false;

  @HostListener('click')
  clicked() {
    this.inside = true;
  }
  @HostListener('document:click')
  clickedOut() {
    this.inside ? this.backgroundColor='rgb(168, 153, 153)' : this.backgroundColor='transparent';
    this.inside = false;
  }
}
