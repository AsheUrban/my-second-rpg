export const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

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

// export const healthModifier = changeState("HP");
// export const magicHeal = healthModifier(5);
// export const superMagicHeal = healthModifier(10);
// export const shortRest = healthModifier(5);
// export const longRest = healthModifier(10);
// export const lightDamage = healthModifier(-5);
// export const heavyDamage = healthModifier(-10);

// export const playerClass = changeState("Class");
// export const Wizard = playerClass("Wizard");