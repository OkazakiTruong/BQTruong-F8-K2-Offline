export default function DealForm() {
  return (
    <div>
      <h2 className=" text-4xl font-bold text-orange-400 flex gap-x-6 justify-center mt-[60px]">
        <span className="flex gap-x-2">
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">T</span>
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">Ì</span>
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">M</span>
        </span>
        <span className="flex gap-x-2">
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">Ư</span>
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">U</span>
        </span>
        <span className="flex gap-x-2">
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">Đ</span>
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">Ã</span>
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">I</span>
        </span>
      </h2>
      <div className="flex justify-center w-full mt-[40px]">
        <div className="w-[50%]">
          <img
            src="https://code-fullstack-exercise49.vercel.app/images/book-img.svg"
            alt=""
          />
        </div>
        <div className="w-[50%] ">
          <form className="w-[80%] shadow-lg p-3">
            <div className="flex flex-col ">
              <label htmlFor="">Hãy Liên hệ với tôi bằng </label>
              <input
                type="text"
                placeholder="Email hoặc số điện thoại"
                className="p-2 border"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
