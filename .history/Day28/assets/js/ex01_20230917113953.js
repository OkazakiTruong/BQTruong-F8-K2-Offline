const progressBar = document.querySelector(".progress-bar");
const progress = progressBar.querySelector(".progress");
const progressDot = progress.children[0];
const audio = document.querySelector(".audio");
const btnPlay = document.querySelector(".play-btn");
const progressTime = progressBar.querySelector(".progress-time");
const wrapperPlayer = document.querySelector(".wrapper-player");
let runTime = progressBar.previousElementSibling;
let totalTime = progressBar.nextElementSibling;
let currentValue = 0;

const karaoke = document.querySelector(".karaoke");
const karaokeBtn = karaoke.querySelector(".karaoke-btn");
const karaokeLayout = karaoke.querySelector(".karaoke-layout");
const closeBtn = karaokeLayout.querySelector(".btn-close");
const karaokeLyric = karaokeLayout.querySelector(".karaoke-lyric");

let lyric = JSON.parse(json).data.sentences;

const handleColor = function (currentT) {
  let sentenceEL = karaokeLyric.children;
  // console.log(sentence);
  Array.from(sentenceEL).forEach(function (sentence) {
    // console.log(sentence);
    let startTime = sentence.dataset.startTime;
    let endTime = sentence.dataset.endTime;
    console.log(endTime - startTime);

    if (startTime && endTime && currentT >= startTime) {
      let words = JSON.parse(sentence.dataset.words);
    }
  });
};

const loadLyric = function () {
  let currentT = Math.floor(audio.currentTime * 1000);
  let currentScreen = 0;
  let index = lyric.findIndex(function (sentence) {
    return (
      sentence.words[0].startTime <= currentT &&
      sentence.words[sentence.words.length - 1].endTime >= currentT
    );
  });
  //Hiển thị 2 câu đầu tiên trước khi 5s đầu tiên
  let firstTime = lyric[0].words[0].startTime;
  let firstRange = currentT - firstTime;
  if (firstRange > -5000 && firstRange < 0) {
    index = 0;
  }
  if (index !== -1) {
    handleColor(currentT);
    let screen = Math.floor(index / 2 + 1);
    if (currentScreen === screen) {
    }
    let offset = (screen - 1) * 2;
    if (index >= offset && index < offset + 2) {
      let pTag = "";
      for (let i = offset; i < offset + 2; i++) {
        let sentence = lyric[i].words
          .map(function (item) {
            return item.data;
          })
          .join(" ");
        pTag += `<p data-start-time = "${
          lyric[i].words[0].startTime
        }" data-end-time = "${
          lyric[i].words[lyric[i].words.length - 1].endTime
        }" data-words = 
        ${JSON.stringify(lyric[i].words)}>${sentence}<span>${sentence}</span>
        </p>`;
      }
      karaokeLyric.innerHTML = pTag;
    }
    currentScreen = screen;
  }
};

// const lyricSentences = [];
// const LyricSentencesObj = function (startTime, stopTime, lyricSentence) {
//   this.startTime = startTime;
//   this.stopTime = stopTime;
//   this.lyricSentence = lyricSentence;
// };
// for (let i = 0; i < lyric.data.sentences.length; i++) {
//   let sentence = "";
//   let startTime = lyric.data.sentences[i].words[0].startTime;
//   let stopTime =
//     lyric.data.sentences[i].words[lyric.data.sentences[i].words.length - 1]
//       .endTime;
//   for (let j = 0; j < lyric.data.sentences[i].words.length; j++) {
//     sentence += lyric.data.sentences[i].words[j].data + " ";
//   }
//   let LyricItem = new LyricSentencesObj(startTime, stopTime, sentence.trim());
//   lyricSentences.push(LyricItem);
// }

// const loadLyric = function () {
//   let html = `<h2>Thu cuối</h2>
//   <p>Yanbi, Mr.T, Hằng Bingbong</p>`;

//   for (let i = 0; i < lyricSentences.length - 1; i++) {
//     let startTime = lyricSentences[i].startTime;
//     if (lyricSentences[i + 1].startTime - startTime >= 10000) {
//       isFar = true;
//       html = `<h2>Thu cuối</h2>
//       <p>Yanbi, Mr.T, Hằng Bingbong</p>`;
//     } else {
//       let stopTime = lyricSentences[i + 1].stopTime;
//       if (
//         startTime <= audio.currentTime * 1000 &&
//         stopTime + 500 >= audio.currentTime * 1000
//       ) {
//         isFirstTimeLoadLyric = false;
//         html = `<p>${lyricSentences[i].lyricSentence}</p>
//           <p>${lyricSentences[i + 1].lyricSentence}</p>`;
//       }
//       i++;
//     }
//   }
//   karaokeLyric.innerHTML = html;
// };

karaoke.addEventListener("mouseup", function (e) {
  e.stopPropagation();
  audio.currentTime = (currentValue * audio.duration) / 100;
  isMountDown = false;
});
const getSongTime = function (seconds) {
  let minutes = Math.floor(seconds / 60);
  seconds = Math.floor(seconds % 60);
  return `${minutes < 10 ? `0${minutes}` : `${minutes}`}:${
    seconds < 10 ? `0${seconds}` : `${seconds}`
  }`;
};

//lấy chiều dài progress bar
const progressBarWidth = progressBar.clientWidth;
//Đặt cờ is Mount down
let isMountDown = false;
let progressBarDistance = 0;
const handleValue = function (value) {
  currentValue = value;
  if (value < 0) {
    value = 0;
  }
  if (value > 100) {
    value = 100;
  }
  progress.style.width = `${value}%`;
};
//change run time ()
const changeRunTime = function (value) {
  if (value < 0) {
    value = 0;
  }
  if (value > 100) {
    value = 100;
  }
  let seconds = (value * audio.duration) / 100;
  if (seconds < 0) {
    seconds = 0;
  }
  runTime.innerText = getSongTime(seconds);
};
//hàm change progress width
const changeProgressWidth = function (e) {
  let offsetX = e.clientX - progressBarDistance;
  let value = (offsetX * 100) / progressBarWidth;
  handleValue(value);
  changeRunTime(value);
};
//hàm change progress time
progressBar.addEventListener("mouseout", function () {
  progressTime.style.visibility = "hidden";
});
const changeProgressTime = function (e) {
  progressTime.style.visibility = "visible";
  let seconds = (e.offsetX / progressBarWidth) * audio.duration;
  progressTime.innerText = getSongTime(seconds);
  progressTime.style.left = `${e.offsetX}px`;
};

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    progressBarDistance = e.clientX - e.offsetX;
    changeProgressWidth(e);
    changeProgressTime(e);
    isMountDown = true;
  }
});
progressDot.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  if (e.which === 1) {
    if (progressBarDistance === 0 && currentValue === 0) {
      progressBarDistance = e.clientX;
    } else {
      progressBarDistance = e.clientX - (currentValue * progressBarWidth) / 100;
    }
    changeProgressWidth(e);
    isMountDown = true;
  }
});
document.addEventListener("mousemove", function (e) {
  if (isMountDown) {
    changeProgressWidth(e);
  }
});
progressBar.addEventListener("mousemove", function (e) {
  e.stopPropagation();
  if (isMountDown) {
    changeProgressWidth(e);
    changeProgressTime(e);
  } else {
    changeProgressTime(e);
  }
});
progressDot.addEventListener("mousemove", function (e) {
  e.stopPropagation();
});

document.addEventListener("mouseup", function () {
  audio.currentTime = (currentValue * audio.duration) / 100;
  isMountDown = false;
});

//wait audio load
audio.addEventListener("loadeddata", function (e) {
  totalTime.innerText = getSongTime(audio.duration);
});
audio.addEventListener("timeupdate", function (e) {
  if (!isMountDown) {
    runTime.innerText = getSongTime(audio.currentTime);
    value = (audio.currentTime * 100) / audio.duration;
    loadLyric();
    handleValue(value);
  }
  if (audio.ended) {
    btnPlay.children[1].classList.remove("active");
    btnPlay.children[0].classList.add("active");
    value = 0;
    handleValue(0);
    runTime.innerText = getSongTime(0);
  }
});

btnPlay.addEventListener("click", function () {
  if (audio.paused) {
    btnPlay.children[1].classList.add("active");
    btnPlay.children[0].classList.remove("active");
    audio.play();
  } else {
    btnPlay.children[1].classList.remove("active");
    btnPlay.children[0].classList.add("active");
    audio.pause();
  }
});

//su kien mo karaoke layout
karaokeBtn.addEventListener("click", function () {
  karaokeLayout.classList.add("active");
  wrapperPlayer.classList.add("wrapper-active");
});
closeBtn.addEventListener("click", function () {
  karaokeLayout.classList.remove("active");
  wrapperPlayer.classList.remove("wrapper-active");
});
