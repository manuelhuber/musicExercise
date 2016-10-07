import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FingerControl} from './finger-control/finger-control';
import {Intervals} from './intervals/intervals';
import {TranslateService} from '../../../data/translate/translate-service';
import {Scales} from './scales/scales';

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
      title: translate.translate('fingerControl.title'),
      page: FingerControl,
      icon: 'hand'
    }, {
      title: translate.translate('intervals.title'),
      page: Intervals,
      icon: 'musical-notes'
    }, {
      title: translate.translate('scales.title'),
      page: Scales,
      icon: 'barcode'
    }];
  }

  exerciseTapped (item : ExercisesListEntry) : void {
    this.navCtrl.push(item.page);
  }
}
