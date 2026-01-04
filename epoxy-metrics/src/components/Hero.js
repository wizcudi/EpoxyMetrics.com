import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center px-6 py-20 max-w-4xl mx-auto">
      <div className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-blue-100">
        For Epoxy Flooring Contractors Only
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6">
        Stop Guessing. <br />
        <span className="text-blue-600">Start Scaling.</span>
      </h1>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
        We turn your flooring leads into actionable data. Track every click, 
        call, and quote request so you never waste another dollar on ads that don't work.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
        <Link 
          href="#contact" 
          className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 text-center"
        >
          Get Your Free Audit
        </Link>
        <button className="bg-gray-100 text-gray-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-200 transition text-center">
          How It Works
        </button>
      </div>
    </section>
  );
}