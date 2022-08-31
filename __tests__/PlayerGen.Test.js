import {changeState, storeState}   from '../src/js/PlayerGen.js';

describe('changeState', () => {
  test('should return an object with an HP value of 5', () => {
    const player = {};
    const result = changeState("HP")(5)(player);
    expect(result.HP).toEqual(5);
  });
});

describe('storeState', () => {
  test('should return a "deep clone" of our shallow clone', () => {
    const currentState = { prop: 5 }
    const stateControl = storeState(currentState);
    const result = stateControl();
    expect(result).toEqual(currentState);
  });
});