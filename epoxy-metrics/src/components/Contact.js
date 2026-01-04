export default function Contact() {
  return (
    <section id="contact" className="w-full bg-slate-900 text-white py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to fix your tracking?</h2>
        <p className="text-slate-300 mb-8">
          Fill out the form below to request a free audit of your current website setup.
        </p>
        
        <form className="bg-white p-6 rounded-2xl text-left shadow-2xl text-gray-900 space-y-4">
          <div>
            <label className="block text-sm font-bold mb-2">Business Name</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none" placeholder="Epoxy Pros LLC" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Email Address</label>
            <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none" placeholder="owner@example.com" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Website URL</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none" placeholder="www.yourwebsite.com" />
          </div>
          <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition mt-4">
            Request Free Audit
          </button>
          <p className="text-xs text-center text-gray-400 mt-2">
            No credit card required. We will reply within 24 hours.
          </p>
        </form>
      </div>
    </section>
  );
}