import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Leonardo Chimal | Engineering Student, CAD Designer & Software Developer',
  description:
    'Portfolio of Leonardo Chimal — engineering student at Black Hawk College with experience in CAD-driven prototyping, robotics, mechanical design, embedded electronics, software development, AWS, and Terraform.',
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
