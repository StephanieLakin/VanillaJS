const video = document.getElementById('video');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// event listeners to call specific functions
// Play & Pause Video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// update play/pause icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// update progress & timestamp
function updateProgress() {
  console.log(video.currentTime);
}

// stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// set video progress
function setVideoProgress() {
  return true;
}
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('paused', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeUpdate', updateProgress);

//play.addEventListener('click', toggleVideoStatus);

//stop.addEventListener('click', stopVideo);

//progress.addEventListener('change', setVideoProgress);
