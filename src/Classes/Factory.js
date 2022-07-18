import Guitar from './Guitar';
import NeckSupplier from './NeckSupplier';
import StringSupplier from './StringSupplier';
import Body from './Body';
import Storage from './Storage';

export default class Factory {
  constructor() {
    this.neckSupplier = new NeckSupplier(3);
    this.stringSupplier = new StringSupplier(4);
    this.neckStorage = [];
    this.stringStorage = [];
    this.body = new Body();
    this.guitar = null;
    this.storage = new Storage();
  }

  runProductionLine = () => {
    setInterval(this.productionLine, 2000);
  };

  necksAndStringsDelivery = () => {
    this.neckSupplier.delivery();
    this.stringSupplier.delivery();
  };

  productionLine = () => {
    this.necksAndStringsDelivery();
    while (
      this.neckSupplier.necks === null ||
      this.stringSupplier.strings === null
    ) {
      setTimeout(this.necksAndStringsDelivery, 1000);
    }
    this.stringStorage.push(...this.stringSupplier.strings);
    this.neckStorage.push(...this.neckSupplier.necks);
    this.guitar = new Guitar(
      this.neckStorage[0],
      this.stringStorage[0],
      this.body,
    );
    this.stringStorage.splice(0, 1);
    this.neckStorage.splice(0, 1);
    this.guitar.tune();
    if (this.guitar.isPlayable()) {
      console.log('guitar is produced');
      this.storage.storeInstrument(this.guitar);
    } else console.log('The guitar didnt pass quality check');
  };
}
