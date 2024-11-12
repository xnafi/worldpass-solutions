"use client";
import Link from "next/link";
import Image from "next/image";
import immigrationOpportunitiesData from "@/data/immigrationOpportunitiesData";
import { motion } from "framer-motion";

const ImmigrationOpportunities = () => {
  return (
    <section
      className="immigration-opportunities-section py-8 px-4 bg-gray-100"
      data-scroll-section
    >
      <h2 className="text-3xl font-bold text-center mb-6">
        Immigration Opportunities
      </h2>
      <div className="opportunity-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {immigrationOpportunitiesData?.map((opportunity) => (
          <motion.div
            key={opportunity.id}
            className="relative w-64 h-80 overflow-hidden rounded-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={opportunity?.image}
                alt="image"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500"
              />
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <p className="text-white text-2xl font-semibold">
                {opportunity.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImmigrationOpportunities;
