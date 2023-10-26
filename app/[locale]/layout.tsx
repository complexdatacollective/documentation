import "@/app/[locale]/globals.css";
import { ThemeProvider } from "@/components/Providers/theme-provider";
import AIAssistant from "@/components/ai-assistant";
import data from "@/public/sidebar.json";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./_components/Navbar/Navbar";
import Sidebar from "./_components/Sidebar/Sidebar";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });
const locales = ["en", "ru"];

export const metadata: Metadata = {
  title: "Network Canvas Docs",
  description: "All Network Canvas Docs",
};

type RootLayoutProps = { children: React.ReactNode; params: { locale: string } };

export default async function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  const sidebarData = JSON.parse(JSON.stringify(data));

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="container grid grid-cols-5 gap-5 items-start mt-8">
            {sidebarData && <Sidebar data={sidebarData} locale={locale} />}
            <div className="col-span-4 px-2">{children}</div>
            <AIAssistant />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

// export function generateStaticParams() {
//   return locales.map((locale) => ({ locale }));
// }
