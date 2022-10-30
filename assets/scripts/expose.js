// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var hornSele = document.getElementById('horn-select');
  var VoluC = document.getElementById('volume-controls');
  var Bot = document.getElementsByTagName('button');
  var Hid = document.getElementsByClassName('hidden')[0];

  const jsConfetti = new JSConfetti({})


  Bot[0].addEventListener('click', function() {
    if(hornSele.value == "party-horn"){
      // jsConfetti.addConfetti();
      setTimeout(() => {jsConfetti.addConfetti()}, 500)
    }
    Hid.play();
  });

  VoluC.addEventListener('input', ()=>{
    // console.log(document.getElementById('volume').value);
    var v = document.getElementById('volume').value;
    if(v == 0){
      document.querySelector("#volume-controls > img").src = 'assets/icons/volume-level-0.svg';
    }else if(v < 33){
      document.querySelector("#volume-controls > img").src = 'assets/icons/volume-level-1.svg';
    }else if(v < 67){
      document.querySelector("#volume-controls > img").src = 'assets/icons/volume-level-2.svg';
    }else{
      document.querySelector("#volume-controls > img").src = 'assets/icons/volume-level-3.svg';
    }
    // console.log(Hid);
    Hid.volume = v/100;
    if(v > 100){
      Hid.volume = 1;
    }
  });
  
  hornSele.addEventListener('click', ()=> {
    hornSele.addEventListener('change', () => {
      // console.log(hornSele.value);
      console.log(document.querySelector("img"));
      switch(hornSele.value){
        case "air-horn":
          document.querySelector("img").src = './assets/images/air-horn.svg';
          document.querySelector("img").alt = './assets/images/air-horn.svg';
          Hid.src= './assets/audio/air-horn.mp3'
          break;
        case "car-horn":
          document.querySelector("img").src = './assets/images/car-horn.svg';
          document.querySelector("img").alt = './assets/images/car-horn.svg';
          Hid.src= './assets/audio/car-horn.mp3';
          break;
        case "party-horn":
          document.querySelector("img").src = './assets/images/party-horn.svg';
          document.querySelector("img").alt = './assets/images/party-horn.svg';
          Hid.src= './assets/audio/party-horn.mp3';
          break;
      }
    });
  });  

}