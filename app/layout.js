import Header from "@/components/common/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SST - Seat Seeker",
  description: "Discover Your Perfect Seating Oasis!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-darkBG">{children}</main>
      </body>
    </html>
  );
}
