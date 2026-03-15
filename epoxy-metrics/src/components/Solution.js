"use client";

import { useState } from "react";

export default function Solution() {
  const [showAllLeft, setShowAllLeft] = useState(false);
  const [showAllRight, setShowAllRight] = useState(false);

  const leftFeatures = [
    {
      icon: "○",
      title: "Lead Generation Automation",
      desc: "Workflows that generate hundreds of fresh, targeted leads pulling from your ideal customer profile in your local market.",
    },
    {
      icon: "◇",
      title: "Cold Email Campaigns",
      desc: "Personalized, automated email sequences that warm up new leads and convert them into booked appointments.",
    },
    {
      icon: "△",
      title: "Qualifying & Booking",
      desc: "We pre-qualify every lead before they hit your calendar, no more tire-kickers eating your time.",
    },
    {
      icon: "■",
      title: "The Nurture Sequence",
      desc: "A 7-day automated follow-up for leads who didn't book on the first touch, SMS, email, and social.",
    },
  ];

  const rightFeatures = [
    {
      icon: "■",
      title: "Creative Asset Production",
      desc: "Raw photos and videos turned into high-performance ad creatives with captions, overlays, and proven visual hooks.",
    },
    {
      icon: "○",
      title: "Proven Copywriting",
      desc: "Hook, retain, reward ad copy written specifically for the local epoxy market, tested across real campaigns.",
    },
    {
      icon: "△",
      title: "Technical Tracking",
      desc: "Meta Pixel & Conversions API installed to track exactly which ads are making money.",
    },
    {
      icon: "◇",
      title: "A/B Testing",
      desc: "Constantly testing images and copy to find what converts best in your local market.",
    },
  ];

  const visibleLeft = showAllLeft ? leftFeatures : leftFeatures.slice(0, 3);
  const visibleRight = showAllRight ? rightFeatures : rightFeatures.slice(0, 3);

  return (
    <section id="offer" className="bg-offWhite px-[5%] py-16 md:py-[90px]">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="flex items-center gap-2.5 text-[11px] font-bold tracking-[0.14em] uppercase text-gold mb-3.5 font-brand">
          <span className="w-5 h-0.5 bg-gold flex-shrink-0" />
          The Solution
        </div>
        <h2 className="font-serif font-bold text-navy leading-[1.15] mb-3.5 text-[clamp(28px,3vw,42px)]">
          The Epoxy Revenue Engine
        </h2>
        <p className="text-[16px] text-textMuted max-w-[540px] leading-[1.75] font-brand mb-12">
          A done-for-you growth system. We handle everything from traffic to
          booked appointments, so you can focus on what you do best.
        </p>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left: Feature Blocks */}
          <div className="flex flex-col gap-9">

            {/* Appointment Setting Block */}
            <div>
              <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-gold mb-2.5 font-brand">
                Appointment Setting Accelerator
              </div>
              <h3 className="font-serif font-bold text-navy text-[22px] leading-[1.25] mb-4">
                Fill Your Calendar With Qualified Bookings
              </h3>
              <div className="flex flex-col">
                {visibleLeft.map((feat, i) => (
                  <div
                    key={i}
                    className={`flex gap-3 py-4 ${i < visibleLeft.length - 1 ? "border-b border-black/7" : ""} font-brand`}
                  >
                    <div className="w-[34px] h-[34px] bg-gold/10 rounded-md flex items-center justify-center text-gold text-[15px] flex-shrink-0 mt-0.5">
                      {feat.icon}
                    </div>
                    <div>
                      <strong className="block text-[14px] font-semibold text-navy mb-0.5">
                        {feat.title}
                      </strong>
                      <p className="text-[13px] text-textMuted leading-[1.65]">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {leftFeatures.length > 3 && (
                <button
                  onClick={() => setShowAllLeft(!showAllLeft)}
                  className="mt-3 text-gold font-bold text-[13px] hover:underline font-brand"
                >
                  {showAllLeft ? "View Less" : `View More (${leftFeatures.length - 3})`}
                </button>
              )}
            </div>

            {/* Marketing Block */}
            <div>
              <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-gold mb-2.5 font-brand">
                30-Day Marketing Transformation
              </div>
              <h3 className="font-serif font-bold text-navy text-[22px] leading-[1.25] mb-4">
                Traffic, Ads, and Automation — Done For You
              </h3>
              <div className="flex flex-col">
                {visibleRight.map((feat, i) => (
                  <div
                    key={i}
                    className={`flex gap-3 py-4 ${i < visibleRight.length - 1 ? "border-b border-black/7" : ""} font-brand`}
                  >
                    <div className="w-[34px] h-[34px] bg-gold/10 rounded-md flex items-center justify-center text-gold text-[15px] flex-shrink-0 mt-0.5">
                      {feat.icon}
                    </div>
                    <div>
                      <strong className="block text-[14px] font-semibold text-navy mb-0.5">
                        {feat.title}
                      </strong>
                      <p className="text-[13px] text-textMuted leading-[1.65]">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {rightFeatures.length > 3 && (
                <button
                  onClick={() => setShowAllRight(!showAllRight)}
                  className="mt-3 text-gold font-bold text-[13px] hover:underline font-brand"
                >
                  {showAllRight ? "View Less" : `View More (${rightFeatures.length - 3})`}
                </button>
              )}
            </div>

          </div>

          {/* Right: Pricing Card */}
          <div>
            <div className="bg-navy rounded-xl px-8 py-9 relative overflow-hidden">
              {/* Gold top bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold to-goldLight" />

              <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-gold mb-2 font-brand">
                Investment
              </div>
              <div className="font-serif font-bold text-white leading-none mb-1 text-[50px]">
                <sup className="text-gold text-[22px] align-top mt-2.5 inline-block">$</sup>500
              </div>
              <p className="text-[13px] text-white/40 mb-6 font-brand">
                Refundable deposit · Then 10% commission only
              </p>

              <hr className="border-none border-t border-gold/20 my-5" />

              {[
                "Full lead generation system set up for you",
                "Ad creative production and copywriting",
                "Cold email campaigns to fresh leads",
                "Automated follow-up workflows",
                "Qualifying and calendar booking",
                "Ongoing optimization and management",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 mb-3 text-[14px] text-white/75 font-brand">
                  <div className="w-[18px] h-[18px] rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 text-gold text-[10px] font-bold mt-0.5">
                    ✓
                  </div>
                  {item}
                </div>
              ))}

              <div className="bg-gold/10 border border-gold/30 rounded-md p-3.5 mt-5 font-brand">
                <strong className="block text-[11px] font-bold tracking-[0.08em] uppercase text-gold mb-1">
                  100% Risk-Free Guarantee
                </strong>
                <p className="text-[13px] text-goldLight leading-[1.6]">
                  If we don&apos;t land you a confirmed, booked sale within 30 days,
                  your full $500 deposit is refunded. No questions asked.
                </p>
              </div>

              <a
                href="#contact"
                className="block text-center bg-gold text-navy text-[14px] font-bold py-3.5 rounded mt-5 hover:bg-goldLight transition-colors font-brand"
              >
                Start Your Engine →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
