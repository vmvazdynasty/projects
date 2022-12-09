var correctCode = 0;
var enabled = true;
var consoleEnabled = false;

function setup() {
  noCanvas();
}

function draw() {
  if (correctCode == 11) {
    if (enabled == true) {
      console.log(correctCode);
      console.log("activating");
      enabled = false;
    }
  }
  if (consoleEnabled == true && enabled) {
    console.log(correctCode);
    consoleEnabled = false;
  }
}

function keyPressed() {
  consoleEnabled = true;
  if (keyCode == UP_ARROW && correctCode == 0) {
    correctCode = 1;
  } else if (keyCode == UP_ARROW && correctCode == 1) {
    correctCode = 2;
  } else if (keyCode == DOWN_ARROW && correctCode == 2) {
    correctCode = 3;
  } else if (keyCode == DOWN_ARROW && correctCode == 3) {
    correctCode = 4;
  } else if (keyCode == LEFT_ARROW && correctCode == 4) {
    correctCode = 5;
  } else if (keyCode == RIGHT_ARROW && correctCode == 5) {
    correctCode = 6;
  } else if (keyCode == LEFT_ARROW && correctCode == 6) {
    correctCode = 7;
  } else if (keyCode == RIGHT_ARROW && correctCode == 7) {
    correctCode = 8;
  } else if (keyCode == 66 && correctCode == 8) {
    correctCode = 9;
  } else if (keyCode == 65 && correctCode == 9) {
    correctCode = 10;
  } else if (keyCode == ENTER && correctCode == 10) {
    correctCode = 11;
  } else {
    correctCode = 0;
  }
}