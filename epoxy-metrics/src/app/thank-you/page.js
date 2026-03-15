import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-navy flex flex-col font-brand">

      {/* Minimal Nav */}
      <nav className="px-[5%] h-16 flex items-center border-b border-gold/20">
        <div className="text-lg font-bold text-white font-serif tracking-wide">
          Epoxy<span className="text-gold">Metrics</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center px-[5%] py-20">
        <div className="max-w-[600px] w-full text-center">

          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative w-24 h-24 flex items-center justify-center bg-gold/10 border border-gold/30 rounded-full">
              <svg
                className="w-11 h-11 text-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                  className="animate-draw"
                />
              </svg>
              <div className="absolute inset-0 rounded-full border-2 border-gold/20 animate-ping" />
            </div>
          </div>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/35 text-goldLight text-[11px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded mb-5">
            Application Received
          </div>

          {/* Heading */}
          <h1 className="font-serif font-bold text-white text-[clamp(32px,4vw,50px)] leading-[1.12] mb-4">
            You&apos;re In. We&apos;ll Be<br />
            <em className="not-italic text-gold">In Touch Shortly.</em>
          </h1>

          <p className="text-[16px] text-white/55 leading-[1.75] mb-10 max-w-[460px] mx-auto">
            Thanks for reaching out. We&apos;ve received your application and will
            review your business. Expect to hear from us within 24 hours.
          </p>

          {/* Next Steps Card */}
          <div className="bg-white/4 border border-gold/20 rounded-xl p-8 text-left mb-8">
            <h3 className="text-[11px] font-bold tracking-[0.1em] uppercase text-gold mb-5">
              What Happens Next
            </h3>
            <div className="flex flex-col gap-4">
              {[
                "We'll review your current digital presence and market.",
                "We'll draft a preliminary growth strategy for your business.",
                "Expect an email from tony@epoxymetrics.com within 24 hours.",
              ].map((step, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-[22px] h-[22px] rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center text-gold text-[11px] font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-[14px] text-white/70 leading-[1.65]">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="bg-gold text-navy text-[14px] font-bold px-7 py-3.5 rounded hover:bg-goldLight transition-colors"
            >
              ← Back to Home
            </Link>
            <a
              href="https://instagram.com/epoxymetrics"
              target="_blank"
              rel="noreferrer"
              className="border border-gold/30 text-white/60 text-[14px] font-medium px-7 py-3.5 rounded hover:border-gold/60 hover:text-goldLight transition-colors flex items-center justify-center gap-2"
            >
              Follow on Instagram
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="px-[5%] py-6 border-t border-gold/12 text-center">
        <p className="text-[12px] text-white/22">
          &copy; {new Date().getFullYear()} Epoxy Metrics. All rights reserved.
        </p>
      </footer>

    </div>
  );
}
