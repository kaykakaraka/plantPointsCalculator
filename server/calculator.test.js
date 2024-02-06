const Calculator = require('./calculator.js');

const calculator = new Calculator;

describe(Calculator, () => {
  it('initiates with an empty list and 0 plant points',() => {
    expect(calculator.list.length).toBe(0);
    expect(calculator.points).toEqual(0);
  })
  it('adds item to a list',() => {
    calculator.addItem('banana');
    expect(calculator.list).toContain('banana');
  })
  it('adds 1 plant point for a banana',() => {
    expect(calculator.points).toEqual(1);
  })
} )