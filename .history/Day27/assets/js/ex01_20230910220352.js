const listProduct = document.querySelector(".list-proc");
const tbody = listProduct.querySelector("tbody");
const cartProc = document.querySelector(".cart-proc");
let number = 0;

//Danh sách mặt hàng
const products = [
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

for (let i = 0; i < products.length; i++) {
  listProduct.innerHTML += `
  <tr>
  <td>${i + 1}</td>
  <td>${products[i].name}</td>
  <td>${products[i].price}</td>
  <td><input type = "number" value = "1"/>
  <button class = "btn-add">Thêm vào giỏ hàng</button>
  </td>
  </tr>
  `;
}

const btnAdd = document.querySelectorAll(".btn-add");
btnAdd.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    const number = btn.previousElementSibling.value;
    const product = new Product(
      products[index].id,
      products[index].name,
      products[index].price,
      number
    );
    addANewProcIntoCartProcs(product);
  });
});

const addANewProcIntoCartProcs = function (product) {
  if (cartProducts.length === 0) {
    cartProducts.push(product);
  } else {
    let flag = true;
    for (let cartProc of cartProducts) {
      if (Number(cartProc.id) === Number(product.id)) {
        flag = false;
        break;
      }
      if (flag) {
        cartProducts.push(product);
      }
    }
  }
  console.log(cartProducts);
};

//Constructor của product
