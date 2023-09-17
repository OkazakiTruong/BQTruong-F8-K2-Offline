const autoIndex = function () {
  const moduldes = [...document.querySelectorAll(".list-item.active")];
  moduldes.forEach((modulde) => {
    console.log(modulde);
  });
};
autoIndex();
