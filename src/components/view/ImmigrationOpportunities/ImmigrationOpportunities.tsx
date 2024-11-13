"use client";
import immigrationOpportunitiesData from "@/data/immigrationOpportunitiesData";
import CardWithZoom from "../CardWithZoom/CardWithZoom";

import Link from "next/link";

const ImmigrationOpportunities = () => {

  return (
    <section
      className="immigration-opportunities-section py-8 px-4  grid place-items-center bg-black w-full"
      data-scroll-section
    >
      <div className="max-w-[1200px] mx-auto h-screen grid place-items-center">
        <h2 className="headings font-bold text-center mb-2">
          Immigration Opportunities
        </h2>
        <div className="flex flex-col md:flex-row gap-8 flex-wrap justify-around items-center">
          {immigrationOpportunitiesData?.map((opportunity) => (
            <div
              key={opportunity.id}
              className="relative w-64 h-80 overflow-hidden rounded-lg cursor-pointer"
            >
              <Link href={opportunity?.action?.link}>
                <CardWithZoom
                  name={opportunity.title}
                  imageSrc={opportunity.image}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImmigrationOpportunities;
