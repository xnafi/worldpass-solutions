import immigrationOpportunitiesData from "@/data/immigrationOpportunitiesData";
import CardWithZoom from "../CardWithZoom/CardWithZoom";

import Link from "next/link";

import FadeOut from "@/utils/FadeOut";

const ImmigrationOpportunities = () => {
  return (
    <section className="immigration-opportunities-section py-4 px-4 grid place-items-center bg-black w-full">
      <div className="max-w-[1200px] mx-auto h-full lg:h-screen grid place-items-center">
        <FadeOut>
           <h2 className="headings font-bold text-center mb-0">
          Immigration Opportunities
        </h2>
        </FadeOut>
       

        <div className="flex flex-col md:flex-row gap-8 flex-wrap justify-around items-center">
          {immigrationOpportunitiesData?.map((opportunity) => (
            <FadeOut key={opportunity.id}>
              <div className="relative w-64 h-80 overflow-hidden rounded-lg cursor-pointer">
                <Link href={opportunity?.action?.link}>
                  <CardWithZoom
                    name={opportunity.title}
                    imageSrc={opportunity.image}
                  />
                </Link>
              </div>
            </FadeOut>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImmigrationOpportunities;
