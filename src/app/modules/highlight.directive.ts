import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit(): void {
// this.renderer.setStyle(this.elementRef.nativeElement,'background-color','#6D90A3')
    }
@HostListener('mouseenter')mouseover(){
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color','#ABDFFD')
}
@HostListener('mouseleave')mouseleave(){
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent')
    }
}
