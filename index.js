const musics = document.querySelectorAll(".musicImg");
musics.forEach(element => {
    element.addEventListener("click", ()=>{
        element.classList.toggle("shrink");
        element.classList.toggle("hovered")
        element.childNodes.forEach(t => {

            // animations rotatation
            // animations rotatation
            // animations rotatation

            if (t.nodeName == "IMG") {
                    
                if (t.classList.contains("musicplay")) {
                    let transformation = window.getComputedStyle(t).getPropertyValue('transform').match(/(-?[0-9\.]+)/g);
                    let sin = transformation[1];
                    let cos = transformation[0];
                    sin = Math.round(Math.asin(sin) * (180/Math.PI));
                    cos = Math.round(Math.acos(cos) * (180/Math.PI));
                    let angle = sin;
                    if(cos>sin){
                        angle = cos;
                    }
                    if(sin < 0){
                        angle = 180 + Math.abs(sin);
                        if (cos < 90) {
                            angle = 360 - Math.abs(sin);
                        }
                    }
                    t.style.transform = `rotate(${angle}deg)`;
                    t.classList.add("musicstop");
                    t.classList.remove("musicplay");                    
                }
                else{
                    t.classList.remove("musicstop");
                    t.classList.add("musicplay");                    
                }   
            }

            // play button
            // play button
            // play button


            if(t.className == "playButton"){   
                t.childNodes.forEach(img =>{
                    if(img.nodeName == "IMG"){
                        if(element.classList.contains("shrink")){
                            console.log("has")
                            img.src = "images/pause.png";
                        }
                        else{
                            img.src = "images/playButton.png"
                        }
                    }
                })              
            }
            if(t.nodeName == "AUDIO"){
                if(t.classList.contains("playing")){
                    t.pause();

                }
                else{
                    t.classList.add("playing")
                    t.play()
                }
            }
        });
    })
});
    