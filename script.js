// Audio playback
let audio = new Audio('voiceclip.mp3'); // Replace 'voiceclip.mp3' with the path to your voice clip file

function playVoiceClip() {
  audio.play();
}

function stopVoiceClip() {
  audio.pause();
  audio.currentTime = 0; // Reset the playback to the start
}

// Navigation
function navigateTo(page) {
  window.location.href = page;
}
