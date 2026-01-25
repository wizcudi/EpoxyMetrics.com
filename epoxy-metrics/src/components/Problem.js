export default function Problem() {
  return (
    <section className="w-full bg-light-dark py-8 px-6">
      <div className="max-w-4xl mx-auto ">
        
        
        <div className="bg-light py-10 px-7.5 rounded-3xl shadow-lg border border-primary/10">
          
          {/* H2: Scaled to match Hero hierarchy */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Your Landing Page Does The Selling
          </h2>
          
          {/* Quote/Sub-head: Scaled to be readable but distinct */}
          <p className="text-xl sm:text-2xl leading-relaxed text-gray-800">
            Word of mouth is great, but it’s unpredictable. Your business deserves a digital showroom that works 24/7 to build trust and capture paying clients, even while you’re on the job site.
          </p>
          
          <div className="mt-7 pt-7 border-t border-gray-300 grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="font-bold text-primary mb-2 text-lg sm:text-xl">The DIY / Cheap Way:</h4>
              {/* Lists increased from text-sm to text-base for readability */}
              <ul className="space-y-2 text-base">
                <li>❌ Slow loading speeds (customers leave)</li>
                <li>❌ Looks broken on iPhones</li>
                <li>❌ Confusing layout that kills quotes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2 text-lg sm:text-xl">The Metric Way:</h4>
              <ul className="space-y-2 text-base">
                <li>✅ Lightning fast (Google loves this)</li>
                <li>✅ Perfect mobile optimization</li>
                <li>✅ Designed specifically to get phone calls</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}