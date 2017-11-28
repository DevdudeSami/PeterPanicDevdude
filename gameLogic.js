var gameScreen;
var peter;

var gameWidth = 800;
var gameHeight = 600;

var speed = 20;

/// Set initial variables and conditions
function initialiseGame() {
  // variables
  peter = $("#peter");
  gameScreen = $("#game");

  // initialise game screen dimensions
  gameScreen.css({ 'width': gameWidth + 'px', 'height': gameHeight + 'px' });

  // set initial position for peter
  setPosition(peter, 0.5*gameWidth-0.5*peter.width(), gameHeight-peter.height());
}

function moveLeft() {
  
}

function moveRight() {

}

// HELPER FUNCTIONS
function setPosition(jObj, x, y) {
  jObj.css({ 'left': x + 'px', 'top': y + 'px' });
}

// CALL INITIALISER AT START
$(function() {
  initialiseGame()
})
