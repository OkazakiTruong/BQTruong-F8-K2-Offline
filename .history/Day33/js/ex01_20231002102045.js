const btnSpeak = document.querySelector(".btn-speak");
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const speechRecognition = new SpeechRecognition();
console.log(speechRecognition);

btnSpeak.addEventListener("click", function () {
  if (this.classList.contains("speaking")) {
    speechRecognition.end();
  } else {
    speechRecognition.start();
  }
});

speechRecognition.addEventListener("start", function () {
  btnSpeak.classList.add("speaking");
});
