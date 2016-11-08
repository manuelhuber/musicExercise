import {Injectable} from '@angular/core';
import {LocalStorage} from 'ionic-angular';

export const MINIMUM_DIFFICULTY : number = 1;
export const FINGER_CONTROL_MAX : number = 5;
const SETTINGS_KEY : string = 'difficultysettings';

export interface ExerciseDifficulty {
  fingerControl : number;
  intervals : number;
  advancedFingerExercise : number;
}

@Injectable()
export class ExerciseService {

  private difficulty : ExerciseDifficulty = this.getDefaultDifficulty();

  constructor () {
    this.loadSettings();
  }

  setFingerControlDifficulty (difficulty : number) : void {
    this.difficulty.fingerControl =
      difficulty < 1 ? 1 :
        difficulty > 5 ? 5 :
          difficulty;
    this.saveSettings();
  }

  setIntervalsDifficulty (difficulty : number) : void {
    this.difficulty.intervals =
      difficulty < 1 ? 1 :
        difficulty > 11 ? 11 :
          difficulty;
    this.saveSettings();
  }

  setAdvancedFingerExerciseDifficulty (difficulty : number) : void {
    this.difficulty.advancedFingerExercise =
      difficulty < 1 ? 1 :
        difficulty > 10 ? 10 :
          difficulty;
    this.saveSettings();
  }

  getDifficulty () : ExerciseDifficulty {
    return this.difficulty;
  }

  private saveSettings () : void {
    try {
      let storage : any = new LocalStorage();
      storage.set(SETTINGS_KEY, JSON.stringify(this.difficulty));
    } catch (e) {
      // #sadface
    }
  }

  private loadSettings () : void {
    try {
      let storage : any = new LocalStorage();
      storage.get(SETTINGS_KEY, JSON.stringify(this.difficulty)).then(a => this.difficulty = a);
    } catch (e) {
      // #sadface
    } finally {
      if (!this.difficulty) {
        this.difficulty = this.getDefaultDifficulty();
      } else {
        this.fillSettingsWithDefaultValues();
      }
    }
  }

  private fillSettingsWithDefaultValues () : void {
    let defaultSettings : ExerciseDifficulty = this.getDefaultDifficulty();
    for (let key in defaultSettings) {
      if (defaultSettings.hasOwnProperty(key)) {
        if (this.difficulty[key] === undefined) {
          this.difficulty[key] = defaultSettings[key];
        }
      }
    }
  }

  private getDefaultDifficulty () : ExerciseDifficulty {
    return {
      fingerControl: 2,
      intervals: 8,
      advancedFingerExercise: 4
    };
  }
}
