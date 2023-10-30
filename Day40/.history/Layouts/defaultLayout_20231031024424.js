import "../assets/scss/style.scss";
export const defaultLayout = () => {
  return `
  <header>
  <h1><a href = "/" data-navigo>HEADER</a></h1>
  </header>
  <main>
  <div class="container">
      <div class="left">
          <h2>Menu</h2>
              <ul>
                  <li><a href="/" >Trang chủ</a></li>
                  <li><a href= "/about" >Giới thiệu</a></li>
                  <li><a href="/product" data-navigo>Sản phẩm</a></li>
               </ul>
      </div>
      <div class="right">
      {body}
      </div>
  </div>
  </main>
  <footer>
  <h2>Footer</h2>
  </footer>
    `;
};
