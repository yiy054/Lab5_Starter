// explore.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  // TODO
  var Bot = document.getElementsByTagName('button');
  var v = document.querySelector("#voice-select");
  var x = document.getElementById("text-to-speak");
  let utterance = new SpeechSynthesisUtterance();
  let voices = [];

  populateVoiceList();
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  Bot[0].addEventListener('click', function() {
    document.querySelector("img").src = 'assets/images/smiling-open.png';
    // console.log(x.value);
    utterance.text = x.value;
    // console.log(utterance.voice);
    speechSynthesis.speak(utterance);
    utterance.addEventListener('end', (event) => {
      document.querySelector("img").src = 'assets/images/smiling.png';
    });
  });

  // v.addEventListener('click', ()=> {
    v.addEventListener('change', () => {
      // console.log(v)
      // console.log(v.value);
      // console.log(voices);
      utterance.voice = voices[v.value];
      console.log(utterance.voice);
    });
  // });  

  function populateVoiceList() {
    if (typeof speechSynthesis === 'undefined') {
      return;
    }
    voices = speechSynthesis.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.value = i;
  
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      document.getElementById("voice-select").appendChild(option);
      // document.getElementById("voice-select").options[i] = new Option(voice.name, i);
    }
  }
}