class Calculator {
  constructor() {
    this.list = []
    this.points = 0;
  }

  addItem(item) {
    this.list.push(item);
    this._updatePlantPoints();
  }

  _updatePlantPoints() {
    this.points = this.list.length;
  }

};

module.exports = Calculator;