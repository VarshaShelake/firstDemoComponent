import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private e1:ElementRef,private render:Renderer2) {

    e1.nativeElement.style.backgroundColor="gray";
    //e1.nativeElement.style.display="none";

    render.setStyle(e1.nativeElement,'backgroundColor','red');


   }
  

}
