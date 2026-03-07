"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Button from "./Button";

export default function LeadForm() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
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

    return (
        // This outer DIV is your "Card" with the glass effect. 
        // We darkened it to darkColor/40 to stand out from the new mainColor background
        <div className="
            w-full lg:w-2/5 bg-darkColor/80  
            px-8 py-10 rounded-2xl relative overflow-hidden max-w-full
        ">

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 gap-6">

                    {/* Name */}
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="name" className="text-paragraphSizeMobile font-bold text-mainColor">
                            Full Name
                        </label>
                        <input
                            required
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className=" text-mainColor w-full bg-darkColor/50 border border-lightColor/10 rounded-lg px-3 py-2  text-sm 
                            focus:outline-none focus:border-accentColor focus:ring-1 focus:ring-accentColor transition-all placeholder:text-mainColor/50"
                            placeholder="Tony Stark"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="email" className="text-paragraphSizeMobile font-bold text-mainColor">
                            Email
                        </label>
                        <input
                            required
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="text-mainColor w-full bg-darkColor/50 border border-lightColor/10 rounded-lg px-3 py-2  text-sm 
                            focus:outline-none focus:border-accentColor focus:ring-1 focus:ring-accentColor transition-all placeholder:text-mainColor/50"
                            placeholder="tony@epoxymetrics.com"
                        />
                    </div>
                </div>

                {/* Message */}
                <div className="flex flex-col space-y-2">
                    <label htmlFor="message" className="text-paragraphSizeMobile font-bold text-mainColor">
                        What's Your Goal?
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="3"
                        className="text-mainColor w-full bg-darkColor/50 border border-lightColor/10 rounded-lg px-3 py-2  text-sm 
                        focus:outline-none focus:border-accentColor focus:ring-1 focus:ring-accentColor transition-all placeholder:text-mainColor/50"
                        placeholder="I need more commercial leads..."
                    ></textarea>
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    disabled={status === "loading"}
                    variant="primary"
                    className="w-full text-base py-3 shadow-lg hover:shadow-accentColor/20"
                >
                    {status === "loading" ? (
                        <div className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                        </div>
                    ) : (
                        "Start Your Engine"
                    )}
                </Button>

                {/* Error Message */}
                {status === "error" && (
                    <div className="p-2 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2 text-red-400 text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                        Something went wrong.
                    </div>
                )}
            </form>
        </div>
    );
}