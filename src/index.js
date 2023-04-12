import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { playerId, playerRace, baseHealth, playerClass, playerName, playerWeapon, playerMagic, storeState, lightDamage, magicHeal, stateControl, baseMana}  from './js/PlayerGen.js';

//create globally scoped variable that is an array of objs that store their own state -- Did I say this right???

const makeNewPlayer = (charId, nameArg, raceArg, characterClassArg, weaponArg, magicArg) => {
  const stateControl = storeState();
  const id = playerId(charId);
  const name = playerName(nameArg);
  const race = playerRace(raceArg);
  const characterClass = playerClass(characterClassArg);
  const weapon = playerWeapon(weaponArg);
  const magic = playerMagic(magicArg);
  stateControl(name);
  stateControl(id);
  stateControl(race);
  stateControl(characterClass);
  stateControl(weapon);
  stateControl(magic);

  return stateControl(baseHealth);
}

const updateDisplay = (newState, charId) => {
  let div = document.createElement('div');
  div.setAttribute("id", `${charId}`);
  div.innerText +=  `Name: ${newState.Name}, Race: ${newState.Race}, Class: ${newState.Class}, Weapon: ${newState.Weapon}, Magic Style: ${newState.Magic}, HP: ${newState.HP}`;
  div.innerHTML += 
  `<button class='fancyBtn' id='${charId}-Damage'>Take Damage</button>
  <br>
  <button class='fancyBtn' id='${charId}-Heal'>Heal</button>`;
  console.log(newState);
  document.getElementById("character").append(div);
}

//UI
let charId = 0
function handleFormSubmission() {
  charId++
  const name = document.getElementById("Name").value;
  const race = document.querySelector("select#Race").value;
  const characterClass = document.querySelector("select#Class").value;
  const weapon = document.querySelector("select#Weapon").value;
  const magic = document.querySelector("select#Magic").value;
  // console.log(name);  
  console.log(charId);
  return makeNewPlayer(charId, name, race, characterClass, weapon, magic); 
}

window.addEventListener("load", function (){
  document.querySelector(".fancyBtn").addEventListener("click",  function(e) {
    e.preventDefault();
    const newState = handleFormSubmission();
    updateDisplay(newState, charId);
  });
  this.document.querySelector("body").addEventListener("")
});

// otherFunction() {
//   something
// }
// id=1-Damage

  // (`${charId}-Damage`).click(function() {
  //   const newState = stateControl(lightDamage);
  //   // console.log(newState); to make sure damage is being taken
  //   updateDisplay(newState, charId);
  // });

  // (`${charId}-Heal`).click(function() {
  //   const newState = stateControl(magicHeal);
  //   // console.log(newState); to make sure heal is working
  //   updateDisplay(newState, charId);
  // });

