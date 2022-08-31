// export const storeState = () => {
//   let currentState = {};
//   return (stateChangeFunction = state => state) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = {...newState};
//     return newState;
//   }
// }

// export const stateControl = storeState();

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    });
  };
};

// export const heal = changeState("HP");
// export const magicHeal = heal(5);
// export const superMagicHeal = heal(10);
// export const shortRest = heal(5);
// export const longRest = heal(10);


// stateControl(magicHeal);