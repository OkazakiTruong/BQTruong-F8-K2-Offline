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
    showCartTable();
  });
});

const addANewProcIntoCartProcs = function (product) {
  let cartProducts =
    localStorage.getItem("cartProcs") === null
      ? []
      : JSON.parse(localStorage.getItem("cartProcs"));
  if (cartProducts.length === 0) {
    cartProducts.push(product);
  } else {
    let flag = true;
    for (let cartProc of cartProducts) {
      if (Number(cartProc.id) === Number(product.id)) {
        flag = false;
        cartProc.number = Number(cartProc.number) + Number(product.number);
        break;
      }
    }
    if (flag) {
      cartProducts.push(product);
    }
  }
  localStorage.setItem("cartProcs", JSON.stringify(cartProducts));
};

const showCartTable = function () {
  let cartProducts =
    localStorage.getItem("cartProcs") === null
      ? []
      : JSON.parse(localStorage.getItem("cartProcs"));
  if (cartProducts.length === 0) {
    let html = `<p>Không có mặt hàng nào trong giỏ</p>`;
    cartProc.innerHTML = html;
  } else {
    let totalNumber = 0;
    let totalPrice = 0;
    let html = `<table>
    <thead>
    <tr>
    <th>Stt</th>
    <th>Tên sản phẩm</th>
    <th>Giá</th>
    <th>Số lượng</th>
    <th>Thành tiền</th>
    <th>Xóa</th>
    </tr>
    </thead>
    </table>`;
    for (let i = 0; i < cartProducts.length; i++) {
      let intoPrice =
        Number(cartProducts[i].price) * Number(cartProducts[i].number);
      totalPrice += intoPrice;
      html += `
        <tr>
        <td>${i + 1}</td>
        <td>${cartProducts[i].name}</td>
        <td>${cartProducts[i].price}</td>
        <td><input type ="number" value = "${cartProducts[i].number}"/></td>
        <td>${intoPrice}</td>
        
        </tr>

        `;
    }
    cartProc.innerHTML += html;
  }
};
showCartTable();
