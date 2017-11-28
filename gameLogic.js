var gameScreen;
var peter;

var blockOnScreen = false;
var block;

const blockNames = ["Algs.png", "AP.png", "DF.png", "IS.png", "PSD.png"];
const gameWidth = 800;
const gameHeight = 600;

const speed = 20;
const blockSpeed = 2;

/// Set initial variables and conditions
function initialiseGame() {
  // variables
  peter = $("#peter");
  gameScreen = $("#game");
  block = $('<img id="block">');

  // initialise game screen dimensions
  gameScreen.css({ 'width': gameWidth + 'px', 'height': gameHeight + 'px' });

  // add block to gameScreen
  gameScreen.append(block);

  // set initial position for peter
  setPosition(peter, 0.5*gameWidth-0.5*peter.width(), gameHeight-peter.height());

  // listen to keydown events
  window.addEventListener('keydown', keyPressed);

  // Start game loop
  window.setInterval(gameLoop, 20);
}

function gameLoop() {
  if(!blockOnScreen) {
    createNewBlock();
    blockOnScreen = true;
  } else {
    // move the block
    setPosition(block, getPosition(block).x, getPosition(block).y+blockSpeed);
  }
}

function createNewBlock() {
  var blockName = blockNames[getRandomInt(0,5)];

  block.prop('src', "assets/"+blockName);
  setPosition(block, getRandomInt(0,gameWidth-block.width()), -block.height());

  gameScreen.append("")
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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// CALL INITIALISER AT START
$(function() {
  initialiseGame()
})
