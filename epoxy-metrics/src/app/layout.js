import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });

// --- THIS IS THE NEW METADATA SECTION ---
export const metadata = {
  title: "Epoxy Metrics | Managed Marketing for Flooring Pros",
  description: "We help epoxy contractors fill their calendars with exclusive leads. Get your Growth Blueprint today.",
  
  // Social Media Previews (OpenGraph)
  openGraph: {
    title: "Epoxy Metrics | Managed Marketing for Flooring Pros",
    description: "Stop chasing tire-kickers. Get exclusive epoxy leads sent directly to your phone.",
    url: 'https://epoxymetrics.com',
    siteName: 'Epoxy Metrics',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* The component handles both the <head> and <body> requirements */}
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}