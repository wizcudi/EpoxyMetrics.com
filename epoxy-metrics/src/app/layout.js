import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Epoxy Metrics | Digital Marketing Analytics",
  description: "Data-driven marketing solutions for Epoxy Flooring Contractors.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
      {/* Remember to add your real GTM ID below later */}
      <GoogleTagManager gtmId="GTM-XYZ123" />
    </html>
  );
}