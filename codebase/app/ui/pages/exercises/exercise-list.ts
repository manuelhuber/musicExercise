import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FingerControl} from './finger-control/finger-control';
import {Intervals} from './intervals/intervals';
import {TranslateService} from '../../../data/translate/translate-service';
import {ScalesExercise} from './scales-exercise/scales-exercise';
import {AccordsExercise} from './accords-exercise/accords-exercise';
import {AdvancedFingerExercise} from './advanced-finger-exercise/advanced-finger-exercise';

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

  constructor (private navCtrl : NavController, translate : TranslateService) {
    this.exercises = [{
      title: translate.translate('FINGER_CONTROL.TITLE'),
      page: FingerControl,
      icon: 'hand'
    }, {
      title: translate.translate('INTERVALS.TITLE'),
      page: Intervals,
      icon: 'musical-note'
    }, {
      title: translate.translate('SCALES.TITLE'),
      page: ScalesExercise,
      icon: 'barcode'
    }, {
      title: translate.translate('ACCORDS.TITLE'),
      page: AccordsExercise,
      icon: 'musical-notes'
    }, {
      title: translate.translate('ADVANCED_FINGER_EXERCISE.TITLE'),
      page: AdvancedFingerExercise,
      icon: 'musical-notes'
    }];
  }

  exerciseTapped (item : ExercisesListEntry) : void {
    this.navCtrl.push(item.page);
  }
}
