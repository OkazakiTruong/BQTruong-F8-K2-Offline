let doc = document.getElementById("js-doc");

let i = 0;
let docArr = doc.innerText.split(" ");
let normalArr = doc.innerText.split(" ");
setInterval(function () {
  docArr[i] = "<span>" + docArr[i] + "</span>";
  doc.innerHTML = docArr.join(" ");
  docArr[i] = normalArr[i];
  i++;
  if (i >= docArr.length) {
    i = 0;
  }
}, 500);
