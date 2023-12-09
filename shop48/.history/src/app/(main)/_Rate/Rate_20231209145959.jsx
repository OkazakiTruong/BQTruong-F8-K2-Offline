import { Textarea } from "@chakra-ui/react";

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
        <div className="flex justify-center max-w-[1250px] pl-[25px] pr-[25px] mx-auto gap-x-[20px]">
          <div className="text-3xl w-[40%] flex flex-col items-center">
            <h3 className="text-orange-500">Đánh giá chuyến đi của bạn</h3>
            <div>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <div className="w-[60%]">
            <form className="flex flex-col gap-y-[20px]">
              <textarea
                placeholder="Viết đánh giá của bạn"
                className="p-2 border"
              />
              <button className="p-2 bg-orange-500 text-white">
                Gửi Tới Chúng Tôi
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
