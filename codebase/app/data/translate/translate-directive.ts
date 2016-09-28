import {Directive, ElementRef, Renderer} from '@angular/core';
import {TranslateService} from './translate-service';
@Directive({
  selector: '[translate]',
})
export class TranslateDirective {
  constructor (el : ElementRef, renderer : Renderer, translate : TranslateService) {
    let translation : string = translate.translate(el.nativeElement.getAttribute('translate'));
    renderer.setText(el.nativeElement, translation);
  }
}
