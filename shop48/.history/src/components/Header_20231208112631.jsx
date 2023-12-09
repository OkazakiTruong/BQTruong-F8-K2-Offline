"use client";

export default function Header() {
  return (
    <header>
      <nav className="fixed inset-x-0 bg-black bg-opacity-50 p-6 text-white flex justify-between item-center select-none">
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
        <div className="flex item-center gap-x-2 ">
          <button>sáng tối</button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          <button>Icon</button>
        </div>
      </nav>
    </header>
  );
}
