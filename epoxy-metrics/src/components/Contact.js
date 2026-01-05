export default function Contact() {
  return (
    <section id="contact" className="w-full bg-dark text-light py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to fix your tracking?</h2>
        <p className="text-light-dark mb-8">
          Fill out the form below to request a free audit of your current website setup.
        </p>
        
        <form className="bg-light p-6 rounded-2xl text-left shadow-2xl text-dark space-y-4">
          <div>
            <label className="block text-sm font-bold mb-2">Name</label>
            <input type="text" className="w-full p-3 border border-dark rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="John Smith" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Business Name</label>
            <input type="text" className="w-full p-3 border border-dark rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Epoxy Pros LLC" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Email Address</label>
            <input type="email" className="w-full p-3 border border-dark rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="owner@example.com" />
          </div>
          <button className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary-dark cursor-pointer transition mt-4">
            Request Free Audit
          </button>
          
        </form>
      </div>
    </section>
  );
}