export default function Rate() {
  return (
    <div>
      <h2 className=" text-4xl font-bold text-orange-400 flex gap-x-6 justify-center mt-[60px] mb-6">
        <span className="flex gap-x-2">
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">Đ</span>
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">Á</span>
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">N</span>
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">H</span>
        </span>
        <span className="flex gap-x-2">
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">G</span>
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">I</span>
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">Á</span>
        </span>
      </h2>
      <div>
        <div className="flex max-w-[1250px] pl-[25px] pr-[25px] mx-auto">
          <div className="text-2xl">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <div>Col-2</div>
        </div>
      </div>
    </div>
  );
}
