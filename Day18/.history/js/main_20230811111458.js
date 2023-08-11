let doc = document.getElementById("js-doc");
document.write();

let i = 0;
let docArr = doc.innerText.split(" ");
let normalArr = doc.innerText.split(" ");
setInterval(function () {
  docArr[i] = "<span>" + docArr[i] + "</span>";
  if (i >= 1) {
    docArr[i - 1] = normalArr[i - 1];
  }
  doc.innerHTML = docArr.join(" ");
  i++;
}, 500);

console.log(typeof doc.innerText);
