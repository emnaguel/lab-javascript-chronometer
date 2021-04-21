const chronometer = new Chronometer();
console.log("hello")
// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
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
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn(event) {
  // ... your code goes here
  if(event.target.classList.contains("start")) {
    event.target.classList.toggle("start")
    event.target.classList.toggle("stop")
  } else {
    event.target.classList.remove("stop")
    event.target.classList.add("start")
  }
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', (event) => {
  // ... your code goes here
  console.log(event.target.classList.contains("start"))
  // if(event.target.classList)
  setTimeout(setStartBtn(event), 1000);


}, false);

// Reset/Split Button
btnRight.addEventListener('click', (event) => {
  // ... your code goes here
  console.log(event.target)
  if(event.target.innerHTML === "RESET") {
   
    event.target.innerHTML = "SPLIT"


  } 
 
});
