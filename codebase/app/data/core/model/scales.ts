export interface ScaleModel {
  name : string;
  intervals : number[];
}

export const MAJOR_SCALE : ScaleModel = {
  name: 'SCALES.MAJOR',
  intervals: [2, 2, 1, 2, 2, 2, 1]
};
export const MINOR_SCALE : ScaleModel = {
  name: 'SCALES.MINOR',
  intervals: [2, 1, 2, 2, 1, 2, 2]
};
export const HARMONIC_MINOR : ScaleModel = {
  name: 'SCALES.HARMONIC_MINOR',
  intervals: [2, 1, 2, 2, 1, 3, 1]
};
export const HUNGARIAN_MINOR : ScaleModel = {
  name: 'SCALES.HUNGARIAN_MINOR',
  intervals: [2, 1, 3, 1, 1, 3, 1]
};
export const HUNGARIAN_MAJOR : ScaleModel = {
  name: 'SCALES.HUNGARIAN_MAJOR',
  intervals: [3, 1, 2, 1, 2, 1, 2]
};
export const BLUES : ScaleModel = {
  name: 'SCALES.BLUES',
  intervals: [3, 2, 1, 1, 3, 2]
};
export const PENTATONIC_MAJOR : ScaleModel = {
  name: 'SCALES.PENTATONIC_MAJOR',
  intervals: [2, 2, 3, 2, 3]
};
export const PENTATONIC_MINOR : ScaleModel = {
  name: 'SCALES.PENTATONIC_MINOR',
  intervals: [3, 2, 2, 3, 2]
};
export const SPANISH_EIGHT : ScaleModel = {
  name: 'SCALES.SPANISH_EIGHT',
  intervals: [1, 2, 1, 1, 1, 2, 2, 2]
};
export const ORIENTAL : ScaleModel = {
  name: 'SCALES.ORIENTAL',
  intervals: [1, 3, 1, 1, 3, 1, 2]
};
export const REDUCED : ScaleModel = {
  name: 'SCALES.REDUCED',
  intervals: [1, 2, 1, 2, 1, 2, 1, 2]
};
export const OVERTONE : ScaleModel = {
  name: 'SCALES.OVERTONE',
  intervals: [2, 2, 2, 1, 2, 1, 2]
};
export const ENIGMATIC : ScaleModel = {
  name: 'SCALES.ENIGMATIC',
  intervals: [1, 3, 2, 2, 2, 1, 1]
};

export const ALL_SCALES : ScaleModel[] = [
  MAJOR_SCALE,
  MINOR_SCALE,
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
