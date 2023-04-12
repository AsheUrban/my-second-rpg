import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import $ from 'jquery';
import { playerRace, baseHealth, playerClass, playerName, playerWeapon, playerMagic, storeState, lightDamage, magicHeal, baseMana}  from './js/PlayerGen.js';

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
  // const manaState = stateControl(baseMana);
  console.log(newState);
  // console.log(manaState);
  // console.log(weapon);
}

const updateDisplay = (newState, id) => {
  document.getElementById("characterStats").innerText = newState;
}
// let charId = 0
function handleFormSubmission(event) {
  let charId = 0;
  //call on form #id = buildCharacter
  charId++
  // event.preventDefault();

  const name = document.getElementById("#Name").value;
  const race = document.querySelector("select#Race").value;
  const characterClass = document.querySelector("select#Class").value;
  const weapon = document.querySelector("select#Weapon").value;
  const magic = document.querySelector("select#Magic").value;
  // console.log(name);  
  makeNewPlayer(charId, name, race, characterClass, weapon, magic);
}

window.addEventListener("load", function (){
  document.querySelector(".fancyBtn").addEventListener("click",  function() {
    handleFormSubmission();
    updateDisplay();
  });
});

//   $('#character').append(
//     `<div id="${charId}-Details">Name: ${newState.Name}, Race: ${newState.Race}, Class: ${newState.Class}, Weapon: ${newState.Weapon}, Magic Style: ${newState.Magic}, HP: ${newState.HP} MP: ${newState.MP}</div>
//     <button class='fancyBtn' id='${charId}-Damage'>Take Damage</button>
//     <button class='fancyBtn' id='${charId}-Heal'>Heal</button>`
//   );

//   $(`#${charId}-Damage`).click(function() {
//     const newState = stateControl(lightDamage);
//     // console.log(newState); to make sure damage is being taken
//     updateDisplay(newState, charId);
//   });

//   $(`#${charId}-Heal`).click(function() {
//     const newState = stateControl(magicHeal);
//     // console.log(newState); to make sure heal is working
//     updateDisplay(newState, charId);
//   });
// };

// $(document).ready(function() {
//   let charId = 0;
//   $('form#buildCharacter').submit(function(event) {
//     charId ++;
//     event.preventDefault();


//     makeNewPlayer(charId, name, race, characterClass, weapon, magic);
//   });
// });