"use strict";

var musics = document.querySelectorAll(".musicImg");
musics.forEach(function (element) {
  element.addEventListener("click", function () {
    element.classList.toggle("shrink");
    element.classList.toggle("hovered");
    element.childNodes.forEach(function (t) {
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

      if (t.className == "playButton") {
        t.childNodes.forEach(function (img) {
          if (img.nodeName == "IMG") {
            if (element.classList.contains("shrink")) {
              console.log("has");
              img.src = "images/pause.png";
            } else {
              img.src = "images/playButton.png";
            }
          }
        });
      }
    });
  });
});