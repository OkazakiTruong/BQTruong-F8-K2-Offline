import {TIME_QUESTION: timeQuestion}  from("./config.js")

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
  timeEl.innerText = timer;
  let intervalId = setInterval(() => {
    timeEl.innerText = --timer;
    if (timer === 0) {
      loadingGameEL.innerHTML = "<h2>GO!</h2>";
    }
    if (timer === -1) {
      renderGameScreen();
      clearInterval(intervalId);
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

const renderGameScreen = () => {
  let html = `
    <div class="game-inner">
    <div class="score-screen">
      <div>
        <div class="number-question">
          <span>1</span>
          <span>/</span>
          <span>8</span>
        </div>
        <div class="steak-wrapper">
          <div class="steak">
            <div class="steak-init">Steak</div>
          </div>
          <div class="steak-bonus">100</div>
        </div>
      </div>
      <div class="score">Score: <span>100</span></div>
      <div class="timer"></div>
    </div>
    <div class="game-wrapper">
      <div class="question">"1" + 1 Bằng bao nhiêu?</div>
      <div class="answers">
        <div class="answer">11</div>
        <div class="answer">1</div>
        <div class="answer">0</div>
        <div class="answer">Duno</div>
      </div>
    </div>
    <div class="noti">Correct</div>
  </div>`;
  containerEl.innerHTML = html;
};
