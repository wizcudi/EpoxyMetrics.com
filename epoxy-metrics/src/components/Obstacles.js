import Section from "./Section";

export default function Obstacles() {
    const obstacles = [
        "Need help finding leads",
        "Need help filtering out poor leads with qualified leads that actually book a time on your calendar",
        "Need help with digital marketing",
        "Need help getting a ROI on digital Ads",
        "Need help setting up smart workflows saving time on repetitive task",
    ];

    return (
        <Section id="obstacles" variant="main">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <h2 className="capitalize text-center leading-tight text-headingMobile md:text-headingSizeTablet font-extrabold mb-7">
                    Sound <span className="text-accentColor">Familiar</span> to you?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {obstacles.map((obstacle, index) => (
                        <div key={index} className="flex items-start gap-4 bg-accentColor/20 p-6 rounded-2xl border border-accentColor">
                            <div className="flex-shrink-0 mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-accentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <p className=" font-bold text-lg leading-relaxed">
                                {obstacle}
                            </p>
                        </div>
                    ))}

                    {/* Empty div or a CTA element to balance the 5 items in a 2-column grid */}
                    <div className="flex items-center justify-center p-6 bg-accentColor/20 rounded-2xl border border-accentColor/20 border-dashed">
                        <p className="text-accentColor font-bold text-center">
                            We solve all of this.
                        </p>
                    </div>

                </div>
            </div>
        </Section>
    );
}
