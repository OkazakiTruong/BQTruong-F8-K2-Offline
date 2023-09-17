const autoIndex = function () {
  //auto index for all module
  const moduldes = [...document.querySelectorAll(".list-item.active")];
  moduldes.forEach((modulde, index) => {
    console.log(modulde);
    modulde.innerText = `Module : ${index} : ${modulde.innerText}`;
  });
  //auto index for all list-item not index
  const items = [...document.querySelectorAll(".list-item:not(.active)")];
  console.log(items);
};
autoIndex();
