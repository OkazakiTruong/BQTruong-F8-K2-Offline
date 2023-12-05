"use client";
import "./header.scss";
import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "#1A202C");

  return (
    <header>
      <Box bg={bg} backdropFilter="auto" backdropBlur="8px">
        <div className="header-container">
          <div className="logo-wrapper">
            <div className="logo">
              <img src="/img/avatar.png" alt="" />
            </div>
            <div className="name">Portfolio</div>
          </div>
          <div className="btn-groups">
            <button>
              <i class="fa-brands fa-facebook"></i>
            </button>
            <button>
              <i class="fa-brands fa-github"></i>
            </button>
            <button onClick={toggleColorMode}>
              {colorMode === "light" ? (
                <i class="fa-solid fa-moon"></i>
              ) : (
                <i class="fa-solid fa-sun"></i>
              )}
            </button>
            <button>vi</button>
          </div>
        </div>
      </Box>
    </header>
  );
}
