import Link from "next/link";
import Section from "../../components/Section";
import Button from "../../components/Button";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* We use your Section component, but add 'flex-grow' so it fills the screen 
          if the user has a large monitor. 
      */}
      <Section variant="light" className="flex-grow justify-center">
        <div className="max-w-2xl mx-auto text-center space-y-8 py-12">

          {/* Animated Success Icon Container */}
          <div className="flex justify-center mb-8">
            <div className="relative w-24 h-24 flex items-center justify-center bg-green-100 rounded-full">
              <svg
                className="w-12 h-12 text-green-600 animate-check"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                  className="animate-draw"
                />
              </svg>

              {/* Subtle Pulse Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-green-200 animate-[ping_2s_infinite_opacity-20]"></div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-darkColor">
            Application <span className="text-mainColor">Received.</span>
          </h1>

          {/* Reassurance Copy */}
          <p className="text-xl text-gray-600 leading-relaxed">
            Thanks for reaching out! I have received your request and will review your current website setup.
          </p>

          {/* Next Steps Box */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-left space-y-4 max-w-lg mx-auto">
            <h3 className="font-bold text-lg text-darkColor flex items-center gap-2">
              What happens now?
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span>I will analyze your current digital presence.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span>I will draft a preliminary strategy for your brand.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span>Expect an email from <b>tony@epoxymetrics.com</b> within 24 hours.</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button href="/" variant="outline">
              Back to Home
            </Button>
            {/* Optional: Link to a 'Portfolio' or 'Blog' if you have one later */}
            <a
              href="https://instagram.com/epoxymetrics"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg font-bold text-center text-gray-500 hover:text-mainColor transition-colors flex items-center justify-center gap-2"
            >
              <span>Follow on Instagram</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
            </a>
          </div>

        </div>
      </Section>
    </div>
  );
}