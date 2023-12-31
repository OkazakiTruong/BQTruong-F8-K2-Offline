import Header from "@/components/Header";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "@/components/Footer";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import "reactflow/dist/style.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
export const metadata = {
  title: "Mindmap flow",
  description: "Công cụ vẽ mindmap",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <ToastContainer />
          <Header />
          {children}
          <Footer />
        </body>
      </UserProvider>
    </html>
  );
}
