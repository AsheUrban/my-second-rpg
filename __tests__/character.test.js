import { Character } from '../src/character.js';
import { battle } from '../src/battle.js';
import { Monster } from '../src/monster.js';

describe('Character', () => {
  let newCharWiz;
  let newCharWar;
  let newCharRog;
  let newCharCle;
  let monster;

  beforeEach(() => {
    monster = new Monster();
    newCharWiz = new Character("Wizard");
    newCharWar = new Character("Warrior");
    newCharRog = new Character("Rogue");
    newCharCle = new Character("Cleric");
  });

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
    newCharWiz.baseStats();
    expect(newCharWiz.int).toEqual(10);
    
    newCharWar.baseStats();
    expect(newCharWar.int).toEqual(2);

    newCharRog.baseStats();
    expect(newCharRog.int).toEqual(8);

    newCharCle.baseStats();
    expect(newCharCle.int).toEqual(6);
  });

  test('should give the character a starting inventory based on their class', () => {
    newCharWiz.baseInv();
    expect(newCharWiz.bag[0].name).toEqual("Staff");
    expect(newCharWiz.bag[1].name).toEqual("Robe");

    newCharWar.baseInv();
    expect(newCharWar.bag[0].name).toEqual("Sword");
    expect(newCharWar.bag[1].name).toEqual("ChestPlate");

    newCharRog.baseInv();
    expect(newCharRog.bag[0].name).toEqual("Dagger");
    expect(newCharRog.bag[1].name).toEqual("Cloak");

    newCharCle.baseInv();
    expect(newCharCle.bag[0].name).toEqual("Sword");
    expect(newCharCle.bag[1].name).toEqual("ChestPlate");
  });

  test('should calculate damage and defense based on weapon and armor', () =>{
    newCharWar.calcValues();
    expect(newCharWar.dmg).toEqual(20);
    expect(newCharWar.def).toEqual(6);
    newCharWiz.calcValues();
    expect(newCharWiz.dmg).toEqual(20);
    expect(newCharWiz.def).toEqual(2);
  });

  test('the characters level should influence their stats', () =>{
    battle(newCharWar, monster);
    battle(newCharWar, monster);
    battle(newCharWar, monster);
    battle(newCharWar, monster);
    battle(newCharWar, monster);
    battle(newCharWar, monster);
    expect(newCharWar.lvl).toEqual(2);
    expect(newCharWar.int).toEqual(3);
    expect(newCharWar.str).toEqual(11);
    expect(newCharWar.maxHp).toEqual(25);
  })
});