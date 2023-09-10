const listProduct = document.querySelector(".list-proc");
const tbody = listProduct.querySelector("tbody");
let number = 0;

const Products = [
  { id: 1, name: "Sản phẩm 1", price: 1000, number: 1 },
  { id: 2, name: "Sản phẩm 2", price: 2000, number: 1 },
  { id: 3, name: "Sản phẩm 3", price: 3000, number: 1 },
  { id: 4, name: "Sản phẩm 4", price: 4000, number: 1 },
];

const CartProducts = {};

const showListProc = function () {
  number = 0;
  Products.forEach((product) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.innerText = ++number;
    const td2 = document.createElement("td");
    td2.innerText = product.name;
    const td3 = document.createElement("td");
    td3.innerText = product.price;
    const td4 = document.createElement("td");
    const procNumber = document.createElement("input");
    procNumber.value = product.number;
    td4.append(procNumber);
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tbody.append(tr);
  });
};
showListProc();
