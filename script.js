


let hunger = false;
let sleepy = false;
let bored = false;

let intervalID = setInterval(changeNeed, 5000);


function changeNeed() {
    let need = Math.floor(Math.random() * 3);
    if(need === 0) {
        hunger = true;
        bored = false;
    } else if(need === 1) {
        sleepy = true;
        hunger=false;
    } else {
        bored = true;
        sleepy = false;
    }
    moodchange();
}

function moodchange(){
    let petDisplay = document.getElementById("petDisplay");
    if(hunger && !sleepy && !bored) {
        petDisplay.innerHTML = '<img src="pet_hungry.png">';
    } else if(sleepy && !hunger && !bored) {
        petDisplay.innerHTML = '<img src="pet_tired.png">';
    } else if(bored && !hunger && !sleepy) {
        petDisplay.innerHTML = '<img src="pet_eager.png">';
    } 
    //For emotion priority
    else if(hunger && !sleepy && bored) {
        petDisplay.innerHTML = '<img src="pet_hungry.png">';
    } else if(sleepy && hunger && !bored) {
        petDisplay.innerHTML = '<img src="pet_tired.png">';
    } else if(bored && !hunger && sleepy) {
        petDisplay.innerHTML = '<img src="pet_eager.png">';
    }
     else if(hunger && sleepy && bored) {
        petDisplay.innerHTML = '<img src="pet_inactive.png">';
    } else {
        petDisplay.innerHTML = '<img src="pet_neutral.png">';
    }
}


document.getElementById("Buttons").addEventListener("click", function(event) {
    //does the opposite for test purposes
    if(event.target.id === "sleep") {
        sleepy = false;
        petDisplay.innerHTML = '<img src="sleep.png">';
    } else if(event.target.id === "play") {
        bored = false;
        petDisplay.innerHTML = '<img src="pet_playing.png">';
    } else if(event.target.id === "feed") {
        hunger = false;
        petDisplay.innerHTML = '<img src="pet_eating.png">';
    } else if(event.target.id === "evil") {
        hunger = true;
        sleepy = true;
        bored = true;
    }
    let timeoutID = setTimeout(moodchange, 2500);
});