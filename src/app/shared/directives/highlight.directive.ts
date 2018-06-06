import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective{

    color: string = '#eaf9ff';

    constructor(
        private elementRef: ElementRef
    ){

    }

    @HostListener('mouseenter') onMouseEnter(){
        this.elementRef.nativeElement.style.backgroundColor = this.color;
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.elementRef.nativeElement.style.backgroundColor = null;
    }

}