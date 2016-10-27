import {Injectable} from '@angular/core';
import {DE} from './de';
import {EN} from './en';

const ENGLISH : string = 'en';
const DEUTSCH : string = 'de';

@Injectable()
export class TranslateService {

  private currentLanguage : any;
  private languages : any = {
    'en': EN,
    'de': DE
  };

  constructor () {
    this.currentLanguage = this.languages[ENGLISH];
  }

  getCurrentLanguage () : string {
    for (let key in this.languages) {
      if (this.languages.hasOwnProperty(key) && this.languages[key] === this.currentLanguage) {
        return key;
      }
    }
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

  english () : void {
    this.currentLanguage = this.languages[ENGLISH];
  }

  deutsch () : void {
    this.currentLanguage = this.languages[DEUTSCH];
  }
}
