import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import ThemeButton from "@/components/theme-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body className={`${inter.className} min-h-screen`}>
        <Providers>
          {/* Header */}
          <header className="py-6">
            <nav className="container flex items-center justify-between">
              <div className=" dark:bg-red-600 bg-blue-800 dark:hover:bg-zinc-700">
                proof theme switcher
              </div>
              <ThemeButton />
            </nav>
          </header>

          {/* Page */}
          <main>{children}</main>

          {/* Footer */}
          <footer></footer>
        </Providers>
      </body>
    </html>
  );
}
