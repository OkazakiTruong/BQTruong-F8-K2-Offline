"use client";

export default function Header() {
  return (
    <header>
      <nav className="bg-black bg-opacity-50 p-6 text-white flex justify-between">
        <div className="text-2xl font-bold">
          <span className="text-orange-500">S</span>
          TRAVEL
        </div>
        <ul className="flex text-xl gap-x-4">
          <li>Trang chủ</li>
          <li>Đặt lịch</li>
          <li>Ưu đãi</li>
          <li>Dịch Vụ</li>
          <li>Thư viện</li>
          <li>Đánh Giá</li>
          <li>Liên hệ</li>
        </ul>
        <div>
          <button>Sáng tối</button>
          <button>Tìm kiếm</button>
          <button>User</button>
        </div>
      </nav>
    </header>
  );
}
