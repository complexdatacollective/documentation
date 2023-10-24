import Navbar from "@/app/_components/Navbar/Navbar";
import Sidebar from "@/app/_components/Sidebar/Sidebar";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/Providers/theme-provider";
import AIAssistant from "@/components/ai-assistant";
import data from "@/public/sidebar.json";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
          <div className="container grid grid-cols-5 gap-5 items-start mt-8">
            {sidebarData && <Sidebar data={sidebarData} />}
            <div className="col-span-4 px-2">{children}</div>
            <AIAssistant />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
