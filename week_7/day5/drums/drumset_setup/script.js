function getAudioFromKey(key, audioList) {
  if (isNaN(key)) {
    return null;
  }
  let index = parseFloat(key) - 1
  if (index === -1) {
    return null;
  }
  return audioList[index]
}

const audioList = document.getElementsByClassName("myAudio");

function playAudio(audio) {
  if (audio == null) {
    return;
  }
  if (typeof audio == 'string') {
    audio = new Audio(audio)
  }
  audio.currentTime = 0;
  audio.play();
}

document.addEventListener("keydown", function(event) {
  let audio = getAudioFromKey(event.key, audioList)
  playAudio(audio)
  console.log(event.key)
});