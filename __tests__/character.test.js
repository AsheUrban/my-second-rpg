import { Character } from '../src/character.js';

describe('Character', () => {

  test('should create new character when called on', () => {
    const newChar = new Character()
    expect(newChar).toEqual(true)
  });
});