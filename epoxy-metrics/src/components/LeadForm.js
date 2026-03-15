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
    goal: "",
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
    "w-full bg-white/5 border border-gold/20 rounded-md px-3.5 py-2.5 text-[14px] text-white placeholder:text-white/22 outline-none focus:border-gold transition-colors font-brand";

  const labelClass =
    "block text-[11px] font-bold tracking-[0.06em] uppercase text-white/45 mb-1.5 font-brand";

  return (
    <div className="bg-white/4 border border-gold/20 rounded-xl px-8 py-9 font-brand">
      <div className="font-serif font-bold text-white text-[22px] mb-1">
        Start Your Engine
      </div>
      <p className="text-[13px] text-white/38 mb-6">
        Takes less than 2 minutes. We&apos;ll be in touch within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Full Name */}
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

        {/* Email */}
        <div>
          <label className={labelClass}>Email Address</label>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="john@yourcompany.com"
          />
        </div>

        {/* Phone */}
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

        {/* Goal Dropdown */}
        <div>
          <label className={labelClass}>What&apos;s Your Primary Goal?</label>
          <select
            required
            name="goal"
            value={formData.goal}
            onChange={handleChange}
            className={`${inputClass} cursor-pointer appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23C9A84C' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")] bg-no-repeat bg-[right_14px_center] pr-10`}
          >
            <option value="" disabled style={{background:"#0B1F3A",color:"#ffffff"}}>Select one...</option>
            <option value="more_leads" style={{background:"#0B1F3A",color:"#ffffff"}}>More qualified leads &amp; booked jobs</option>
            <option value="better_roi" style={{background:"#0B1F3A",color:"#ffffff"}}>Better ROI on my ad spend</option>
            <option value="automate_followup" style={{background:"#0B1F3A",color:"#ffffff"}}>Add automation to by business</option>
            <option value="scale_revenue" style={{background:"#0B1F3A",color:"#ffffff"}}>Scale my business revenue</option>
          </select>
        </div>

        {/* Optional message */}
        <div>
          <label className={labelClass}>
            Anything else?{" "}
            <span className="font-normal normal-case tracking-normal text-white/20 text-[10px]">
              (optional)
            </span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className={`${inputClass} resize-y min-h-[90px]`}
            placeholder="Current monthly revenue, jobs per month, biggest challenge..."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-gold text-navy font-bold text-[15px] py-3.5 rounded cursor-pointer hover:bg-goldLight transition-colors mt-1.5 disabled:opacity-70 font-brand"
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
            "Start Your Engine →"
          )}
        </button>

        {/* Error */}
        {status === "error" && (
          <div className="p-2 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2 text-red-400 text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
            Something went wrong. Please try again.
          </div>
        )}

        <p className="text-[11px] text-white/22 text-center leading-[1.6]">
          By submitting you agree to be contacted about the Epoxy Revenue Engine.
          Your info is never shared or sold.
        </p>
      </form>
    </div>
  );
}
