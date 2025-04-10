
const display = document.getElementById("display");
const audio = document.getElementById("audio");
var numberOfClick = 0;
audio.volume = 0.5;

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    audio.currentTime = 0;
    
    if (numberOfClick % 2 == 1) {
        audio.pause();
        display.value = "";
    }

    if (numberOfClick % 2 == 0) {
        
        audio.play();
        display.value = "I miss you :((((";
    }
    
    numberOfClick = (numberOfClick + 1) % 2;
}

function calculateResult(){
    audio.currentTime = 0;
    
    if (numberOfClick % 2 == 1) {
        audio.pause();
        display.value = "";
    }

    if (numberOfClick % 2 == 0) {
        
        audio.play();
        display.value = "I miss you :((((";
    }
    
    numberOfClick = (numberOfClick + 1) % 2;
}
