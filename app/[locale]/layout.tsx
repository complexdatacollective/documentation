import '@/app/[locale]/globals.css';
import { ThemeProvider } from '@/components/Providers/theme-provider';
import AIAssistant from '@/components/ai-assistant';
import { locales } from '@/locales.mjs';
import data from '@/public/sidebar.json';
import { type Messages, type SidebarData } from '@/types';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import {
  getNow,
  getTimeZone,
  unstable_setRequestLocale,
} from 'next-intl/server';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import Navbar from './_components/Navbar/Navbar';
import Sidebar from './_components/Sidebar/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Network Canvas Docs',
  description: 'All Network Canvas Docs',
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type MainLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function MainLayout({
  children,
  params: { locale },
}: MainLayoutProps) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  // setting setRequestLocale to support next-intl for static rendering
  unstable_setRequestLocale(locale);

  const now = await getNow(locale);
  const timeZone = await getTimeZone(locale);
  const sidebarData: SidebarData = JSON.parse(
    JSON.stringify(data),
  ) as SidebarData;

  let messages: Messages;

  try {
    messages =
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      (await import(`../../messages/${locale}.json`)).default as Messages;
  } catch (error) {
    notFound(); // redirecting to 404 page in case there's no translated locale json
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider
            timeZone={timeZone}
            now={now}
            locale={locale}
            messages={messages}
          >
            <Navbar />
            <div className="container mt-8 grid grid-cols-5 items-start gap-5">
              {sidebarData && <Sidebar data={sidebarData} locale={locale} />}
              <div className="col-span-4 px-2">{children}</div>
              <AIAssistant />
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
