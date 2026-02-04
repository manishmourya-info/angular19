import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Bold]'
})
export class BoldDirective {

  constructor(private e : ElementRef, private renderer: Renderer2) { 
  }

  @HostListener("mouseenter")
  mouseenter() {
   this.renderer.setStyle(this.e.nativeElement,'font-weight','bold');
   this.e.nativeElement.style.backgroundColor='green';
  }

  @HostListener("mouseleave")
  mouseleave() {
    this.e.nativeElement.style.backgroundColor='white';
    this.renderer.removeStyle(this.e.nativeElement, 'font-weight');
 }

}
