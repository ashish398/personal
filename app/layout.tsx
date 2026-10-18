import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "ashish jain",
  description:
    "founding engineer working on machine learning for biomedical sciences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="page">{children}</div>
      </body>
    </html>
  );
}
