var gameScreen;
var peter;

const gameWidth = 800;
const gameHeight = 600;

const speed = 20;

/// Set initial variables and conditions
function initialiseGame() {
  // variables
  peter = $("#peter");
  gameScreen = $("#game");

  // initialise game screen dimensions
  gameScreen.css({ 'width': gameWidth + 'px', 'height': gameHeight + 'px' });

  // set initial position for peter
  setPosition(peter, 0.5*gameWidth-0.5*peter.width(), gameHeight-peter.height());

  // listen to keydown events
  window.addEventListener('keydown', keyPressed);
}

function keyPressed(event) {
  if(event.key === "ArrowLeft") {
    moveLeft();
  }
  else if(event.key === "ArrowRight") {
    moveRight();
  }
}

function moveLeft() {
  setPosition(peter, getPosition(peter).x-speed, getPosition(peter).y);
}

function moveRight() {
  setPosition(peter, getPosition(peter).x+speed, getPosition(peter).y);
}

// HELPER FUNCTIONS
function setPosition(jObj, x, y) {
  jObj.css({ 'left': x + 'px', 'top': y + 'px' });
}

function getPosition(jObj) {
  // must have had setPosition called
  var leftCSS = jObj.css("left");
  var topCSS = jObj.css("top");

  var left = parseFloat(leftCSS.substring(0, leftCSS.length - 2));
  var top = parseFloat(topCSS.substring(0, topCSS.length - 2));

  console.log(left);
  console.log(top);

  return { x: left, y: top };
}

// CALL INITIALISER AT START
$(function() {
  initialiseGame()
})
