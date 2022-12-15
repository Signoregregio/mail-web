import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
   @Input()
   appHighlight = '';

  constructor(private element: ElementRef) { 
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
