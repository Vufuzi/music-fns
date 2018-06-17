// @flow

import getNote from '../getNote';
import isScientificNote from '../isScientificNote';

import NOTES from '../constants/NOTES';
import accidentalToLetter from '../accidentalToLetter';

const getChromaticCPosition = (note: ScientificNote) => {
  if (!isScientificNote(note)) {
    throw new Error(`"${note}" is not a valid note.`);
  }

  const rNote = getNote(accidentalToLetter(note));
  return NOTES.findIndex(n => n.some(nn => nn === rNote));
};

export default getChromaticCPosition;
