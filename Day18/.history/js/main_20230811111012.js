let doc = document.getElementById("js-doc");
document.write();

let i = 0;
let docArr = doc.innerText.split(" ");
setInterval(function () {
  docArr[i] = "<span>" + docArr[i] + "</span>";
  doc.innerText = docArr.join(" ");
  i++;
}, 1000);

console.log(typeof doc.innerText);
