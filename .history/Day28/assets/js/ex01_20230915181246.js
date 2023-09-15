const progressBar = document.querySelector(".progress-bar");
const progress = progressBar.querySelector(".progress");
const progressDot = progress.children[0];
const audio = document.querySelector(".audio");
const btnPlay = document.querySelector(".play-btn");
const progressTime = progressBar.querySelector(".progress-time");
let runTime = progressBar.previousElementSibling;
let totalTime = progressBar.nextElementSibling;
let currentValue = 0;

const karaoke = document.querySelector(".karaoke");
const karaokeBtn = karaoke.querySelector(".karaoke-btn");
const karaokeLayout = karaoke.querySelector(".karaoke-layout");
const closeBtn = karaokeLayout.querySelector(".btn-close");
const karaokeLyric = karaokeLayout.querySelector(".karaoke-lyric");

let json = `
{
  "err": 0,
  "msg": "Success",
  "data": {
    "sentences": [
      {
        "words": [
          {
            "startTime": 13520,
            "endTime": 13520,
            "data": "Cần"
          },
          {
            "startTime": 13520,
            "endTime": 13780,
            "data": "điều"
          },
          {
            "startTime": 13780,
            "endTime": 14040,
            "data": "gì"
          },
          {
            "startTime": 14040,
            "endTime": 14300,
            "data": "thì"
          },
          {
            "startTime": 14300,
            "endTime": 14580,
            "data": "nói"
          },
          {
            "startTime": 14580,
            "endTime": 16710,
            "data": "ra"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 16710,
            "endTime": 16980,
            "data": "Sự"
          },
          {
            "startTime": 16980,
            "endTime": 17250,
            "data": "thật"
          },
          {
            "startTime": 17250,
            "endTime": 17250,
            "data": "đẹp"
          },
          {
            "startTime": 17250,
            "endTime": 17510,
            "data": "tựa"
          },
          {
            "startTime": 17510,
            "endTime": 17770,
            "data": "đóa"
          },
          {
            "startTime": 17770,
            "endTime": 20170,
            "data": "hoa"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 20170,
            "endTime": 20170,
            "data": "Điều"
          },
          {
            "startTime": 20170,
            "endTime": 20440,
            "data": "gì"
          },
          {
            "startTime": 20440,
            "endTime": 20700,
            "data": "cần"
          },
          {
            "startTime": 20700,
            "endTime": 20960,
            "data": "phải"
          },
          {
            "startTime": 20960,
            "endTime": 21220,
            "data": "nói"
          },
          {
            "startTime": 21220,
            "endTime": 23420,
            "data": "ra"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 23420,
            "endTime": 23680,
            "data": "Để"
          },
          {
            "startTime": 23680,
            "endTime": 23950,
            "data": "mình"
          },
          {
            "startTime": 23950,
            "endTime": 24210,
            "data": "trở"
          },
          {
            "startTime": 24210,
            "endTime": 24480,
            "data": "thành"
          },
          {
            "startTime": 24480,
            "endTime": 24750,
            "data": "chúng"
          },
          {
            "startTime": 24750,
            "endTime": 26640,
            "data": "ta"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 26640,
            "endTime": 26910,
            "data": "I'm"
          },
          {
            "startTime": 26910,
            "endTime": 27170,
            "data": "doing"
          },
          {
            "startTime": 27170,
            "endTime": 27430,
            "data": "thing"
          },
          {
            "startTime": 27430,
            "endTime": 29300,
            "data": "slowly"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 29300,
            "endTime": 29560,
            "data": "Khi"
          },
          {
            "startTime": 29560,
            "endTime": 29820,
            "data": "hai"
          },
          {
            "startTime": 29820,
            "endTime": 29820,
            "data": "chân"
          },
          {
            "startTime": 29820,
            "endTime": 30100,
            "data": "đang"
          },
          {
            "startTime": 30100,
            "endTime": 30360,
            "data": "đi"
          },
          {
            "startTime": 30360,
            "endTime": 30620,
            "data": "hướng"
          },
          {
            "startTime": 30620,
            "endTime": 30880,
            "data": "trái"
          },
          {
            "startTime": 30880,
            "endTime": 33290,
            "data": "tim"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 33290,
            "endTime": 33560,
            "data": "I'm"
          },
          {
            "startTime": 33560,
            "endTime": 33830,
            "data": "doing"
          },
          {
            "startTime": 33830,
            "endTime": 34090,
            "data": "thing"
          },
          {
            "startTime": 34090,
            "endTime": 36220,
            "data": "slowly"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 36220,
            "endTime": 36480,
            "data": "Khi"
          },
          {
            "startTime": 36480,
            "endTime": 36740,
            "data": "môi"
          },
          {
            "startTime": 36740,
            "endTime": 36740,
            "data": "em"
          },
          {
            "startTime": 36740,
            "endTime": 37020,
            "data": "trôi"
          },
          {
            "startTime": 37020,
            "endTime": 37280,
            "data": "qua"
          },
          {
            "startTime": 37280,
            "endTime": 37540,
            "data": "như"
          },
          {
            "startTime": 37540,
            "endTime": 37810,
            "data": "cuốn"
          },
          {
            "startTime": 37810,
            "endTime": 39670,
            "data": "phim"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 39670,
            "endTime": 39930,
            "data": "Cuốn"
          },
          {
            "startTime": 39930,
            "endTime": 39930,
            "data": "không"
          },
          {
            "startTime": 39930,
            "endTime": 40200,
            "data": "gian"
          },
          {
            "startTime": 40200,
            "endTime": 40470,
            "data": "lại"
          },
          {
            "startTime": 40470,
            "endTime": 40470,
            "data": "thân"
          },
          {
            "startTime": 40470,
            "endTime": 40730,
            "data": "mình"
          },
          {
            "startTime": 40730,
            "endTime": 40990,
            "data": "va"
          },
          {
            "startTime": 40990,
            "endTime": 40990,
            "data": "vào"
          },
          {
            "startTime": 40990,
            "endTime": 41530,
            "data": "nhau"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 41530,
            "endTime": 42150,
            "data": "Mau"
          },
          {
            "startTime": 42150,
            "endTime": 42420,
            "data": "đốt"
          },
          {
            "startTime": 42420,
            "endTime": 42420,
            "data": "trụi"
          },
          {
            "startTime": 42420,
            "endTime": 42690,
            "data": "bao"
          },
          {
            "startTime": 42690,
            "endTime": 42950,
            "data": "khổ"
          },
          {
            "startTime": 42950,
            "endTime": 43220,
            "data": "đau"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 43220,
            "endTime": 43480,
            "data": "Người"
          },
          {
            "startTime": 43480,
            "endTime": 43850,
            "data": "đừng"
          },
          {
            "startTime": 43850,
            "endTime": 44120,
            "data": "nói"
          },
          {
            "startTime": 44120,
            "endTime": 44120,
            "data": "hãy"
          },
          {
            "startTime": 44120,
            "endTime": 44380,
            "data": "ôm"
          },
          {
            "startTime": 44380,
            "endTime": 44650,
            "data": "thật"
          },
          {
            "startTime": 44650,
            "endTime": 44900,
            "data": "lâu"
          },
          {
            "startTime": 44900,
            "endTime": 45440,
            "data": "bae"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 45440,
            "endTime": 45440,
            "data": "Đến"
          },
          {
            "startTime": 45440,
            "endTime": 45720,
            "data": "khi"
          },
          {
            "startTime": 45720,
            "endTime": 45980,
            "data": "nắng"
          },
          {
            "startTime": 45980,
            "endTime": 46240,
            "data": "không"
          },
          {
            "startTime": 46240,
            "endTime": 47350,
            "data": "màu"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 47350,
            "endTime": 47620,
            "data": "I'm"
          },
          {
            "startTime": 47620,
            "endTime": 47620,
            "data": "doing"
          },
          {
            "startTime": 47620,
            "endTime": 48150,
            "data": "things"
          },
          {
            "startTime": 48150,
            "endTime": 50010,
            "data": "slowly"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 50010,
            "endTime": 50010,
            "data": "Đôi"
          },
          {
            "startTime": 50010,
            "endTime": 50280,
            "data": "khi"
          },
          {
            "startTime": 50280,
            "endTime": 50540,
            "data": "ta"
          },
          {
            "startTime": 50540,
            "endTime": 50540,
            "data": "cứ"
          },
          {
            "startTime": 50540,
            "endTime": 50810,
            "data": "thế"
          },
          {
            "startTime": 50810,
            "endTime": 51080,
            "data": "chẳng"
          },
          {
            "startTime": 51080,
            "endTime": 51340,
            "data": "bước"
          },
          {
            "startTime": 51340,
            "endTime": 53200,
            "data": "đi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 53200,
            "endTime": 53200,
            "data": "Đôi"
          },
          {
            "startTime": 53200,
            "endTime": 53460,
            "data": "khi"
          },
          {
            "startTime": 53460,
            "endTime": 53730,
            "data": "ta"
          },
          {
            "startTime": 53730,
            "endTime": 53990,
            "data": "cứ"
          },
          {
            "startTime": 53990,
            "endTime": 56990,
            "data": "thế"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 68260,
            "endTime": 68520,
            "data": "Vài"
          },
          {
            "startTime": 68520,
            "endTime": 68520,
            "data": "lần"
          },
          {
            "startTime": 68520,
            "endTime": 68790,
            "data": "tìm"
          },
          {
            "startTime": 68790,
            "endTime": 69060,
            "data": "được"
          },
          {
            "startTime": 69060,
            "endTime": 69320,
            "data": "lối"
          },
          {
            "startTime": 69320,
            "endTime": 71540,
            "data": "ra"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 71540,
            "endTime": 71810,
            "data": "Đường"
          },
          {
            "startTime": 71810,
            "endTime": 72080,
            "data": "về"
          },
          {
            "startTime": 72080,
            "endTime": 72080,
            "data": "dài"
          },
          {
            "startTime": 72080,
            "endTime": 72340,
            "data": "một"
          },
          {
            "startTime": 72340,
            "endTime": 72610,
            "data": "lối"
          },
          {
            "startTime": 72610,
            "endTime": 74770,
            "data": "hoa"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 74770,
            "endTime": 75040,
            "data": "Vài"
          },
          {
            "startTime": 75040,
            "endTime": 75320,
            "data": "lần"
          },
          {
            "startTime": 75320,
            "endTime": 75570,
            "data": "buồn"
          },
          {
            "startTime": 75570,
            "endTime": 75840,
            "data": "chờ"
          },
          {
            "startTime": 75840,
            "endTime": 76100,
            "data": "tối"
          },
          {
            "startTime": 76100,
            "endTime": 78510,
            "data": "qua"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 78510,
            "endTime": 78510,
            "data": "Khi"
          },
          {
            "startTime": 78510,
            "endTime": 78780,
            "data": "mà"
          },
          {
            "startTime": 78780,
            "endTime": 79040,
            "data": "người"
          },
          {
            "startTime": 79040,
            "endTime": 79310,
            "data": "từ"
          },
          {
            "startTime": 79310,
            "endTime": 79580,
            "data": "chối"
          },
          {
            "startTime": 79580,
            "endTime": 81530,
            "data": "ta"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 81530,
            "endTime": 81790,
            "data": "I'm"
          },
          {
            "startTime": 81790,
            "endTime": 81790,
            "data": "doing"
          },
          {
            "startTime": 81790,
            "endTime": 82320,
            "data": "thing"
          },
          {
            "startTime": 82320,
            "endTime": 84240,
            "data": "slowly"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 84240,
            "endTime": 84520,
            "data": "Khi"
          },
          {
            "startTime": 84520,
            "endTime": 84520,
            "data": "hai"
          },
          {
            "startTime": 84520,
            "endTime": 84780,
            "data": "chân"
          },
          {
            "startTime": 84780,
            "endTime": 85040,
            "data": "đang"
          },
          {
            "startTime": 85040,
            "endTime": 85300,
            "data": "đi"
          },
          {
            "startTime": 85300,
            "endTime": 85570,
            "data": "hướng"
          },
          {
            "startTime": 85570,
            "endTime": 85840,
            "data": "trái"
          },
          {
            "startTime": 85840,
            "endTime": 88260,
            "data": "tim"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 88260,
            "endTime": 88260,
            "data": "I'm"
          },
          {
            "startTime": 88260,
            "endTime": 88530,
            "data": "doing"
          },
          {
            "startTime": 88530,
            "endTime": 89060,
            "data": "thing"
          },
          {
            "startTime": 89060,
            "endTime": 90980,
            "data": "slowly"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 90980,
            "endTime": 91250,
            "data": "Khi"
          },
          {
            "startTime": 91250,
            "endTime": 91250,
            "data": "môi"
          },
          {
            "startTime": 91250,
            "endTime": 91510,
            "data": "em"
          },
          {
            "startTime": 91510,
            "endTime": 91780,
            "data": "trôi"
          },
          {
            "startTime": 91780,
            "endTime": 92040,
            "data": "qua"
          },
          {
            "startTime": 92040,
            "endTime": 92300,
            "data": "như"
          },
          {
            "startTime": 92300,
            "endTime": 92570,
            "data": "cuốn"
          },
          {
            "startTime": 92570,
            "endTime": 94280,
            "data": "phim"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 94280,
            "endTime": 94540,
            "data": "Cuốn"
          },
          {
            "startTime": 94540,
            "endTime": 94810,
            "data": "không"
          },
          {
            "startTime": 94810,
            "endTime": 94810,
            "data": "gian"
          },
          {
            "startTime": 94810,
            "endTime": 95080,
            "data": "lại"
          },
          {
            "startTime": 95080,
            "endTime": 95340,
            "data": "thân"
          },
          {
            "startTime": 95340,
            "endTime": 95340,
            "data": "mình"
          },
          {
            "startTime": 95340,
            "endTime": 95610,
            "data": "va"
          },
          {
            "startTime": 95610,
            "endTime": 95920,
            "data": "vào"
          },
          {
            "startTime": 95920,
            "endTime": 96450,
            "data": "nhau"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 96450,
            "endTime": 96710,
            "data": "Mau"
          },
          {
            "startTime": 96710,
            "endTime": 96970,
            "data": "đốt"
          },
          {
            "startTime": 96970,
            "endTime": 97250,
            "data": "trụi"
          },
          {
            "startTime": 97250,
            "endTime": 97510,
            "data": "bao"
          },
          {
            "startTime": 97510,
            "endTime": 97770,
            "data": "khổ"
          },
          {
            "startTime": 97770,
            "endTime": 98040,
            "data": "đau"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 98040,
            "endTime": 98310,
            "data": "Người"
          },
          {
            "startTime": 98310,
            "endTime": 98570,
            "data": "đừng"
          },
          {
            "startTime": 98570,
            "endTime": 98840,
            "data": "nói"
          },
          {
            "startTime": 98840,
            "endTime": 98840,
            "data": "hãy"
          },
          {
            "startTime": 98840,
            "endTime": 99110,
            "data": "ôm"
          },
          {
            "startTime": 99110,
            "endTime": 99360,
            "data": "thật"
          },
          {
            "startTime": 99360,
            "endTime": 99640,
            "data": "lâu"
          },
          {
            "startTime": 99640,
            "endTime": 100160,
            "data": "bae"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 100160,
            "endTime": 100430,
            "data": "Đến"
          },
          {
            "startTime": 100430,
            "endTime": 100700,
            "data": "khi"
          },
          {
            "startTime": 100700,
            "endTime": 100960,
            "data": "nắng"
          },
          {
            "startTime": 100960,
            "endTime": 100960,
            "data": "không"
          },
          {
            "startTime": 100960,
            "endTime": 102030,
            "data": "màu"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 102030,
            "endTime": 102290,
            "data": "I'm"
          },
          {
            "startTime": 102290,
            "endTime": 102290,
            "data": "doing"
          },
          {
            "startTime": 102290,
            "endTime": 102820,
            "data": "things"
          },
          {
            "startTime": 102820,
            "endTime": 104470,
            "data": "slowly"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 104470,
            "endTime": 104730,
            "data": "Đôi"
          },
          {
            "startTime": 104730,
            "endTime": 104990,
            "data": "khi"
          },
          {
            "startTime": 104990,
            "endTime": 104990,
            "data": "ta"
          },
          {
            "startTime": 104990,
            "endTime": 105260,
            "data": "cứ"
          },
          {
            "startTime": 105260,
            "endTime": 105790,
            "data": "thế"
          },
          {
            "startTime": 105790,
            "endTime": 106060,
            "data": "chẳng"
          },
          {
            "startTime": 106060,
            "endTime": 106320,
            "data": "bước"
          },
          {
            "startTime": 106320,
            "endTime": 108000,
            "data": "đi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 108000,
            "endTime": 108000,
            "data": "Đôi"
          },
          {
            "startTime": 108000,
            "endTime": 108260,
            "data": "khi"
          },
          {
            "startTime": 108260,
            "endTime": 108520,
            "data": "ta"
          },
          {
            "startTime": 108520,
            "endTime": 108800,
            "data": "cứ"
          },
          {
            "startTime": 108800,
            "endTime": 111800,
            "data": "thế"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 121990,
            "endTime": 122260,
            "data": "Cuốn"
          },
          {
            "startTime": 122260,
            "endTime": 122260,
            "data": "không"
          },
          {
            "startTime": 122260,
            "endTime": 122530,
            "data": "gian"
          },
          {
            "startTime": 122530,
            "endTime": 122530,
            "data": "lại"
          },
          {
            "startTime": 122530,
            "endTime": 122790,
            "data": "thân"
          },
          {
            "startTime": 122790,
            "endTime": 123060,
            "data": "mình"
          },
          {
            "startTime": 123060,
            "endTime": 123060,
            "data": "va"
          },
          {
            "startTime": 123060,
            "endTime": 123320,
            "data": "vào"
          },
          {
            "startTime": 123320,
            "endTime": 123700,
            "data": "nhau"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 123700,
            "endTime": 124220,
            "data": "Mau"
          },
          {
            "startTime": 124220,
            "endTime": 124490,
            "data": "đốt"
          },
          {
            "startTime": 124490,
            "endTime": 124490,
            "data": "trụi"
          },
          {
            "startTime": 124490,
            "endTime": 124740,
            "data": "bao"
          },
          {
            "startTime": 124740,
            "endTime": 125020,
            "data": "khổ"
          },
          {
            "startTime": 125020,
            "endTime": 125540,
            "data": "đau"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 125540,
            "endTime": 125800,
            "data": "Người"
          },
          {
            "startTime": 125800,
            "endTime": 125800,
            "data": "đừng"
          },
          {
            "startTime": 125800,
            "endTime": 126080,
            "data": "nói"
          },
          {
            "startTime": 126080,
            "endTime": 126340,
            "data": "hãy"
          },
          {
            "startTime": 126340,
            "endTime": 126340,
            "data": "ôm"
          },
          {
            "startTime": 126340,
            "endTime": 126610,
            "data": "thật"
          },
          {
            "startTime": 126610,
            "endTime": 127140,
            "data": "lâu"
          },
          {
            "startTime": 127140,
            "endTime": 127680,
            "data": "bae"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 127680,
            "endTime": 127930,
            "data": "Đến"
          },
          {
            "startTime": 127930,
            "endTime": 127930,
            "data": "khi"
          },
          {
            "startTime": 127930,
            "endTime": 128190,
            "data": "nắng"
          },
          {
            "startTime": 128190,
            "endTime": 128470,
            "data": "không"
          },
          {
            "startTime": 128470,
            "endTime": 129260,
            "data": "màu"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 129260,
            "endTime": 129530,
            "data": "I'm"
          },
          {
            "startTime": 129530,
            "endTime": 129790,
            "data": "doing"
          },
          {
            "startTime": 129790,
            "endTime": 130060,
            "data": "things"
          },
          {
            "startTime": 130060,
            "endTime": 131920,
            "data": "slowly"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 131920,
            "endTime": 132190,
            "data": "Đôi"
          },
          {
            "startTime": 132190,
            "endTime": 132440,
            "data": "khi"
          },
          {
            "startTime": 132440,
            "endTime": 132440,
            "data": "ta"
          },
          {
            "startTime": 132440,
            "endTime": 132720,
            "data": "cứ"
          },
          {
            "startTime": 132720,
            "endTime": 133250,
            "data": "thế"
          },
          {
            "startTime": 133250,
            "endTime": 133250,
            "data": "chẳng"
          },
          {
            "startTime": 133250,
            "endTime": 133530,
            "data": "bước"
          },
          {
            "startTime": 133530,
            "endTime": 135390,
            "data": "đi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 135390,
            "endTime": 135390,
            "data": "Đôi"
          },
          {
            "startTime": 135390,
            "endTime": 135650,
            "data": "khi"
          },
          {
            "startTime": 135650,
            "endTime": 135910,
            "data": "ta"
          },
          {
            "startTime": 135910,
            "endTime": 136190,
            "data": "cứ"
          },
          {
            "startTime": 136190,
            "endTime": 137190,
            "data": "thế"
          }
        ]
      }
    ],
    "file": "https://static-zmp3.zmdcdn.me/lyrics/3/e/e/7/3ee7db882d78800a35989aa93070d5fc.lrc",
    "enabledVideoBG": true,
    "defaultIBGUrls": [
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/c/0/5/3c05c10ae36f6361f9af0874bb7c4851.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/b/e/0/bbe01e4bf6d8e23101fcb6db44df311d.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/1/f/3/a1f34293d1dc92735be8c3f9082c4acf.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/e/9/5/6e95b598e1e14a187ee779bcd888e75c.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/c/8/1/1c81e957a6270eba91571d822a47e7c5.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/0/0/d/000d9d0679bbbb564a191a6801d7f19d.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/6/4/f/e64f4fd6f53caebabc1c26d592093cfa.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/e/3/1/de315c40b537d40b7409a6702f446631.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/4/6/2/1462efc7378bed3f98ace411e11eab45.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/b/f/a/5bfa05533ed7975035e69a4508c82fd6.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/2/b/1/f2b1b91fa64e0c354150c86fd96c249c.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/1/f/b/51fbcd4ae32096ffe2dd89cd36bb6ed9.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/2/3/9/62392463eab1eb1aaa2d1f3bd0f758bb.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/2/f/0/12f01e12d6e13e263ef76f3fdb65d66e.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/8/2/4/8824ef8e3e3aa3e302f03879a1f9d7d3.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/4/3/4/9/43491e9d95a9942015548bd2a061250d.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/9/8/7/5/987517940ce71a96bab9c0c88d5b6b95.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/e/2/4/8e24305fde744814083af980a593e8c2.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/1/2/7/f1270dd1bed79b527228e3351d2b67ae.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/a/3/0/0a301934881ee4e2de30dc8f41bc55f9.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/c/9/f/cc9fce8719364ba9d8a846984c590a0e.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/5/d/e/e5de86acd7567465f54a6b9307076947.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/4/b/b/64bb19c5f971b4e4f16f3bfdff64a396.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/3/2/0/03206606d461843e22451747a9b60769.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/d/4/4/bd4485d6dfef80764869a4d88d9b0475.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/8/6/8/e86817d147315d9d644835f60d17ae41.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/b/4/7/bb477f2f56f162b13426f70c9858c732.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/5/3/6/c536ff6ab992e36be24ca0adf8e86ae0.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/c/f/c/6cfc1e6e3b94c62cded257659602f00b.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/2/5/d/6/25d6adaa11b4e932d61309ed635d57fa.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/2/a/e/d2ae42243ccd4fec321fc60692a5a2dc.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/8/0/e/b80e5777c7eec332c882bf79bd692056.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/7/b/a/e7ba1207018f1d2fa7048598c7d627df.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/f/4/0/3f40bd0d6d8cbcf833c72ab050f19e6a.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/d/a/d/adad060e15f8409ec2e7670cf943c202.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/d/1/7/ed17742d63b635725e6071a9bee362c5.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/a/e/8/3ae816de233a9eae0116b4b5a21af43e.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/7/f/1/d7f15e3996e7923ffc2a64d1f8e43448.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/0/7/e/007e6b48696aab4a61ca46a10d980f63.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/9/f/5/d9f592437d80e358a76e32798ce2d294.jpg"
    ],
    "BGMode": 0
  },
  "timestamp": 1694747691903
}`;
let lyric = JSON.parse(json);

const lyricSentences = [];
const LyricSentencesObj = function (startTime, stopTime, lyricSentence) {
  this.startTime = startTime;
  this.stopTime = stopTime;
  this.lyricSentence = lyricSentence;
};
for (let i = 0; i < lyric.data.sentences.length; i++) {
  let sentence = "";
  let startTime = lyric.data.sentences[i].words[0].startTime / 1000;
  let stopTime =
    lyric.data.sentences[i].words[lyric.data.sentences[i].words.length - 1]
      .endTime / 1000;
  for (let j = 0; j < lyric.data.sentences[i].words.length; j++) {
    sentence += lyric.data.sentences[i].words[j].data + " ";
  }
  let LyricItem = new LyricSentencesObj(startTime, stopTime, sentence);
  lyricSentences.push(LyricItem);
}
console.log(lyricSentences);

const loadLyric = function () {
  lyricSentences.forEach(function (item) {
    console.log(item);
  });
};

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
  console.log(audio.duration);
});
audio.addEventListener("timeupdate", function (e) {
  if (!isMountDown) {
    runTime.innerText = getSongTime(audio.currentTime);
    value = (audio.currentTime * 100) / audio.duration;
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
});
closeBtn.addEventListener("click", function () {
  karaokeLayout.classList.remove("active");
});
