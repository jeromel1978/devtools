"use client";
// import './globals.css'
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import ThemeLight from "../themes/light";
import ThemeDark from "../themes/dark";
import { useState } from "react";

export const metadata = {
  title: "DevTools",
  description: "DevTools including UUID Generator, JSON Formatter",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [DarkMode, setDarkMode] = useState<boolean>(window.matchMedia("(prefers-color-scheme: dark)").matches);
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta property="og:title" content={metadata.title} key="title" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
      </Head>
      <body className="m-0 p-0">
        <ThemeProvider theme={DarkMode ? ThemeDark : ThemeLight}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
