import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DevTools",
  description: "DevTools including UUID Generator, JSON Formatter",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta property="og:title" content={metadata.title} key="title" />
        <link rel="icon" href="favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="favicon.svg" type="image/svg+xml" />
      </head>
      <body className="m-0 p-0">{children}</body>
    </html>
  );
}
