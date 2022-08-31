import {changeState}   from '../src/js/PlayerGen.js';

describe('changeState', () => {
  test('should return an object with an HP value of 5', () => {
    const player = {};
    const result = changeState("HP")(5)(player);
    expect(result.HP).toEqual(5);
  });
});