import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import {stateControl, playerRace}  from './js/PlayerGen.js'

$(document).ready(function() {
  
    $('form#buildCharacter').submit(function(event) {
      event.preventDefault();
      const race = playerRace($('#Race').val());
      const newState = stateControl(race);
      $('#Race-value').text(`Race: ${newState.Race}`);
    });
  
  
    $('#show-state').click(function() {
      // We just need to call stateControl() without arguments to see our current state.
      const currentState = stateControl();
      $('#Race-value').text(`Race: ${currentState.Race}`);
    });
  });