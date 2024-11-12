import Banner from "@/components/view/Banner/Banner";
import LocoWraper from "@/utils/LocoWraper";
import React from "react";
import About from "../../components/view/About/About";
import ImmigrationOpportunities from "@/components/view/ImmigrationOpportunities/ImmigrationOpportunities";

export default function HomePage() {
  return (
    <>
      <LocoWraper>
        <Banner />
        <ImmigrationOpportunities />
        <About />
      </LocoWraper>
    </>
  );
}
