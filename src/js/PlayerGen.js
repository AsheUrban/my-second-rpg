export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const stateControl = storeState();

export const changeState = (prop) => {
  return (value) => {
    if (typeof(value) == 'string') {
      return (state) => ({
        ...state,
        [prop]: value
      });
    } else if (typeof(value) == 'number') {
      return (state) => ({
        ...state,
        [prop]: (state[prop] || 0) + value
      });
    }
  };
};

//States
export const playerRace = changeState("Race");
export const nPCRace = changeState("Race");
export const playerClass = changeState("Class");
export const healthModifier = changeState("HP");
export const smallWeapon = changeState("smallWeapon");
export const mediumWeapon = changeState("mediumWeapon");
export const largeWeapon = changeState("largeWeapon");
// export const experience = changeState("XP");
// export const strength = changeState("S")
// export const intelligence = changeState("I");

//Race
// export const elf = playerRace("Elf");
// export const dwarf = playerRace("Dwarf");
// export const human = playerRace("Human");

//Race - NonPlayerCharacers
export const orc = playerRace("Orc");
export const goblin = playerRace("Goblin");
export const wolf = playerRace("Wolf");

//Class
export const wizard = playerClass("Wizard");
export const cleric = playerClass("Cleric");
export const rogue = playerClass("Rogue");
export const paladin = playerClass("Paladin");

//Health Modifier
export const baseHealth = healthModifier(30);
export const magicHealth = healthModifier(5);
export const superMagicHeal = healthModifier(10);
export const shortRest = healthModifier(5);
export const longRest = healthModifier(10);
export const lightDamage = healthModifier(-5);
export const heavyDamage = healthModifier(-10);

export const dagger = smallWeapon("Dagger");

export const crossBow = mediumWeapon("Crossbow");

export const battleAxe = largeWeapon("Battle Axe");