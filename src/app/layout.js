import { Inter } from "next/font/google";
import "./globals.css";
import { TopNav } from "./_components/topnav";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextDrive",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
