import Navbar from "@/app/_components/Navbar/Navbar";
import Sidebar from "@/app/_components/Sidebar/Sidebar";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/Providers/theme-provider";
import data from "@/public/sidebar.json";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Network Canvas Docs",
  description: "All Network Canvas Docs",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const sidebarData = JSON.parse(JSON.stringify(data));

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
            {sidebarData && <Sidebar data={sidebarData} />}
            <div className="col-span-3">{children}</div>
            {/* <div className="askai-frame-embed" data-id="PFf9dokivJtyplrK51qvt5Jfy1isaH"></div> */}
            <Script
              defer
              type="text/javascript"
              src="https://myaskai.com/ev-embed-chat-js-min"
              id="PFf9dokivJtyplrK51qvt5Jfy1isaH"
            />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
