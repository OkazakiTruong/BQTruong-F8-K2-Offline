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

const listProc = [
  { id: 1, name: "Sản phẩm 1", price: 1000, number: 1 },
  { id: 2, name: "Sản phẩm 2", price: 2000, number: 1 },
  { id: 3, name: "Sản phẩm 3", price: 3000, number: 1 },
  { id: 4, name: "Sản phẩm 4", price: 4000, number: 1 },
];
