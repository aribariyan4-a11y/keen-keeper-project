import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TimelineProvider } from "./../context/TimelineContext";

export const metadata = {
  title: "Keen Keeper",
  description: "Friendship management app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <TimelineProvider>
          <Navbar />
          {children}
          <Footer />
          <ToastContainer position="top-right" />
        </TimelineProvider>
      </body>
    </html>
  );
}
