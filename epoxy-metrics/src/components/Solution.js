"use client";

import { useState } from "react";
import Button from "./Button";
import Section from "./Section";

export default function Solution() {
  const [showAllLeft, setShowAllLeft] = useState(false);
  const [showAllRight, setShowAllRight] = useState(false);

  const leftFeatures = [
    { title: "Lead Gen", desc: "Automation workflows that can generate hundreds of new leads at a time." },
    { title: "Email Campaign", desc: "Automation workflow that sends out cold emails from newly acquired leads." },
    { title: "Qualified Workflow Logic", desc: "Automation workflow that pre qualifies leads and books appointments on calendar (SMS, Email, Social)." },
    { title: "The 'Nurture' Sequence", desc: "Building a 7-day automated follow-up for leads who didn't book on the first text." }
  ];

  const rightFeatures = [
    { title: "Creative Asset Production", desc: "Turning raw photos/videos into high-performance ad creative with captions & overlays." },
    { title: "Proven Copywriting", desc: "Writing 'Hook, Retain, Reward' ad copy specifically for the local market." },
    { title: "Technical Tracking", desc: "Installing Meta Pixel & Conversions API to track exactly which ads make money." },
    { title: "Landing Page Deployment", desc: "Building & hosting lightning-fast, mobile-optimized 'Instant Estimate' pages." },
    { title: "A/B Testing", desc: "Constantly testing different images (e.g., 'Full Flake' vs. 'Metallic') to see what works." },
    { title: "Template Creation", desc: "Designing branded 'Before & After' templates for social posts." },
    { title: "Automation Scheduling", desc: "Creating a 'Perpetual Posting' schedule so the business always looks active." }
  ];

  // For mobile, show only first 2 items unless "showAll" is true
  const visibleLeft = showAllLeft ? leftFeatures : leftFeatures.slice(0, 2);
  const visibleRight = showAllRight ? rightFeatures : rightFeatures.slice(0, 2);

  return (
    <Section id="pricing" variant="main">

      {/* Section Header - Now Left Aligned */}
      <div className="text-left ">
        <h2 className="
          text-headingMobile md:text-headingSizeTablet lg:text-headingSizeLandscape 
          font-extrabold mb-4 tracking-tight
        ">
          The Solution
        </h2>
        <p className="text-paragraphSizeMobile font-bold max-w-3xl">
          A complete, done-for-you system that fills your calendar with jobs.
          I personally handle the entire heavy lifting, from running your ads to filling your calendar with qualifying leads.
        </p>
      </div>

      <div className="flex flex-col gap-12 border-t border-mainColor/10 pt-0 md:pt-6">

        {/* Deliverables Grid - Now Always Full Width */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">

            {/* Appointment Setting Column */}
            <div className=" p-6 rounded-2xl border border-accentColor shadow-sm relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accentColor/20 rounded-bl-full blur-[40px]"></div>
              <h4 className="font-extrabold text-xl mb-2 ">
                Appointment Setting Accelerator
              </h4>
              <p className="text-sm text-accentColor font-bold mb-6">
                Goal: Generate & qualify leads, book them on calendar.
              </p>
              <ul className="space-y-6">
                {visibleLeft.map((item, i) => (
                  <li key={i} className="flex flex-col relative z-10">
                    <span className="font-bold text-base mb-1">{item.title}</span>
                    <span className="text-sm opacity-80 ">{item.desc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 ">
                <button
                  onClick={() => setShowAllLeft(!showAllLeft)}
                  className="text-accentColor font-bold text-sm hover:underline"
                >
                  {showAllLeft ? "View Less" : `View More (${leftFeatures.length - 2})`}
                </button>
              </div>
            </div>

            {/* Marketing Column */}
            <div className=" p-6 rounded-2xl border border-accentColor shadow-sm relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accentColor/20 rounded-bl-full  blur-[40px]"></div>
              <h4 className="font-extrabold text-xl mb-2 ">
                30 Day Marketing Transformation
              </h4>
              <p className="text-sm text-accentColor font-bold mb-6">
                Goal: Generate online traffic & automate systems.
              </p>
              <ul className="space-y-6">
                {visibleRight.map((item, i) => (
                  <li key={i} className="flex flex-col relative z-10">
                    <span className="font-bold  text-base mb-1">{item.title}</span>
                    <span className="text-sm opacity-80 ">{item.desc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 ">
                <button
                  onClick={() => setShowAllRight(!showAllRight)}
                  className="text-accentColor font-bold text-sm hover:underline"
                >
                  {showAllRight ? "View Less" : `View More (${rightFeatures.length - 2})`}
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Pricing & CTA - Now Always Full Width below the grid */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-2xl text-left  p-8 rounded-2xl shadow-xl relative overflow-hidden">

            {/* Glow effect on pricing card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accentColor/20 blur-[40px] pointer-events-none"></div>

            <div className="text-headingSizeTablet font-extrabold mb-1 relative z-10">
              $500
            </div>
            <p className="mb-6 font-bold text-accentColor text-paragraphSizeMobile uppercase tracking-wide relative z-10">
              Deposit To Start
            </p>
            <div className="text-sm opacity-90 mb-8 space-y-4 relative z-10">
              <p><strong>100% Risk-Free:</strong> Fully refundable if we don&apos;t land you a confirmed sale within 30 days.</p>
              <p><strong>Performance Only:</strong> We take a 10% commission on the business we bring you. We only get paid when you get paid.</p>
            </div>

            <Button href="#contact" variant="primary" className="w-full justify-center relative z-10 py-3 shadow-lg">
              Start Your Engine
            </Button>
          </div>
        </div>

      </div>
    </Section>
  );
}