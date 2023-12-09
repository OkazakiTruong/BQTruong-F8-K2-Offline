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
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
