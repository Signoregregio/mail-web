import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightFolder]'
})
export class HighlightFolderDirective {
   @Input()
   appHighlight = '';

  constructor() { 
  }

  @HostBinding("style.backgroundColor") backgroundColor:string;

  @HostListener('mouseenter')
  onMouseEnter(){
    this.backgroundColor = 'yellow'
  }
  
  
  @HostListener('mouseleave')
  onMouseLeave(){
    this.backgroundColor = 'transparent'
  }

}
