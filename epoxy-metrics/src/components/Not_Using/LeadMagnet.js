"use client";
import Section from "./Section";
import Button from "./Button";

export default function LeadMagnet() {
    return (
        <Section id="blueprint" variant="dark">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 sm:px-4">

                {/* Left Side: The Problem & Offer */}
                <div className="md:w-1/2">
                    <span className="text-accentColor font-bold tracking-widest uppercase text-paragraphSizeMobile block mb-2">
                        Free Blueprint
                    </span>
                    <h2 className="leading-tight text-headingMobile md:text-headingSizeTablet font-extrabold text-lightColor mb-4">
                        Tired of Chasing <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentColor to-orange-400">
                            Tire-Kickers?
                        </span>
                    </h2>
                    <p className="text-paragraphSizeMobile text-lightColor/80 mb-6 leading-relaxed">
                        Stop wasting hours manually following up with leads who just want a cheap price.
                        Download the exact <strong>Make.com Email Automation Blueprint</strong> we use to instantly engage, nurture, and filter out bad leads automatically.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-3 mt-4" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 bg-lightColor/5 border border-lightColor/10 rounded-lg px-4 py-3 text-lightColor focus:outline-none focus:border-accentColor transition-colors"
                            required
                        />
                        <Button type="submit" variant="primary" className="py-3 px-6 whitespace-nowrap">
                            Get Free Blueprint
                        </Button>
                    </form>
                    <p className="text-xs text-lightColor/40 mt-3">
                        We will only send you the blueprint. No spam, ever.
                    </p>
                </div>

                {/* Right Side: Visual Representation */}
                <div className="md:w-1/2 w-full flex justify-center relative">
                    {/* Subtle Glow Behind Image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accentColor/20 blur-[80px] rounded-full pointer-events-none z-0"></div>

                    <div className="relative z-10 w-full max-w-sm bg-mainColor/50 p-6 rounded-2xl border border-lightColor/10 shadow-2xl backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-lightColor/10">
                            <div className="w-10 h-10 bg-accentColor rounded flex items-center justify-center text-darkColor font-bold">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-lightColor text-lg">Make.com Blueprint</h4>
                                <p className="text-xs text-lightColor/60">Ready to import</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="h-2 bg-lightColor/10 rounded-full w-3/4"></div>
                            <div className="h-2 bg-lightColor/10 rounded-full w-full"></div>
                            <div className="h-2 bg-lightColor/10 rounded-full w-5/6"></div>
                            <div className="h-2 bg-lightColor/10 rounded-full w-2/3 mt-4"></div>
                        </div>
                        <div className="mt-6 flex justify-end">
                            <span className="text-xs font-bold text-accentColor bg-accentColor/10 px-2 py-1 rounded">Instant Access</span>
                        </div>
                    </div>
                </div>

            </div>
        </Section>
    );
}
