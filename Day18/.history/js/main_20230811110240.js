let doc = document.getElementById("js-doc");
document.write();

let i = 0;
setInterval(function () {
  docArr[i] = "<span>" + docArr[i] + "</span>";

  //   document.write(docArr.join(" "));
}, 1000);

console.log(docArr);
