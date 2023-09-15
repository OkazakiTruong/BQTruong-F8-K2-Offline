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
            "startTime": 21889,
            "endTime": 21919,
            "data": "Hôm"
          },
          {
            "startTime": 21919,
            "endTime": 21939,
            "data": "nay"
          },
          {
            "startTime": 21989,
            "endTime": 22229,
            "data": "ta"
          },
          {
            "startTime": 22229,
            "endTime": 22630,
            "data": "thức"
          },
          {
            "startTime": 22630,
            "endTime": 22949,
            "data": "dậy"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 22989,
            "endTime": 23409,
            "data": "Cũng"
          },
          {
            "startTime": 23409,
            "endTime": 23569,
            "data": "như"
          },
          {
            "startTime": 23569,
            "endTime": 24089,
            "data": "thường"
          },
          {
            "startTime": 24089,
            "endTime": 24219,
            "data": "nhật"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 26749,
            "endTime": 27070,
            "data": "Thấy"
          },
          {
            "startTime": 27070,
            "endTime": 27260,
            "data": "thanh"
          },
          {
            "startTime": 27270,
            "endTime": 27649,
            "data": "xuân"
          },
          {
            "startTime": 27649,
            "endTime": 28079,
            "data": "ngày"
          },
          {
            "startTime": 28079,
            "endTime": 28289,
            "data": "nào"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 28359,
            "endTime": 28649,
            "data": "Bỗng"
          },
          {
            "startTime": 28659,
            "endTime": 29009,
            "data": "dưng"
          },
          {
            "startTime": 29019,
            "endTime": 29169,
            "data": "trở"
          },
          {
            "startTime": 29169,
            "endTime": 29199,
            "data": "lại"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 32189,
            "endTime": 32419,
            "data": "Em"
          },
          {
            "startTime": 32419,
            "endTime": 32579,
            "data": "soi"
          },
          {
            "startTime": 32679,
            "endTime": 32939,
            "data": "gương"
          },
          {
            "startTime": 32939,
            "endTime": 33289,
            "data": "cười"
          },
          {
            "startTime": 33289,
            "endTime": 33589,
            "data": "duyên"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 33670,
            "endTime": 33989,
            "data": "Chẳng"
          },
          {
            "startTime": 33989,
            "endTime": 34299,
            "data": "còn"
          },
          {
            "startTime": 34309,
            "endTime": 34849,
            "data": "thấy"
          },
          {
            "startTime": 34879,
            "endTime": 35099,
            "data": "đâu"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 35249,
            "endTime": 35390,
            "data": "Những"
          },
          {
            "startTime": 35390,
            "endTime": 35630,
            "data": "vết"
          },
          {
            "startTime": 35919,
            "endTime": 36029,
            "data": "đồi"
          },
          {
            "startTime": 36029,
            "endTime": 36469,
            "data": "mồi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 37309,
            "endTime": 37759,
            "data": "Mặc"
          },
          {
            "startTime": 37759,
            "endTime": 37969,
            "data": "một"
          },
          {
            "startTime": 37969,
            "endTime": 38359,
            "data": "chiếc"
          },
          {
            "startTime": 38359,
            "endTime": 38559,
            "data": "váy"
          },
          {
            "startTime": 38569,
            "endTime": 39109,
            "data": "xinh"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 39020,
            "endTime": 39310,
            "data": "Ngồi"
          },
          {
            "startTime": 39319,
            "endTime": 39690,
            "data": "chờ"
          },
          {
            "startTime": 39690,
            "endTime": 40079,
            "data": "anh"
          },
          {
            "startTime": 40079,
            "endTime": 40370,
            "data": "qua"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 42209,
            "endTime": 42280,
            "data": "Anh"
          },
          {
            "startTime": 42290,
            "endTime": 42470,
            "data": "sẽ"
          },
          {
            "startTime": 42470,
            "endTime": 42549,
            "data": "đưa"
          },
          {
            "startTime": 42619,
            "endTime": 42789,
            "data": "em"
          },
          {
            "startTime": 42789,
            "endTime": 42990,
            "data": "quay"
          },
          {
            "startTime": 42990,
            "endTime": 43139,
            "data": "trở"
          },
          {
            "startTime": 43149,
            "endTime": 43479,
            "data": "về"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 43200,
            "endTime": 43280,
            "data": "Với"
          },
          {
            "startTime": 43280,
            "endTime": 43310,
            "data": "những"
          },
          {
            "startTime": 43620,
            "endTime": 43769,
            "data": "ngày"
          },
          {
            "startTime": 43899,
            "endTime": 44130,
            "data": "hôm"
          },
          {
            "startTime": 44149,
            "endTime": 44550,
            "data": "qua"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 44819,
            "endTime": 44949,
            "data": "Khi"
          },
          {
            "startTime": 44949,
            "endTime": 45099,
            "data": "mà"
          },
          {
            "startTime": 45109,
            "endTime": 45289,
            "data": "bao"
          },
          {
            "startTime": 45289,
            "endTime": 45429,
            "data": "lo"
          },
          {
            "startTime": 45429,
            "endTime": 45639,
            "data": "toan"
          },
          {
            "startTime": 45639,
            "endTime": 45819,
            "data": "bộn"
          },
          {
            "startTime": 45819,
            "endTime": 45839,
            "data": "bề"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 45989,
            "endTime": 46149,
            "data": "Vẫn"
          },
          {
            "startTime": 46149,
            "endTime": 46359,
            "data": "đang"
          },
          {
            "startTime": 46359,
            "endTime": 46369,
            "data": "ở"
          },
          {
            "startTime": 46369,
            "endTime": 46399,
            "data": "nơi"
          },
          {
            "startTime": 46729,
            "endTime": 47059,
            "data": "xa"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 47559,
            "endTime": 47619,
            "data": "Khi"
          },
          {
            "startTime": 47619,
            "endTime": 47789,
            "data": "mà"
          },
          {
            "startTime": 47799,
            "endTime": 48089,
            "data": "tuổi"
          },
          {
            "startTime": 48099,
            "endTime": 48339,
            "data": "trẻ"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 48059,
            "endTime": 48089,
            "data": "Vẫn"
          },
          {
            "startTime": 48719,
            "endTime": 48969,
            "data": "vương"
          },
          {
            "startTime": 48979,
            "endTime": 49189,
            "data": "trên"
          },
          {
            "startTime": 49189,
            "endTime": 49450,
            "data": "mái"
          },
          {
            "startTime": 49450,
            "endTime": 49480,
            "data": "tóc"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 50049,
            "endTime": 50249,
            "data": "Khi"
          },
          {
            "startTime": 50269,
            "endTime": 50429,
            "data": "mà"
          },
          {
            "startTime": 50439,
            "endTime": 50719,
            "data": "bầu"
          },
          {
            "startTime": 50729,
            "endTime": 50959,
            "data": "trời"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 51099,
            "endTime": 51329,
            "data": "Vẫn"
          },
          {
            "startTime": 51329,
            "endTime": 51589,
            "data": "một"
          },
          {
            "startTime": 51599,
            "endTime": 51709,
            "data": "vẻ"
          },
          {
            "startTime": 51739,
            "endTime": 52089,
            "data": "xanh"
          },
          {
            "startTime": 52099,
            "endTime": 52519,
            "data": "trong"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 52439,
            "endTime": 52469,
            "data": "Đời"
          },
          {
            "startTime": 52759,
            "endTime": 52929,
            "data": "vẫn"
          },
          {
            "startTime": 53079,
            "endTime": 53499,
            "data": "mênh"
          },
          {
            "startTime": 53499,
            "endTime": 53649,
            "data": "mông"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 53789,
            "endTime": 53999,
            "data": "Chân"
          },
          {
            "startTime": 54009,
            "endTime": 54279,
            "data": "ta"
          },
          {
            "startTime": 54279,
            "endTime": 54299,
            "data": "ung"
          },
          {
            "startTime": 54409,
            "endTime": 54759,
            "data": "dung"
          },
          {
            "startTime": 54759,
            "endTime": 54789,
            "data": "bước"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 55289,
            "endTime": 55439,
            "data": "Và"
          },
          {
            "startTime": 55469,
            "endTime": 55619,
            "data": "tất"
          },
          {
            "startTime": 55619,
            "endTime": 55769,
            "data": "cả"
          },
          {
            "startTime": 55779,
            "endTime": 55939,
            "data": "những"
          },
          {
            "startTime": 55939,
            "endTime": 56139,
            "data": "niềm"
          },
          {
            "startTime": 56139,
            "endTime": 56239,
            "data": "mơ"
          },
          {
            "startTime": 56239,
            "endTime": 56299,
            "data": "ước"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 56399,
            "endTime": 56550,
            "data": "Phía"
          },
          {
            "startTime": 56559,
            "endTime": 56859,
            "data": "trước"
          },
          {
            "startTime": 56859,
            "endTime": 57049,
            "data": "chẳng"
          },
          {
            "startTime": 57129,
            "endTime": 57369,
            "data": "cách"
          },
          {
            "startTime": 57379,
            "endTime": 57769,
            "data": "xa"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 57599,
            "endTime": 57630,
            "data": "Lại"
          },
          {
            "startTime": 58049,
            "endTime": 58259,
            "data": "chỉ"
          },
          {
            "startTime": 58259,
            "endTime": 58409,
            "data": "có"
          },
          {
            "startTime": 58439,
            "endTime": 58779,
            "data": "đôi"
          },
          {
            "startTime": 58779,
            "endTime": 59119,
            "data": "ta"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 60449,
            "endTime": 60569,
            "data": "Những"
          },
          {
            "startTime": 60569,
            "endTime": 60599,
            "data": "ngày"
          },
          {
            "startTime": 60599,
            "endTime": 60619,
            "data": "chỉ"
          },
          {
            "startTime": 60909,
            "endTime": 61089,
            "data": "có"
          },
          {
            "startTime": 61109,
            "endTime": 61349,
            "data": "đôi"
          },
          {
            "startTime": 61349,
            "endTime": 61369,
            "data": "ta"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 64190,
            "endTime": 64209,
            "data": "Đưa"
          },
          {
            "startTime": 64359,
            "endTime": 64639,
            "data": "em"
          },
          {
            "startTime": 64669,
            "endTime": 64959,
            "data": "về"
          },
          {
            "startTime": 64959,
            "endTime": 65149,
            "data": "thanh"
          },
          {
            "startTime": 65239,
            "endTime": 65610,
            "data": "xuân"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 66610,
            "endTime": 66790,
            "data": "Về"
          },
          {
            "startTime": 66790,
            "endTime": 67080,
            "data": "những"
          },
          {
            "startTime": 67080,
            "endTime": 67340,
            "data": "dấu"
          },
          {
            "startTime": 67350,
            "endTime": 67600,
            "data": "yêu"
          },
          {
            "startTime": 67660,
            "endTime": 68020,
            "data": "ban"
          },
          {
            "startTime": 68020,
            "endTime": 68209,
            "data": "đầu"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 69479,
            "endTime": 69569,
            "data": "Những"
          },
          {
            "startTime": 69759,
            "endTime": 70179,
            "data": "lo"
          },
          {
            "startTime": 70179,
            "endTime": 70199,
            "data": "âu"
          },
          {
            "startTime": 70389,
            "endTime": 70550,
            "data": "cứ"
          },
          {
            "startTime": 70640,
            "endTime": 71050,
            "data": "thế"
          },
          {
            "startTime": 71500,
            "endTime": 71530,
            "data": "hững"
          },
          {
            "startTime": 71530,
            "endTime": 71550,
            "data": "hờ"
          },
          {
            "startTime": 71700,
            "endTime": 71959,
            "data": "qua"
          },
          {
            "startTime": 71959,
            "endTime": 72039,
            "data": "tay"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 74839,
            "endTime": 75069,
            "data": "Ta"
          },
          {
            "startTime": 75069,
            "endTime": 75309,
            "data": "thêm"
          },
          {
            "startTime": 75319,
            "endTime": 75669,
            "data": "lần"
          },
          {
            "startTime": 75669,
            "endTime": 76029,
            "data": "đôi"
          },
          {
            "startTime": 76029,
            "endTime": 76249,
            "data": "mươi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 77290,
            "endTime": 77450,
            "data": "Và"
          },
          {
            "startTime": 77450,
            "endTime": 77750,
            "data": "những"
          },
          {
            "startTime": 77750,
            "endTime": 77860,
            "data": "ước"
          },
          {
            "startTime": 77970,
            "endTime": 78340,
            "data": "ao"
          },
          {
            "startTime": 78340,
            "endTime": 78360,
            "data": "đã"
          },
          {
            "startTime": 78780,
            "endTime": 79280,
            "data": "từng"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 80179,
            "endTime": 80400,
            "data": "Ở"
          },
          {
            "startTime": 80410,
            "endTime": 80670,
            "data": "một"
          },
          {
            "startTime": 80670,
            "endTime": 80949,
            "data": "tầng"
          },
          {
            "startTime": 80949,
            "endTime": 81350,
            "data": "mây"
          },
          {
            "startTime": 81350,
            "endTime": 81420,
            "data": "khác"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 81740,
            "endTime": 82210,
            "data": "Riêng"
          },
          {
            "startTime": 82210,
            "endTime": 82470,
            "data": "hai"
          },
          {
            "startTime": 82470,
            "endTime": 82710,
            "data": "chúng"
          },
          {
            "startTime": 82710,
            "endTime": 83019,
            "data": "ta"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 84819,
            "endTime": 84979,
            "data": "Thời"
          },
          {
            "startTime": 85000,
            "endTime": 85280,
            "data": "gian"
          },
          {
            "startTime": 85280,
            "endTime": 85519,
            "data": "cứ"
          },
          {
            "startTime": 85519,
            "endTime": 85699,
            "data": "thế"
          },
          {
            "startTime": 86200,
            "endTime": 86710,
            "data": "nhẹ"
          },
          {
            "startTime": 86749,
            "endTime": 87229,
            "data": "trôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 87530,
            "endTime": 87629,
            "data": "Dẫu"
          },
          {
            "startTime": 87789,
            "endTime": 88010,
            "data": "em"
          },
          {
            "startTime": 88010,
            "endTime": 88209,
            "data": "vài"
          },
          {
            "startTime": 88229,
            "endTime": 88529,
            "data": "lần"
          },
          {
            "startTime": 88529,
            "endTime": 88659,
            "data": "luyến"
          },
          {
            "startTime": 88819,
            "endTime": 89149,
            "data": "tiếc"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 90179,
            "endTime": 90339,
            "data": "Màn"
          },
          {
            "startTime": 90379,
            "endTime": 90679,
            "data": "đêm"
          },
          {
            "startTime": 90679,
            "endTime": 90779,
            "data": "kéo"
          },
          {
            "startTime": 90929,
            "endTime": 91109,
            "data": "những"
          },
          {
            "startTime": 91989,
            "endTime": 92219,
            "data": "mộng"
          },
          {
            "startTime": 92379,
            "endTime": 92560,
            "data": "mơ"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 92819,
            "endTime": 93099,
            "data": "Níu"
          },
          {
            "startTime": 93109,
            "endTime": 93299,
            "data": "anh"
          },
          {
            "startTime": 93299,
            "endTime": 93430,
            "data": "vào"
          },
          {
            "startTime": 93440,
            "endTime": 93810,
            "data": "sâu"
          },
          {
            "startTime": 93810,
            "endTime": 94060,
            "data": "mắt"
          },
          {
            "startTime": 94130,
            "endTime": 94950,
            "data": "em"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 95510,
            "endTime": 95599,
            "data": "Chặng"
          },
          {
            "startTime": 95710,
            "endTime": 95939,
            "data": "đường"
          },
          {
            "startTime": 95949,
            "endTime": 96229,
            "data": "ta"
          },
          {
            "startTime": 96229,
            "endTime": 96779,
            "data": "bước"
          },
          {
            "startTime": 96779,
            "endTime": 97439,
            "data": "cùng"
          },
          {
            "startTime": 97449,
            "endTime": 97889,
            "data": "nhau"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 98189,
            "endTime": 98239,
            "data": "Như"
          },
          {
            "startTime": 98429,
            "endTime": 98869,
            "data": "thước"
          },
          {
            "startTime": 98869,
            "endTime": 99119,
            "data": "phim"
          },
          {
            "startTime": 99119,
            "endTime": 99310,
            "data": "lưu"
          },
          {
            "startTime": 99320,
            "endTime": 99680,
            "data": "trong"
          },
          {
            "startTime": 99690,
            "endTime": 100149,
            "data": "ký"
          },
          {
            "startTime": 100389,
            "endTime": 100539,
            "data": "ức"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 100790,
            "endTime": 100999,
            "data": "Cả"
          },
          {
            "startTime": 100999,
            "endTime": 101350,
            "data": "thanh"
          },
          {
            "startTime": 101350,
            "endTime": 101960,
            "data": "xuân"
          },
          {
            "startTime": 102190,
            "endTime": 102410,
            "data": "ta"
          },
          {
            "startTime": 102410,
            "endTime": 102670,
            "data": "đã"
          },
          {
            "startTime": 102670,
            "endTime": 103120,
            "data": "dành"
          },
          {
            "startTime": 103540,
            "endTime": 104040,
            "data": "cho"
          },
          {
            "startTime": 104040,
            "endTime": 104080,
            "data": "nhau"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 106469,
            "endTime": 106790,
            "data": "Anh"
          },
          {
            "startTime": 106790,
            "endTime": 106819,
            "data": "vẫn"
          },
          {
            "startTime": 106829,
            "endTime": 107129,
            "data": "sẽ"
          },
          {
            "startTime": 107129,
            "endTime": 107149,
            "data": "đưa"
          },
          {
            "startTime": 107159,
            "endTime": 107339,
            "data": "tay"
          },
          {
            "startTime": 107489,
            "endTime": 107609,
            "data": "về"
          },
          {
            "startTime": 107939,
            "endTime": 107959,
            "data": "phía"
          },
          {
            "startTime": 107959,
            "endTime": 107979,
            "data": "em"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 107790,
            "endTime": 107949,
            "data": "Chẳng"
          },
          {
            "startTime": 107959,
            "endTime": 108139,
            "data": "chờ"
          },
          {
            "startTime": 108139,
            "endTime": 108419,
            "data": "đợi"
          },
          {
            "startTime": 108429,
            "endTime": 108699,
            "data": "điều"
          },
          {
            "startTime": 108699,
            "endTime": 109019,
            "data": "gì"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 109010,
            "endTime": 109029,
            "data": "Và"
          },
          {
            "startTime": 109079,
            "endTime": 109310,
            "data": "anh"
          },
          {
            "startTime": 109310,
            "endTime": 109419,
            "data": "vẫn"
          },
          {
            "startTime": 109429,
            "endTime": 109649,
            "data": "sẽ"
          },
          {
            "startTime": 109649,
            "endTime": 109769,
            "data": "đạp"
          },
          {
            "startTime": 109769,
            "endTime": 109959,
            "data": "xe"
          },
          {
            "startTime": 109959,
            "endTime": 109989,
            "data": "theo"
          },
          {
            "startTime": 110019,
            "endTime": 110359,
            "data": "em"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 110310,
            "endTime": 110479,
            "data": "Vu"
          },
          {
            "startTime": 110479,
            "endTime": 110499,
            "data": "vơ"
          },
          {
            "startTime": 110599,
            "endTime": 110789,
            "data": "như"
          },
          {
            "startTime": 110789,
            "endTime": 111019,
            "data": "xưa"
          },
          {
            "startTime": 111019,
            "endTime": 111359,
            "data": "nhiều"
          },
          {
            "startTime": 111359,
            "endTime": 111759,
            "data": "khi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 111749,
            "endTime": 112139,
            "data": "Bó"
          },
          {
            "startTime": 112139,
            "endTime": 112169,
            "data": "hoa"
          },
          {
            "startTime": 112169,
            "endTime": 112419,
            "data": "cài"
          },
          {
            "startTime": 112419,
            "endTime": 112669,
            "data": "bên"
          },
          {
            "startTime": 112669,
            "endTime": 112949,
            "data": "cửa"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 113149,
            "endTime": 113309,
            "data": "Vẫn"
          },
          {
            "startTime": 113309,
            "endTime": 113529,
            "data": "không"
          },
          {
            "startTime": 113529,
            "endTime": 113749,
            "data": "lời"
          },
          {
            "startTime": 113749,
            "endTime": 114069,
            "data": "nhắn"
          },
          {
            "startTime": 114069,
            "endTime": 114189,
            "data": "gửi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 114459,
            "endTime": 114660,
            "data": "Dành"
          },
          {
            "startTime": 114660,
            "endTime": 114780,
            "data": "trao"
          },
          {
            "startTime": 114790,
            "endTime": 114970,
            "data": "em"
          },
          {
            "startTime": 115500,
            "endTime": 115630,
            "data": "cả"
          },
          {
            "startTime": 115720,
            "endTime": 115750,
            "data": "nước"
          },
          {
            "startTime": 115750,
            "endTime": 115780,
            "data": "mắt"
          },
          {
            "startTime": 115780,
            "endTime": 115809,
            "data": "đắng"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 115609,
            "endTime": 115789,
            "data": "Bên"
          },
          {
            "startTime": 115789,
            "endTime": 115919,
            "data": "cạnh"
          },
          {
            "startTime": 116009,
            "endTime": 116089,
            "data": "kia"
          },
          {
            "startTime": 116169,
            "endTime": 116389,
            "data": "những"
          },
          {
            "startTime": 116389,
            "endTime": 116409,
            "data": "nụ"
          },
          {
            "startTime": 116659,
            "endTime": 116989,
            "data": "cười"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 117180,
            "endTime": 117319,
            "data": "Ba"
          },
          {
            "startTime": 117319,
            "endTime": 117409,
            "data": "mươi"
          },
          {
            "startTime": 117469,
            "endTime": 117659,
            "data": "năm"
          },
          {
            "startTime": 118039,
            "endTime": 118069,
            "data": "trong"
          },
          {
            "startTime": 118069,
            "endTime": 118099,
            "data": "đời"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 117929,
            "endTime": 118179,
            "data": "Từng"
          },
          {
            "startTime": 118569,
            "endTime": 118599,
            "data": "ngậm"
          },
          {
            "startTime": 118599,
            "endTime": 118629,
            "data": "ngùi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 118459,
            "endTime": 118599,
            "data": "Bao"
          },
          {
            "startTime": 118599,
            "endTime": 118729,
            "data": "nhiêu"
          },
          {
            "startTime": 118729,
            "endTime": 118779,
            "data": "điều"
          },
          {
            "startTime": 119099,
            "endTime": 119429,
            "data": "tiếc"
          },
          {
            "startTime": 119429,
            "endTime": 119689,
            "data": "nuối"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 119629,
            "endTime": 119839,
            "data": "Nhưng"
          },
          {
            "startTime": 119839,
            "endTime": 119909,
            "data": "nếu"
          },
          {
            "startTime": 119909,
            "endTime": 119939,
            "data": "một"
          },
          {
            "startTime": 120069,
            "endTime": 120339,
            "data": "lần"
          },
          {
            "startTime": 120339,
            "endTime": 120419,
            "data": "quay"
          },
          {
            "startTime": 120419,
            "endTime": 120579,
            "data": "lại"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 120620,
            "endTime": 120769,
            "data": "Vẫn"
          },
          {
            "startTime": 120779,
            "endTime": 120949,
            "data": "chọn"
          },
          {
            "startTime": 120959,
            "endTime": 121099,
            "data": "cầm"
          },
          {
            "startTime": 121099,
            "endTime": 121139,
            "data": "chặt"
          },
          {
            "startTime": 121299,
            "endTime": 121369,
            "data": "tay"
          },
          {
            "startTime": 121449,
            "endTime": 121759,
            "data": "em"
          },
          {
            "startTime": 121759,
            "endTime": 121999,
            "data": "đến"
          },
          {
            "startTime": 121999,
            "endTime": 122310,
            "data": "cuối"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 122449,
            "endTime": 122719,
            "data": "Cùng"
          },
          {
            "startTime": 122729,
            "endTime": 123039,
            "data": "viết"
          },
          {
            "startTime": 123039,
            "endTime": 123069,
            "data": "lên"
          },
          {
            "startTime": 123069,
            "endTime": 123209,
            "data": "chuyện"
          },
          {
            "startTime": 123209,
            "endTime": 123279,
            "data": "đời"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 123139,
            "endTime": 123459,
            "data": "Đến"
          },
          {
            "startTime": 123469,
            "endTime": 123789,
            "data": "khi"
          },
          {
            "startTime": 123789,
            "endTime": 123809,
            "data": "chỉ"
          },
          {
            "startTime": 123809,
            "endTime": 123969,
            "data": "còn"
          },
          {
            "startTime": 123969,
            "endTime": 124180,
            "data": "một"
          },
          {
            "startTime": 124180,
            "endTime": 124390,
            "data": "điều"
          },
          {
            "startTime": 124390,
            "endTime": 124619,
            "data": "để"
          },
          {
            "startTime": 124619,
            "endTime": 125049,
            "data": "nói"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 125129,
            "endTime": 125469,
            "data": "Yes"
          },
          {
            "startTime": 125469,
            "endTime": 125479,
            "data": "I"
          },
          {
            "startTime": 125639,
            "endTime": 125889,
            "data": "love"
          },
          {
            "startTime": 125899,
            "endTime": 126179,
            "data": "you"
          },
          {
            "startTime": 126179,
            "endTime": 126219,
            "data": "baby"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 127679,
            "endTime": 127819,
            "data": "Bình"
          },
          {
            "startTime": 127829,
            "endTime": 127980,
            "data": "yên"
          },
          {
            "startTime": 128119,
            "endTime": 128490,
            "data": "ghé"
          },
          {
            "startTime": 128789,
            "endTime": 129089,
            "data": "thăm"
          },
          {
            "startTime": 129089,
            "endTime": 129429,
            "data": "chiều"
          },
          {
            "startTime": 129429,
            "endTime": 129919,
            "data": "nay"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 130139,
            "endTime": 130379,
            "data": "Tuổi"
          },
          {
            "startTime": 130389,
            "endTime": 130679,
            "data": "thanh"
          },
          {
            "startTime": 130679,
            "endTime": 131169,
            "data": "xuân"
          },
          {
            "startTime": 131520,
            "endTime": 131730,
            "data": "tô"
          },
          {
            "startTime": 131730,
            "endTime": 132090,
            "data": "trời"
          },
          {
            "startTime": 132090,
            "endTime": 132499,
            "data": "mây"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 132829,
            "endTime": 133129,
            "data": "Buộc"
          },
          {
            "startTime": 133129,
            "endTime": 133389,
            "data": "tia"
          },
          {
            "startTime": 133449,
            "endTime": 133859,
            "data": "nắng"
          },
          {
            "startTime": 134169,
            "endTime": 134439,
            "data": "anh"
          },
          {
            "startTime": 134439,
            "endTime": 134699,
            "data": "nhẹ"
          },
          {
            "startTime": 134699,
            "endTime": 134949,
            "data": "mang"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 135090,
            "endTime": 135349,
            "data": "Vào"
          },
          {
            "startTime": 135359,
            "endTime": 135849,
            "data": "trong"
          },
          {
            "startTime": 136070,
            "endTime": 136139,
            "data": "lá"
          },
          {
            "startTime": 136139,
            "endTime": 136439,
            "data": "thư"
          },
          {
            "startTime": 137189,
            "endTime": 137749,
            "data": "tay"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 138209,
            "endTime": 138239,
            "data": "Những"
          },
          {
            "startTime": 138239,
            "endTime": 138259,
            "data": "bỡ"
          },
          {
            "startTime": 138709,
            "endTime": 138939,
            "data": "ngỡ"
          },
          {
            "startTime": 139479,
            "endTime": 139760,
            "data": "trao"
          },
          {
            "startTime": 139769,
            "endTime": 140049,
            "data": "về"
          },
          {
            "startTime": 140049,
            "endTime": 140249,
            "data": "nhau"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 140869,
            "endTime": 141149,
            "data": "Giọt"
          },
          {
            "startTime": 141149,
            "endTime": 141399,
            "data": "nước"
          },
          {
            "startTime": 141409,
            "endTime": 141820,
            "data": "mắt"
          },
          {
            "startTime": 141820,
            "endTime": 142130,
            "data": "đôi"
          },
          {
            "startTime": 142130,
            "endTime": 142420,
            "data": "tay"
          },
          {
            "startTime": 142430,
            "endTime": 142720,
            "data": "khẽ"
          },
          {
            "startTime": 142720,
            "endTime": 143370,
            "data": "lau"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 144159,
            "endTime": 144269,
            "data": "Cho"
          },
          {
            "startTime": 144269,
            "endTime": 144299,
            "data": "vụng"
          },
          {
            "startTime": 144709,
            "endTime": 144889,
            "data": "về"
          },
          {
            "startTime": 144939,
            "endTime": 145320,
            "data": "trao"
          },
          {
            "startTime": 145369,
            "endTime": 145820,
            "data": "ta"
          },
          {
            "startTime": 146260,
            "endTime": 146389,
            "data": "những"
          },
          {
            "startTime": 146389,
            "endTime": 146729,
            "data": "lần"
          },
          {
            "startTime": 146729,
            "endTime": 147239,
            "data": "đầu"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 149609,
            "endTime": 149629,
            "data": "Đưa"
          },
          {
            "startTime": 149629,
            "endTime": 149649,
            "data": "em"
          },
          {
            "startTime": 149979,
            "endTime": 150299,
            "data": "về"
          },
          {
            "startTime": 150299,
            "endTime": 150599,
            "data": "thanh"
          },
          {
            "startTime": 150609,
            "endTime": 151109,
            "data": "xuân"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 151960,
            "endTime": 152119,
            "data": "Về"
          },
          {
            "startTime": 152119,
            "endTime": 152389,
            "data": "những"
          },
          {
            "startTime": 152399,
            "endTime": 152660,
            "data": "dấu"
          },
          {
            "startTime": 152669,
            "endTime": 152900,
            "data": "yêu"
          },
          {
            "startTime": 152959,
            "endTime": 153349,
            "data": "ban"
          },
          {
            "startTime": 153349,
            "endTime": 153889,
            "data": "đầu"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 154799,
            "endTime": 155139,
            "data": "Những"
          },
          {
            "startTime": 155139,
            "endTime": 155529,
            "data": "lo"
          },
          {
            "startTime": 155529,
            "endTime": 155549,
            "data": "âu"
          },
          {
            "startTime": 155619,
            "endTime": 155840,
            "data": "cứ"
          },
          {
            "startTime": 155940,
            "endTime": 156340,
            "data": "thế"
          },
          {
            "startTime": 156659,
            "endTime": 156789,
            "data": "hững"
          },
          {
            "startTime": 156789,
            "endTime": 156809,
            "data": "hờ"
          },
          {
            "startTime": 156809,
            "endTime": 156849,
            "data": "qua"
          },
          {
            "startTime": 157289,
            "endTime": 157619,
            "data": "tay"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 160139,
            "endTime": 160389,
            "data": "Ta"
          },
          {
            "startTime": 160389,
            "endTime": 160529,
            "data": "thêm"
          },
          {
            "startTime": 160549,
            "endTime": 160979,
            "data": "lần"
          },
          {
            "startTime": 160979,
            "endTime": 161350,
            "data": "đôi"
          },
          {
            "startTime": 161350,
            "endTime": 161600,
            "data": "mươi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 162619,
            "endTime": 162769,
            "data": "Và"
          },
          {
            "startTime": 162769,
            "endTime": 163049,
            "data": "những"
          },
          {
            "startTime": 163049,
            "endTime": 163069,
            "data": "ước"
          },
          {
            "startTime": 163320,
            "endTime": 163570,
            "data": "ao"
          },
          {
            "startTime": 165149,
            "endTime": 165169,
            "data": "đã"
          },
          {
            "startTime": 165169,
            "endTime": 165199,
            "data": "từng"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 165510,
            "endTime": 165729,
            "data": "Ở"
          },
          {
            "startTime": 165729,
            "endTime": 166019,
            "data": "một"
          },
          {
            "startTime": 166019,
            "endTime": 166289,
            "data": "tầng"
          },
          {
            "startTime": 166289,
            "endTime": 166690,
            "data": "mây"
          },
          {
            "startTime": 166690,
            "endTime": 166819,
            "data": "khác"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 167079,
            "endTime": 167450,
            "data": "Riêng"
          },
          {
            "startTime": 167469,
            "endTime": 167739,
            "data": "hai"
          },
          {
            "startTime": 167749,
            "endTime": 168019,
            "data": "chúng"
          },
          {
            "startTime": 168019,
            "endTime": 168429,
            "data": "ta"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 170769,
            "endTime": 170919,
            "data": "Đưa"
          },
          {
            "startTime": 170929,
            "endTime": 171349,
            "data": "em"
          },
          {
            "startTime": 171349,
            "endTime": 171599,
            "data": "về"
          },
          {
            "startTime": 171609,
            "endTime": 171839,
            "data": "thanh"
          },
          {
            "startTime": 171889,
            "endTime": 172119,
            "data": "xuân"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 173369,
            "endTime": 173479,
            "data": "Về"
          },
          {
            "startTime": 173479,
            "endTime": 173729,
            "data": "những"
          },
          {
            "startTime": 173729,
            "endTime": 173979,
            "data": "dấu"
          },
          {
            "startTime": 173989,
            "endTime": 174259,
            "data": "yêu"
          },
          {
            "startTime": 174299,
            "endTime": 174499,
            "data": "ban"
          },
          {
            "startTime": 174699,
            "endTime": 174839,
            "data": "đầu"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 176129,
            "endTime": 176219,
            "data": "Những"
          },
          {
            "startTime": 176439,
            "endTime": 176910,
            "data": "lo"
          },
          {
            "startTime": 176910,
            "endTime": 176929,
            "data": "âu"
          },
          {
            "startTime": 176969,
            "endTime": 177170,
            "data": "cứ"
          },
          {
            "startTime": 178150,
            "endTime": 178249,
            "data": "thế"
          },
          {
            "startTime": 178619,
            "endTime": 178649,
            "data": "hững"
          },
          {
            "startTime": 178649,
            "endTime": 178669,
            "data": "hờ"
          },
          {
            "startTime": 178749,
            "endTime": 178979,
            "data": "qua"
          },
          {
            "startTime": 178979,
            "endTime": 179269,
            "data": "tay"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 181489,
            "endTime": 181759,
            "data": "Ta"
          },
          {
            "startTime": 181759,
            "endTime": 181999,
            "data": "thêm"
          },
          {
            "startTime": 181999,
            "endTime": 182209,
            "data": "lần"
          },
          {
            "startTime": 182319,
            "endTime": 182659,
            "data": "đôi"
          },
          {
            "startTime": 182659,
            "endTime": 183139,
            "data": "mươi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 183939,
            "endTime": 184089,
            "data": "Và"
          },
          {
            "startTime": 184099,
            "endTime": 184400,
            "data": "những"
          },
          {
            "startTime": 184459,
            "endTime": 184669,
            "data": "ước"
          },
          {
            "startTime": 184679,
            "endTime": 184910,
            "data": "ao"
          },
          {
            "startTime": 186469,
            "endTime": 186489,
            "data": "đã"
          },
          {
            "startTime": 186489,
            "endTime": 186519,
            "data": "từng"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 186840,
            "endTime": 187059,
            "data": "Ở"
          },
          {
            "startTime": 187059,
            "endTime": 187349,
            "data": "một"
          },
          {
            "startTime": 187349,
            "endTime": 187619,
            "data": "tầng"
          },
          {
            "startTime": 187619,
            "endTime": 188039,
            "data": "mây"
          },
          {
            "startTime": 188860,
            "endTime": 188900,
            "data": "khác"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 188700,
            "endTime": 189020,
            "data": "Riêng"
          },
          {
            "startTime": 189210,
            "endTime": 189409,
            "data": "hai"
          },
          {
            "startTime": 189409,
            "endTime": 189530,
            "data": "chúng"
          },
          {
            "startTime": 189530,
            "endTime": 189549,
            "data": "ta"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 192369,
            "endTime": 192429,
            "data": "Hôm"
          },
          {
            "startTime": 192440,
            "endTime": 192520,
            "data": "nay"
          },
          {
            "startTime": 192649,
            "endTime": 192999,
            "data": "ta"
          },
          {
            "startTime": 192999,
            "endTime": 193340,
            "data": "thức"
          },
          {
            "startTime": 193340,
            "endTime": 193629,
            "data": "dậy"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 193849,
            "endTime": 194089,
            "data": "Cũng"
          },
          {
            "startTime": 194089,
            "endTime": 194240,
            "data": "như"
          },
          {
            "startTime": 194879,
            "endTime": 194970,
            "data": "thường"
          },
          {
            "startTime": 194970,
            "endTime": 195080,
            "data": "nhật"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 197570,
            "endTime": 197810,
            "data": "Thấy"
          },
          {
            "startTime": 197810,
            "endTime": 197940,
            "data": "thanh"
          },
          {
            "startTime": 197960,
            "endTime": 198219,
            "data": "xuân"
          },
          {
            "startTime": 198709,
            "endTime": 198799,
            "data": "ngày"
          },
          {
            "startTime": 198799,
            "endTime": 198829,
            "data": "nào"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 199559,
            "endTime": 199719,
            "data": "Bỗng"
          },
          {
            "startTime": 199759,
            "endTime": 200059,
            "data": "dưng"
          },
          {
            "startTime": 200069,
            "endTime": 200579,
            "data": "trở"
          },
          {
            "startTime": 200579,
            "endTime": 200609,
            "data": "lại"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 203019,
            "endTime": 203199,
            "data": "Em"
          },
          {
            "startTime": 203199,
            "endTime": 203389,
            "data": "soi"
          },
          {
            "startTime": 203629,
            "endTime": 203739,
            "data": "gương"
          },
          {
            "startTime": 203739,
            "endTime": 203959,
            "data": "cười"
          },
          {
            "startTime": 204059,
            "endTime": 204400,
            "data": "duyên"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 204519,
            "endTime": 204840,
            "data": "Chẳng"
          },
          {
            "startTime": 204849,
            "endTime": 205030,
            "data": "còn"
          },
          {
            "startTime": 205260,
            "endTime": 205939,
            "data": "thấy"
          },
          {
            "startTime": 205949,
            "endTime": 206400,
            "data": "đâu"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 206290,
            "endTime": 206319,
            "data": "Những"
          },
          {
            "startTime": 206459,
            "endTime": 206709,
            "data": "vết"
          },
          {
            "startTime": 206939,
            "endTime": 207049,
            "data": "đồi"
          },
          {
            "startTime": 207049,
            "endTime": 207299,
            "data": "mồi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 208189,
            "endTime": 208659,
            "data": "Mặc"
          },
          {
            "startTime": 208659,
            "endTime": 208689,
            "data": "một"
          },
          {
            "startTime": 208699,
            "endTime": 209049,
            "data": "chiếc"
          },
          {
            "startTime": 209049,
            "endTime": 209319,
            "data": "váy"
          },
          {
            "startTime": 209329,
            "endTime": 209829,
            "data": "xinh"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 210689,
            "endTime": 210719,
            "data": "Ngồi"
          },
          {
            "startTime": 211119,
            "endTime": 211340,
            "data": "chờ"
          },
          {
            "startTime": 211369,
            "endTime": 211709,
            "data": "anh"
          },
          {
            "startTime": 212669,
            "endTime": 212689,
            "data": "về"
          }
        ]
      }
    ],
    "file": "https://static-zmp3.zmdcdn.me/lyrics/c/5/6/8/c568985d31631cfe24c2d36e089aaa86.lrc",
    "beat": "https://mcloud-bf-s9-audio-zmp3.zmdcdn.me/b66g1nmFNVM/c25f5bad17e2febca7f3/37858d271a61f33faa70/96/accompaniment.m4a?authen=exp=1694945386~acl=/b66g1nmFNVM/*~hmac=99e647d01f09defd4cf9af3822761385",
    "enabledVideoBG": true,
    "streamingUrl": "https://mcloud-bf-s7-mv-zmp3.zmdcdn.me/OAa57uPhIl0/80fb5251c4152d4b7404/6038c347c2022b5c7213/1080/Thanh-Xuan.mp4?authen=exp=1694953550~acl=/OAa57uPhIl0/*~hmac=a96b5dad6894a64339253ca165245175",
    "defaultIBGUrls": [
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/2/b/6/d/2b6d42c84a31bdf884ba2400a993ec44.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/6/5/9/3659c15496eccc463d55660ad1fc0a4a.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/0/b/8/30b8a653a0416eba61f08a92e6f994cc.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/2/9/e/e/29ee66c582128a583d38cfc7a6ef37bd.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/b/1/7/cb17ce4585b0a65377787b06006744d7.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/4/3/c/2/43c23c9ef853539504cf96a70aecf231.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/6/6/4/f664360fa6303d2ccf31d773821e1bb4.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/0/0/9/a0091e927022e64f5b3352eb03007d10.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/c/9/7/3c97a9e39977ec349309f230ec0042ed.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/c/d/2/3cd27fa7e14f206234c0366e6ca0f076.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/9/2/d/1/92d1d10e51f52480ff524b1d368141ea.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/8/b/a/18ba461bddaa78421ffafa0b11a2afc6.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/8/3/c/e83c1224eec3ab7e09d42a439943fe30.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/3/f/8/e3f8293e94fb9817a6e0425bd5a097c1.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/4/0/5/040563d78ea9153bfc6278abda9631c5.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/7/5/2/6/752633adadc9df0b71ac57290c5e7f3c.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/b/8/6/1b86f887c0258258de826d4e35d4889f.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/b/d/4/cbd489c9790e544cf8995abcb5eb44e5.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/0/2/3/c023c6f3c26008662a1bd7c11b6530e2.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/4/a/2/f4a2a0dd740498451c427fec611e6edf.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/f/d/d/bfdd6a9aca52b4a4b745a80a292caeaf.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/e/c/e/5ece70b2dc27ee42180e9144e7697d39.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/9/6/6/3966a6edfb9810d50617ed59a1d7ea9f.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/8/d/b/a8dbf25d04e3a0f4df24f568ccebae2c.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/7/4/8/d/748da7bbaf9c31b24bf3be9995cbb979.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/0/7/7/f077e99b212e3b9a2afa16f479f680c2.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/2/5/5/2/2552084b67f1fc9496763b0e2a367b7a.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/3/e/8/33e8a476aee500a846d3b86868e80b05.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/e/8/f/8e8fd5d34183107f5be3025d9320121c.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/6/3/9/8639b3b6bd0c0e286175dd8519952d43.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/b/4/5/db45316e6d6789b72ab2e55570be19b7.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/7/1/9/4/719488ac45e5d18e8985f6cd5ee3fe52.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/d/e/a/cdeabb747cfd947916d1f14482372fe8.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/7/8/f/6/78f6cf444ef070a38924351b1a70a89b.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/c/a/b/acab3cf9839e05ab2eb0719a329fcd5e.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/0/c/f/00cf8bd1fe53f225bb8f493441126e6f.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/d/b/1/cdb11a946962f59be1aea9f688117d51.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/1/9/0/8190df4138926efe9247bf060ea96169.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/7/d/8/e/7d8ec16dd557a7c5130ad4f651b39fce.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/0/d/2/c0d2f71e5fcd6e4c6efc59a61c0c6654.jpg"
    ],
    "BGMode": 0
  },
  "timestamp": 1694780772526
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
  let startTime = lyric.data.sentences[i].words[0].startTime;
  let stopTime =
    lyric.data.sentences[i].words[lyric.data.sentences[i].words.length - 1]
      .endTime;
  for (let j = 0; j < lyric.data.sentences[i].words.length; j++) {
    sentence += lyric.data.sentences[i].words[j].data + " ";
  }
  let LyricItem = new LyricSentencesObj(startTime, stopTime, sentence);
  lyricSentences.push(LyricItem);
}
console.log(lyricSentences);

const loadLyric = function () {
  let isShow = false;
  let firstTime = 1;
  let html = "";
  for (let i = 0; i < lyricSentences.length - 1; i += 2) {
    let startTime = lyricSentences[i].startTime;
    let startTime3 = lyricSentences[i + 2].startTime;

    let stopTime = lyricSentences[i + 1].stopTime;
    if (
      startTime <= audio.currentTime * 1000 &&
      stopTime >= audio.currentTime * 1000
    ) {
      isShow = true;
      firstTime++;
      html = `<p>${lyricSentences[i].lyricSentence}</p>
        <p>${lyricSentences[i + 1].lyricSentence}</p>
        `;
    }
    if (!isShow) {
      html = `<p>Tên bài hát: Thanh Xuân</p>
      <p>Tên ca sĩ: Dalab</p>
      `;
      if (firstTime > 1 && startTime3 - stopTime > 5000) {
        html = "";
      }
    }
  }
  karaokeLyric.innerHTML = html;
};

karaoke.addEventListener("mouseup", function (e) {
  e.stopPropagation();
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
});
closeBtn.addEventListener("click", function () {
  karaokeLayout.classList.remove("active");
});
