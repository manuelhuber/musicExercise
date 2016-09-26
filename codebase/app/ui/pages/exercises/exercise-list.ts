import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FingerControl} from './finger-control/finger-control';

export interface ExercisesListEntry {
  title : string;
  page : any;
  icon : string;
}

@Component({
  templateUrl: 'build/ui/pages/exercises/exercise-list.html'
})
export class ExerciseList {
  exercises : ExercisesListEntry[];

  constructor (private navCtrl : NavController) {
    this.exercises = [{
      title: 'Finger Control',
      page: FingerControl,
      icon: 'hand'
    }];
  }

  exerciseTapped (item : ExercisesListEntry) : void {
    this.navCtrl.push(item.page);
  }
}
