import type { Metadata } from "next";
import "../styles/globals.css";
import Nav from "./components/Nav";

export const metadata: Metadata = {
  title: "Ashish Jain",
  description:
    "Ashish Jain, Research Engineer at Sarvam AI. Post-training, reinforcement learning and agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* apply the saved theme before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t==="pbd")document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
      </head>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
