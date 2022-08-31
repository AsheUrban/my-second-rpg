import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import {stateControl, playerRace, baseHealth, playerClass, playerName}  from './js/PlayerGen.js'

$(document).ready(function() {
  
  $('form#buildCharacter').submit(function(event) {
    event.preventDefault();
    const race = playerRace($('#Race').val());
    const characterClass = playerClass($('#Class').val());
    const name = playerName($('#name').val());
    
    stateControl(name);
    stateControl(race);
    stateControl(characterClass);
    const newState = stateControl(baseHealth);

    $( "#characterBuilder" ).hide();
    $( "#characterStats" ).show();
    $('#character').text(`Name: ${newState.Name}, Race: ${newState.Race}, Class: ${newState.Class}, HP: ${newState.HP}`);
  });

  $('#show-state').click(function() {
    // We just need to call stateControl() without arguments to see our current state.
    const currentState = stateControl();
    $('#Race-value').text(`Race: ${currentState.Race}`);
  });
});