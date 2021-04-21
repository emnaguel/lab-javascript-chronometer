class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = 0
  }


  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback()
      }
    }, 1000)   
  }
  getMinutes() {

    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    // ... your code goes here
     
    return this.currentTime - (this.getMinutes() * 60);    

  }
  twoDigitsNumber() {
    // ... your code goes here
    let getMinutes = this.getMinutes()
    let getSeconds = this.getSeconds()
    if(this.currentTime < 60) {
      return `00:${getSeconds}`
    } else {
      if(getMinutes > 10 && this.getSeconds > 10)  {
        return `${getMinutes}${getSeconds}`

      } else if(getMinutes < 10 && getSeconds >10) {
        return `0${getMinutes}${getSeconds}`
      } else if (getMinutes > 10 && getSeconds < 10) {
        return `${getMinutes}0${getSeconds}`
      }
    }
   
  }
  stopClick() {
    // ... your code goes here
    clearInterval();
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0
  }
  splitClick() {
    // ... your code goes here
    let getMinutes = this.getMinutes();
    let getSeconds = this.getSeconds();

    if (getMinutes < 10 && getSeconds < 10) {
      return `${0}${getMinutes}:${0}${getSeconds}`;
    } else if (getMinutes < 10 && getSeconds > 10) {
      return `0${getMinutes}:${getSeconds}`;
    } else if (getMinutes > 10 && getSeconds < 10) {
      return `${getMinutes}:0${getSeconds}`;
    } else {
      return `${getMinutes}:${getSeconds}`;
    }
  }

  
}

const chronometre = new Chronometer
chronometre.startClick()