import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

export const metadata = {
  title: "Epoxy Metrics | Speed to Lead — AI Appointment Setter for Epoxy Pros",
  description:
    "An AI-powered Voice Agent that answers every call, qualifies every lead, and books appointments on your calendar 24/7 — built exclusively for epoxy flooring contractors.",
  openGraph: {
    title: "Epoxy Metrics | AI Appointment Setter for Epoxy Pros",
    description:
      "Stop losing $3K–$10K jobs to missed calls. Get an AI Voice Agent that answers 24/7, qualifies leads, and books appointments automatically.",
    url: "https://epoxymetrics.com",
    siteName: "Epoxy Metrics",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
