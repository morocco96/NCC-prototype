import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.hightlight('yellow');

  }


  @HostListener('mouseleave') onMouseLeave(){
    this.hightlight('');
  }


  constructor(private elementRef: ElementRef) {

   }
   hightlight(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

}
