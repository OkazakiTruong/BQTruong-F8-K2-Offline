export default function DealForm() {
  return (
    <div>
      <h2 className=" text-4xl font-bold text-orange-400 flex gap-x-4 justify-center mt-[20px]">
        <span className="flex gap-x-2">
          <span className="bg-orange-200 pt-2 pb-2 pl-2 pr-2">T</span>
          <span className="bg-orange-200 pt-2 pb-2 pl-2 pr-2">Ì</span>
          <span className="bg-orange-200 pt-2 pb-2 pl-2 pr-2">M</span>
        </span>
        <span className="flex gap-x-2">
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2">Ư</span>
          <span className="bg-orange-200 pt-2 pb-2 pl-2 pr-2">U</span>
        </span>
        <span className="flex gap-x-2">
          <span className="bg-orange-200 pt-2 pb-2 pl-2 pr-2">Đ</span>
          <span className="bg-orange-200 pt-2 pb-2 pl-2 pr-2">Ã</span>
          <span className="bg-orange-200 pt-2 pb-2 pl-2 pr-2">I</span>
        </span>
      </h2>
      <div className="flex justify-center gap-x-20 ">
        <div className="w-[50%]">
          <img
            src="https://code-fullstack-exercise49.vercel.app/images/book-img.svg"
            alt=""
          />
        </div>
        <div>Col-2</div>
      </div>
    </div>
  );
}
