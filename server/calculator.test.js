const Calculator = require('./calculator.js');

const calculator = new Calculator;

describe(Calculator, () => {
  it('initiates with an empty list',() => {
    expect(calculator.list.length).toBe(0);
  })
  it('adds item to a list',() => {
    calculator.addItem('banana');
    expect(calculator.list).toContain('banana');
  })
} )