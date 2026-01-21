import Link from "next/link";

export default function Solution() {
  return (
    <section id="pricing" className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Outer Header Removed */}

        {/* The Offer Card */}
        <div className="max-w-4xl mx-auto bg-dark rounded-3xl overflow-hidden relative">
          
          <div className="flex flex-col md:flex-row">
            
            {/* Left Side: The Deliverables */}
            <div className="p-8 md:p-12 md:w-3/5 border-b md:border-b-0 ">
              {/* H2: Main Section Header */}
              <h2 className="text-3xl sm:text-4xl font-bold text-light mb-4">Custom Landing Page</h2>
              {/* Description Body Text */}
              <p className="text-light-dark mb-8 text-base sm:text-lg">
                A specialized website designed for one purpose: Convincing homeowners to request a quote.
              </p>

              <div className="space-y-8">
                
                {/* Feature 1 */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-light-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 text-primary ">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-light font-bold text-lg sm:text-xl">Mobile-First Design</h4>
                    <p className="text-light-dark text-base">80% of your customers are on their phones. Your site will look perfect on every device, guaranteed.</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-alt/10 rounded-lg flex items-center justify-center flex-shrink-0 text-alt ">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-light font-bold text-lg sm:text-xl">Speed Optimized</h4>
                    <p className="text-light-dark text-base">I code from scratch (no bulky site builders). Your site loads instantly, which improves your Google Ranking.</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-alt-3/10 rounded-lg flex items-center justify-center flex-shrink-0 text-alt-3 font-bold">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-light font-bold text-lg sm:text-xl">100% Ownership</h4>
                    <p className="text-light-dark text-base">Unlike marketing agencies that "rent" you a website, you own all the code and accounts. No hostage situations.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Side: Pricing & CTA */}
            <div className="p-8 md:p-12 md:w-2/5 flex flex-col justify-center bg-gray-900/50">
              <div className="text-center">
                <p className="text-light-dark font-medium mb-2 text-base">One-Time Design Fee</p>
                <div className="text-5xl sm:text-6xl font-extrabold text-light mb-2">$250</div>
                <div className="text-alt text-base font-bold mb-8 flex justify-center items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-alt animate-pulse"></span>
                  Fast 2-Day Turnaround
                </div>

                <Link 
                  href="#contact" 
                  className="block w-full bg-primary hover:bg-primary-dark text-light font-bold py-4 rounded-xl text-lg sm:text-xl transition shadow-lg shadow-primary/25 mb-6"
                >
                  Start My Build
                </Link>

                <p className="text-sm text-light-dark leading-relaxed">
                  Includes design, development, domain connection, and basic SEO setup.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}