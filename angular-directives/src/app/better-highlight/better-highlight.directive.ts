import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding,
  OnInit,
  Renderer2,
  Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor:string = 'transparent';
  @Input() highlightColor:string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
 //   this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.highlightColor)
    this.backgroundColor = this.highlightColor
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
 //   this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.defaultColor)
    this.backgroundColor = this.defaultColor
  }

}
