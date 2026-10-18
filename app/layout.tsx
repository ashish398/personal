import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "ashish",
  description: "my summary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="md:max-w-[70%] mx-auto">
      <body>{children}</body>
    </html>
  );
}
