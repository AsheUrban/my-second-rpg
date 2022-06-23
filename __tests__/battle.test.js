import { Monster } from '../src/monster.js';
import { Character } from '../src/character.js';
import { Battle } from '../src/battle';

describe('Battle', () => {
  let newCharWar;
  let monster;
  beforeEach(() => {
    newCharWar = new Character("Warrior");
    monster = new Monster("Monster");
  });
  test('should take in a character and monster to engage in battle', () => {
    battle(newCharWar, monster);
    expect(battle(newCharWar, monster)).toEqual("Warrior is battling Monster")
  });
});