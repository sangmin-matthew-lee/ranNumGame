const newMaxOutput = document.getElementById("maxOutput");
const range = document.getElementById("jsRange");
const userInput = document.getElementById("jsInput");
const btn = document.getElementById("jsPlay");
const userAns = document.getElementById("jsUserAns");
const machAns = document.getElementById("jsMachAns");
const result = document.getElementById("jsResult");

let UPDATINGMAX = 10;

function genRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleClick(event){
    const userAnswer = userInput.value;
    const randomNum = genRandom(0, UPDATINGMAX);
    userAns.innerText = "You chose: " + userAnswer;
    machAns.innerText ="the machine chose:" + randomNum;

    if(userAnswer == randomNum){
        result.innerText = "You Won!";
    }else{
        result.innerText = "You lost!";
    }
}

function handleRangeChange(event){
    const newMax = event.target.value;
    newMaxOutput.innerText = newMax;
    UPDATINGMAX = newMax;
    
}

function init(){
    range.addEventListener("input", handleRangeChange)
    btn.addEventListener("click", handleClick)
}
init();