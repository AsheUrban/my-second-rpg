import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import { playerRace, baseHealth, playerClass, playerName, playerWeapon, playerMagic, storeState, lightDamage, magicHeal}  from './js/PlayerGen.js';

const updateDisplay = (state, id) => {
  $(`#${id}-Details`).text(`Name: ${state.Name}, Race: ${state.Race}, Class: ${state.Class}, Weapon: ${state.Weapon}, Magic Style: ${state.Magic}, HP: ${state.HP}`);
}

const makeNewPlayer = (charId, nameArg, raceArg, characterClassArg, weaponArg, magicArg) => {
  const stateControl = storeState();
  const name = playerName(nameArg);
  const race = playerRace(raceArg);
  const characterClass = playerClass(characterClassArg);
  const weapon = playerWeapon(weaponArg);
  const magic = playerMagic(magicArg);

  stateControl(name);
  stateControl(race);
  stateControl(characterClass);
  stateControl(weapon);
  stateControl(magic);
  const newState = stateControl(baseHealth);

  console.log(newState);

  $('#character').append(
    `<div id="${charId}-Details">Name: ${newState.Name}, Race: ${newState.Race}, Class: ${newState.Class}, Weapon: ${newState.Weapon}, Magic Style: ${newState.Magic}, HP: ${newState.HP}</div>
    <button class='fancyBtn' id='${charId}-Damage'>Take Damage</button>
    <button class='fancyBtn' id='${charId}-Heal'>Heal</button>`
  );

  $(`#${charId}-Damage`).click(function() {
    const newState = stateControl(lightDamage);
    // console.log(newState); to make sure damage is being taken
    updateDisplay(newState, charId);
  });

  $(`#${charId}-Heal`).click(function() {
    const newState = stateControl(magicHeal);
    // console.log(newState); to make sure heal is working
    updateDisplay(newState, charId);
  });
};

$(document).ready(function() {
  let charId = 0;
  $('form#buildCharacter').submit(function(event) {
    charId ++;
    event.preventDefault();
    const name = $('#Name').val();
    const race = $('#Race').val();
    const characterClass = $('#Class').val();
    const weapon = $('#Weapon').val();
    const magic = $('#Magic').val();

    makeNewPlayer(charId, name, race, characterClass, weapon, magic);
  });
});
