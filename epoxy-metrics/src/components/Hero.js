import Button from "./Button";
import Section from "./Section";

export default function Hero() {
  return (
    <Section variant="main">

      <div className="flex justify-center">
        <div className=" px-6 py-1.5 rounded-full font-semibold bg-darkColor/30 text-paragraphSizeMobile border border-accentColor border-2">
          Epoxy Revenue Engine
        </div>
      </div>

      <h1
        className="
          font-extrabold text-center
          text-headingMobile md:text-headingSizeTablet lg:text-headingSizeLandscape
          capitalize leading-tight
        "
      >
        Fill your calendar with <span className="text-accentColor">Qualified</span> Leads
      </h1>

      <p className="text-center text-paragraphSizeMobile md:text-lg font-bold max-w-2xl mx-auto  ">
        A complete, done-for-you service that fills your calendar with highly qualified
        epoxy and concrete coating leads.
      </p>

      <div className="flex flex-col sm:flex-row gap-2 w-full justify-center">
        {/* Solid Primary Button */}
        <Button href="#contact" variant="primary">
          More Qualified Leads
        </Button>

        {/* Outline Button */}
        <Button href="#pricing" variant="outline">
          See What&apos;s Included
        </Button>
      </div>

    </Section>
  );
}