import generateRandomNumber from '../functions/generateRandomNumber';
import Neck from './Neck';

export default class NeckSupplier {
  constructor(frequencyInSeconds) {
    this.frequencyInSeconds = frequencyInSeconds * 1000;
    this.necks = [];
    this.numberOfNecks = null;
    this.supplyTimestampStart = null;
    this.lastSupplyTimestamp = null;
  }

  delivery = () => {
    setInterval(this.produceNecks, this.frequencyInSeconds);
  };

  produceNecks = () => {
    this.supplyTimestampStart = Date.now();
    this.necks = [];
    this.numberOfNecks += generateRandomNumber(3, 6);
    for (let i = 1; i <= this.numberOfNecks; i++) {
      const neck = new Neck();
      this.necks.push(neck);
    }
    this.numberOfNecks = 0;
    this.lastSupplyTimestamp = Date.now() - this.supplyTimestampStart;
    if (this.lastSupplyTimestamp < this.frequencyInSeconds) {
      return null;
    }
    return this.necks;
  };
}
