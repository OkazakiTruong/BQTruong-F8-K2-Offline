export const metadata = {
  title: "Portfolio Truong",
  description: "Portfolio ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>This is header</header>
        {children}
      </body>
    </html>
  );
}
