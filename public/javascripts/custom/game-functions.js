function randomInt(min,max) {
  // create a range that includes min and max and return a random number from it
  var rand = Math.floor(Math.random() * (max - min)) + min;
  return rand;
}

function selectMole() {
  var visibleMole;
  var visibleMoleId;
  var newMoleId;
  var newMole;

  // here you're going to find what mole is visible
  visibleMole = $('.mole').filter(':visible');
  visibleMoleId = visibleMole.attr('id').match(/\d/)[0];

  // hide the visible mole
  visibleMole.hide('slide', {direction: 'down'});
  // select a new mole to visible, making sure it isn't the same as the previous one
  newMoleId = randomInt(1, 9);
  while (newMoleId === visibleMoleId) {
    newMoleId = randomInt(1, 9);
  }
  // and make the new mole visible
  newMole = $('#mole-num-' + newMoleId);
  newMole.show('slide', {direction: 'down'});
}

// the function below is called on game.js and calls on your selectMole() function every second
function play() {
  setInterval(function() {
    selectMole();
  }, 1000);
}
