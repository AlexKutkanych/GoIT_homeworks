
var startButton = document.querySelector('#start');
var stopButton = document.querySelector('#stop');
var clearButton = document.querySelector('#clear');
var timer = document.querySelector('#timer');

var timerId = 0;
var timerValue = 0;
var updateTime = new Date();

//add clock to page

function myTime(showTime) {
    var hours = showTime.getHours();
    if(hours < 10) {
      hours = '0' + hours;
    }
    var minutes = showTime.getMinutes();
    if(minutes < 10) {
      minutes = '0' + minutes;
    }
    var seconds = showTime.getSeconds();
    if(seconds < 10) {
      seconds = '0' + seconds;
    }
    var milliSeconds = showTime.getMilliseconds();
        if(milliSeconds < 100){
            milliSeconds = '0' + milliSeconds;
        }
    timer.innerHTML = hours + ':' + minutes + ':' + seconds + ':' + milliSeconds;
    // var t = setTimeout(myTime, 1); //sets clock off
}

function updateTimer() {
    var currentTime = new Date();
    var deltaTime = currentTime - updateTime;
    timerValue += deltaTime;

    var time = new Date(0,0,0,0,0,0,timerValue);
    updateTime = currentTime;
    myTime(time);
}


function startWatch(){
    if(!timerId){
        startButton.setAttribute('value', 'Pause');
        updateTime = new Date();
        timerId = setInterval(updateTimer,1);
    } else {
        startButton.setAttribute('value', 'Start');
        stopWatch();
    }
}

function stopWatch(){
    clearInterval(timerId);
    timerId = 0;
}

function clearWatch(){
    stopWatch();
    startButton.setAttribute('value', 'Start');
    timerValue = 0;
    updateTime = new Date(0,0);
    myTime(updateTime);
}


startButton.addEventListener('click', startWatch);
clearButton.addEventListener('click', clearWatch);
startButton.addEventListener('click', function(){
  clear.classList.add('fill');
});
clearButton.addEventListener('click', function(){
  this.classList.remove('fill');
});
