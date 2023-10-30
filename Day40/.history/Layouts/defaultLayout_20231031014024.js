import "../assets/scss/style.scss";
export const defaultLayout = () => {
  return `
    <header>
    <h1><a href = "/" data-route>HEADER</a></h1>
    </header>
    <main>
    <div class="container>
        <div class="left">
            <h2>Menu</h2>
                <ul>
                    <li><a href = "/" data-route>Trang chủ</a></li>
                    <li><a href = "/about" data-route>Giới thiệu</a></li>
                    <li><a href = "/product" data-route>Sản phẩm</a></li>
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
