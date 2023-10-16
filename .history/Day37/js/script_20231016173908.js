const containerEl = document.querySelector(".container");
const startGame = () => {
  let timer = 3;
  let html = `
    <div class="loading-game">
    <h2>Game start in</h2>
    <p>3</p>
  </div> -->
    `;
  containerEl.innerHTML = html;
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
