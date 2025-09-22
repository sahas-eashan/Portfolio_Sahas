import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from '@/components/common/ThemeProvider';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sahas Eashan | Electronic & Telecommunication Engineer",
  description: "Electronic & Telecommunication Engineering student at University of Moratuwa. Passionate about robotics, AI, and hardware design. CGPA: 3.92/4.0",
  keywords: [
    "Sahas Eashan",
    "Electronic Engineering",
    "Telecommunication",
    "Robotics",
    "AI",
    "Hardware Design",
    "University of Moratuwa",
    "Sri Lanka",
    "Portfolio",
    "Engineer"
  ],
  authors: [{ name: "Sahas Eashan" }],
  creator: "Sahas Eashan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sahas-eashan.github.io/sahas-portfolio-pro",
    title: "Sahas Eashan | Electronic & Telecommunication Engineer",
    description: "Electronic & Telecommunication Engineering student passionate about robotics, AI, and hardware design.",
    siteName: "Sahas Eashan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahas Eashan | Electronic & Telecommunication Engineer",
    description: "Electronic & Telecommunication Engineering student passionate about robotics, AI, and hardware design.",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
