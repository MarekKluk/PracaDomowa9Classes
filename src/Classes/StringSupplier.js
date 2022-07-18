import generateRandomNumber from '../functions/generateRandomNumber';
import Strings from './Strings';

export default class StringSupplier {
  constructor(frequencyInSeconds) {
    this.frequencyInSeconds = frequencyInSeconds * 1000;
    this.strings = [];
    this.numberOfStrings = null;
    this.supplyTimestampStart = null;
    this.lastSupplyTimestamp = null;
  }

  delivery = () => {
    setInterval(this.produceStrings, this.frequencyInSeconds);
  };

  produceStrings = () => {
    this.supplyTimestampStart = Date.now();
    this.strings = [];
    this.numberOfStrings += generateRandomNumber(3, 6);
    for (let i = 1; i <= this.numberOfStrings; i++) {
      const string = new Strings();
      this.strings.push(string);
    }
    this.numberOfStrings = 0;
    this.lastSupplyTimestamp = Date.now() - this.supplyTimestampStart;
    if (this.lastSupplyTimestamp < this.frequencyInSeconds) {
      return null;
    } else return this.strings;
  };
}
