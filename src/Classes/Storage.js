export default class Storage {
  constructor() {
    this.instrumentsArray = [];
  }
  storeInstrument = (instrument) => {
    this.instrumentsArray.push(instrument);
    console.log(this.instrumentsArray.length + ' Guitars produced');
  };
}
