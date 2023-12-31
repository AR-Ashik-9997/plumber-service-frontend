import "./globals.css";
import type { Metadata } from "next";
import Providers from "../lib/Providers";
export const metadata: Metadata = {
  title: "Plumber Services",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
