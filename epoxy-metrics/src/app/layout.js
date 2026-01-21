import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });

// --- UPDATED METADATA ---
export const metadata = {
  title: "Epoxy Metrics | High-Converting Websites for Flooring Pros",
  description: "We build custom, high-speed landing pages specifically for epoxy contractors. Stop losing leads to bad design.",
  
  // Social Media Previews (OpenGraph)
  openGraph: {
    title: "Epoxy Metrics | Web Design for Epoxy Pros",
    description: "Your work is premium. Your website should be too. Get a custom site built for conversion.",
    url: 'https://epoxymetrics.com',
    siteName: 'Epoxy Metrics',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}