
let hunger = localStorage.getItem("hunger") === "true";
let sleepy = localStorage.getItem("sleepy") === "true";
let bored = localStorage.getItem("bored") === "true";

let intervalID = setInterval(changeNeed, 15000);
moodchange();

function changeNeed() {
    let need = Math.floor(Math.random() * 3);
    if(need === 0) {
        hunger = true;
        localStorage.setItem("hunger", "true");
    } else if(need === 1) {
        sleepy = true;
        localStorage.setItem("sleepy", "true");
    } else {
        bored = true;
        localStorage.setItem("bored", "true");
    }
    // Save all values to localStorage for consistency
    localStorage.setItem("hunger", hunger.toString());
    localStorage.setItem("sleepy", sleepy.toString());
    localStorage.setItem("bored", bored.toString());
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
        if(sleepy){
            sleepy = false;
            localStorage.setItem("sleepy", "false");
            localStorage.setItem("hunger", hunger.toString());
            localStorage.setItem("bored", bored.toString());
            petDisplay.innerHTML = '<img src="pet_sleep.png">';
        }
    } else if(event.target.id === "play") {
        if(bored){
            bored = false;
            localStorage.setItem("bored", "false");
            localStorage.setItem("hunger", hunger.toString());
            localStorage.setItem("sleepy", sleepy.toString());
            petDisplay.innerHTML = '<img src="pet_playing.png">';
        }
    } else if(event.target.id === "feed") {
        if(hunger){
            hunger = false;
            localStorage.setItem("hunger", "false");
            localStorage.setItem("sleepy", sleepy.toString());
            localStorage.setItem("bored", bored.toString());
            petDisplay.innerHTML = '<img src="pet_eating.png">';
        }
    } else if(event.target.id === "evil") {
        hunger = true;
        sleepy = true;
        bored = true;
        localStorage.setItem("hunger", "true");
        localStorage.setItem("sleepy", "true");
        localStorage.setItem("bored", "true");
    }
    // Save all values to localStorage for consistency
    localStorage.setItem("hunger", hunger.toString());
    localStorage.setItem("sleepy", sleepy.toString());
    localStorage.setItem("bored", bored.toString());
    let timeoutID = setTimeout(moodchange, 2500);
});