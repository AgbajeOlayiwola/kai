

import Layout from "@/components/Layout";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from 'next/head';

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Creative Archival Project ",
  description: "The Creative Archival Project ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 
  return (
    <html lang="en">
      <Head>
         <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
      </Head>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
