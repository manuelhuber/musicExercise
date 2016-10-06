import {Component} from '@angular/core';
import {randomNote, rndNumber, stepsDown, noteToAllCombinedStrings} from '../../../../data/core/util';
import {ExerciseService} from '../../../../data/exercise-service/exercise-service';

@Component({
  templateUrl: 'build/ui/pages/exercises/intervals/intervals.html'
})
export class Intervals {

  nextInterval : number;
  nextIntervalIsUp : boolean;
  currentNote : number;

  get difficulty () : number {
    return this.exerciseService ? this.exerciseService.getDifficulty().intervals : 1;
  };

  set difficulty (dif : number) {
    let newDifficulty : number = parseInt(<any>dif, 10);
    if (this.exerciseService && !isNaN(newDifficulty)) {
      this.exerciseService.setIntervalsDifficulty(newDifficulty);
    }
  }

  constructor (private exerciseService : ExerciseService) {
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
      this.nextInterval = rndNumber(1, this.difficulty);
    }
    this.nextIntervalIsUp = Math.random() < 0.5;
  }

}
