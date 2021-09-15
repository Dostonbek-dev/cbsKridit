import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit{

  constructor(private elRef:ElementRef) {}
      ngOnInit() {
this.elRef.nativeElement.style.backgroundColor='#6D90A3';
  }
}
