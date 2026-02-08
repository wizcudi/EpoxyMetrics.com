import Section from "./Section";
import LeadForm from "./LeadForm"; // Import your new component

export default function Contact() {
  return (
    <Section id="contact" variant="dark">
      {/* WRAPPER: Holds the glow effects inside the Section */}
      <div className="relative w-full">

        {/* --- ACCENT HIGHLIGHTS (Copper Glow) --- */}
        {/* These stay here so they sit behind EVERYTHING in the grid */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-accentColor/20 blur-[100px] rounded-full pointer-events-none z-0"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-accentColor/10 blur-[80px] rounded-full pointer-events-none z-0"></div>

        {/* CONTENT GRID */}
        <div className="flex lg:flex-row flex-col justify-between gap-10 items-start relative z-10">

          {/* LEFT COLUMN: Contact Info */}
          <div className="lg:w-1/2">
            <span className="text-accentColor font-bold tracking-widest uppercase text-paragraphSizeMobile block">
              Partner With Me
            </span>
            <h2 className="leading-tight text-headingMobile md:text-headingSizeTablet font-extrabold text-lightColor">
              Start Getting <span className="text-accentColor">Qualified</span> Leads.
            </h2>
            <p className="text-paragraphSizeMobile text-lightColor/70 mt-2 mb-10">
              Stop chasing homeowners who want "cheap." We build systems that attract clients willing to pay for premium epoxy work. Fill out the form to get your free audit.
            </p>

            <div className="space-y-8">
              {/* Phone Icon & Info */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mainColor rounded-lg text-accentColor border border-accentColor/20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lightColor font-bold text-lg">Call Us Directly</h4>
                  <p className="text-lightColor/60">(689) 500-2300</p>
                </div>
              </div>

              {/* Email Icon & Info */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mainColor rounded-lg text-accentColor border border-accentColor/20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lightColor font-bold text-lg">Email Us</h4>
                  <p className="text-lightColor/60">tony@epoxymetrics.com</p>
                </div>
              </div>

              {/* MapPin Icon & Info */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mainColor rounded-lg text-accentColor border border-accentColor/20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lightColor font-bold text-lg">Who We Serve</h4>
                  <p className="text-lightColor/60">Epoxy & Concrete Coating Pros across the USA.</p>
                </div>
              </div>
            </div>
          </div>

          <LeadForm />

        </div>
      </div>
    </Section>
  );
}