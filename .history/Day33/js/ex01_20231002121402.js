const btnSpeak = document.querySelector(".btn-speak");
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const speechRecognition = new SpeechRecognition();
speechRecognition.lang = "vi-VN";
const speechSynthesis = window.speechSynthesis;\
const valueContainer = document.querySelector(".value-container");


speechSynthesis.getVoices().forEach(function (voice) {
  console.log(voice.name, voice.default ? voice.default : "");
});

btnSpeak.addEventListener("click", function () {
  if (this.classList.contains("speaking")) {
    speechRecognition.stop();
  } else {
    speechRecognition.start();
  }
});

speechRecognition.addEventListener("start", function (e) {
  btnSpeak.classList.add("speaking");
});
speechRecognition.addEventListener("result", function (e) {
  let result = e.results[0][0].transcript;
  showInformation(result);
});
speechRecognition.addEventListener("end", function () {
  btnSpeak.classList.remove("speaking");
});

const showInformation = (value) => {
  let html = `<p>You said: ${value}</p>`;
  valueContainer.innerHTML = html;
  doingTask(value);
};
const doingTask = (value) => {
  let speak;
  let flag = false;
  if (
    value.match(/Mở Facebook/gi) ||
    value.match(/Open Facebook/gi) ||
    value.match(/Facebook/gi)
  ) {
    speak = new SpeechSynthesisUtterance("Openning Facebook");
    flag = true;
    window.location.href = "https://www.facebook.com/";
  }
  if (!flag) {
    speak = new SpeechSynthesisUtterance(
      "Sorry, i can't understand your request"
    );
  }
  speechSynthesis.speak(speak);
};
