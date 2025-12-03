import type { Metadata } from "next";
import { MainLayout } from "@/components/layouts/MainLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Blog",
  description: "A modern blog built with Next.js",
  icons: {
    icon: ['/favicon.ico?v=4'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
