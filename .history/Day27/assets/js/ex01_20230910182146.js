const listProduct = document.querySelector(".list-proc");
const tbody = listProduct.querySelector("tbody");
const cartProc = document.querySelector(".cart-proc");
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

  let html = `
  <table class = "table-cart-product">
    <thead>
    <th>STT</th>
    <th>Tên sản phẩm</th>
    <th>Giá</th>
    <th>Số lượng</th>
    <th>Thành tiền</th>
    <th>Xóa</th>
    </thead>
    <tbody>
    `;
  html += cartProducts
    .map(function (product) {
      return `
    <tr>
    <td>${++number}</td>
    <td>${product.name}</td>
    <td>${product.price}</td>
    <td><input type = "number" value = ${product.number} /></td>
    <td>${product.price * product.number}</td>
    <td><button class="delete-btn" data-id = "${product.id}">Xóa</button></td>
    </tr>
    `;
    })
    .join(" ");
  html += `
    </tbody>
    <tfoot class="table-end">
    <td colspan="3">Tổng</td>
    <td class="total-number">0</td>
    <td colspan="2" class="total-price">0</td>
    </tfoot>
    </table>
     `;
  cartProc.innerHTML = html;
};
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

const updateListCartProc = function () {
  if (cartProducts.length === 0) {
    cartProc.innerHTML = "<p>Không có sản phẩm nào trong giỏ</p>";
  } else {
    showCartProduct();
  }
};
updateListCartProc();

const deleteAProc = function () {
  const tableCartProduct = document.querySelector(".table-cart-product");
  const deleteBtn = tableCartProduct.querySelectorAll(".delete-btn");
  console.log(tableCartProduct);
  console.log(deleteBtn);
  deleteBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      console.log("Xóa");
      let temp = [];
      for (let product of cartProducts) {
        if (product.id != btn.dataset.id) {
          console.log(true);
          temp.push(product);
        }
      }
      cartProducts = temp;
      console.log(temp);
      //   cartProducts = cartProducts.map(function (product) {
      //     console.log(product.id);
      //     console.log(btn.dataset.id);
      //     if (product.id !== btn.dataset.id) {
      //       console.log(product);
      //       return product;
      //     }
      //   });
      //   console.log(cartProducts);
      //   updateLocalStorage();
      //   updateListCartProc();
    });
  });
};
deleteAProc();
