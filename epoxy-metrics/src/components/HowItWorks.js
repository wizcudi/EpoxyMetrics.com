export default function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Quick Onboarding Call",
      desc: "Tell us about your services, pricing, service area, and scheduling preferences.",
    },
    {
      num: "2",
      title: "We Build & Train Your Agent",
      desc: "We configure and custom-train the AI specifically for your epoxy business.",
    },
    {
      num: "3",
      title: "Go Live",
      desc: "Your AI agent starts answering calls, qualifying leads, and booking appointments.",
    },
    {
      num: "4",
      title: "You Close More Jobs",
      desc: "Check your calendar, show up, and close. We handle the rest.",
    },
  ];

  return (
    <section id="how" className="py-[100px] border-t border-[#252B36] bg-[#0B0E11]">
      <div className="max-w-[1140px] mx-auto px-6">

        <div className="inline-flex items-center gap-2 text-[0.75rem] font-semibold text-[#F59E0B] uppercase tracking-[0.1em] mb-4">
          <span className="w-5 h-px bg-[#F59E0B]" />
          How It Works
        </div>
        <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.15] font-normal tracking-[-0.02em] text-[#E8EAF0] mb-4">
          Live and Answering Calls <em className="italic text-[#F59E0B]">in Days</em>
        </h2>
        <p className="text-[1.05rem] text-[#8B92A0] leading-[1.7] mb-14">
          We handle everything. You just keep coating floors.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="text-center px-5 py-8 relative">
              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <span className="hidden lg:block absolute right-[-12px] top-1/2 -translate-y-1/2 text-[#5A6272] text-[1.2rem]">
                  →
                </span>
              )}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[rgba(245,158,11,0.12)] border border-[rgba(245,158,11,0.25)] font-display text-[1.3rem] text-[#F59E0B] mb-5">
                {step.num}
              </div>
              <h3 className="text-[0.95rem] font-bold text-[#E8EAF0] mb-2">{step.title}</h3>
              <p className="text-[0.85rem] text-[#8B92A0] leading-[1.6]">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
