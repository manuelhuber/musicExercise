import {Component} from '@angular/core';
import {noteToString, randomNote, rndNumber, stepsDown} from '../../../../data/core/util';

@Component({
  templateUrl: 'build/ui/pages/exercises/intervals/intervals.html'
})
export class Intervals {

  nextInterval : number;
  nextIntervalIsUp : boolean;
  currentNote : number;

  constructor () {
    this['noteToString'] = noteToString;
    this.currentNote = randomNote();
    this.newInterval();
  }

  up () : void {
    this.currentNote = this.currentNote + this.nextInterval;
    this.newInterval();
  }

  down () : void {
    this.currentNote = stepsDown(this.currentNote, this.nextInterval);
    this.newInterval();
  }

  newInterval () : void {
    this.nextInterval = rndNumber(1, 11);
    this.nextIntervalIsUp = Math.random() < 0.5;
  }
  
}
