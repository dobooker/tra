const musics = document.querySelectorAll(".musicImg");
let isPlaying = false;
musics.forEach(element => {
    element.addEventListener("click", ()=>{
        console.log(isPlaying);

        if(isPlaying != false && isPlaying != element){
            
            isPlaying.classList.toggle("shrink");
            isPlaying.classList.toggle("hovered");
            isPlaying.classList.toggle("isplaying");
            
            isPlaying.childNodes.forEach(nott=>{
                changeOverlay(nott, isPlaying);
                playMusic(nott);
                rotatation(nott, isPlaying);
            });
            isPlaying = false ;                    
        }

        
        
        
        console.log(element.classList);
        element.classList.toggle("shrink");
        element.classList.toggle("isplaying");
        element.classList.toggle("hovered");
        if(element.classList.contains("isplaying")){
            isPlaying = element;                  
        }else if(!element.classList.contains("isplaying")){
            isPlaying = false;
        }
        element.childNodes.forEach(t => {
            
            
            rotatation(t, element);
       
            changeOverlay(t, element);

            playMusic(t);
              
        });
        console.log(isPlaying);
        console.log("================");
    })
});


const playMusic = (t)=>{
    if(t.nodeName == "AUDIO"){
        if(t.classList.contains("playing")){
            t.pause();
            t.classList.remove("playing");
            
        }
        else{
            t.classList.add("playing")
            t.play()
        }
    }
}

const changeOverlay = (t, elem)=>{
    if(t.className == "playButton"){   
        t.childNodes.forEach(img =>{
            if(img.nodeName == "IMG"){
                if(elem.classList.contains("shrink")){
                    img.src = "images/pause.png";
                }
                else{
                    img.src = "images/playButton.png"
                }
            }
        })              
    }
}

const rotatation = (t, elem)=>{
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
}
    