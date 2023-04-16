var videoPlayer = document.getElementById('video-player');

// Play or pause the video when the play/pause button is clicked
document.getElementById('play-pause-btn').addEventListener('click', function() {
  if (videoPlayer.paused) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }
});

// Update the playback time when the progress bar is clicked
document.getElementById('progress-bar').addEventListener('click', function(e) {
  var posX = e.pageX - this.offsetLeft;
  var percentage = posX / this.offsetWidth;
  videoPlayer.currentTime = videoPlayer.duration * percentage;
});

// Update the progress bar and playback time as the video plays
videoPlayer.addEventListener('timeupdate', function() {
  var currentTime = videoPlayer.currentTime;
  var duration = videoPlayer.duration;
  var progress = currentTime / duration * 100;
  document.getElementById('progress-bar').style.width = progress + '%';
  document.getElementById('current-time').innerHTML = formatTime(currentTime);
  document.getElementById('duration').innerHTML = formatTime(duration);
});

// Format the time in HH:MM:SS format
function formatTime(time) {
  var hours = Math.floor(time / 3600);
  var minutes = Math.floor((time % 3600) / 60);
  var seconds = Math.floor(time % 60);
  return hours + ':' + padZero(minutes) + ':' + padZero(seconds);
}

// Pad a single digit number with a leading zero
function padZero(number) {
  return number < 10 ? '0' + number : number;
}