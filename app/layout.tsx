import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thura Naing | Full Stack Web Developer",
  description:
    "Portfolio for Thura Naing, a Yangon-based full-stack web developer specializing in Laravel, React, Next.js, Vue, REST APIs, dashboards, and business platforms.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
