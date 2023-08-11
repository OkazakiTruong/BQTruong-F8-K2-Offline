let doc = document.getElementById("js-doc");
document.write();

let i = 0;
setInterval(function () {
  docArr[i] = "<span>" + docArr[i] + "</span>";
  i++;
}, 1000);
