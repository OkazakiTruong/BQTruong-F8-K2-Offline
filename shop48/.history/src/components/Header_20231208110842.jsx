"use client";

export default function Header() {
  return (
    <header>
      <nav className="fixed bg-black bg-opacity-50 p-6 text-white flex justify-between item-center select-none">
        <div className="text-2xl font-bold">
          <span className="text-orange-400">S</span>
          TRAVEL
        </div>
        <ul className="flex item-center text-xl gap-x-4">
          <li className="hover:text-orange-400 cursor-pointer">Trang chủ</li>
          <li className="hover:text-orange-400 cursor-pointer">Đặt lịch</li>
          <li className="hover:text-orange-400 cursor-pointer">Ưu đãi</li>
          <li className="hover:text-orange-400 cursor-pointer">Dịch Vụ</li>
          <li className="hover:text-orange-400 cursor-pointer">Thư viện</li>
          <li className="hover:text-orange-400 cursor-pointer">Đánh Giá</li>
          <li className="hover:text-orange-400 cursor-pointer">Liên hệ</li>
        </ul>
        <div className="flex item-center gap-x-2">
          <button>Sáng tối</button>
          <button>Tìm kiếm</button>
          <button>User</button>
        </div>
      </nav>
    </header>
  );
}
