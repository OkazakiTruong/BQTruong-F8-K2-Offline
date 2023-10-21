import { client } from "./client.js";
import { requestRefresh } from "./token.js";
const header = document.querySelector(".header");
let isAddNew = false;
const query = {
  limit: 10,
  page: 1,
};

const loading = (flag) => {
  if (flag) {
    btnPost.innerHTML = `<img src="./img/Rolling-1s-200px.gif" alt="">`;
    btnPost.disabled = true;
  } else {
    btnPost.innerText = "Đăng nhập";
    btnPost.disabled = false;
  }
};

const refreshToken = async (tokens) => {
  let { refreshToken } = JSON.parse(tokens);
  let { data, response } = await requestRefresh(refreshToken);
  if (response.status === 200) {
    localStorage.setItem("login_token", JSON.stringify(data.data.token));
    const tokens = localStorage.getItem("login_token");
    let { accessToken } = JSON.parse(tokens);
    client.setToken(accessToken);
    return true;
  } else {
    return false;
  }
};
const handlePost = async (data) => {
  const tokens = localStorage.getItem("login_token");
  if (tokens) {
    let { accessToken } = JSON.parse(tokens);
    client.setToken(accessToken);
    const { response } = await client.post("/blogs", data);
    if (response.status === 401) {
      if (await refreshToken(tokens)) {
        const { response } = await client.post("/blogs", data);
        console.log(response);
        isAddNew = true;
        query.page = 1;
        getPost(query);
      } else {
        renderLoginCase();
        localStorage.removeItem("login_token");
      }
    } else {
      isAddNew = true;
      query.page = 1;
      getPost(query);
    }
  }
};

const handleLogout = async () => {
  const tokens = localStorage.getItem("login_token");
  if (tokens) {
    let { accessToken } = JSON.parse(tokens);
    client.setToken(accessToken);
    const { response } = await client.post("/auth/logout", {});
    if (response.status === 401) {
      if (await refreshToken(tokens)) {
        await client.post("/auth/logout", {});
        localStorage.removeItem("login_token");
        renderLoginCase();
      } else {
        localStorage.removeItem("login_token");
        renderLoginCase();
      }
    } else {
      localStorage.removeItem("login_token");
      renderLoginCase();
    }
  }
};
const formPost = async () => {
  const tokens = localStorage.getItem("login_token");
  if (tokens) {
    let { accessToken } = JSON.parse(tokens);
    client.setToken(accessToken);
    const { data: profile, response } = await client.get("/users/profile");
    if (response.status === 401) {
      if (await refreshToken(tokens)) {
        await client.post("/users/profile");
        renderFormPost(profile.data);
      } else {
        localStorage.removeItem("login_token");
        renderLoginCase();
      }
    } else {
      renderFormPost(profile.data);
    }
  }
};
const renderFormPost = (data) => {
  let html = `

  <h1>
  <span class="user-img">
  ${data.name.slice(0, 1).toUpperCase()}
  </span>
  Xin chào ${data.name}    
</h1>
  <button class = "btn-logout">Đăng xuất</button>
  <form action="#" class="form-blog-post">
    <label>
      <span>Nhập tiêu đề</span>
      <input
        type="text"
        class="input-title"
        placeholder="Enter your title"
        required/>
    </label>
    <label>
      <span>Nhập nội dung</span>
      <textarea
        class="input-content"
        placeholder="Enter your content"
        required
      ></textarea>
    </label>
    <button class="btn-post-blog">Đăng bài</button>
  </form>
  `;
  header.innerHTML = html;
  const title = document.querySelector(".header .input-title");
  const content = document.querySelector(".header .input-content");
  const formBlogPost = document.querySelector(".form-blog-post");
  formBlogPost.addEventListener("submit", (e) => {
    e.preventDefault();
    handlePost({ title: title.value, content: content.value });
  });
  const btnLogout = document.querySelector(".btn-logout");
  btnLogout.addEventListener("click", handleLogout);
};
function renderLoginCase() {
  let html = `
<h1>Blogger</h1>
 <button class="btn-login">Đăng nhập ngay</button>
  `;
  header.innerHTML = html;
  const btnLogin = header.querySelector(".btn-login");
  btnLogin.addEventListener("click", () => {
    console.log("onclick");
    window.location.href = "././login.html";
  });
}
const isLogin = async () => {
  const token = localStorage.getItem("login_token");
  if (token) {
    await formPost();
  } else {
    renderLoginCase();
  }
};
isLogin();

let flagDataLoaded = false;
function renderBlogs(blogs) {
  const blogsEl = document.querySelector(".blogs");
  let html = "";
  if (!isAddNew) {
    html = blogsEl.innerHTML;
  }
  if (blogs) {
    html += blogs
      .map(
        (blog) => `
    <div class="blog-item">
    <div class="blog-header">
      <div class="blog-left">
        <div class="blog-author-img">
        ${blog.userId.name.slice(0, 1).toUpperCase()}
        </div>
        <div>
          <div class="blog-author">${blog.userId.name}</div>
          <div class="time-post">10 phút trước</div>
        </div>
      </div>
      <div class="blog-right">
        <div class="date-post">Ngày đăng:${new Date(
          blog.createdAt
        ).getDate()}/${new Date(blog.createdAt).getMonth()}/${new Date(
          blog.createdAt
        ).getFullYear()}</div>
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
      )
      .join("");
    blogsEl.innerHTML = html;
  }
}
const getPost = async (query) => {
  const queryString = new URLSearchParams(query).toString();
  console.log(queryString);
  const { data: blogs, response } = await client.get(`/blogs?${queryString}`);
  if (response) {
    flagDataLoaded = true;
    renderBlogs(blogs.data);
  }
};

getPost(query);

document.addEventListener("scroll", async (e) => {
  if (flagDataLoaded) {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight * 0.7
    ) {
      isAddNew = false;
      flagDataLoaded = false;
      query.page = query.page + 1;
      console.log(query);
      getPost(query);
    }
  }
});
