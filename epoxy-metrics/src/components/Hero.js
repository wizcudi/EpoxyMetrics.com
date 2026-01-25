import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center px-4 sm:px-6 py-10 max-w-4xl mx-auto">
      <div className="bg-primary-light text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-blue-100">
        Web Design for Epoxy Flooring Contractors
      </div>
      <h1 className="text-4xl sm:text-6xl font-extrabold mb-6">
        Your Floors Are <span className="text-primary">Premium.</span> Is Your <span className="text-primary">Website?</span>
      </h1>
      <p className="text-xl mb-10 max-w-2xl leading-relaxed">
        I build landing pages that showcase your work and turn visitors into quotes.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
        <Link 
          href="#contact" 
          className="bg-primary text-light px-8 py-4 rounded-xl lg font-bold hover:bg-primary-dark transition shadow-lg shadow-primary-light text-center"
        >
          Start Getting More Quotes
        </Link>
        <Link href="#pricing" className="cursor-pointer bg-light-dark text-primary-dark px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary-dark hover:text-light-dark transition text-center">
          See What's Included
        </Link>
      </div>
    </section>
  );
}