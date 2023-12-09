const getData = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  console.log(res);
};
const DealForm = async () => {
  await getData();
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
      <div className="flex justify-center items-center w-full h-min mt-[40px]">
        <div className="w-[50%] flex justify-end">
          <img
            src="https://code-fullstack-exercise49.vercel.app/images/book-img.svg"
            alt=""
            className="w-[80%]"
          />
        </div>
        <div className="w-[50%]">
          <form className="w-[80%] shadow-lg p-4 flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="" className="text-xl font-bold">
                Hãy Liên Hệ Với Tôi Bằng:
              </label>
              <input
                type="text"
                placeholder="Email hoặc số điện thoại"
                className="p-2 border"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="" className="text-xl font-bold">
                Tôi Muốn Đến:
              </label>
              <select name="" id="">
                <option value="Việt Nam">Việt Nam</option>
              </select>
              <input
                type="text"
                placeholder="Địa điểm chính xác"
                className="p-2 border"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="" className="text-xl font-bold">
                Chúng tôi có:
              </label>
              <input
                type="number"
                min={0}
                placeholder="Số người"
                className="p-2 border"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="" className="text-xl font-bold">
                Bắt Đầu Từ:
              </label>
              <input
                type="date"
                placeholder="dd/mm/yyyy"
                className="p-2 border"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="" className="text-xl font-bold">
                Kết Thúc Vào:
              </label>
              <input
                type="date"
                placeholder="dd/mm/yyyy"
                className="p-2 border"
              />
            </div>
            <button className="p-2 pr-6 pl-6 bg-orange-500 text-white w-fit hover:bg-orange-400">
              Tìm ngay
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default DealForm;
