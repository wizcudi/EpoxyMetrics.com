export default function Obstacles() {
  const problems = [
    {
      num: "01",
      title: "You miss calls all day because you're on the job site",
      desc: "You physically cannot answer the phone while pouring epoxy or grinding concrete. Every unanswered ring is revenue walking away.",
      tag: "↓ $3K–$10K lost per missed call",
    },
    {
      num: "02",
      title: "By the time you call back, the lead already hired someone else",
      desc: "Speed to lead is everything in home services. A 30-minute delay can kill a deal. Homeowners call 2–3 contractors — the first to answer wins.",
    },
    {
      num: "03",
      title: "After-hours and weekend calls just go to voicemail",
      desc: "Homeowners search and call in evenings and weekends — exactly when you're off the clock. Voicemail is where leads go to die.",
    },
    {
      num: "04",
      title: "You waste time on tire-kickers who aren't serious",
      desc: "You spend 20 minutes on the phone only to find out the caller has a 50 sq ft closet and a $200 budget.",
    },
    {
      num: "05",
      title: "Leads slip through the cracks with no follow-up system",
      desc: "No CRM, no system. Leads are scribbled on paper or lost in a text thread. No follow-up means no second chance.",
    },
    {
      num: "06",
      title: "You can't afford to hire a receptionist",
      desc: "A full-time hire is $35K–$50K/year plus management overhead, benefits, and the headache of turnover. It's just not realistic.",
    },
  ];

  return (
    <section id="problem" className="py-[100px] bg-[#0B0E11]">
      <div className="max-w-[1140px] mx-auto px-6">

        {/* Header */}
        <div className="inline-flex items-center gap-2 text-[0.75rem] font-semibold text-[#F59E0B] uppercase tracking-[0.1em] mb-4">
          <span className="w-5 h-px bg-[#F59E0B]" />
          The Problem
        </div>
        <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.15] font-normal tracking-[-0.02em] text-[#E8EAF0] mb-4">
          Every Missed Call Is a Job<br />Walking to Your <em className="italic text-[#F59E0B]">Competitor</em>
        </h2>
        <p className="text-[1.05rem] text-[#8B92A0] leading-[1.7] max-w-[600px] mb-14">
          You&apos;re on the job site. The phone rings. You can&apos;t answer. By the time you call back — they&apos;ve already hired someone else.
        </p>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {problems.map((p) => (
            <div
              key={p.num}
              className="bg-[#12161C] border border-[#252B36] rounded-[12px] p-7 relative overflow-hidden group hover:border-[#2E3545] transition-all"
            >
              {/* Red top line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F87171] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="font-display text-[1.4rem] text-[#5A6272] mb-3">{p.num}</div>
              <h3 className="text-[1rem] font-semibold text-[#E8EAF0] leading-[1.4] mb-2">{p.title}</h3>
              <p className="text-[0.88rem] text-[#8B92A0] leading-[1.6]">{p.desc}</p>
              {p.tag && (
                <span className="inline-flex items-center gap-1 mt-3 text-[0.78rem] font-semibold text-[#F87171] bg-[rgba(248,113,113,0.10)] px-[10px] py-1 rounded-full">
                  {p.tag}
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
