"use client";
import { Box, useColorMode, useColorModeValue, Text } from "@chakra-ui/react";
import { usePathname } from "@/navigation";
import { Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "@/navigation";
export default function Header({ locale }) {
  const pathname = usePathname();
  useEffect(() => {
    console.log(pathname);
  });
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "#1A202C");
  return (
    <header className="select-none fixed top-0 left-0 w-full">
      <Box filter="auto" blur="2px" className=" pt-[20px] pb-[20px] ">
        <nav className="flex justify-between items-center max-w-[1250px] mx-auto pl-[25px] pr-[25px] text-sky-500">
          <div className="flex items-center ">
            <div className="flex items-center gap-x-[10px] mr-[20px]">
              {/* <img src="/img/logo_me.png" alt="logo.png" className="w-[40px]" /> */}
              <h1 className="text-2xl font-bold">
                <Link href="/">
                  <Text
                    bgGradient="linear(to-l, #7fdcff, #095fa0)"
                    bgClip="text"
                    fontSize="2xl"
                    fontWeight="extrabold"
                  >
                    Bùi Quang Trưởng
                  </Text>
                </Link>
              </h1>
            </div>
            <ul className="flex items-center gap-x-[16px] font-semibold text-xl">
              <li className="cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">Contact</li>
              <li className="cursor-pointer">
                <Link href="/profile">Profile</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-x-[14px] text-xl">
            <button>
              <i className="fa-brands fa-facebook"></i>
            </button>
            <button>
              <i className="fa-brands fa-github"></i>
            </button>
            <button>
              <Link href="/auth">
                <i className="fa-solid fa-user"></i>
              </Link>
            </button>
            <Button
              onClick={toggleColorMode}
              colorScheme="blue"
              variant="ghost"
            >
              {colorMode === "light" ? (
                <i className="fa-solid fa-moon"></i>
              ) : (
                <i className="fa-solid fa-sun"></i>
              )}
            </Button>
            {locale === "vi" ? (
              <Link
                href={pathname}
                locale="en"
                className="py-[10px] px-[20px] bg-sky-300 flex rounded-[10px] text-white items-center justify-center text-base"
                scroll={false}
              >
                en
              </Link>
            ) : (
              <Link
                href={pathname}
                locale="vi"
                className="bg-sky-300 py-[10px] px-[20px] flex items-center text-white justify-center rounded-[10px] text-base"
                scroll={false}
              >
                vi
              </Link>
            )}
          </div>
        </nav>
      </Box>
    </header>
  );
}
