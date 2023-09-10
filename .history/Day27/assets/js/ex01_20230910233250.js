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

let cartProducts =
  localStorage.getItem("cartProcs") === null
    ? []
    : JSON.parse(localStorage.getItem("cartProcs"));

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
    updateCartTable();
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

const deleteAProc = function () {
  const butDel = document.querySelectorAll(".btn-delete");
  butDel.forEach((btn, i) => {
    //   updateCartTable();
    let temp = [];
    btn.addEventListener("click", function () {
      for (let index in cartProducts) {
        if (index != i) {
          console.log("true");
          temp.push(cartProducts[index]);
        }
      }
      cartProducts = temp;
      localStorage.setItem("cartProcs", JSON.stringify(cartProducts));
      updateCartTable();
    });
  });
};
const updateCartTable = function () {
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
    `;
    for (let i = 0; i < cartProducts.length; i++) {
      let intoPrice =
        Number(cartProducts[i].price) * Number(cartProducts[i].number);
      totalPrice += intoPrice;
      totalNumber += Number(cartProducts[i].number);
      html += `
        <tr>
        <td>${i + 1}</td>
        <td>${cartProducts[i].name}</td>
        <td>${cartProducts[i].price}</td>
        <td><input class = "number-cart" type ="number" value = "${
          cartProducts[i].number
        }" data-index= ${i} /></td>
        <td>${intoPrice}</td>
        <td><button class = "btn-delete">Xóa</button></td>
        </tr>
        `;
    }

    html += `
    <tr>
    <td colspan = "3" >Tổng</td>
    <td>${totalNumber}</td>
    <td colspan = "2">${totalPrice}</td>
    </tr>
    </table>
    <div class = "btn">
    <button class ="btn-update-cart">Cập nhật giỏ hàng</button>
    <button class ="btn-delete-cart">Xóa giỏ hàng</button>
    </div>
    
    `;
    cartProc.innerHTML = html;
    deleteAProc();
    btnDeleteCart = document.querySelector(".btn-delete-cart");
    btnDeleteCart.addEventListener("click", function () {
      console.log("ok");
      cartProducts = [];
      localStorage.setItem("cartProcs", JSON.stringify(cartProducts));
      updateCartTable();
    });
    btnUpdateCart = document.querySelector(".btn-delete-cart");
    numberCart = document.querySelectorAll(".number-cart");
    btnUpdateCart.addEventListener("click", function () {
      console.log(numberCart);
    });
  }
};
updateCartTable();
