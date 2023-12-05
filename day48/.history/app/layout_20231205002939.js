import Header from "./common/Header";
import { ChakraProvider } from "@chakra-ui/react";

export const metadata = {
  title: "Portfolio Truong",
  description: "Welcome to my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <ChakraProvider>
      <html lang="en">
        <body>
          <Header />
          {children}
        </body>
      </html>
    </ChakraProvider>
  );
}
