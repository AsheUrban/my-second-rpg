import {changeState, storeState}   from '../src/js/PlayerGen.js';

describe('changeState', () => {
  test('should return an object with an HP value of 5', () => {
    const player = {};
    const result = changeState("HP")(5)(player);
    expect(result.HP).toEqual(5);
  });

  test('should let you pass a string', () => {
    const player = {};
    const result = changeState("Class")("Wizard")(player);
    expect(result.Class).toEqual("Wizard");
  });
});

describe('storeState', () => {
  test('should return a "deep clone" of our shallow clone', () => {
    const currentState = {}
    const stateControl = storeState();
    const result = stateControl();
    expect(result).toEqual(currentState);
  });

  test('should make an updated clone of our current state and store it in a new state', () => {
    const stateControl = storeState();
    const heal = changeState("HP")(5);
    const currentState = stateControl(heal);
    const result = stateControl(heal);
    expect(result.HP).toEqual(10);
  });
});