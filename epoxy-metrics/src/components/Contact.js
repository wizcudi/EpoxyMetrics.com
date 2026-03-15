import LeadForm from "./LeadForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-navy px-[5%] py-16 md:py-[90px]">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="flex items-center gap-2.5 text-[11px] font-bold tracking-[0.14em] uppercase text-gold mb-3.5 font-brand">
          <span className="w-5 h-0.5 bg-gold flex-shrink-0" />
          Get Started
        </div>
        <h2 className="font-serif font-bold text-white leading-[1.15] mb-3.5 text-[clamp(28px,3vw,42px)]">
          Let&apos;s Fill Your Calendar
        </h2>
        <p className="text-[16px] text-white/50 max-w-[540px] leading-[1.75] font-brand mb-12">
          Tell us about your business and we&apos;ll reach out within 24 hours to walk
          you through how the Engine works.
        </p>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[72px] items-start">

          {/* Left: Contact Info */}
          <div>
            <div className="text-[12px] font-bold tracking-[0.08em] uppercase text-white/35 mb-5 font-brand">
              Reach Us Directly
            </div>

            <div className="flex items-center gap-3.5 mb-4.5 font-brand">
              <div className="w-10 h-10 bg-gold/12 rounded-lg flex items-center justify-center text-gold text-[17px] flex-shrink-0">
                ✆
              </div>
              <div>
                <small className="block text-[11px] font-semibold tracking-[0.08em] uppercase text-white/30 mb-0.5">
                  Phone
                </small>
                <span className="text-[15px] text-white font-medium">(689) 500-2300</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 mb-4.5 font-brand">
              <div className="w-10 h-10 bg-gold/12 rounded-lg flex items-center justify-center text-gold text-[17px] flex-shrink-0">
                ✉
              </div>
              <div>
                <small className="block text-[11px] font-semibold tracking-[0.08em] uppercase text-white/30 mb-0.5">
                  Email
                </small>
                <span className="text-[15px] text-white font-medium">tony@epoxymetrics.com</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 mb-4.5 font-brand">
              <div className="w-10 h-10 bg-gold/12 rounded-lg flex items-center justify-center text-gold text-[17px] flex-shrink-0">
                ●
              </div>
              <div>
                <small className="block text-[11px] font-semibold tracking-[0.08em] uppercase text-white/30 mb-0.5">
                  Service Area
                </small>
                <span className="text-[15px] text-white font-medium">
                  Epoxy &amp; Concrete Coating Pros — Nationwide USA
                </span>
              </div>
            </div>

            <div className="mt-9 pt-7 border-t border-gold/15 text-[13px] text-white/32 leading-[1.7] font-brand">
              We work exclusively with epoxy and concrete coating contractors.
              Every campaign, workflow, and piece of copy is built for your
              market.
            </div>
          </div>

          {/* Right: Lead Form */}
          <LeadForm />

        </div>
      </div>
    </section>
  );
}
