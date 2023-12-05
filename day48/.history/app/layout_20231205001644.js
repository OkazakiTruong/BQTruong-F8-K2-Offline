import Header from "./common/Header";
import "@/app/ui/style.scss";
export const metadata = {
  title: "Portfolio Truong",
  description: "Welcome to my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Header />
        {children}
      </body>
    </html>
  );
}
