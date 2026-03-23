export default function Pricing() {
  const agentFeatures = [
    "Custom AI Voice Agent trained for your business",
    "Smart lead qualification engine",
    "Real-time calendar appointment booking",
    "7-day automated follow-up sequences",
    "Call Intelligence Dashboard",
    "Human failover + full call recordings",
    "24/7/365 coverage",
    "Complete SOP to manage it yourself",
    "30 days of post-launch support",
  ];

  const commandFeatures = [
    "Custom AI Voice Agent trained for your business",
    "Smart lead qualification engine",
    "Real-time calendar appointment booking",
    "7-day automated follow-up sequences",
    "Call Intelligence Dashboard",
    "Human failover + full call recordings",
    "24/7/365 coverage",
    { bold: true, text: "Ongoing agent optimization from real call data" },
    { bold: true, text: "Monthly performance reports" },
    { bold: true, text: "Knowledge base updates as your business evolves" },
    { bold: true, text: "All agent & phone fees included (up to 500 min/mo)" },
  ];

  return (
    <section id="pricing" className="py-[100px] border-t border-[#252B36] bg-[#0B0E11]">
      <div className="max-w-[1140px] mx-auto px-6">

        {/* Header */}
        <div className="inline-flex items-center gap-2 text-[0.75rem] font-semibold text-[#F59E0B] uppercase tracking-[0.1em] mb-4">
          <span className="w-5 h-px bg-[#F59E0B]" />
          Investment
        </div>
        <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.15] font-normal tracking-[-0.02em] text-[#E8EAF0] mb-4">
          Choose How You Want <em className="italic text-[#F59E0B]">Your Agent</em>
        </h2>
        <p className="text-[1.05rem] text-[#8B92A0] leading-[1.7] mb-14 max-w-[600px]">
          Two ways to get started. Both give you the same powerful AI Voice Agent — you just decide if you want to own it or have us run it for you.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">

          {/* Tier 1: The Agent */}
          <div className="bg-[#12161C] border border-[#252B36] rounded-[12px] p-10 relative overflow-hidden hover:border-[#2E3545] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2E3545] to-[#252B36]" />

            <div className="font-display text-[1.5rem] text-[#E8EAF0] mb-1">The Agent</div>
            <div className="text-[0.85rem] text-[#8B92A0] mb-6 leading-[1.5]">Full ownership. You run it yourself.</div>

            <div className="flex items-baseline gap-1 mb-1">
              <span className="font-display text-[3rem] text-[#E8EAF0] leading-none">$5,000</span>
              <span className="text-[0.9rem] text-[#5A6272]">one-time</span>
            </div>
            <div className="text-[0.82rem] text-[#8B92A0] mb-7">
              You own it outright · Agent fees billed to your accounts
            </div>

            <div className="h-px bg-[#252B36] mb-6" />
            <div className="text-[0.72rem] font-bold uppercase tracking-[0.08em] text-[#F59E0B] mb-3">
              Everything included
            </div>

            <ul className="mb-8">
              {agentFeatures.map((item, i) => (
                <li key={i} className="flex items-start gap-3 py-2.5 text-[0.9rem] text-[#8B92A0] border-b border-[#252B36] last:border-b-0">
                  <span className="text-[#34D399] font-bold flex-shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <a href="#contact">
              <button className="block w-full text-center bg-[#2E3545] text-[#E8EAF0] font-bold text-[1rem] py-[18px] rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(245,158,11,0.25)] transition-all cursor-pointer">
                Get The Agent →
              </button>
            </a>
            <p className="text-center text-[0.78rem] text-[#5A6272] mt-3">
              Best for tech-comfortable contractors who want full control
            </p>
          </div>

          {/* Tier 2: The Agent + Command Center */}
          <div className="bg-[linear-gradient(165deg,#12161C,rgba(245,158,11,0.04))] border border-[rgba(245,158,11,0.3)] rounded-[12px] p-10 relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F59E0B] to-[#FCD34D]" />
            <div className="absolute top-4 right-4 bg-[#F59E0B] text-[#0B0E11] text-[0.7rem] font-bold uppercase tracking-[0.06em] px-3 py-1.5 rounded-full">
              Most Popular
            </div>

            <div className="font-display text-[1.5rem] text-[#E8EAF0] mb-1">The Agent + Command Center</div>
            <div className="text-[0.85rem] text-[#8B92A0] mb-6 leading-[1.5]">We build it, host it, and manage it. You never touch a thing.</div>

            <div className="flex items-baseline gap-1 mb-1">
              <span className="font-display text-[3rem] text-[#E8EAF0] leading-none">$2,500</span>
              <span className="text-[0.9rem] text-[#5A6272]">setup</span>
            </div>
            <div className="text-[0.82rem] text-[#8B92A0] mb-2">
              + $500/month management — includes up to 500 minutes of agent calls
            </div>
            <span className="inline-block text-[0.72rem] font-semibold text-[#34D399] bg-[rgba(52,211,153,0.12)] px-[10px] py-1 rounded-full mb-7">
              All agent fees included in monthly
            </span>

            <div className="h-px bg-[#252B36] mb-6" />
            <div className="text-[0.72rem] font-bold uppercase tracking-[0.08em] text-[#F59E0B] mb-3">
              Everything in The Agent, plus
            </div>

            <ul className="mb-8">
              {commandFeatures.map((item, i) => (
                <li key={i} className="flex items-start gap-3 py-2.5 text-[0.9rem] text-[#8B92A0] border-b border-[#252B36] last:border-b-0">
                  <span className="text-[#34D399] font-bold flex-shrink-0 mt-0.5">✓</span>
                  {typeof item === "string" ? item : <strong className="text-[#E8EAF0]">{item.text}</strong>}
                </li>
              ))}
            </ul>

            <a href="#contact">
              <button className="block w-full text-center bg-[#F59E0B] text-[#0B0E11] font-bold text-[1rem] py-[18px] rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(245,158,11,0.25)] transition-all cursor-pointer">
                Get The Command Center →
              </button>
            </a>
            <p className="text-center text-[0.78rem] text-[#5A6272] mt-3">
              Best for contractors who want to stay on the job site and never think about tech
            </p>
          </div>

        </div>


      </div>
    </section>
  );
}
