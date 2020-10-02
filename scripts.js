let takeoffButton = null;
let landButton = null;
let missionAbortButton = null;
let upButton = null;
let downButton = null;
let rightButton = null;
let leftButton = null;
let shuttleHeight = 0;
let rocket = null;
let rocketXPosition = 250;

let upos = 0;
let rpos = 0;

function init () {
    // Obtain a reference to the button element
    takeoffButton = document.getElementById("takeoff");
    landButton = document.getElementById("landing");
    missionAbortButton = document.getElementById("missionAbort");
    upButton = document.getElementById("up");
    downButton = document.getElementById("down");
    rightButton = document.getElementById("right");
    leftButton = document.getElementById("left");
    rocket = document.getElementById("rocket");

    takeoffButton.addEventListener("click", takeOff);
    landButton.addEventListener("click", landing);
    missionAbortButton.addEventListener("click", missionAbort);
    upButton.addEventListener("click", moveUp);
    downButton.addEventListener("click", moveDown);
    rightButton.addEventListener("click", moveRight);
    leftButton.addEventListener("click", moveLeft);
}

function takeOff() {
    takeoffConfirmation()
}
  
function takeoffConfirmation() {
let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
// Code does NOT continue until user responds to confirm window
    if (response) {
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
        
        shuttleHeight = document.getElementById('spaceShuttleHeight').innerHTML;
        shuttleHeight = Number(shuttleHeight) + 10000;
        document.getElementById('spaceShuttleHeight').innerHTML = shuttleHeight;
        document.getElementById("shuttleBackground").style.backgroundColor = "blue"; 
    } else {
        //document.getElementById("main-text").innerHTML = "Back to the mission.";
        console.log("Shuttle is NOT ready for takeoff.");
    }
}

function landing() {
    window.alert("The shuttle is landing. Landing gear engaged.");
    document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
    document.getElementById("shuttleBackground").style.backgroundColor = "green";
    document.getElementById('spaceShuttleHeight').innerHTML = 0;

    upos = 0; rocket.style.bottom = upos + 'px';
    rpos = 0; rocket.style.left = rpos + 'px';
}

function missionAbort() {
    missionAbortConfirmation()
    
    /*A window confirm should let the user know "Confirm that you want to abort the mission." If the user wants to abort the mission, then add parts b-d.
    The flight status should change to "Mission aborted."
    The background color of the shuttle flight screen should change from blue to green.
    The shuttle height should go to 0.*/
}

function missionAbortConfirmation() {
    let response = window.confirm("Confirm that you want to abort the mission.");
    // Code does NOT continue until user responds to confirm window
        if (response) {
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById('spaceShuttleHeight').innerHTML = 0;
        } else {
            //document.getElementById("main-text").innerHTML = "Back to the mission.";
            console.log("Shuttle is NOT ready for takeoff.");
        }
    }

/*When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:

    The rocket image should move 10 px in the direction of the button that was clicked.
    If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.
*/    

function moveUp() {
    shuttleHeight = document.getElementById('spaceShuttleHeight').innerHTML;
    shuttleHeight = Number(shuttleHeight) + 10000;
    document.getElementById('spaceShuttleHeight').innerHTML = shuttleHeight;

    rocketXPosition -= 10;
    rocket.style.top = rocketXPosition + "px";
    //console.log(rocket.style.po);
    //rocket.style.left = "100px";
}

function moveDown() {
    shuttleHeight = document.getElementById('spaceShuttleHeight').innerHTML;
    if (shuttleHeight >= 10000) {
        shuttleHeight = Number(shuttleHeight) - 10000;
        document.getElementById('spaceShuttleHeight').innerHTML = shuttleHeight;
    } 
    
    rocketXPosition += 10;
    rocket.style.top = rocketXPosition + 'px';
}

function moveRight() {
    rocketXPosition += 10;
    rocket.style.left = rocketXPosition + 'px';
}

function moveLeft() {
    rocketXPosition -= 10;
    rocket.style.left = rocketXPosition + 'px';
}

window.onload = init;