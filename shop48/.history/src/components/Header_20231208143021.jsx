"use client";

import { Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { useRef } from "react";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const menuRef = useRef();
  const handleOpenMenu = () => {
    if (menuRef.current.classList.contains("max-h-fit")) {
      menuElement.style.maxHeight = "0";
      menuElement.classList.remove("max-h-fit");
    } else {
      menuRef.current.classList.add("max-h-fit");
    }
  };
  return (
    <header>
      <nav className="max-w-screen-md fixed inset-x-0 bg-black bg-opacity-70 p-6 text-white flex flex-wrap justify-between items-center select-none md:flex-nowrap md:max-w-full">
        <button
          type="button"
          className="flex items-center md:hidden"
          onClick={handleOpenMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div className="text-2xl font-bold">
          <span className="text-orange-400">S</span>
          TRAVEL
        </div>
        <ul
          className={
            "max-h-0 flex overflow-hidden transition-[height] duration-300 flex-col order-4 text-lg gap-x-4 w-full md:flex md:flex-row md:order-1 md:w-f md:items-center md:justify-center md:flex md:max-h-fit"
          }
          ref={menuRef}
        >
          <li className="hover:text-orange-400 cursor-pointer p-4">
            Trang chủ
          </li>
          <li className="hover:text-orange-400 cursor-pointer p-4">Đặt lịch</li>
          <li className="hover:text-orange-400 cursor-pointer p-4">Ưu đãi</li>
          <li className="hover:text-orange-400 cursor-pointer p-4">Dịch Vụ</li>
          <li className="hover:text-orange-400 cursor-pointer p-4">Thư viện</li>
          <li className="hover:text-orange-400 cursor-pointer p-4 text-left">
            Đánh Giá
          </li>
          <li className="hover:text-orange-400 cursor-pointer p-4 text-left">
            Liên hệ
          </li>
        </ul>
        <div className="flex items-center gap-x-2 md:order-2">
          <Button
            onClick={toggleColorMode}
            background={"transparent"}
            color={"white"}
            variant="link"
          >
            {colorMode === "light" ? (
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
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            ) : (
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
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            )}
          </Button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
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
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
