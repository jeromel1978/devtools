"use client";
// import './globals.css'
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../themes/theme";

export const metadata = {
  title: "DevTools",
  description: "DevTools including UUID Generator, JSON Formatter",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta property="og:title" content={metadata.title} key="title" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
      </Head>
      <body className="m-0 p-0">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
