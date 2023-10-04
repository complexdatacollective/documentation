import { ThemeProvider } from "@/components/Providers/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";
import fs from "node:fs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Network Canvas Docs",
  description: "All Network Canvas Docs",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarData = await fs.promises
    .readFile("./public/sidebar.json", {
      encoding: "utf-8",
    })
    .then(JSON.parse);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="container grid grid-cols-5 items-start">
            <Sidebar data={sidebarData} />
            <div className="col-span-3">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
