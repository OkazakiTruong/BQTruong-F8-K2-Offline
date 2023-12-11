"use client";
import { useColorMode } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link } from "@/navigation";
export default function Header({ locale }) {
  useEffect(() => {
    console.log(locale);
  });
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
        <div className="flex items-center gap-x-[16px] text-xl">
          <button>
            <i className="fa-brands fa-facebook"></i>
          </button>
          <button>
            <i className="fa-brands fa-github"></i>
          </button>
          <button>
            <i className="fa-solid fa-user"></i>
          </button>
          <Button onClick={toggleColorMode} colorScheme="blue" variant="ghost">
            {colorMode === "light" ? (
              <i className="fa-solid fa-moon"></i>
            ) : (
              <i className="fa-solid fa-sun"></i>
            )}
          </Button>
          {locale === "vi" ? (
            <Link href="/">vi</Link>
          ) : (
            <Link href="/">en</Link>
          )}
        </div>
      </nav>
    </header>
  );
}
