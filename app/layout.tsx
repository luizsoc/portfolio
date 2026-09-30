import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SkipLink } from "@/app/components/ui/SkipLink";
import { SideNav } from "@/app/components/layout/SideNav";
import { MobileNav } from "@/app/components/layout/MobileNav";
import { Footer } from "@/app/components/layout/Footer";
import { LanguageProvider } from "@/app/components/providers/LanguageProvider";
import { profile } from "@/app/lib/content/profile";
import { dictionaries } from "@/app/lib/i18n/dictionaries";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luizsoc.vercel.app"),
  title: {
    default: dictionaries.en.meta.title,
    template: `%s | ${profile.name}`,
  },
  description: dictionaries.en.meta.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <LanguageProvider>
          <SkipLink />
          <SideNav />
          <MobileNav />
          <main id="main-content" className="flex-1 pt-16 lg:pt-0 lg:pl-24">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
