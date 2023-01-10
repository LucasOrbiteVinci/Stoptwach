let second = 0;
let minute = 0;
let hour = 0;

const buttonStart = document.getElementById('start');
const buttonPause = document.getElementById('pause');
const buttonReset = document.getElementById('reset');
const timer = document.getElementById('timer');

let constTime;

const eventsButton = {
  start() {
    countTime = setInterval(time, 1000);
  },

  pause() {
    clearInterval(countTime);
  },

  reset() {
    clearInterval(countTime);
    second = 0;
    minute = 0;
    hour = 0;

    timer.innerHTML = `${formatTime(hour)}:${formatTime(minute)}:${formatTime(
      second,
    )}`;
    var test =
      formatTime(hour) + ':' + formatTime(minute) + ':' + formatTime(second);
  },
};

buttonStart.addEventListener('click', eventsButton.start);
buttonPause.addEventListener('click', eventsButton.pause);
buttonReset.addEventListener('click', eventsButton.reset);

function formatTime(timer) {
  if (timer < 10) {
    return `0${timer}`;
  } else {
    return timer;
  }
}

function time() {
  second++;

  if (second === 60) {
    minute += 1;
    second = 0;

    if (minute === 60) {
      hour += 1;
      minute = 0;
    }
  }
  timer.innerHTML = `${formatTime(hour)}: ${formatTime(minute)}: ${formatTime(
    second,
  )}`;
}
