import { Monster } from '../src/monster.js';

describe('Monster', () => {
  test('should create new monster object when called on', () => {
    const newMonst = new Monster();
    expect(typeof newMonst).toEqual("object");
  });
}); 