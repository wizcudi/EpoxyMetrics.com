import LeadForm from "./LeadForm";

export default function Contact() {
  const details = [
    { label: "Phone", value: "(689) 500-2300" },
    { label: "Email", value: "tony@epoxymetrics.com" },
    { label: "Service", value: "Epoxy & Concrete Coating Pros — Nationwide USA" },
  ];

  return (
    <section id="contact" className="py-[100px] border-t border-[#252B36] bg-[#0B0E11]">
      <div className="max-w-[1140px] mx-auto px-6">

        {/* Header */}
        <div className="inline-flex items-center gap-2 text-[0.75rem] font-semibold text-[#F59E0B] uppercase tracking-[0.1em] mb-4">
          <span className="w-5 h-px bg-[#F59E0B]" />
          Get Started
        </div>
        <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.15] font-normal tracking-[-0.02em] text-[#E8EAF0] mb-4">
          Let&apos;s Get Your AI Agent <em className="italic text-[#F59E0B]">Live</em>
        </h2>
        <p className="text-[1.05rem] text-[#8B92A0] leading-[1.7] mb-14 max-w-[600px]">
          Tell us about your business and we&apos;ll reach out within 24 hours to walk you through the system.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Contact Info */}
          <div>
            <h3 className="text-[0.9rem] font-semibold text-[#8B92A0] uppercase tracking-[0.06em] mb-5">
              Reach Us Directly
            </h3>

            {details.map((d, i) => (
              <div key={i} className="flex items-center gap-3 py-3.5 border-b border-[#252B36] last:border-b-0 text-[0.92rem]">
                <span className="text-[#5A6272] text-[0.82rem] min-w-[90px]">{d.label}</span>
                <span className="text-[#E8EAF0]">{d.value}</span>
              </div>
            ))}

            <div className="mt-8 p-6 bg-[#12161C] border border-[#252B36] rounded-[12px]">
              <p className="text-[0.88rem] text-[#8B92A0] leading-[1.7]">
                We work exclusively with epoxy and concrete coating contractors. Your AI agent is custom-trained for your trade — not a generic answering service.
              </p>
            </div>
          </div>

          {/* Right: Lead Form */}
          <LeadForm />

        </div>
      </div>
    </section>
  );
}
