const hockeyvid = document.getElementById("hockeyvideo");
const hockeyplay = document.getElementById("hockey-play");
const hockeypause = document.getElementById("hockey-pause");
const hockeyrw = document.getElementById("hockey-rewind");
const hockeyff = document.getElementById("hockey-fastforward");
const hockeycc = document.getElementById("hockey-cc");
const hockeyst= document.getElementById("hockey-st");


hockeyplay.addEventListener("click", function() {
    hockeyvid.play();
  });
  
  hockeypause.addEventListener("click", function() {
    hockeyvid.pause();
  });
  
  hockeyrw.addEventListener("click", function() {
    hockeyvid.currentTime -= 2;
  });
  
  hockeyff.addEventListener("click", function() {
    hockeyvid.currentTime += 2;
  });
  
  hockeycc.addEventListener("click", function() {
    if (hockeyvid.textTracks[0].mode === "showing") {
        hockeyvid.textTracks[0].mode = "hidden";
    } else {
        hockeyvid.textTracks[0].mode = "showing";
    }
  });
  
  hockeyst.addEventListener("click", function() {
    if (hockeyvid.textTracks[1].mode === "showing") {
        hockeyvid.textTracks[1].mode = "hidden";
    } else {
        hockeyvid.textTracks[1].mode = "showing";
    }
  });
  