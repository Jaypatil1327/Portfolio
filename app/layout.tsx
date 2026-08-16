import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/helper/theme_provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Jayesh Patil | Full-Stack Developer & AI/ML Engineer",
  description:
    "Portfolio of Jayesh Patil — B.Tech Computer Science (AI & ML) student at VIT Bhopal. Full-stack developer with MERN & Next.js expertise, 512+ LeetCode solved problems, and published AI research.",
  keywords: [
    "Jayesh Patil",
    "Jayesh Patil Portfolio",
    "Full-Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "VIT Bhopal",
    "AI & ML Engineer",
    "LeetCode Problem Solver",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Jayesh Patil", url: "https://github.com/Jaypatil1327" }],
  creator: "Jayesh Patil",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jayeshpatil.dev",
    title: "Jayesh Patil | Full-Stack Developer & AI/ML Engineer",
    description:
      "Explore the portfolio, projects, and resume of Jayesh Patil — Full-Stack Developer & AI/ML undergraduate at VIT Bhopal.",
    siteName: "Jayesh Patil Portfolio",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`min-h-full flex flex-col font-sans ${inter.className} antialiased selection:bg-neutral-900 selection:text-white dark:selection:bg-neutral-100 dark:selection:text-black`}>
        <ThemeProvider
          attribute="class"
          enableSystem
          defaultTheme="system"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
