const cartProcducts = document.querySelector(".cart-products");
const btnAdds = document.querySelectorAll(".btn-add");
const productNames = document.querySelectorAll(".product-name");
const productPrices = document.querySelectorAll(".product-price");

console.log(cartProcducts.children);

const updateCart = function () {
  if (cartProcducts.children.length === 0) {
    const p = document.createElement("p");
    p.innerText = "Không có sản phẩm nào trong giỏ hàng!!!";
    cartProcducts.append(p);
  }
};

updateCart();

btnAdds.forEach(function (btnAdd, index) {
  btnAdd.addEventListener("click", function () {
    console.log("add ok", productNames[index], productPrices[index].value);
  });
});
