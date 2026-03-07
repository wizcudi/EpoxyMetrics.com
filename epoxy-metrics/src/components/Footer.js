import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 bg-mainColor text-darkColor border-t border-accentColor pb-8 pt-12 md:pt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

        {/* Area 1: Bio & Socials */}
        <div className="flex flex-col items-start gap-4">
          <div className="relative w-12 h-12 mb-2 cursor-pointer">
            {/* Using the logo with words for the footer if available, or fallback to the icon */}
            <Image
              src="/images/Epoxy-Logo-No-Words.png"
              alt="Epoxy Metrics Logo"
              fill
              className="
                object-contain object-left rounded-full
                border-2 border-accentColor 
              "
            />
          </div>
          <p className="text-paragraphSizeMobile  leading-relaxed">
            A complete, done-for-you machine that fills your calendar with highly-qualified jobs. We handle the traffic, the leads, and the automated follow-up while you focus on pouring floors.
          </p>

          <div className="flex gap-4 mt-2">
            {/* Facebook */}
            <a href="https://www.facebook.com/profile.php?id=61587279270074" target="_blank" rel="noreferrer" className="bg-lightColor/10 p-2 rounded-full hover:bg-accentColor transition-colors group">
              <svg className="w-5 h-5 fill-accentColor group-hover:fill-white" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://instagram.com/epoxymetrics" target="_blank" rel="noreferrer" className="bg-lightColor/10 p-2 rounded-full hover:bg-accentColor transition-colors group">
              <svg className="w-5 h-5 fill-accentColor group-hover:fill-white" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/thankyouamour/" target="_blank" rel="noreferrer" className="bg-lightColor/10 p-2 rounded-full hover:bg-accentColor transition-colors group">
              <svg className="w-5 h-5 fill-accentColor group-hover:fill-white" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Area 2: Quick Links */}
        <div className="flex flex-col md:items-center">
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-paragraphSizeTablet ">Quick Links</h3>
            <div className="flex flex-col gap-3">
              <Link href="#portfolio" className="hover:text-accentColor transition-colors hover:translate-x-1 duration-200">
                Portfolio
              </Link>
              <Link href="#pricing" className="hover:text-accentColor transition-colors hover:translate-x-1 duration-200">
                Our Offer
              </Link>
              <Link href="#contact" className="hover:text-accentColor transition-colors hover:translate-x-1 duration-200">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Area 3: Contact Info */}
        <div className="flex flex-col md:items-end">
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-paragraphSizeTablet text-left md:text-right">Contact</h3>
            <div className="flex flex-col gap-3 text-left md:text-right">
              <a href="tel:5551234567" className="hover:text-accentColor transition-colors group flex items-center md:flex-row-reverse gap-2">
                <svg className="w-4 h-4 text-accentColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (689) 500-2300
              </a>
              <a href="mailto:tony@epoxymetrics.com" className="hover:text-accentColor transition-colors group flex items-center md:flex-row-reverse gap-2">
                <svg className="w-4 h-4 text-accentColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                tony@epoxymetrics.com
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className=" text-center text-paragraphSizeMobile">
        © {currentYear} Epoxy Metrics. All rights reserved.
      </div>
    </footer>
  );
}