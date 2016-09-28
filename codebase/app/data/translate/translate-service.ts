import {Injectable} from '@angular/core';
import {de} from './de';

@Injectable()
export class TranslateService {

  currentLanguage : any;
  de : any;

  constructor () {
    this.de = de;
    this.currentLanguage = this.de;
  }

  translate (foo : string) : string {
    try {
      let path : string[] = foo.split('.');
      let translation : string = this.currentLanguage;
      path.forEach((word : string) => {
        translation = translation[word];
      });
      return translation;
    } catch (e) {
      return '';
    }
  }
}
