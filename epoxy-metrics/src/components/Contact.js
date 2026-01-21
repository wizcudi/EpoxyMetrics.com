"use client"; 

import { useState } from "react";
import { db } from "../lib/firebase"; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from 'next/navigation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
  });

  const [status, setStatus] = useState("idle"); 

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await addDoc(collection(db, "leads"), {
        name: formData.name,
        businessName: formData.businessName,
        email: formData.email,
        createdAt: serverTimestamp(),
        source: "web_design_offer", // Updated source tag
      });

      router.push('/thank-you');

    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="w-full bg-dark text-light py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        {/* Header Updated for Web Design Strategy */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready for a Professional Website?
        </h2>
        <p className="text-light-dark mb-8 text-lg">
          Fill out the form below to lock in your build slot. I&apos;ll review your current online presence and email you with the next steps.
        </p>

        {status === "success" ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-8 rounded-3xl relative" role="alert">
            <strong className="font-bold block text-xl mb-2">Request Received!</strong>
            <span className="block sm:inline">
              Thanks for reaching out. I&apos;ll be in touch shortly to discuss your new website.
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
              {status === "loading" ? "Sending..." : "Let's Build It"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}