class Calculator {
  constructor() {
    this.list = []
    this.points = 1;
  }

  addItem(item) {
    this.list.push(item);
  }

};

module.exports = Calculator;