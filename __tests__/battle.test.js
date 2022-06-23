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
    expect(monster.status).toEqual("Dead");
  });

  test('enemy should attack the player if its alive', () => {  
    expect(newCharWar.hp).toEqual(24);
    battle(newCharWar, monster);
    expect(monster.status).toEqual("Alive");
    expect(newCharWar.hp).toEqual(23);
    battle(newCharWar, monster);
    expect(monster.status).toEqual("Dead");
    expect(newCharWar.hp).toEqual(23);
  });

  test('enemy should give the player xp when it dies', () => {
    battle(newCharWar, monster);
    battle(newCharWar, monster);
    expect(newCharWar.EXP).toEqual(20);
  })

  test('player should level up if they get enough exp to do so', () => {
    battle(newCharWar, monster);
    battle(newCharWar, monster);
    battle(newCharWar, monster);
    battle(newCharWar, monster);
    battle(newCharWar, monster);
    expect(newCharWar.lvl).toEqual(2);
  })
});