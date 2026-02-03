import type { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";
import "./globals.css";
import { WipBanner } from "@/components/layout/WipBanner";
import { Header } from "@/components/layout/Header";
import { Toaster } from "sonner";
import { LanguageProvider } from "@/components/features/language-provider";
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
        <LanguageProvider>
          <WipBanner />
          <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-3 py-4 sm:px-4 sm:py-6 lg:px-8">
            <div className="overflow-visible rounded-2xl border border-[var(--border)] bg-[var(--panel)] shadow-[var(--shadow)] sm:rounded-3xl">
              <Header />

              <main className="px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8">{children}</main>
            </div>
          </div>

          <Toaster position="top-center" />
        </LanguageProvider>
      </body>
    </html>
  );
}
