//access DOM elements
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let startButton = document.getElementById("start");

//behind door image paths
const botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
const closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

//variables to track the game
let numClosedDoors = 3;
let openDoor1 = "";
let openDoor2 = "";
let openDoor3 = "";
let currentlyPlaying = true;

//event listeners for each door
doorImage1.onclick = () => {
    if (!isClicked(doorImage1) && currentlyPlaying) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
}

doorImage2.onclick = () => {
    if (!isClicked(doorImage2) && currentlyPlaying) {
      doorImage2.src = openDoor2;
      playDoor(doorImage2);
    }
};

doorImage3.onclick = () => {
    if (!isClicked(doorImage3) && currentlyPlaying) {
      doorImage3.src = openDoor3;
      playDoor(doorImage3);
    }
};

//start the game or round logic
startButton.onclick = () => {
    if (!currentlyPlaying){
        startRound();
    }   
}

function startRound() {
  numClosedDoors = 3;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  startButton.innerHTML = "Good Luck!";
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

//game over logic
function gameOver(status) {
    if (status === 'win'){
        startButton.innerHTML = "You win! Play again?";
    } else 
        startButton.innerHTML = "Game over! Play again?";
        currentlyPlaying = false;
}

//generate random image path for door
const randomChoreDoorGenerator = () => {
    //select random door number
    let choreDoor = Math.floor(Math.random()* numClosedDoors);
    if (choreDoor === 0){
        openDoor1 = botDoorPath; 
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;   
    } else if(choreDoor === 1){
        openDoor2 = botDoorPath;
        openDoor3 = beachDoorPath;
        openDoor1 = spaceDoorPath; 
    } else {
        openDoor3 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
    }
};

function isBot(door) {
    if (door.src === botDoorPath){
        return true;
    } else 
        return false;
}


//checks if a door has been opened before
function isClicked(door){
    if (door.src === closedDoorPath){
        return false;
    } else 
        return true;
}

//decrease number of closed doors and see if game is over
function playDoor(door) {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win');
    } else if (isBot(door)){
        gameOver();
    }
}

startRound();

