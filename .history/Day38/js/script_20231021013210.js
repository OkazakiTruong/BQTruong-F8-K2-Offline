import { client } from "./client.js";

/*
  <h1>Xin chào Trưởng</h1>
        <form action="#" class="form-blog-post">
          <label>
            <span>Nhập tiêu đề</span>
            <input
              type="text"
              class="input-title"
              placeholder="Enter your title"
            />
          </label>
          <label>
            <span>Nhập nội dung</span>
            <textarea
              class="input-content"
              placeholder="Enter your content"
            ></textarea>
          </label>
          <button class="btn-post-blog">Đăng bài</button>
        </form>
*/
function isLogin() {
  const token = localStorage.getItem("login_token");
  if (token) {
    console.log("Đã đăng nhập");
  } else {
    console.log("Chưa đăng nhập");
  }
}
isLogin();
function renderBlogs(blogs) {
  const blogsEl = document.querySelector(".blogs");
  const html = blogs.map(
    (blog) => `
    <div class="blog-item">
    <div class="blog-header">
      <div class="blog-left">
        <div class="blog-author-img">
        ${blog.userId.name.slice(0, 1).toUpperCase()}
        </div>
        <div>
          <div class="blog-author">${blog.userId.name}</div>
          <div class="time-post">5 phút trước</div>
        </div>
      </div>
      <div class="blog-right">
        <div class="date-post">Ngày đăng: 20/10/2023</div>
      </div>
    </div>
    <div class="blog-content">
      <h2 class="title">${blog.title}</h2>
      <p class="content">${blog.content}</p>
    </div>
    <div class="blog-tags">
      <div class="blog-tag-item"># <a>View more</a></div>
      <div class="blog-tag-item"># ${blog.userId.name}</div>
    </div>
  </div>
  `
  );
  blogsEl.innerHTML = html;
}
const getPost = async () => {
  const { data: blogs, response } = await client.get("/blogs");
  renderBlogs(blogs.data);
};

getPost();
