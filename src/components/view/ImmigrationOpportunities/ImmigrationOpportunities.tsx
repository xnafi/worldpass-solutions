'use client'
import immigrationOpportunitiesData from "@/data/immigrationOpportunitiesData";
import CardWithZoom from "../CardWithZoom/CardWithZoom";
import { useRouter } from "next/navigation";

const ImmigrationOpportunities = () => {
  const router = useRouter();
  return (
    <section
      className="immigration-opportunities-section py-8 px-4 max-w-[1200px] mx-auto"
      data-scroll-section
    >
      <h2 className="headings font-bold text-center mb-6">
        Immigration Opportunities
      </h2>
      <div className="flex flex-col md:flex-row gap-10 flex-wrap justify-around items-center">
        {immigrationOpportunitiesData?.map((opportunity) => (
          <div
            key={opportunity.id}
            className="relative w-64 h-80 overflow-hidden rounded-lg cursor-pointer"
          >
            <button type="button" onClick={() => router.push(opportunity?.action?.link)}>
              <CardWithZoom
                name={opportunity.title}
                imageSrc={opportunity.image}
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImmigrationOpportunities;
