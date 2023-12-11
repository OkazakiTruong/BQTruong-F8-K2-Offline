export default function auth() {
  return (
    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center border p-[20px] rounded shadow-xl">
      <h2 className="text-3xl font-bold mb-[26px] text-sky-500">Đăng nhập</h2>
      <div className="flex flex-col gap-y-[20px] mb-[40px]">
        <button className="p-[14px] bg-sky-500 rounded-[10px]">
          Đăng nhập với Google
        </button>
        <button className="p-[14px] border rounded-[10px]">
          Đăng nhập với Github
        </button>
      </div>
      <p>
        "Đăng nhập để liên hệ, bình luận và khám phá nhiều tính năng thú vị"
      </p>
    </div>
  );
}
