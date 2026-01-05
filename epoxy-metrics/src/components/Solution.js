import Link from "next/link";

export default function Solution() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold ">One Simple Growth Partner</h2>
          <p className=" mt-4 max-w-2xl mx-auto">
            Stop paying for "websites" that sit there doing nothing. 
            Invest in a managed system that actually brings you work.
          </p>
        </div>

        {/* The Single "Grand Slam" Offer Card */}
        <div className="max-w-4xl mx-auto bg-dark rounded-3xl overflow-hidden relative">
          
          {/* Badge */}
          <div className="bg-primary text-light text-center py-2 font-bold tracking-widest text-sm uppercase">
            Most Popular For Contractors
          </div>

          <div className="flex flex-col md:flex-row">
            
            {/* Left Side: The Value Stack */}
            <div className="p-8 md:p-12 md:w-3/5 border-b md:border-b-0 ">
              <h3 className="text-3xl font-bold text-light mb-2">The Growth Engine</h3>
              <p className="text-light-dark mb-8">
                Everything you need to dominate your local market. We build the system, run the ads, and track the results.
              </p>

              <div className="space-y-6">
                
                {/* Feature 1 */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-light-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 text-primary ">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                  </div>
                  <div>
                    <h4 className="text-light font-bold text-lg">High-Converting Landing Page</h4>
                    <p className="text-light-dark text-sm">Custom built. Lightning fast. Designed to get quotes, not just views. 
                      <span className="text-alt font-bold"> 
                        Included Free.
                      </span>
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-alt/10 rounded-lg flex items-center justify-center flex-shrink-0 text-alt ">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                  </div>
                  <div>
                    <h4 className="text-light font-bold text-lg">Google & FB Ads Management</h4>
                    <p className="text-light-dark text-sm">We manage your budget, kill losing ads, and scale the winners daily.</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-alt-3/10 rounded-lg flex items-center justify-center flex-shrink-0 text-alt-3 font-bold">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-light font-bold text-lg">Asset Ownership Guarantee</h4>
                    <p className="text-light-dark text-sm">No contracts. If you cancel, <strong className="text-light">you keep the landing page.</strong> It's 100% yours.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Side: Pricing & CTA */}
            <div className="p-8 md:p-12 md:w-2/5 flex flex-col justify-center ">
              <div className="text-center">
                <p className="text-light-dark font-medium mb-2">Monthly Management</p>
                <div className="text-5xl font-extrabold text-light mb-2">$500<span className="text-xl text-light font-normal">/mo</span></div>
                <div className="text-alt text-sm font-bold mb-8 flex justify-center items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-alt animate-pulse"></span>
                  Includes Landing Page Build
                </div>

                <Link 
                  href="#contact" 
                  className="block w-full bg-primary hover:bg-primary-dark text-light font-bold py-4 rounded-xl text-lg transition shadow-lg shadow-primary/25 mb-6"
                >
                  Start Scaling Now
                </Link>

                <p className="text-sm text-light-dark leading-relaxed">
                  *Plus your actual ad budget paid directly to Google/Facebook. We recommend starting with $1,000/mo ad spend.
                </p>
              </div>
            </div>

          </div>
        </div>

        

      </div>
    </section>
  );
}