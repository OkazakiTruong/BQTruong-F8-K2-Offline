export default function auth() {
  return (
    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center border p-[20px] rounded-[14px] shadow-xl w-[560px]">
      <h2 className="text-3xl font-bold my-[26px] text-sky-500">Đăng nhập</h2>
      <div className="w-[70%] font-semibold flex flex-col gap-y-[20px] mb-[40px] ">
        <button className="w-full p-[14px] bg-sky-500 rounded-[10px]">
          <i class="fa-brands fa-google"></i>
          Đăng nhập với Google
        </button>
        <button className="w-full p-[14px] border rounded-[10px]">
          Đăng nhập với Github
        </button>
      </div>
      <p>
        "Đăng nhập để liên hệ, bình luận và khám phá nhiều tính năng thú vị"
      </p>
    </div>
  );
}
