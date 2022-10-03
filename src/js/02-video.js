
import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const setCurrentTime = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

if (setCurrentTime) {
  player.setCurrentTime(setCurrentTime);
}

player.on('timeupdate', throttle(timeSave, 1000));
function timeSave() {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(seconds));
  });
}