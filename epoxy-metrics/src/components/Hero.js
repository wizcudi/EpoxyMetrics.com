export default function Hero() {
  const statCards = [
    {
      number: "< 2 sec",
      label: "Pickup Speed",
      sub: "Faster than any human",
    },
    {
      number: "24/7/365",
      label: "Always On",
      sub: "Books at 11pm just like 10am",
    },
    {
      number: "∞",
      label: "Concurrent Calls",
      sub: "1 or 50 at the same time",
    },
  ];

  return (
    <section className="pt-[140px] pb-[80px] relative overflow-hidden bg-[#0B0E11]">
      {/* Centered ambient glow */}
      <div
        className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(245,158,11,0.18) 0%, transparent 65%)" }}
      />

      <div className="max-w-[860px] mx-auto px-6 text-center relative">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[rgba(245,158,11,0.1)] border border-[rgba(245,158,11,0.22)] rounded-full px-4 py-1.5 text-[0.75rem] font-semibold text-[#FCD34D] tracking-[0.06em] uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] pulse-dot" />
          Speed to Lead Epoxy Appointment Setter
        </div>

        {/* Headline */}
        <h1 className="font-display text-[clamp(2.75rem,5.5vw,4.75rem)] leading-[1.06] font-bold tracking-[-0.03em] text-[#E8EAF0] mb-6">
          Stop Losing{" "}
          <span className="text-[#F59E0B]">$3K–$10K&nbsp;Jobs</span>
          <br />to Missed Calls
        </h1>

        {/* Subheadline */}
        <p className="text-[1.1rem] text-[#8B92A0] leading-[1.75] max-w-[580px] mx-auto mb-10">
          An AI Voice Agent that answers every call, qualifies every lead, and
          books appointments on your calendar 24/7 — built exclusively for
          epoxy flooring contractors.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 items-center justify-center flex-wrap mb-[72px]">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#F59E0B] text-[#0B0E11] font-bold text-[0.95rem] px-8 py-4 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(245,158,11,0.35)] transition-all duration-200 cursor-pointer"
          >
            Get Your AI Agent →
          </a>
          <a
            href="#solution"
            className="inline-flex items-center gap-2 text-[#8B92A0] text-[0.95rem] font-medium px-6 py-4 rounded-full border border-[#252B36] hover:border-[#8B92A0] hover:text-[#E8EAF0] transition-all duration-200 cursor-pointer"
          >
            See What&apos;s Included
          </a>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {statCards.map((card, i) => (
            <div
              key={i}
              className={`rounded-[12px] px-6 py-5 border text-left ${
                i === 0
                  ? "bg-[linear-gradient(135deg,rgba(245,158,11,0.1),transparent)] border-[rgba(245,158,11,0.25)]"
                  : "bg-[#12161C] border-[#252B36]"
              }`}
            >
              <div className="font-display text-[2.25rem] font-bold text-[#F59E0B] leading-none mb-2">
                {card.number}
              </div>
              <div className="text-[0.9rem] text-[#E8EAF0] font-semibold mb-0.5">
                {card.label}
              </div>
              <div className="text-[0.78rem] text-[#5A6272]">
                {card.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
