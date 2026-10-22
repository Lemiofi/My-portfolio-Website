import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lemiofi Chalchisa — Software Engineer & Co-Founder of Liq Academy",
  description:
    "Official portfolio of Lemiofi Chalchisa — Software Engineer and Co-Founder of Liq Academy (an online education platform for Ethiopian universities). Combining technology, creativity, and education to build impactful digital solutions.",
  keywords: [
    "Lemiofi Chalchisa",
    "Software Engineer",
    "Co-Founder of Liq Academy",
    "Liq Academy",
    "Online Education Platform",
    "Ethiopian Universities",
    "Ethiopian Higher Education",
    "Web Development",
    "Digital Solutions",
    "Complaint Request Management System",
  ],
  authors: [{ name: "Lemiofi Chalchisa" }],
  creator: "Lemiofi Chalchisa",
  openGraph: {
    title: "Lemiofi Chalchisa — Software Engineer & Co-Founder of Liq Academy",
    description:
      "Combining technology, creativity, and strategy to build meaningful digital experiences and solutions.",
    url: "https://lemiofi.com",
    siteName: "Lemiofi Chalchisa Portfolio",
    locale: "en_US",
    type: "website",
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
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#0a0a0c] text-[#f4f0ea] antialiased selection:bg-[#d4d4d8] selection:text-[#0a0a0c]">
        {children}
      </body>
    </html>
  );
}
