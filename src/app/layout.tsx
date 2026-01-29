import type { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";
import "./globals.css";
import { WindowControls } from "@/components/features/window-controls";
import { LinkComponent } from "@/components/common/link-component";
import { Toaster } from "sonner";
import { LanguageProvider } from "@/components/features/language-provider";
import { LanguageSwitcher } from "@/components/features/language-switcher";
import Script from "next/script";

const uiSans = Sofia_Sans({
  variable: "--font-ui",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kamil Kazaniecki | Fullstack Developer & Product Creator",
  description:
    "Personal portfolio and studio. I build high-performance web apps with React, Next.js, and modern UI tools.",
  metadataBase: new URL("https://kznlabs.com"),
  openGraph: {
    title: "Kamil Kazaniecki | Fullstack Developer & Product Creator",
    description:
      "Personal portfolio and studio. I build high-performance web apps with React, Next.js, and modern UI tools.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Kamil Kazaniecki | Fullstack Developer & Product Creator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamil Kazaniecki | Fullstack Developer & Product Creator",
    description:
      "Personal portfolio and studio. I build high-performance web apps with React, Next.js, and modern UI tools.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={uiSans.variable}>
      <head>
        <link rel="preconnect" href="https://placehold.co" />
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="e89c8322-64cb-4197-bbe8-76e33de54486"
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased bg-[image:linear-gradient(var(--background),var(--background))]">
        <div className="sticky top-0 z-50 border-b border-yellow-600/30 bg-yellow-500/15 px-3 py-1.5 text-center backdrop-blur-sm sm:px-4 sm:py-2">
          <p className="text-[10px] font-medium uppercase tracking-wide text-yellow-800 sm:text-xs sm:tracking-wider">
            Work in Progress - Portfolio under active development
          </p>
        </div>

        <LanguageProvider>
          <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-3 py-4 sm:px-4 sm:py-6 lg:px-8">
            <div className="overflow-visible rounded-2xl border border-[var(--border)] bg-[var(--panel)] shadow-[var(--shadow)] sm:rounded-3xl">
              <header className="relative flex items-center justify-between border-b border-[var(--border)] px-3 py-3 sm:px-5 sm:py-4">
                <WindowControls />

                <div className="absolute left-1/2 hidden -translate-x-1/2 text-sm font-semibold text-[var(--foreground)]/80 sm:block">
                  kznlabs.com
                </div>

                <nav className="flex items-center gap-2 text-xs text-[var(--muted)] sm:gap-3 sm:text-sm">
                  <LanguageSwitcher />

                  <LinkComponent href="https://github.com/kkazzann" className="hidden sm:inline-flex">
                    GitHub
                  </LinkComponent>

                  <LinkComponent
                    href="https://discordapp.com/users/205983099647950848"
                    className="hidden sm:inline-flex"
                  >
                    Discord
                  </LinkComponent>
                </nav>
              </header>

              <main className="px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8">{children}</main>
            </div>
          </div>

          <Toaster position="top-center" />
        </LanguageProvider>
      </body>
    </html>
  );
}
