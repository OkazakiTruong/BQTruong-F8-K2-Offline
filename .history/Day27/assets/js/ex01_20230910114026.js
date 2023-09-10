const cartProcducts = document.querySelector(".cart-products");
const btnAdds = document.querySelectorAll(".btn-add");
const productNames = document.querySelectorAll(".product-name");
const productPrices = document.querySelectorAll(".product-price");
const productNumbers = document.querySelectorAll(".product-number");
const tableCartProduct = document.querySelector(".table-cart-products");
const tbody = tableCartProduct.querySelector("tbody");
const tableEnd = tableCartProduct.querySelector(".table-end");
const totalNumber = tableCartProduct.querySelector(".total-number");
const totalPrice = tableCartProduct.querySelector(".total-price");

console.log(tableCartProduct);

console.log(totalNumber.innerText);

let number = 0;
const updateCart = function () {
  if (totalNumber.innerText === "0") {
    const p = document.createElement("p");
    p.innerText = "Không có sản phẩm nào trong giỏ hàng!!!";
    cartProcducts.append(p);
  } else {
    p.remove();
  }
};

updateCart();

const AddNewProduct = function (index) {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.innerText = ++number;
  const td2 = document.createElement("td");
  td2.innerText = productNames[index].innerText;
  const td3 = document.createElement("td");
  td3.innerText = productPrices[index].innerText;
  const td4 = document.createElement("td");
  td4.innerText = productNumbers[index].innerText;
  const td5 = document.createElement("td");
  td5.innerText = productNames[index].innerText;

  tr.append(td1);
  tbody.insertBefore(tr, tableEnd);
  updateCart();
  console.log("add");
};

btnAdds.forEach(function (btnAdd, index) {
  btnAdd.addEventListener("click", function () {
    AddNewProduct(index);
  });
});
