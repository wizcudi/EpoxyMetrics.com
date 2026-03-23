export default function Solution() {
  const features = [
    {
      num: "01",
      title: "Custom AI Voice Agent — Trained for Epoxy",
      desc: "Your own AI phone agent that answers every inbound call and contacts every online lead in under 10 seconds. It knows your services, service area, and sounds like a real team member.",
      tag: "Core System",
    },
    {
      num: "02",
      title: "Smart Lead Qualification Engine",
      desc: "Every caller gets pre-qualified on project type, square footage, timeline, and budget. You only talk to people who are ready to buy.",
      tag: "Saves Hours Weekly",
    },
    {
      num: "03",
      title: "Real-Time Appointment Booking",
      desc: "Qualified leads get booked directly onto your calendar during the call. They call, they qualify, they're booked. No back-and-forth.",
      tag: "Instant Bookings",
    },
    {
      num: "04",
      title: '"No Lead Left Behind" 7-Day Follow-Up',
      desc: "For callers who don't book on the first attempt, an automated SMS and email sequence follows up for 7 days straight, driving them back to your calendar.",
      tag: "Automated Recovery",
    },
    {
      num: "05",
      title: "Call Intelligence Dashboard",
      desc: "See every call, every qualification outcome, every booking, and which marketing source drove it — all in one place. Know your numbers.",
      tag: "Full Visibility",
    },
    {
      num: "06",
      title: "Human Failover + Full Call Recordings",
      desc: "If the AI encounters something outside its scope, it seamlessly transfers to a real person. Every call is recorded for complete peace of mind.",
      tag: "Safety Net",
    },
  ];

  return (
    <section id="solution" className="py-[100px] relative bg-[#0B0E11]">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 -left-[300px] w-[600px] h-[600px] rounded-full pointer-events-none opacity-15"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.25) 0%, transparent 70%)" }}
      />

      <div className="max-w-[1140px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[0.75rem] font-semibold text-[#F59E0B] uppercase tracking-[0.1em] mb-4">
            <span className="w-5 h-px bg-[#F59E0B]" />
            The Solution
          </div>
          <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.15] font-normal tracking-[-0.02em] text-[#E8EAF0] mb-4">
            Speed to Lead <em className="italic text-[#F59E0B]">Epoxy Appointment Setter</em>
          </h2>
          <p className="text-[1.05rem] text-[#8B92A0] leading-[1.7] max-w-[600px] mx-auto">
            A done-for-you AI Voice Agent system that handles your phone so you can stay on the job site and close more jobs than ever.
          </p>
        </div>

        {/* Promise Block */}
        <div className="bg-[linear-gradient(135deg,rgba(245,158,11,0.12),rgba(245,158,11,0.04))] border border-[rgba(245,158,11,0.2)] rounded-[12px] px-12 py-10 mb-14 text-center">
          <p className="font-display text-[1.35rem] italic leading-[1.6] text-[#E8EAF0] max-w-[800px] mx-auto">
            &ldquo;I will install an AI-powered Voice Agent that answers every call, qualifies every lead, and books appointments on your calendar 24/7 — so you can stay on the job site and still close more jobs than you ever did chained to your phone.&rdquo;
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.num}
              className="bg-[#12161C] border border-[#252B36] rounded-[12px] px-7 py-8 hover:border-[#2E3545] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all"
            >
              <div className="font-display text-[2.5rem] text-[#F59E0B] opacity-30 leading-none mb-4">{f.num}</div>
              <h3 className="text-[1.05rem] font-bold text-[#E8EAF0] leading-[1.35] mb-2.5">{f.title}</h3>
              <p className="text-[0.88rem] text-[#8B92A0] leading-[1.65]">{f.desc}</p>
              <span className="inline-block mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.06em] text-[#34D399] bg-[rgba(52,211,153,0.12)] px-[10px] py-1 rounded-full">
                {f.tag}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
