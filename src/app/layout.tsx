import type { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";
import "./globals.css";
import { WindowControls } from "@/components/ui/window-controls";
import { LinkComponent } from "@/components/ui/link-component";
import { Toaster } from "sonner";
import { LanguageProvider } from "@/components/ui/language-provider";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import Script from "next/script";

const uiSans = Sofia_Sans({
  variable: "--font-ui",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kamil Kazaniecki | Fullstack Developer & Product Creator",
  description: "Personal portfolio and studio. I build high-performance web apps with React, Next.js, and modern UI tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={uiSans.variable}>
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="e89c8322-64cb-4197-bbe8-76e33de54486"
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased bg-[var(--background)]">
        <LanguageProvider>
          <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8">
            <div className="overflow-visible rounded-3xl border border-[var(--border)] bg-[var(--panel)] shadow-[var(--shadow)]">
              <header className="relative flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
                <WindowControls />
                <div className="absolute left-1/2 -translate-x-1/2 text-sm font-semibold text-[var(--foreground)]/80">
                  kznlabs.com
                </div>
                <nav className="flex items-center gap-3 text-sm text-[var(--muted)]">
                  <LanguageSwitcher />
                  <LinkComponent href="https://github.com/">GitHub</LinkComponent>
                  <LinkComponent href="https://discord.com/">Discord</LinkComponent>
                </nav>
              </header>
              <main className="px-6 py-6 sm:px-8 sm:py-8">{children}</main>
            </div>
          </div>
          <Toaster position="top-center" />
        </LanguageProvider>
      </body>
    </html>
  );
}
