export default function Contact() {
  return (
    <section id="contact" className="w-full bg-dark text-light py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        {/* Header Updated to match Growth Blueprint strategy */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Growth Blueprint</h2>
        <p className="text-light-dark mb-8 text-lg">
          I&apos;ll personally review your business and show you exactly how to fill your calendar with exclusive epoxy leads. <br></br> <strong>Zero pressure, just a plan.</strong>
        </p>
        
        <form className="bg-light p-8 rounded-3xl text-left shadow-2xl text-dark space-y-5">
          <div>
            <label className="block text-sm font-bold mb-2">Name</label>
            <input 
              type="text" 
              className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition" 
              placeholder="Your Name" 
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Business Name</label>
            <input 
              type="text" 
              className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition" 
              placeholder="Epoxy Pros LLC" 
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Email Address</label>
            <input 
              type="email" 
              className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition" 
              placeholder="owner@example.com" 
            />
          </div>
          
          <button className="w-full bg-primary text-white font-bold py-5 rounded-xl hover:bg-primary-dark cursor-pointer transition-all transform hover:scale-[1.02] mt-4 shadow-lg shadow-primary/30">
            Get My Growth Blueprint
          </button>
          
          <p className="text-center text-xs text-gray-400 mt-4">
            *I value your time. Our strategy session will be focused and fluff-free.
          </p>
        </form>
      </div>
    </section>
  );
}