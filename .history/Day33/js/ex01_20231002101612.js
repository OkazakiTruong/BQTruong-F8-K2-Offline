const btnSpeak = document.querySelector(".btn-speak");
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

btnSpeak.addEventListener("click", () => {
  console.log("speaking please");
});
