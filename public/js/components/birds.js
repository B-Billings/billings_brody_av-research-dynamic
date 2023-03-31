const birdvid = document.getElementById("birdvideo");
const birdplay = document.getElementById("bird-play");
const birdpause = document.getElementById("bird-pause");
const birdrw = document.getElementById("bird-rewind");
const birdff = document.getElementById("bird-fastforward");
const birdcc = document.getElementById("bird-cc");
const birdst = document.getElementById("bird-st");

birdplay.addEventListener("click", function() {
    birdvid.play();
});

birdpause.addEventListener("click", function() {
    birdvid.pause();
});

birdrw.addEventListener("click", function() {
    birdvid.currentTime -= 2;
});

birdff.addEventListener("click", function() {
    birdvid.currentTime += 2;
});

birdcc.addEventListener("click", function() {
  if (birdvid.textTracks[0].mode === "showing") {
    birdvid.textTracks[0].mode = "hidden";
  } else {
    birdvid.textTracks[0].mode = "showing";
  }
});

birdst.addEventListener("click", function() {
  if (birdvid.textTracks[1].mode === "showing") {
    birdvid.textTracks[1].mode = "hidden";
  } else {
    birdvid.textTracks[1].mode = "showing";
  }
});

