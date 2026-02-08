import Button from "./Button";
import Section from "./Section";

export default function Solution() {
  return (
    <Section id="pricing" variant="main">


      {/* The Offer Card */}
      <div className="rounded-3xl py-12 px-2 bg-lightColor sm:px-10 border-3 border-accentColor text-mainColor">

        <div className="flex flex-col gap-14 sm:gap-10 md:flex-row">

          {/* Left Side: The Deliverables */}
          <div className="md:w-3/5 pr-6 sm:pr-0">
            <div className="space-y-8">

              {/* Feature 1 */}
              <div className="flex gap-2">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-paragraphSizeTablet">Mobile-First Design</h4>
                  <p className="text-paragraphSizeMobile">80% of your customers are on their phones. Your site will look perfect on every device, guaranteed.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-2">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-paragraphSizeTablet">Speed Optimized</h4>
                  <p className="text-paragraphSizeMobile">I code from scratch (no bulky site builders). Your site loads instantly, which improves your Google Ranking.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-2">
                <div className="w-12 h-12  rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-paragraphSizeTablet">100% Ownership</h4>
                  <p className="text-paragraphSizeMobile">Unlike marketing agencies that "rent" you a website, you own all the code and accounts. No hostage situations.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Pricing & CTA */}
          <div className="md:w-2/5 flex flex-col justify-center px-4 sm:px-10 ">
            <div className="text-center">

              <div className="text-headingSizeTablet sm:text-headingSizeLandscape font-extrabold mb-2">
                $250
              </div>
              <p className="mb-4 font-bold text-paragraphSizeMobile">
                One-Time Design Fee
              </p>

              <Button
                href="#contact"
                variant="primary"
              >
                Get More Leads
              </Button>


            </div>
          </div>

        </div>
      </div>

    </Section >
  );
}