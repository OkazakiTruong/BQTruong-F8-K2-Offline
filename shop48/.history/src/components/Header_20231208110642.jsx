"use client";

export default function Header() {
  return (
    <header>
      <nav className="bg-black bg-opacity-50 p-6 text-white flex justify-between item-center select-none">
        <div className="text-2xl font-bold">
          <span className="text-orange-400">S</span>
          TRAVEL
        </div>
        <ul className="flex item-center text-xl gap-x-4">
          <li className="hover:text-orange-400">Trang chủ</li>
          <li className="hover:text-orange-400">Đặt lịch</li>
          <li className="hover:text-orange-400">Ưu đãi</li>
          <li className="hover:text-orange-400">Dịch Vụ</li>
          <li className="hover:text-orange-400">Thư viện</li>
          <li className="hover:text-orange-400">Đánh Giá</li>
          <li className="hover:text-orange-400">Liên hệ</li>
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
