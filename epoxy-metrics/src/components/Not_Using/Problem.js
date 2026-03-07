import Link from "next/link";
import Image from "next/image"; // Optimization for images
import Section from "./Section";
import Button from "./Button";

export default function Problem() {
  return (
    <Section id="portfolio" variant="light">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

        {/* Left Column: Text Content */}
        <div className="w-full md:w-1/2 text-left space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full font-bold text-sm bg-mainColor/10 text-mainColor border border-mainColor/20">
            See The Difference
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Your Landing Page <br className="hidden md:block" />
            <span className="text-mainColor">Does The Selling.</span>
          </h2>

          <p className="text-lg text-darkColor/80 leading-relaxed">
            Word of mouth is great, but it’s unpredictable. Your business deserves a <span className="font-bold">24/7 digital showroom</span> that builds trust and captures paying clients, even while you’re on the job site.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button href="https://epoxy-demo-1.vercel.app/" target="_blank" variant="primary">
              View Live Demo
            </Button>
            <Button href="#contact" variant="outline">
              Get Your Build Slot
            </Button>
          </div>


        </div>

        {/* Right Column: Browser Mockup Visual */}
        <div className="w-full md:w-1/2 relative">

          {/* Decorative Blob behind the image */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-mainColor/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

          {/* CSS Browser Window Frame */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white border border-gray-200">
            {/* Browser Header Bar */}
            <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              {/* Fake URL Bar */}
              <div className="ml-4 flex-1 bg-white h-6 rounded-md text-[10px] flex items-center px-3 text-gray-400 font-sans">
                epoxy-demo-1.vercel.app
              </div>
            </div>

            {/* The Screenshot Image */}
            <div className="relative aspect-video group cursor-pointer">
              <Link href="https://epoxy-demo-1.vercel.app/" target="_blank">
                {/* Using standard img for simplicity, or next/image if configured */}
                <img
                  src="/images/Demo-Epoxy-Landing-Page.png"
                  alt="Epoxy Website Demo"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-darkColor/0 group-hover:bg-darkColor/10 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 bg-white px-4 py-2 rounded-full font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all text-sm">
                    Open Demo ↗
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Floating Stats Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-[bounce_3s_infinite]">
            <div className="w-10 h-10 rounded-full border border-mainColor bg-mainColor/20 flex items-center justify-center text-mainColor">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Speed Score</p>
              <p className="text-xl font-black text-darkColor">100%</p>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}