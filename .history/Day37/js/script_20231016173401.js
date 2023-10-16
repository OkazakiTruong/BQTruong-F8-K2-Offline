const containerEl = document.querySelector(".container");
const startgame = () => {};
const renderStartScreen = () => {
  let html = `<div class="start-screen">
    <h2>Quiz Game</h2>
    <button class="btn-start">Start</button>
  </div>`;
  containerEl.innerHTML = html;
  const btnStart = containerEl.querySelector(".btn-start");
  btnStart.addEventListener("click", startgame);
};
renderStartScreen();
