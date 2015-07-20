$( document ).ready(function() {
  

  
  // create your click handler here
  var moles = $('.mole.inv');
  moles.each(function(i) {
    var moleId = '#mole-num-' + (i + 1);
    $(moleId).click(function() {
      $(this).hide('slide', {direction: 'down'});
    });
  })

  // the below code calls on the play function found in game-functions.js
  // the play function calls on selectMole, then waits a second, then calls
  // on selectMole, then waits a second, you get the idea :)
  play();

});