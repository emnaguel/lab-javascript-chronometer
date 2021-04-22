
const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime() {
  // ... your code goes here


}

function printMinutes() {
  // ... your code goes here
  const mins =  chronometer.getMinutes();
  // secDec.innerHTML=chronometer.getSeconds();
 let minArray = chronometer.twoDigitsNumber(mins).split("");
 minDec.innerHTML=minArray[0];
 minUni.innerHTML=minArray[1];

}

function printSeconds() {
  // ... your code goes here
  const secs =  chronometer.getSeconds();
  // secDec.innerHTML=chronometer.getSeconds();
 let secArray = chronometer.twoDigitsNumber(secs).split("");
 secDec.innerHTML=secArray[0];
 secUni.innerHTML=secArray[1];

}


// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
  if (e.target.classList.contains("stop")){
    // chronometer.stopClick();
    // e.target.classList.add("start");
    // e.target.classList.remove("stop");
    // e.target.innerHTML="START";
  }

}

function setSplitBtn(e) {

    splits.innerHTML+= `<li>${chronometer.splitClick()}<li>`
  


}

function setStartBtn(e) {
  // ... your code goes here
  
  if (e.target.classList.contains("start")) {
    chronometer.startClick(printTime);
    chronometer.startClick();
    e.target.classList.add("stop");
    e.target.classList.remove("start");
    e.target.innerHTML="STOP";
  } else {
    chronometer.stopClick();
    e.target.classList.add("start");
    e.target.classList.remove("stop");
    e.target.innerHTML="START";

  }
}

function setResetBtn(e) {
  // ... your code goes here
  if (e.target.classList.contains("reset")) {
    chronometer.resetClick();
    e.target.classList.add("split");
    e.target.classList.remove("reset");
    e.target.innerHTML="SPLIT";

  } else {
     setSplitBtn(e)
    chronometer.stopClick();
    e.target.classList.add("reset");
    e.target.classList.remove("split");
    e.target.innerHTML="RESET";
}
}

// Start/Stop Button
btnLeft.addEventListener("click", (e) => {
  // ... your code goes here
  setStartBtn(e);
  

});

// Reset/Split Button
btnRight.addEventListener("click", (e) => {
  // ... your code goes here
  setResetBtn(e);
 
  
});