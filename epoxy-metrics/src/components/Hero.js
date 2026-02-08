import Button from "./Button";
import Section from "./Section";

export default function Hero() {
  return (
    <Section variant="light">

      <div className="flex justify-center">
        <div className=" px-6 py-1.5 rounded-full font-semibold text-darkColor bg-mainColor/30 border border-mainColor border-2  ">
          Websites for Epoxy Pros
        </div>
      </div>

      <h1
        className="
          font-extrabold text-center
          text-headingMobile md:text-headingSizeTablet lg:text-headingSizeLandscape
        "
      >
        Your Floors Are <span className="text-accentColor italic">Premium.</span>
        <br />
        Your <span className="text-accentColor italic">Website</span> Should Be Too.
      </h1>

      <div className="flex flex-col sm:flex-row gap-2 w-full justify-center">
        {/* Solid Primary Button */}
        <Button href="#contact" variant="primary">
          Start Getting More Leads
        </Button>

        {/* Outline Button */}
        <Button href="#pricing" variant="outline">
          See What's Included
        </Button>
      </div>

    </Section>
  );
}