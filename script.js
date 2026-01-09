const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

let playing = false;

btn.addEventListener("click", () => {
  if (!playing) {
    music.play();
    btn.textContent = "⏸ Pause the Vibe";
  } else {
    music.pause();
    btn.textContent = "▶ Play the Vibe";
  }
  playing = !playing;
});
