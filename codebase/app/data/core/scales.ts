export interface ScaleModel {
  name : string;
  intervals : number[];
}

export const MAJOR : ScaleModel = {
  name: 'MAJOR',
  intervals: [2, 2, 1, 2, 2, 2, 1]
};
export const MINOR : ScaleModel = {
  name: 'MINOR',
  intervals: [2, 1, 2, 2, 1, 2, 2]
};
export const HARMONIC_MINOR : ScaleModel = {
  name: 'HARMONIC_MINOR',
  intervals: [2, 1, 2, 2, 1, 3, 1]
};
export const HUNGARIAN_MINOR : ScaleModel = {
  name: 'HUNGARIAN_MINOR',
  intervals: [2, 1, 3, 1, 1, 3, 1]
};
export const HUNGARIAN_MAJOR : ScaleModel = {
  name: 'HUNGARIAN_MAJOR',
  intervals: [3, 1, 2, 1, 2, 1, 2]
};
export const BLUES : ScaleModel = {
  name: 'BLUES',
  intervals: [3, 2, 1, 1, 3, 2]
};
export const PENTATONIC_MAJOR : ScaleModel = {
  name: 'PENTATONIC_MAJOR',
  intervals: [2, 2, 3, 2, 3]
};
export const PENTATONIC_MINOR : ScaleModel = {
  name: 'PENTATONIC_MINOR',
  intervals: [3, 2, 2, 3, 2]
};
export const SPANISH_EIGHT : ScaleModel = {
  name: 'SPANISH_EIGHT',
  intervals: [1, 2, 1, 1, 1, 2, 2, 2]
};
export const ORIENTAL : ScaleModel = {
  name: 'ORIENTAL',
  intervals: [1, 3, 1, 1, 3, 1, 2]
};
export const REDUCED : ScaleModel = {
  name: 'REDUCED',
  intervals: [1, 2, 1, 2, 1, 2, 1, 2]
};
export const OVERTONE : ScaleModel = {
  name: 'OVERTONE',
  intervals: [2, 2, 2, 1, 2, 1, 2]
};
export const ENIGMATIC : ScaleModel = {
  name: 'ENIGMATIC',
  intervals: [1, 3, 2, 2, 2, 1, 1]
};

export const ALL_SCALES : ScaleModel[] = [
  MAJOR,
  MINOR,
  HARMONIC_MINOR,
  HUNGARIAN_MINOR,
  HUNGARIAN_MAJOR,
  BLUES,
  PENTATONIC_MAJOR,
  PENTATONIC_MINOR,
  SPANISH_EIGHT,
  ORIENTAL,
  REDUCED,
  OVERTONE,
  ENIGMATIC
];
