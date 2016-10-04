import {Component} from '@angular/core';
import {randomNote, rndNumber, stepsDown, noteToAllCombinedStrings} from '../../../../data/core/util';

@Component({
  templateUrl: 'build/ui/pages/exercises/intervals/intervals.html'
})
export class Intervals {

  nextInterval : number;
  nextIntervalIsUp : boolean;
  currentNote : number;

  constructor () {
    this['noteToString'] = noteToAllCombinedStrings;
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
    let lastInterval : number = this.nextInterval;
    while (this.nextInterval === lastInterval) {
      this.nextInterval = rndNumber(1, 11);
    }
    this.nextIntervalIsUp = Math.random() < 0.5;
  }

}
