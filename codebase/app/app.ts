import {Component, ViewChild, PLATFORM_DIRECTIVES, provide} from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {ExerciseService} from './data/core/services/exercise-service';
import {ExerciseList} from './ui/pages/exercises/exercise-list';
import {TranslateDirective} from './data/translate/translate-directive';
import {TranslateService} from './data/translate/translate-service';
import {Settings} from './ui/pages/settings/settings';

@Component({
  templateUrl: 'build/app.html',
  providers: [ExerciseService, TranslateService]
})
class MyApp {
  @ViewChild(Nav) nav : Nav;

  // make HelloIonicPage the root (or first) page
  rootPage : any = ExerciseList;
  pages : Array<{title : string, component : any}>;

  constructor (private platform : Platform,
               private menu : MenuController,
               private translate : TranslateService) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      {title: 'EXERCISES', component: ExerciseList},
      {title: 'SETTINGS', component: Settings}
    ];
  }

  /**
   * This is needed to ensure that the title es always translated with the current language.
   * Using the directive won't work at all.
   * Translating the title in the this.pages initialization will not change when the language is changed
   * Calling this function "translate" will cause an error.
   */
  translateTitle (foo : string) : string {
    return this.translate ? this.translate.translate(foo) : '';
  }

  initializeApp () : any {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage (page : any) : any {
    // close the menu when clicking a link from the menu
    this.menu.close();
    if (page.component === Settings) {
      this.nav.push(page.component);
    } else {
      // navigate to the new page if it is not the current page
      this.nav.setRoot(page.component);
    }
  }
}

ionicBootstrap(MyApp, [provide(PLATFORM_DIRECTIVES, {useValue: [TranslateDirective], multi: true})]);
