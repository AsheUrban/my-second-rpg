import { Monster } from '../src/monster.js';
import { Character } from '../src/character.js';
import { battle } from '../src/battle';

describe('Battle', () => {
  let newCharWar;
  let monster;
  beforeEach(() => {
    newCharWar = new Character("Warrior");
    newCharWar.baseStats();
    newCharWar.baseInv();
    monster = new Monster("Monster");
  });

  test('should take in a character and monster to engage in battle', () => {
    expect(battle(newCharWar, monster)).toEqual("Warrior is battling Monster")
  });

  test('should take the players attack value away from the monsters health', () => {
    battle(newCharWar, monster);
    expect(monster.hp).toEqual(10);
  });

  test('should kill the monster if their hp goes to 0', () => {
    battle(newCharWar, monster);
    battle(newCharWar, monster);
    expect(monster.status).toEqual("Dead")
  });

  test('enemy should attack the player if its alive', () => {
    battle(newCharWar, monster);
    expect(newCharWar.hp).toEqual(23);
  })
});