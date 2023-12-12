let playPause = document.getElementById("btn");
let audio = document.querySelector("audio");
playPause.classList.add("play");


function play() {
  if (audio.paused) {
    audio.play();
    audio.autoplay = true;
    audio.loop = true;

    playPause.classList.remove("play");
    playPause.classList.add("pause");
  } else {
    audio.pause();
    playPause.classList.remove("pause");
    playPause.classList.add("play");
  }
}
