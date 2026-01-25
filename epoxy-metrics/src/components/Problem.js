import Link from "next/link";

export default function Problem() {
  return (
    <section className="w-full bg-light-dark py-8 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-light py-10 px-7.5 rounded-3xl shadow-lg border border-primary/10">
          
          {/* H2: Scaled to match Hero hierarchy */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Your Landing Page Does The Selling
          </h2>
          
          {/* Quote/Sub-head */}
          <p className="text-xl sm:text-2xl leading-relaxed text-gray-800">
            Word of mouth is great, but it’s unpredictable. Your business deserves a digital showroom that builds trust and capture paying clients, even while you’re on the job site.
          </p>
          
          {/* --- NEW PORTFOLIO / SOCIAL PROOF SECTION --- */}
          <div className="mt-10 pt-10 border-t border-gray-300">
            
            
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8 border border-gray-200 transition-all hover:shadow-md">
              
              {/* Left Side: Mockup Placeholder (You can replace this with an actual screenshot Image later) */}
              <div className="w-full md:w-1/2 aspect-video bg-gray-200 rounded-lg overflow-hidden relative shadow-inner flex items-center justify-center border border-gray-300">
                <span className="text-gray-500 font-medium px-4 text-center">
                  [ Screenshot of Example Site ]
                </span>
              </div>

              {/* Right Side: Description & Link */}
              <div className="w-full md:w-1/2 text-left">
                
                <p className="text-gray-600 mb-6 text-base leading-relaxed">
                  Click below to view a real demo. Notice the mobile-perfect layout and lightning-fast load times.
                </p>
                
                {/* External Link to Firebase Hosted Site */}
                <Link 
                  href="https://YOUR-FIREBASE-URL.web.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-primary text-light px-6 py-3 rounded-lg font-bold hover:bg-primary-dark transition shadow-lg shadow-primary/30 w-full sm:w-auto"
                >
                  View Live Site
                  {/* External Link Icon */}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>

            </div>
          </div>
          {/* --- END NEW SECTION --- */}

        </div>
      </div>
    </section>
  );
}