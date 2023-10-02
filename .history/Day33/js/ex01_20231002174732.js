const btnSpeak = document.querySelector(".btn-speak");
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const speechRecognition = new SpeechRecognition();
speechRecognition.lang = "vi-VN";
const speechSynthesis = window.speechSynthesis;
const request = document.querySelector(".your-request");
const valueContainer = document.querySelector(".value-container");

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
  showRequest(result);
});
speechRecognition.addEventListener("end", function () {
  btnSpeak.classList.remove("speaking");
});

const showRequest = (value) => {
  let html = `<p>Your request: ${value}</p>`;
  request.innerHTML = html;
  doingTask(value);
};
const showInformation = (value) => {
  let html = `<p>${value}</p>`;
  valueContainer.innerHTML = html;
};
const doingTask = (value) => {
  let task = "";
  let flag = false;
  if (value.match(/\bFacebook/gi)) {
    task = "Opening Facebook";
    flag = true;
    window.location.href = "https://www.facebook.com/";
  }
  if (value.match(/\bGoogle/gi)) {
    task = "Opening Google";
    flag = true;
    window.location.href = "https://www.google.com.vn/?hl=vi";
  }
  if (value.match(/\Youtube/gi)) {
    task = "Opening Youtube";
    flag = true;
    window.location.href = "https://www.google.com.vn/?hl=vi";
  }
  if (!flag) {
    task = "Sorry, i can't understand your require!!!";
  }

  let speak = new SpeechSynthesisUtterance(task);
  speak.voice = speechSynthesis.getVoices[2];
  speechSynthesis.speak(speak);

  showInformation(task);
};
