import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center px-6 py-20 max-w-4xl mx-auto">
      <div className="bg-primary-light text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-blue-100">
        For Epoxy Flooring Contractors Only
      </div>
      <h1 className=" text-4xl md:text-6xl font-extrabold mb-6">
        Fill Your Calendar <br />
        <span className="text-primary">With High Quality Jobs.</span>
      </h1>
      <p className="text-xl mb-10 max-w-2xl leading-relaxed">
        Stop letting your flooring leads vanish into a <strong>Black Hole</strong>. I'll build your 
        high converting landing page, manage your ads and you only pay for 
        what actually brings in quotes. <strong>No contracts, just more floors to pour.</strong>
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
        <Link 
          href="#contact" 
          className="bg-primary text-light px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary-dark transition shadow-lg shadow-primary-light text-center"
        >
          Get Your Growth Blueprint
        </Link>
        <Link href="#pricing" className="cursor-pointer bg-light-dark text-primary-dark px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary-dark hover:text-light-dark transition text-center">
          How It Works
        </Link>
      </div>
    </section>
  );
}