import {Component, ViewChild, PLATFORM_DIRECTIVES, provide} from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {FingerControl} from './ui/pages/exercises/finger-control/finger-control';
import {ExerciseService} from './data/exercise-service/exercise-service';
import {ExerciseList} from './ui/pages/exercises/exercise-list';
import {TranslateDirective} from './data/translate/translate-directive';

@Component({
  templateUrl: 'build/app.html',
  providers: [ExerciseService]
})
class MyApp {
  @ViewChild(Nav) nav : Nav;

  // make HelloIonicPage the root (or first) page
  rootPage : any = ExerciseList;
  pages : Array<{title : string, component : any}>;

  constructor (private platform : Platform,
               private menu : MenuController) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      {title: 'Finger Control', component: FingerControl},
      {title: 'Foo', component: ExerciseList}
    ];
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
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp, [provide(PLATFORM_DIRECTIVES, {useValue: [TranslateDirective], multi: true})]);
