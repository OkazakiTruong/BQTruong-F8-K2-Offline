"use client";
import "./header.scss";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("red.500", "red.200");
  const color = useColorModeValue("white", "red.800");
  return (
    <header>
      <div className="header-container" bg={bg} color={color}>
        <div className="logo-wrapper">
          <div className="logo">
            <img src="/img/avatar.png" alt="" />
          </div>
          <div className="name">Portfolio</div>
        </div>
        <div className="btn-groups">
          <button>facebook</button>
          <button>Sáng Tối</button>
          <button onClick={toggleColorMode}>
            {colorMode === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </div>
    </header>
  );
}
