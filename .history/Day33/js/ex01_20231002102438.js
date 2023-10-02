const btnSpeak = document.querySelector(".btn-speak");
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const speechRecognition = new SpeechRecognition();
console.log(speechRecognition);

btnSpeak.addEventListener("click", function () {
  if (this.classList.contains("speaking")) {
    speechRecognition.stop();
  } else {
    speechRecognition.start();
  }
});

speechRecognition.addEventListener("start", function (e) {
  console.log(e.currentTarget);
  btnSpeak.classList.add("speaking");
});

speechRecognition.addEventListener("end", function () {
  btnSpeak.classList.remove("speaking");
});
