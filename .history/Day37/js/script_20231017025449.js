import { config } from "./config.js";
import { client } from "./client.js";
const { TIME_QUESTION: timeQuestion } = config;
const containerEl = document.querySelector(".container");
let questionNumber = 1;
let allQuestions;
let score = 0;
let steakBonus = 100;
let steak = 0;
let steakMax = 0;
let numberCorrect = 0;
let numberIncorrect = 0;
let isCountDown = true;

const query = {
  _page: questionNumber,
  _limit: 1,
};

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

const renderEndScreen = () => {
  let percent = (numberCorrect * 100) / allQuestions;
  let html = `
    <div class="end-game-screen">
    <h2>Game performance</h2>
    <div class="accuracy">
      <p>Accuracy</p>
      <div class="percent-wrapper">
        <div class="percent" style = "width: ${percent}%">percent</div>
      </div>
    </div>
    <div class="end-score">
      <div class="score">${score} <span>Score</span></div>
      <div class="steak">${steakMax} <span>Steak</span></div>
      <div class="correct">${numberCorrect} <span>Correct</span></div>
      <div class="incorrect">${numberIncorrect} <span>Incorrect</span></div>
    </div>
    <button class="btn-play-again">Play again</button>
  </div>
    `;
  const btnPlayAgain = document.querySelector(".btn-play-again");
  btnPlayAgain.addEventListener("click", renderEndScreen);
  containerEl.innerHTML = html;
};

function moveToNextQuestion() {
  questionNumber++;
  query._page = questionNumber;
  if (questionNumber <= allQuestions) {
    isCountDown = true;
    renderGameScreen();
  } else {
    renderEndScreen();
  }
}
const questionTimeCountDown = () => {
  let timeQuestionCopy = timeQuestion;
  const timerEl = document.querySelector(".game-inner .score-screen .timer");
  let intervalId = setInterval(() => {
    if (isCountDown === false) {
      clearInterval(intervalId);
    }
    timeQuestionCopy -= 100;
    if (timeQuestionCopy <= 0) {
      clearInterval(intervalId);
      timerEl.style.width = "0%";
      steak = 0;
      moveToNextQuestion(allQuestions);
    } else {
      const timerElWidth = `${(timeQuestionCopy * 100) / timeQuestion}%`;
      timerEl.style.width = timerElWidth;
    }
  }, 100);
};

const renderGameScreen = async () => {
  let params = new URLSearchParams(query);
  let { data: questionObj, response } = await client.get(
    `/questions?${params}`
  );
  let question = questionObj[0];
  steakBonus = 100 * steak;
  allQuestions = response.headers.get("X-total-count");
  let html = `
    <div class="game-inner">
    <div class="score-screen">
      <div>
        <div class="number-question">
          <span>${questionNumber}</span>
          <span>/</span>
          <span>${allQuestions}</span>
        </div>
        <div class="steak-wrapper">
          <div class="steak">
            <div class="steak-init ${
              steak > 0 ? "active" : ""
            }" style = "width: ${(100 / 3) * steak}% !important">Steak</div>
          </div>
          <div class="steak-bonus">${
            steakBonus <= 0 ? "" : `+ ${steakBonus}`
          }</div>
        </div>
      </div>
      <div class="score">Score: <span>${score}</span></div>
      <div class="timer"></div>
    </div>
    <div class="game-wrapper">
    <div class="question">${question.question}</div>
    <div class="answers">
    ${question.answer
      .map(
        (answer) => `
    <div class="answer">${answer}</div>
    `
      )
      .join("")}

    </div>
  </div>
    <div class="noti">Correct</div>
  </div>`;
  containerEl.innerHTML = html;
  questionTimeCountDown();
  handleAnswer(question.correct);
};

function afterChooseAnswer(correctAnswer, answers, isCorrectAnswer) {
  answers.forEach(function (answer) {
    if (
      correctAnswer.findIndex((correct) => correct === answer.innerText) !== -1
    ) {
      answer.style.background = "green";
    } else {
      if (isCorrectAnswer) {
        answer.style.background = "transparent";
        answer.innerText = "";
      } else {
        answer.style.background = "red";
      }
    }
  });
}

function handleWinEvent(correctAnswer) {
  const answers = document.querySelectorAll(".game-wrapper .answer");
  const scoreEL = document.querySelector(".score span");
  const steakInit = document.querySelector(".steak .steak-init");
  const steakBonusEl = document.querySelector(".steak-bonus");
  steak++;
  numberCorrect++;
  steakBonus = 100 * steak;
  steakBonusEl.innerText = steakBonus;
  if (steak >= 3) {
    steak = 3;
    steakMax++;
  }
  if (steak > 0) {
    steakInit.style.visibility = "visible";
    steakInit.style.width = `calc((100% / 3) * ${steak})`;
    score += 1000 + steakBonus;
  }
  scoreEL.innerText = score;
  showNoti(true, true);
  afterChooseAnswer(correctAnswer, answers, true);
  setTimeout(() => {
    moveToNextQuestion();
    showNoti(false);
  }, 1000);
}
function handleLoseEvent(correctAnswer) {
  const answers = document.querySelectorAll(".game-wrapper .answer");
  const steakInit = document.querySelector(".steak .steak-init");
  steak = 0;
  numberIncorrect++;
  steakBonus = 100 * steak;
  steakInit.style.visibility = "hidden";
  showNoti(true, false);
  afterChooseAnswer(correctAnswer, answers, false);
  setTimeout(() => {
    moveToNextQuestion();
    showNoti(false);
  }, 1000);
}
function handleAnswer(correctAnswer) {
  const answers = document.querySelectorAll(".game-wrapper .answer");
  const steakInit = document.querySelector(".steak .steak-init");
  let flagToWin = true;
  let numberClick = 0;

  console.log(steakInit);
  answers.forEach((answer) => {
    answer.addEventListener("click", function (e) {
      this.style.background = "rgb(20, 101, 252)";
      if (
        correctAnswer.findIndex((correct) => correct === this.innerText) !== -1
      ) {
        isCountDown = false;
        numberClick++;
        if (numberClick >= correctAnswer.length && flagToWin) {
          handleWinEvent(correctAnswer);
        } else if (numberClick >= correctAnswer.length && !flagToWin) {
          handleLoseEvent(correctAnswer);
        }
      } else {
        numberClick++;
        flagToWin = false;
        isCountDown = false;
        if (numberClick >= correctAnswer.length && !flagToWin) {
          handleLoseEvent(correctAnswer);
        }
      }
    });
  });
}

function showNoti(isShow, isCorrect = "true") {
  const noti = document.querySelector(".noti");
  if (isShow) {
    noti.style.display = "flex";
  } else {
    noti.style.display = "none";
  }
  if (isCorrect) {
    noti.style.background = "green";
    noti.innerText = "Correct Answer";
  } else {
    noti.style.background = "red";
    noti.innerText = "InCorrect Answer";
  }
}
