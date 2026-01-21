export default function Problem() {
  return (
    <section className="w-full bg-light-dark py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Stop Relying on "Word of Mouth" & Facebook DMs</h2>
        
        <div className="bg-light p-10 rounded-3xl shadow-lg border border-primary/10">
          <p className="text-2xl leading-relaxed text-gray-800">
            "You charge thousands for a garage floor, but your website looks like it was built in 2010. <strong>High-end homeowners judge your business by your website before they ever call you.</strong>"
          </p>
          
          <div className="mt-10 pt-10 border-t border-gray-100 grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="font-bold text-primary mb-2">The DIY / Cheap Way:</h4>
              <ul className="space-y-2 text-sm">
                <li>❌ Slow loading speeds (customers leave)</li>
                <li>❌ Looks broken on iPhones</li>
                <li>❌ Confusing layout that kills quotes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">The Metric Way:</h4>
              <ul className="space-y-2 text-sm">
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