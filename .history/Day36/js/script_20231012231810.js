import { client } from "./client.js";
const listNews = document.querySelector(".container .list-news");

const getPosts = async () => {
  const { data: posts } = await client.get("/posts");
  let html = posts.map(
    (post) => `
  <div class="item-new">
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
  listNews.innerHTML = html;
};
getPosts;
