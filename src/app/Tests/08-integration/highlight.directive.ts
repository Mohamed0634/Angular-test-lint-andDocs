import { Directive, Input, ElementRef, OnChanges } from "@angular/core";

@Directive({
    selector: "[appHighlight]"
})
export class HighlightDirective implements OnChanges {
    @Input("appHighlight")
    defaultColor = "yellow";
    bgColor: string;



    constructor(private el: ElementRef) {}

    ngOnChanges() {
	    this.el.nativeElement.style.backgroundColor =
			this.bgColor || this.defaultColor;
    }
}
