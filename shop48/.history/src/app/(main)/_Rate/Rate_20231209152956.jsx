import { Textarea } from "@chakra-ui/react";
import { register } from "swiper/element/bundle";
register();

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
      <div className="max-w-[1250px] pl-[25px] pr-[25px] mx-auto">
        <div className="flex justify-center  gap-x-[20px] mb-[40px]">
          <div className="text-3xl w-[40%] flex flex-col items-center">
            <h3 className="text-orange-400 font-semibold mb-[10px]">
              Đánh giá chuyến đi của bạn
            </h3>
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
        <swiper-container
          slides-per-view="3"
          autoplay-delay="2000"
          autoplay-disableOnInteraction="false"
          speed="500"
          loop="true"
          space-between="20"
        >
          <swiper-slide>
            <div className="flex flex-col items-center shadow-2xl ">
              <img
                src="https://picsum.photos/200/200"
                className="w-[200px] rounded-[50%] mb-[26px]"
                alt=""
              />
              <h3 className="text-2xl font-bold">Some People</h3>
              <p>Some comment....</p>
              <div className="text-orange-500">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="flex flex-col items-center shadow-2xl ">
              <img
                src="https://picsum.photos/200/200"
                className="w-[200px] rounded-[50%] mb-[26px]"
                alt=""
              />
              <h3 className="text-2xl font-bold">Some People</h3>
              <p>Some comment....</p>
              <div className="text-orange-500">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="flex flex-col items-center shadow-2xl ">
              <img
                src="https://picsum.photos/200/200"
                className="w-[200px] rounded-[50%] mb-[26px]"
                alt=""
              />
              <h3 className="text-2xl font-bold">Some People</h3>
              <p>Some comment....</p>
              <div className="text-orange-500">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="flex flex-col items-center shadow-2xl ">
              <img
                src="https://picsum.photos/200/200"
                className="w-[200px] rounded-[50%] mb-[26px]"
                alt=""
              />
              <h3 className="text-2xl font-bold">Some People</h3>
              <p>Some comment....</p>
              <div className="text-orange-500">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  );
}
