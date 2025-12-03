import { Geist, Geist_Mono } from "next/font/google";
import "./MainLayout.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} main-layout`}>
      <header className="main-header">
        <h1>My Blog</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
        </nav>
      </header>
      <main className="main-content">
        {children}
      </main>
      <footer className="main-footer">
        <p>© {new Date().getFullYear()} My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}