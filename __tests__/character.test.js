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
    const newCharWiz = new Character("Wizard");
    newCharWiz.baseStats();
    expect(newCharWiz.int).toEqual(10);
    
    const newCharWar = new Character("Warrior");
    newCharWar.baseStats();
    expect(newCharWar.int).toEqual(2);

    const newCharRog = new Character("Rogue");
    newCharRog.baseStats();
    expect(newCharRog.int).toEqual(8);
    
    const newCharCle = new Character("Cleric");
    newCharCle.baseStats();
    expect(newCharCle.int).toEqual(6);
  });

  test('should give the character a starting inventory based on their class', () => {
    const newCharWiz = new Character("Wizard");
    newCharWiz.baseInv();
    expect(newCharWiz.bag[0].name).toEqual("Staff");
    expect(newCharWiz.bag[1].name).toEqual("Robe");

    const newCharWar = new Character("Warrior");
    newCharWar.baseInv();
    expect(newCharWar.bag[0].name).toEqual("Sword");
    expect(newCharWar.bag[1].name).toEqual("ChestPlate");

    const newCharRog = new Character("Rogue");
    newCharRog.baseInv();
    expect(newCharRog.bag[0].name).toEqual("Dagger");
    expect(newCharRog.bag[1].name).toEqual("Cloak");

    const newCharCle = new Character("Cleric");
    newCharCle.baseInv();
    expect(newCharCle.bag[0].name).toEqual("Sword");
    expect(newCharCle.bag[1].name).toEqual("ChestPlate");
  });
});