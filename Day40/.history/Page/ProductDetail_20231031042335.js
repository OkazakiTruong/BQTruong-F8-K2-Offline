export const ProductDetail = (params) => {
  return `<h2>product detail id # ${params.data.id}</h2>
           <button onclick = "navigate(/product)">Thoát</button>`;
};
