import { client } from "./client.js";

/*
        <div class="blog-item">
          <div class="blog-header">
            <div class="blog-left">
              <div class="blog-author-img">
                <img
                  src="https://fastly.picsum.photos/id/898/200/200.jpg?hmac=OJ_q58cXkhJJW-v5_I8OBbmtuEPORKBZ5hXG9PnO4QM"
                  alt=""
                  srcset=""
                />
              </div>
              <div>
                <div class="blog-author">Bùi Quang Trưởng</div>
                <div class="time-post">5 phút trước</div>
              </div>
            </div>
            <div class="blog-right">
              <div class="date-post">Ngày đăng: 20/10/2023</div>
            </div>
          </div>
          <div class="blog-content">
            Bao nhiêu lâu nữa thì bán được 1 tỷ gói mè?
          </div>
          <div class="blog-tags">
            <div class="blog-tag-item">#ban1tygoime</div>
            <div class="blog-tag-item">#ban1tygoime</div>
          </div>
        </div>
*/
function renderBlogs(blogs) {
  const blogsEl = document.querySelector(".blogs");
  const html = blogs.map(
    (blog) => `
    <div class="blog-item">
    <div class="blog-header">
      <div class="blog-left">
        <div class="blog-author-img">
          <img
            src="https://fastly.picsum.photos/id/898/200/200.jpg?hmac=OJ_q58cXkhJJW-v5_I8OBbmtuEPORKBZ5hXG9PnO4QM"
            alt=""
            srcset=""
          />
        </div>
        <div>
          <div class="blog-author">${post.userId.name}</div>
          <div class="time-post">5 phút trước</div>
        </div>
      </div>
      <div class="blog-right">
        <div class="date-post">Ngày đăng: 20/10/2023</div>
      </div>
    </div>
    <div class="blog-content">
      <h2 class="title">${post.title}</h2>
      <p class="content">${post.content}</p>
    </div>
    <div class="blog-tags">
      <div class="blog-tag-item"># <a>View more</a></div>
      <div class="blog-tag-item"># ${post.userId.name}</div>
    </div>
  </div>
  `
  );
}
const getPost = async () => {
  const { data: blogs, response } = await client.get("/blogs");
};

getUser();
