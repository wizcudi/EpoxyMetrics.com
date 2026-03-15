export default function Hero() {
  const statCards = [
    {
      featured: true,
      icon: "◇",
      label: "Risk-Free Guarantee",
      value: "Full deposit refund if no sale in 30 Days",
    },
    {
      icon: "△",
      label: "Deposit to Start",
      value: "$500 — That's It",
    },
    {
      icon: "○",
      label: "Our Commission",
      value: "10% — We earn when you earn",
    },
    {
      icon: "■",
      label: "Service Area",
      value: "Epoxy Pros Across the USA",
    },
  ];

  return (
    <section className="bg-navy px-[5%] py-20 min-h-[88vh] flex items-center">
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[72px] items-center">

        {/* Left: Headline */}
        <div>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/35 text-goldLight text-[11px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded mb-6 font-brand">
            Epoxy Revenue Engine
          </div>

          <h1 className="font-serif font-bold text-white leading-[1.12] mb-5 text-[clamp(34px,4vw,54px)]">
            Fill Your Calendar With{" "}
            <em className="not-italic text-gold">Qualified Jobs</em>
          </h1>

          <p className="text-[16px] text-white/60 leading-[1.75] mb-9 max-w-[480px] font-brand">
            A complete, done-for-you system built exclusively for{" "} 
            <em className="not-italic text-gold">Epoxy Flooriny Contractors</em>. 
            We handle the ads, the leads, and the follow-up. You just show up and pour.
          </p>

          <div className="flex gap-4 items-center flex-wrap">
            <a
              href="#contact"
              className="bg-gold text-navy text-[14px] font-bold px-7 py-3.5 rounded hover:bg-goldLight transition-colors font-brand"
            >
              Start Your Engine →
            </a>
            <a
              href="#offer"
              className="text-white/60 text-[14px] font-medium hover:text-goldLight transition-colors font-brand"
            >
              See What&apos;s Included
            </a>
          </div>
        </div>

        {/* Right: Stat Cards */}
        <div className="flex flex-col gap-3.5">
          {statCards.map((card, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 rounded-lg px-5 py-4.5 border font-brand ${
                card.featured
                  ? "bg-gold/7 border-gold/45"
                  : "bg-white/5 border-gold/20"
              }`}
            >
              <div className="w-10 h-10 bg-gold/12 rounded-lg flex items-center justify-center text-gold text-lg flex-shrink-0">
                {card.icon}
              </div>
              <div>
                <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-white/35 mb-0.5">
                  {card.label}
                </div>
                <div
                  className={`text-[15px] font-semibold ${
                    card.featured ? "text-goldLight" : "text-white"
                  }`}
                >
                  {card.value}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
