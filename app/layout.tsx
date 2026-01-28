import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ronak Chordia | Portfolio",
  description: "Full-stack developer, ML enthusiast, and tech innovator. Building production-grade systems with AI/ML.",
  keywords: ["Ronak Chordia", "Portfolio", "Full Stack Developer", "Machine Learning", "AI", "NLP"],
  authors: [{ name: "Ronak Chordia" }],
  openGraph: {
    title: "Ronak Chordia | Portfolio",
    description: "Full-stack developer, ML enthusiast, and tech innovator.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
