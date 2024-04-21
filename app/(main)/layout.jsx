import { Inter } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-[1440px] m-auto p-5">
          <Navbar />
          {children}
        </main>

      </body>
    </html>
  );
}
