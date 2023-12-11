import { Link } from "@chakra-ui/react";

export default function HomeProject() {
  return (
    <div className="flex flex-col items-center w-full border p-[10px] px-[40px] rounded-[10px] shadow-xl">
      <h2 className="text-2xl my-[26px] font-bold">Các dự án cá nhân</h2>
      <div className="w-full mb-[20px]">
        <h3>Project Trello</h3>
        <p>
          Một dự án nhỏ được viết với react <br />
          Một trang web đơn giản cho phép quản lý task. Sử dụng ReactJs
        </p>
      </div>
      <div className="w-full">Dự án 2</div>
      <div>Dự án 3</div>
    </div>
  );
}
