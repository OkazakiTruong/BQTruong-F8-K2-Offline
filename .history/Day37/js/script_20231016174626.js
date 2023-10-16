const containerEl = document.querySelector(".container");
const startGame = () => {
  let html = `
    <div class="loading-game">
    <h2>Game start in</h2>
    <p>3</p>
  </div> -->
    `;
  containerEl.innerHTML = html;
  const loadingGameEL = containerEl.querySelector(".loading-game");
  const timeEl = loadingGameEL.querySelector("p");
  let timer = 3;
  timer.innerText = 3;
  let intervalId = setInterval(() => {
    timeEl.innerText = --timer;
    if (timer === 0) {
      loadingGameEL.innerHTML = "GO!";
    }
    if (timer === -2) {
    }
  }, 1000);
};
const renderStartScreen = () => {
  let html = `<div class="start-screen">
    <h2>Quiz Game</h2>
    <button class="btn-start">Start</button>
  </div>`;
  containerEl.innerHTML = html;
  const btnStart = containerEl.querySelector(".btn-start");
  btnStart.addEventListener("click", startGame);
};
renderStartScreen();
