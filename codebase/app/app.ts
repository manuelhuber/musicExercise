import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {ListPage} from './pages/list/list';
import {FingerControl} from './pages/exercises/finger-control/finger-control';
import {ExerciseService} from './difficulty-service/difficutly-service';
import {ExerciseList} from './pages/exercises/exercise-list';

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
      {title: 'Hello Ionic', component: HelloIonicPage},
      {title: 'My First List', component: ListPage},
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

ionicBootstrap(MyApp);
