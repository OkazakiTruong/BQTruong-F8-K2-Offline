const cartProcducts = document.querySelector(".cart-products");
const btnAdds = document.querySelectorAll(".btn-add");
const productNames = document.querySelectorAll(".product-name");
const productPrices = document.querySelectorAll(".product-price");
const productNumbers = document.querySelectorAll(".product-number");

console.log(cartProcducts.children);

const updateCart = function () {
  if (cartProcducts.children.length === 0) {
    const p = document.createElement("p");
    p.innerText = "Không có sản phẩm nào trong giỏ hàng!!!";
    cartProcducts.append(p);
  } else {
  }
};

updateCart();

const AddNewProduct = function (index) {
  const cartTable = document.createElement("table");
  //   const html = `
  //      <tr>
  //       <th>STT</th>
  //       <th>Tên sản phẩm</th>
  //       <th>Giá</th>
  //       <th>Số lượng</th>
  //       <th>Thành tiền</th>
  //       <th>Xóa</th>
  //      </tr>
  //   `;
  //   cartTable.innerHTML = html;
  cartProcducts.append(html);
};

btnAdds.forEach(function (btnAdd, index) {
  btnAdd.addEventListener("click", function () {
    // console.log(
    //   "add ok",
    //   productNames[index].innerText,
    //   productPrices[index].innerText,
    //   productNumbers[index].value
    // );
    AddNewProduct(index);
  });
});
