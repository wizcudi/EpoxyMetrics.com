"use client"; // Required for using useState and onClick handlers in Next.js

import { useState } from "react";
import { db } from "../lib/firebase"; // Importing the setup we made in Step 1
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from 'next/navigation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
  });

  const [status, setStatus] = useState("idle"); // 'idle', 'loading', 'success', 'error'

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");


    try {
      // 1. Send data to Firestore "leads" collection
      await addDoc(collection(db, "leads"), {
        name: formData.name,
        businessName: formData.businessName,
        email: formData.email,
        createdAt: serverTimestamp(), // Adds a server-side timestamp
        source: "landing_page_form",
      });

      router.push('/thank-you');

      // 2. Clear form and show success
      setStatus("success");
      setFormData({ name: "", businessName: "", email: "" });

      // Optional: Reset success message after 5 seconds so they can submit again if needed
      setTimeout(() => setStatus("idle"), 5000);

    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus("error");
    }
  };

  

  return (
    <section id="contact" className="w-full bg-dark text-light py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        {/* Header Updated to match Growth Blueprint strategy */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Get Your Growth Blueprint
        </h2>
        <p className="text-light-dark mb-8 text-lg">
          I&apos;ll personally review your business and show you exactly how to
          fill your calendar with exclusive epoxy leads. <br />
          <strong>Zero pressure, just a plan.</strong>
        </p>

        {status === "success" ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-8 rounded-3xl relative" role="alert">
            <strong className="font-bold block text-xl mb-2">Message Received!</strong>
            <span className="block sm:inline">
              Thanks for reaching out. I&apos;ll be reviewing your details and will email you shortly with your blueprint.
            </span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            id="contact-form"
            className="bg-light p-8 rounded-3xl text-left shadow-2xl text-dark space-y-5"
          >
            <div>
              <label className="block text-sm font-bold mb-2">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                type="text"
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">
                Business Name
              </label>
              <input
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                required
                type="text"
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition"
                placeholder="Epoxy Pros LLC"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                type="email"
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition"
                placeholder="owner@example.com"
              />
            </div>

            {status === "error" && (
              <p className="text-red-500 text-center text-sm">
                Something went wrong. Please try again or email me directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className={`w-full font-bold py-5 rounded-xl cursor-pointer transition-all transform hover:scale-[1.02] mt-4 shadow-lg shadow-primary/30 ${
                status === "loading"
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-primary text-white hover:bg-primary-dark"
              }`}
            >
              {status === "loading" ? "Sending..." : "Get My Growth Blueprint"}
            </button>

            <p className="text-center text-xs text-gray-400 mt-4">
              *I value your time. Our strategy session will be focused and
              fluff-free.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}