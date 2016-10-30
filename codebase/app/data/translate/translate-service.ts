import {Injectable} from '@angular/core';
import {DE} from './de';
import {EN} from './en';

const ENGLISH : string = 'en';
const GERMAN : string = 'de';

@Injectable()
export class TranslateService {

  private currentLanguage : any;
  private languages : any;

  constructor () {
    this.initializeLanguages();
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
      let translation : any = this.currentLanguage;
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

  german () : void {
    this.currentLanguage = this.languages[GERMAN];
  }

  private initializeLanguages () : void {
    this.languages = {};
    this.languages[ENGLISH] = EN;
    this.languages[GERMAN] = DE;
    this.currentLanguage = this.languages[ENGLISH];
  }
}
