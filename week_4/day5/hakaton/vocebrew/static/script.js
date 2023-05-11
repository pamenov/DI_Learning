window.addEventListener('load', () => {
  const players = document.querySelectorAll('.audio-player');

  players.forEach(player => {
    const audio = player.querySelector('audio');
    const playButton = player.querySelector('.play-button');

    playButton.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        playButton.innerHTML = '&#10074;&#10074;'; // pause symbol
      } else {
        audio.pause();
        audio.currentTime = 0;
        playButton.innerHTML = '&#9658;'; // play symbol
      }
    });

    audio.addEventListener('ended', () => {
      playButton.innerHTML = '&#9658;'; // play symbol
    });
  });
});