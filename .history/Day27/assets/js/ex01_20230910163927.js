const listProduct = document.querySelector(".list-proc");
const tbody = listProduct.querySelector("tbody");
const tableCartProc = document.querySelector(".table-cart-products");
const cartTbody = tableCartProc.querySelector("tbody");
const tableEnd = tableCartProc.querySelector("table-end");
let number = 0;

const Products = [
  { id: 1, name: "Sản phẩm 1", price: 1000, number: 1000 },
  { id: 2, name: "Sản phẩm 2", price: 2000, number: 1000 },
  { id: 3, name: "Sản phẩm 3", price: 3000, number: 1000 },
  { id: 4, name: "Sản phẩm 4", price: 4000, number: 1000 },
];

const Product = function (id, name, price, number) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.number = number;
};
let cartProducts = [];
const updateCartProducts = function () {
  cartProducts =
    JSON.parse(localStorage.getItem("json")) === null
      ? []
      : JSON.parse(localStorage.getItem("json"));
  console.log(cartProducts);
};
updateCartProducts();
const updateLocalStorage = function () {
  localStorage.setItem("json", JSON.stringify(cartProducts));
};
const addNewAProc = function (id, name, price, number) {
  let flag = true;
  if (cartProducts.length !== 0) {
    for (let cartProduct of cartProducts) {
      if (cartProduct.id === id) {
        cartProduct.number = Number(cartProduct.number) + Number(number);
        flag = false;
      }
    }
    if (flag) {
      let cartProduct = new Product(id, name, price, number);
      cartProducts.push(cartProduct);
    }
  } else {
    let cartProduct = new Product(id, name, price, number);
    cartProducts.push(cartProduct);
  }
  updateLocalStorage();
  updateCartProducts();
};

const showCartProduct = function () {
  number = 0;
  cartProducts.forEach(function (product) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.innerText = ++number;
    const td2 = document.createElement("td");
    td2.innerText = product.name;
    const td3 = document.createElement("td");
    td3.innerText = product.price;
    const td4 = document.createElement("td");
    td4.innerText = product.number;
    const td5 = document.createElement("td");
    td5.innerText = product.number * product.price;
    const td6 = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Xóa";
    td6.append(deleteBtn);

    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tr.append(td5);
    tr.append(td6);

    cartTbody.insertBefore(tr);
  });
};
showCartProduct();

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
    procNumber.type = "number";
    procNumber.min = 1;
    procNumber.max = product.number;
    procNumber.value = 1;
    const btnAdd = document.createElement("button");
    btnAdd.innerText = "Thêm vào giỏ hàng";
    btnAdd.addEventListener("click", function () {
      console.log("click");
      addNewAProc(product.id, product.name, product.price, procNumber.value);
      showCartProduct();
    });
    td4.append(procNumber);
    td4.append(btnAdd);
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tbody.append(tr);
  });
};
showListProc();
