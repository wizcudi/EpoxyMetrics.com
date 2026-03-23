"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function LeadForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    challenge: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await addDoc(collection(db, "leads"), {
        ...formData,
        createdAt: serverTimestamp(),
        source: "epoxy_metrics_landing_page",
      });
      router.push("/thank-you");
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-[#12161C] border border-[#252B36] rounded-[8px] px-4 py-3.5 text-[0.9rem] text-[#E8EAF0] placeholder:text-[#5A6272] outline-none focus:border-[#F59E0B] transition-colors";

  const labelClass =
    "block text-[0.82rem] font-medium text-[#8B92A0] mb-1.5";

  const selectClass =
    `${inputClass} cursor-pointer appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23F59E0B' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")] bg-no-repeat bg-[right_14px_center] pr-10`;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

      <div>
        <label className={labelClass}>Full Name</label>
        <input
          required
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={inputClass}
          placeholder="John Smith"
        />
      </div>

      <div>
        <label className={labelClass}>Email Address</label>
        <input
          required
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={inputClass}
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label className={labelClass}>Phone Number</label>
        <input
          required
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={inputClass}
          placeholder="(555) 000-0000"
        />
      </div>

      <div>
        <label className={labelClass}>Which Plan Are You Interested In?</label>
        <select
          required
          name="plan"
          value={formData.plan}
          onChange={handleChange}
          className={selectClass}
          style={{ background: "#12161C" }}
        >
          <option value="" disabled style={{ background: "#12161C" }}>Select one...</option>
          <option value="agent" style={{ background: "#12161C" }}>The Agent — $5,000 one-time (I&apos;ll manage it myself)</option>
          <option value="command_center" style={{ background: "#12161C" }}>The Agent + Command Center — $2,500 + $500/mo (manage it for me)</option>
          <option value="unsure" style={{ background: "#12161C" }}>Not sure yet — I&apos;d like to learn more</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>What&apos;s Your Biggest Challenge?</label>
        <select
          required
          name="challenge"
          value={formData.challenge}
          onChange={handleChange}
          className={selectClass}
          style={{ background: "#12161C" }}
        >
          <option value="" disabled style={{ background: "#12161C" }}>Select one...</option>
          <option value="missed_calls" style={{ background: "#12161C" }}>I miss too many calls on the job site</option>
          <option value="followup" style={{ background: "#12161C" }}>My lead follow-up is inconsistent</option>
          <option value="unqualified_leads" style={{ background: "#12161C" }}>I waste time on unqualified leads</option>
          <option value="more_bookings" style={{ background: "#12161C" }}>I need more booked appointments</option>
          <option value="scale" style={{ background: "#12161C" }}>I want to scale without hiring office staff</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>
          Anything else?{" "}
          <span className="font-normal text-[#5A6272] text-[0.75rem]">(optional)</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className={`${inputClass} resize-y min-h-[80px]`}
          placeholder="Tell us about your business..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#F59E0B] text-[#0B0E11] font-bold text-[1rem] py-4 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(245,158,11,0.25)] transition-all mt-2 disabled:opacity-70 cursor-pointer"
      >
        {status === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending...
          </span>
        ) : (
          "Get Your AI Agent →"
        )}
      </button>

      {status === "error" && (
        <div className="p-3 bg-[rgba(248,113,113,0.10)] border border-[rgba(248,113,113,0.2)] rounded-[8px] flex items-center gap-2 text-[#F87171] text-xs">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 flex-shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
          Something went wrong. Please try again.
        </div>
      )}

      <p className="text-[0.75rem] text-[#5A6272] text-center leading-[1.6]">
        By submitting you agree to be contacted about Speed to Lead. Your info is never shared or sold.
      </p>

    </form>
  );
}
