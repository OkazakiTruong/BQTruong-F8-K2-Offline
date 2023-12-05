"use client";
import "./header.scss";
import { useColorMode } from "@chakra-ui/react";
export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <div className="header-container">
        <div className="logo-wrapper">
          <div className="logo">
            <img src="/img/avatar.png" alt="" />
          </div>
          <div className="name">Portfolio</div>
        </div>
        <div className="btn-groups">
          <button>facebook</button>
          <button>Sáng Tối</button>
        </div>
      </div>
    </header>
  );
}
