"use client";
import "./globals.css";
import Head from "next/head";
import { useState, useEffect } from "react";

const metadata = {
  title: "DevTools",
  description: "DevTools including UUID Generator, JSON Formatter",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta property="og:title" content={metadata.title} key="title" />
        <link rel="icon" href="favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="favicon.svg" type="image/svg+xml" />
      </Head>
      <body className="m-0 p-0">{children}</body>
    </html>
  );
}
