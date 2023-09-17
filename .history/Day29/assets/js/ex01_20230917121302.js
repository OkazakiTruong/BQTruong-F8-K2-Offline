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

const itemDraggables = [...document.querySelectorAll(".list-item")];
itemDraggables.forEach((itemDraggable) => {
  itemDraggable.addEventListener("dragstart", () => {
    itemDraggable.classList.add("dragging");
  });
  itemDraggable.addEventListener("dragend", () => {
    itemDraggable.classList.remove("dragging");
  });
});

const list = document.querySelector(".list");
list.addEventListener("dragover", (e) => {
  e.preventDefault();
});
