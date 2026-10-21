import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig } from "@/data/site";
import { Navbar } from "@/components/nav/Navbar";
import { Footer } from "@/components/footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  metadataBase: new URL(siteConfig.canonicalUrl),
  keywords: [
    "Dev Darji", "Full Stack Developer", "MERN Developer", "Surat",
    "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "TypeScript",
    "SaaS Development", "AI Integration", "RAG", "Portfolio"
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteConfig.canonicalUrl,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased text-slate-100 bg-[#0b0f19] bg-grid-pattern min-h-screen selection:bg-blue-600 selection:text-white transition-colors duration-300 relative`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="relative z-10 w-full overflow-x-hidden min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
