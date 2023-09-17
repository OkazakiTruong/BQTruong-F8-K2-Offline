const autoIndex = function () {
  const moduldes = [...document.querySelectorAll(".list-item.active")];
  moduldes.forEach((modulde, index) => {
    console.log(modulde);
    modulde.innerText = `Module : ${index} : ${modulde.innerText}`;
  });
};
autoIndex();
