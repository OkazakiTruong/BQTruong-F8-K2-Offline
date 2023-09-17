const autoIndex = function (isFirstload) {
  //auto index for all module first load
  const modules = [...document.querySelectorAll(".list-item.active")];
  modules.forEach((module, index) => {
    if (isFirstload) {
      module.innerHTML = `Module : <span>${index + 1}</span>  : ${
        module.innerText
      }`;
    } else {
      console.log(module.child);
    }
  });
  //auto index for all list-item not index first load
  const items = [...document.querySelectorAll(".list-item:not(.active)")];
  items.forEach((item, index) => {
    item.innerHTML = `Bài : <span>${index + 1}</span> : ${item.innerText} `;
  });
};
autoIndex(true);

const itemDraggables = [...document.querySelectorAll(".list-item")];
itemDraggables.forEach((itemDraggable) => {
  itemDraggable.addEventListener("dragstart", () => {
    itemDraggable.classList.add("dragging");
  });
  itemDraggable.addEventListener("dragend", () => {
    itemDraggable.classList.remove("dragging");
    autoIndex(false);
  });
});

const list = document.querySelector(".list");
list.addEventListener("dragover", (e) => {
  e.preventDefault();
  const itemDragging = document.querySelector(".list-item.dragging");
  const afterElement = getAfterElement(e.clientY);
  if (afterElement === null) {
    list.append(itemDragging);
  } else {
    list.insertBefore(itemDragging, afterElement);
  }
});

const getAfterElement = function (y) {
  const draggableElement = [
    ...document.querySelectorAll(".list-item:not(.dragging)"),
  ];
  return draggableElement.reduce(
    (closetEle, child) => {
      let box = child.getBoundingClientRect();
      let offsetY = y - box.top - box.height / 2;
      if (offsetY < 0 && offsetY > closetEle.offsetY) {
        return { offsetY: offsetY, element: child };
      } else {
        return closetEle;
      }
    },
    {
      offsetY: Number.NEGATIVE_INFINITY,
    }
  ).element;
};
