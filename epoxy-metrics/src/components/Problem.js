import Section from "./Section";
import Button from "./Button";

export default function Problem() {
  return (
    <Section id="portfolio" variant="light">

      <div className="flex flex-col gap-2 ">
        {/* H2: Scaled to match Hero hierarchy */}
        <h2 className="font-bold md:text-center text-left text-subheadingSizeMobile md:text-subheadingSizeTablet lg:text-subheadingSizeLandscape">
          Your <span className="text-accentColor italic">Website</span> Does The Selling.
        </h2>

        {/* Quote/Sub-head */}
        <p className="text-left md:text-center text-paragraphSizeMobile sm:text-paragraphSizeTablet">
          Word of mouth is great, but it’s unpredictable. Your business deserves a digital showroom that builds trust and capture paying clients, even while you’re on the job site.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 px-2 sm:px-4 md:px-0 ">

        {/* Left Side: Mockup Placeholder (You can replace this with an actual screenshot Image later) */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img src="/images/Demo-Epoxy-Landing-Page.png" alt="Epoxy Demo 1" />
        </div>

        {/* Right Side: Description & Link */}
        <div className="w-full flex flex-col gap-4 md:w-1/2 text-center md:text-left">

          <p className="text-paragraphSizeMobile sm:text-paragraphSizeTablet">
            Click to view a real demo.
          </p>

          {/* External Link to Firebase Hosted Site */}
          <Button
            href="https://epoxy-demo-1.vercel.app/"
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            View Live Site

          </Button>
        </div>

      </div>

    </Section>
  );
}