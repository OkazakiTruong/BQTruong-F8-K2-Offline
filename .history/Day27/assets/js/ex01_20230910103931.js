const cartProcducts = document.querySelector(".cart-products");

console.log(cartProcducts.children);

const updateCart = function () {
  if (cartProcducts.children.length === 0) {
    const p = document.createElement("p");
    p.innerText = "Không có sản phẩm nào trong giỏ hàng!!!";
    cartProcducts.append(p);
  }
};
