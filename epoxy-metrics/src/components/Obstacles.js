export default function Obstacles() {
  const painPoints = [
    {
      num: "01",
      title: "Your pipeline dries up between jobs",
      desc: "Word of mouth got you started, but it's not consistent enough to grow. You finish one job and scramble to find the next.",
    },
    {
      num: "02",
      title: "You're wasting time on tire-kickers",
      desc: "You're quoting homeowners who price-shop three contractors and ghost you. Chasing bad leads is costing you hours you can't get back.",
    },
    {
      num: "03",
      title: "Digital marketing feels like a black hole",
      desc: "You've tried boosting posts or running ads. Results were underwhelming and you had no idea what went wrong.",
    },
    {
      num: "04",
      title: "You can't get a real ROI from paid ads",
      desc: "Every ad dollar feels like a gamble. No system, no tracking, no repeatable results, just hope and a shrinking budget.",
    },
    {
      num: "05",
      title: "Follow-up falls through the cracks",
      desc: "A lead comes in, life gets busy, and a week later you realize you never followed up. That job went to a competitor who did.",
    },
    {
      num: "06",
      title: "You're too busy doing floors to grow",
      desc: "You're great at the work but marketing and follow-up require a completely different skill set and hours you don't have.",
    },
  ];

  return (
    <section id="pain" className="bg-navy px-[5%] py-16 md:py-[90px]">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="flex items-center gap-2.5 text-[11px] font-bold tracking-[0.14em] uppercase text-gold mb-3.5 font-brand">
          <span className="w-5 h-0.5 bg-gold flex-shrink-0" />
          Sound Familiar?
        </div>
        <h2 className="font-serif font-bold text-white leading-[1.15] mb-3.5 text-[clamp(28px,3vw,42px)]">
          Every Epoxy Contractor<br />Hits These Walls
        </h2>
        <p className="text-[16px] text-white/50 max-w-[540px] leading-[1.75] font-brand mb-12">
          If any of these keep you up at night, you&apos;re not alone and
          you&apos;re exactly who the Epoxy Revenue Engine was built for.
        </p>

        {/* Pain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5">
          {painPoints.map((point) => (
            <div
              key={point.num}
              className="border border-gold/15 rounded-[10px] px-6 py-6.5 hover:border-gold/50 hover:bg-gold/4 transition-all font-brand"
            >
              <div className="text-[38px] font-bold text-gold/15 leading-none mb-2.5 font-serif">
                {point.num}
              </div>
              <h3 className="text-[16px] font-semibold text-white leading-[1.35] mb-2">
                {point.title}
              </h3>
              <p className="text-[13px] text-white/42 leading-[1.7]">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 pt-7 border-t border-gold/20 flex items-center justify-between flex-wrap gap-5">
          <p className="text-[22px] font-bold text-white max-w-[520px] font-serif">
            We built one system to{" "}
            <span className="text-gold">solve all of this.</span>
          </p>
          <a
            href="#offer"
            className="bg-gold text-navy text-[14px] font-bold px-7 py-3.5 rounded hover:bg-goldLight transition-colors font-brand"
          >
            See the Solution →
          </a>
        </div>

      </div>
    </section>
  );
}
