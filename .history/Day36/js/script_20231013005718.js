import { client } from "./client.js";
import { config } from "./config.js";
const listPosts = document.querySelector(".container .list-posts");
const loading = document.querySelector(".loading");
const loadingPage = document.querySelector(".loading-page");
const { LIMIT_POST: limitPost } = config;

const query = {
  _limit: limitPost,
};

const render = (posts) => {
  let html = posts.map(
    (post) => `
  <div class="item-post">
  <div class="header">
    <div>
      <div class="avatar">
        <img
          src="https://fastly.picsum.photos/id/137/200/200.jpg?hmac=qhNK8PzcRQJaCJlGEj1q5ceRIkKkfPmVuOwE5ZInXA8"
          alt=""
        />
      </div>
      <div>
        <div class="author-name">${post.author}</div>
        <div class="time">30 phút</div>
      </div>
    </div>
    <div class="more">
      <i class="fa-solid fa-xmark"></i>
      <i class="fa-solid fa-ellipsis"></i>
    </div>
  </div>
  <div class="content">
    <div class="title">${post.title}</div>
    <div class="img">
      <img
        src="https://fastly.picsum.photos/id/99/1000/600.jpg?hmac=h4ePCQDELeCynASfTQEZVXTKGew5L5SyNBDOyVCZNBk"
        alt=""
      />
    </div>
    <div>
      <div class="likes-count">
        <span class="icon">
          <i class="fa-solid fa-thumbs-up"></i>
        </span>
        100k
      </div>
      <div>
        <div class="comment-count">100 lượt bình luận</div>
        <div class="share-count">100 lượt share</div>
      </div>
    </div>
  </div>
  <div class="btn-group">
    <div class="btn">
      <span class="icon">
        <i class="fa-solid fa-thumbs-up"></i>
      </span>
      Thích
    </div>
    <div class="btn">
      <span class="icon">
        <i class="fa-solid fa-comment"></i>
      </span>
      Bình luận
    </div>
    <div class="btn">
      <span class="icon">
        <i class="fa-solid fa-share"></i>
      </span>
      Chia sẻ
    </div>
  </div>
</div>
  `
  );
  listPosts.innerHTML = html;
};

const getPosts = async (query) => {
  const queryString = new URLSearchParams(query).toString();
  const { data: posts, response } = await client.get(`/posts?${queryString}`);
  if (response) {
    loading.remove();
    loadingPage.style.display = "none";
  }
  render(posts);
};
getPosts(query);

document.addEventListener("scroll", async (e) => {
  const posts = listPosts.querySelectorAll(".item-post");
  const browserHeight = document.body.clientHeight;
  const clientRect = posts[posts.length - 1].getBoundingClientRect();
  if (browserHeight > clientRect.bottom) {
    loadingPage.style.display = "block";
    query._limit = 18;
    const queryString = new URLSearchParams(query).toString();
    const { data: posts, response } = await client.get(`/posts?${queryString}`);
    if (response) {
    }
    render(posts);
  }
});
