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
  if (Number(totalNumber.innerText) === 0) {
    const p = document.createElement("p");
    p.innerText = "Không có sản phẩm nào trong giỏ hàng!!!";
    cartProcducts.append(p);
  } else {
    tableCartProduct.style.display = "block";
    cartProcducts.removeChild(p);
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
  td5.innerText = productPrices[index].innerText;
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

  tbody.insertBefore(tr, tableEnd);
  totalNumber.innerText = "1";
  //   tableCartProduct.style.display = "initial";
  updateCart();
};

btnAdds.forEach(function (btnAdd, index) {
  btnAdd.addEventListener("click", function () {
    AddNewProduct(index);
  });
});
