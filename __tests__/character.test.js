import { Character } from '../src/character.js';

describe('Character', () => {

  test('should create new character object when called on', () => {
    const newChar = new Character();
    expect(typeof newChar).toEqual("object");
  });

  test('should create a new character with EXP stat', () => {
    const newChar = new Character();
    expect(newChar.EXP).toEqual(0);
  });

  test('should give character a class based on an argument', () => {
    const newChar = new Character("Wizard");
    expect(newChar.charClass).toEqual("Wizard");
  });

  test('should give a character base stats based on their charClass', () => {
    const newChar = new Character("Wizard");
    newChar.baseStats();
    expect(newChar.int).toEqual(10);
  });
});