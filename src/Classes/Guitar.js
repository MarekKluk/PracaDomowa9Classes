import generateRandomNumber from '../functions/generateRandomNumber';
import Neck from './Neck';
import Strings from './Strings';
import Body from './Body';

function randomizeIfItsFaulty() {
  let x = generateRandomNumber(1, 10);
  return x <= 3 ? true : false;
}

export default class Guitar {
  constructor(neck, strings, body) {
    this.neck = neck;
    this.strings = strings;
    this.body = body;
    this.isFaulty = randomizeIfItsFaulty();
    this.isTuned = null;
  }

  tune = () => {
    this.isTuned = true;
  };

  isPlayable = () => {
    if (
      this.neck instanceof Neck &&
      this.strings instanceof Strings &&
      this.body instanceof Body &&
      this.isTuned === true &&
      this.isFaulty === false
    ) {
      console.log('guitar is playing fine!');
      return true;
    }
    console.log('The guitar is not playable!');
    return false;
  };
}
