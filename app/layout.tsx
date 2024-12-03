import "@/styles/globals.scss";
import clsx from "clsx";
import { Metadata, Viewport } from "next";
import "./styles.scss";

import { Providers } from "./providers";

import { Navbar } from "@/components/navbar";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <Navbar />
          {/* container mx-auto max-w-7xl pt-16 px-6 */}
          <main className="flex-grow">{children}</main>
          <footer className="w-full flex items-center justify-start p-10 bg-accentGreen-400">
            <h4 className="text-white">Контакты:</h4>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
