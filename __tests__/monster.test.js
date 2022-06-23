import { Monster } from '../src/monster.js';

describe('Monster', () => {
  test('should create new monster object when called on', () => {
    let newMonst = new Monster();
    expect(typeof newMonst).toEqual("object");
  });
  test('should create a monster object with stats', () => {
    let newMonst = new Monster();
    expect(newMonst.hp).toEqual(1);
  });
}); 