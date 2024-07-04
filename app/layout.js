import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ChaiFund - Empowering Creators, One Cup at a Time",
  description:
    "ChaiFund is a dedicated crowdfunding platform designed to fuel the creativity of innovators and creators. Join us to bring your projects to life with the support of a vibrant community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white`}>
        <SessionWrapper>
          <Navbar />
          <div className="min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
            {children}
          </div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
