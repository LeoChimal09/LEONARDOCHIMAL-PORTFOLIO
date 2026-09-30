import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Leonardo Chimal | Software Developer & Engineering Student',
  description:
    'Portfolio of Leonardo Chimal: enterprise and full-stack software, local-business platforms, custom systems, robotics, CAD, and embedded engineering.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
