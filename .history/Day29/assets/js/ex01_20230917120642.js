const itemDraggables = document.querySelectorAll(".list-item");
console.log(itemDraggables);

const autoIndex = function () {
  //auto index for all module
  const modules = [...document.querySelectorAll(".list-item.active")];
  modules.forEach((module, index) => {
    module.innerText = `Module : ${index + 1} : ${module.innerText}`;
  });
  //auto index for all list-item not index
  const items = [...document.querySelectorAll(".list-item:not(.active)")];
  items.forEach((item, index) => {
    item.innerText = `Bài : ${index + 1} : ${item.innerText} `;
  });
};
autoIndex();
