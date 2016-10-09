import {Component} from '@angular/core';
import {ScaleModel, ALL_SCALES} from '../../../../data/core/model/scales';
import {rndNumber, randomNote, noteToAllCombinedStrings, noteToString} from '../../../../data/core/util';
import {TranslateService} from '../../../../data/translate/translate-service';
import {AccordModel, ALL_ACCORDS} from '../../../../data/core/model/accords';

@Component({
  templateUrl: 'build/ui/pages/exercises/accords-exercise/accords-exercise.html'
})
export class AccordsExercise {

  startingNote : number;
  currentAccord : AccordModel;
  showSolution : boolean;

  get intervalInNotes () : string {
    let currentNote : number = this.startingNote;
    let noteArray : number[] = this.currentAccord.intervals.map((steps : number) => {
      currentNote += steps;
      return currentNote;
    });
    noteArray.unshift(this.startingNote);
    return noteArray.map((note : number) => {
      return noteToString(note);
    }).join(' - ');
  }

  constructor (private translate : TranslateService) {
    this['noteToString'] = noteToAllCombinedStrings;
    this.newAccord();
  }

  newAccord () : void {
    this.startingNote = randomNote();
    let oldAccord : AccordModel = this.currentAccord;
    while (oldAccord === this.currentAccord) {
      this.currentAccord = ALL_ACCORDS[rndNumber(0, ALL_ACCORDS.length - 1)];
    }
    this.showSolution = false;
  }
}
