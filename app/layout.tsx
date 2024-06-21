import type { Metadata } from "next";
import { Inter, Poppins, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });
export const metadata: Metadata = {
  title: "EcommerceBuilder",
  description: "Basic dashboard with Next.js and Shadcn",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className} overflow-hidden`}>{children}</body>
    </html>
  );
}
