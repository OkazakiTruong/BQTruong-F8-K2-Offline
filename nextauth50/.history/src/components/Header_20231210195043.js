"use client";
import { useColorMode } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header className=" pt-[20px] pb-[20px]  select-none ">
      <nav className="flex justify-between items-center max-w-[1250px] mx-auto pl-[25px] pr-[25px] text-sky-500">
        <div className="flex items-center ">
          <div className="flex items-center gap-x-[10px] mr-[20px]">
            {/* <img src="/img/logo_me.png" alt="logo.png" className="w-[40px]" /> */}
            <h1 className="text-2xl font-bold">Bùi Quang Trưởng</h1>
          </div>
          <ul className="flex items-center gap-x-[16px] font-semibold text-xl">
            <li>Home</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Profile</li>
          </ul>
        </div>
        <div className="flex gap-x-[16px] text-xl">
          <button>
            <i className="fa-brands fa-facebook"></i>
          </button>
          <button>
            <i className="fa-brands fa-github"></i>
          </button>
          <button>user</button>
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button>
          <button>En</button>
        </div>
      </nav>
    </header>
  );
}
