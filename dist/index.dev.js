"use strict";

var musics = document.querySelectorAll(".musicImg");
var isPlaying = false;
musics.forEach(function (element) {
  element.addEventListener("click", function () {
    console.log(isPlaying);

    if (isPlaying != false && isPlaying != element) {
      isPlaying.classList.toggle("shrink");
      isPlaying.classList.toggle("hovered");
      isPlaying.classList.toggle("isplaying");
      isPlaying.childNodes.forEach(function (nott) {
        changeOverlay(nott, isPlaying);
        playMusic(nott);
        rotatation(nott, isPlaying);
      });
      isPlaying = false;
    }

    console.log(element.classList);
    element.classList.toggle("shrink");
    element.classList.toggle("isplaying");
    element.classList.toggle("hovered");

    if (element.classList.contains("isplaying")) {
      isPlaying = element;
    } else if (!element.classList.contains("isplaying")) {
      isPlaying = false;
    }

    element.childNodes.forEach(function (t) {
      rotatation(t, element);
      changeOverlay(t, element);
      playMusic(t);
    });
    console.log(isPlaying);
    console.log("================");
  });
});

var playMusic = function playMusic(t) {
  if (t.nodeName == "AUDIO") {
    if (t.classList.contains("playing")) {
      t.pause();
      t.classList.remove("playing");
    } else {
      t.classList.add("playing");
      t.currentTime = 0;
      t.play();
    }
  }
};

var changeOverlay = function changeOverlay(t, elem) {
  if (t.className == "playButton") {
    t.childNodes.forEach(function (img) {
      if (img.nodeName == "IMG") {
        if (elem.classList.contains("shrink")) {
          img.src = "images/pause.png";
        } else {
          img.src = "images/playButton.png";
        }
      }
    });
  }
};

var rotatation = function rotatation(t, elem) {
  if (t.nodeName == "IMG") {
    if (t.classList.contains("musicplay")) {
      var transformation = window.getComputedStyle(t).getPropertyValue('transform').match(/(-?[0-9\.]+)/g);
      var sin = transformation[1];
      var cos = transformation[0];
      sin = Math.round(Math.asin(sin) * (180 / Math.PI));
      cos = Math.round(Math.acos(cos) * (180 / Math.PI));
      var angle = sin;

      if (cos > sin) {
        angle = cos;
      }

      if (sin < 0) {
        angle = 180 + Math.abs(sin);

        if (cos < 90) {
          angle = 360 - Math.abs(sin);
        }
      }

      t.style.transform = "rotate(".concat(angle, "deg)");
      t.classList.add("musicstop");
      t.classList.remove("musicplay");
    } else {
      t.classList.remove("musicstop");
      t.classList.add("musicplay");
    }
  }
};