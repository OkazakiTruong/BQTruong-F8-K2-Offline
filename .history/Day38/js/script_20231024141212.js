import { client } from "./client.js";
import { requestRefresh } from "./token.js";
import { dateTime } from "./dateTime.js";
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");

let isAddNew = false;
const query = {
  limit: 10,
  page: 1,
};
const day = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"];

const loading = (flag, btnPost) => {
  if (flag) {
    btnPost.innerHTML = `<img src="./img/Rolling-1s-200px.gif" alt="">`;
    btnPost.disabled = true;
  } else {
    btnPost.innerText = "Đăng bài";
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
const handlePost = async (data, btnPost) => {
  const tokens = localStorage.getItem("login_token");
  if (tokens) {
    let { accessToken } = JSON.parse(tokens);
    client.setToken(accessToken);
    const { response } = await client.post("/blogs", data);
    loading(true, btnPost);
    if (response.status === 401) {
      if (await refreshToken(tokens)) {
        const { response } = await client.post("/blogs", data);
        console.log(response);
        isAddNew = true;
        query.page = 1;
        getPost(query);
        alert("Thêm mới thành công");
      } else {
        renderLoginCase();
        localStorage.removeItem("login_token");
        alert("Phiên đăng nhập hết hạn");
      }
    } else {
      isAddNew = true;
      query.page = 1;
      getPost(query);
      alert("Thêm mới thành công");
    }
  }
  loading(false, btnPost);
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
    <label>
    <span>Chọn thời gian</span>
    <input type="datetime" class ="input-date" placeholder = "-- Nhập vào thời gian -- " readonly/>
    </label>
    <div class="custom-datetime">
    <div class="btn-close">
      <i class="fa-solid fa-xmark"></i>
    </div>
    <div class="datetime-header">
      <div class="time">September 2022</div>
      <div class="icon">
        <i class="fa-solid fa-chevron-left prev"></i>
        <i class="fa-solid fa-chevron-right next"></i>
      </div>
    </div>
    <div class="calender">
      <ul class="weeks">
        <li>CN</li>
        <li>T2</li>
        <li>T3</li>
        <li>T4</li>
        <li>T5</li>
        <li>T6</li>
        <li>T7</li>
      </ul>
      <ul class="days"></ul>
    </div>
  </div>
    <button class="btn-post-blog">Đăng bài</button>
  </form>
  `;
  header.innerHTML = html;

  const title = document.querySelector(".header .input-title");
  const content = document.querySelector(".header .input-content");
  const formBlogPost = document.querySelector(".form-blog-post");
  const btnPost = document.querySelector(".btn-post-blog");
  const inputDatetimeEl = document.querySelector(".input-date");
  const customDatetime = document.querySelector(".custom-datetime");
  const btnCloseDatetime = customDatetime.querySelector(".btn-close");

  dateTime(inputDatetimeEl);
  formBlogPost.addEventListener("submit", (e) => {
    e.preventDefault();
    handlePost({ title: title.value, content: content.value }, btnPost);
  });
  const btnLogout = document.querySelector(".btn-logout");
  btnLogout.addEventListener("click", handleLogout);
  inputDatetimeEl.addEventListener("click", function () {
    customDatetime.style.display = "block";
    overlay.style.display = "block";
  });
  overlay.addEventListener("click", function () {
    overlay.style.display = "none";
    customDatetime.style.display = "none";
  });
  btnCloseDatetime.addEventListener("click", function () {
    overlay.style.display = "none";
    customDatetime.style.display = "none";
  });
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
      .map((blog) => {
        const dateCreatedAgo =
          Date.parse(new Date()) - Date.parse(new Date(blog.createdAt));
        const lapse = new Date().getTimezoneOffset();
        console.log(lapse);
        const dayCreated = new Date(blog.createdAt).getDay();
        return `
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
        <div class="date-post">Ngày đăng: ${day[dayCreated]}, ${new Date(
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
  `;
      })
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
