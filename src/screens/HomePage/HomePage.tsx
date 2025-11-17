import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection";
import { ClientTestimonialsSection } from "./sections/ClientTestimonialsSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { HiringProcessSection } from "./sections/HiringProcessSection";
import { ProcessStepsSection } from "./sections/ProcessStepsSection";
import { SoftwareDevelopmentSection } from "./sections/SoftwareDevelopmentSection";
import { TechnologyStackSection } from "./sections/TechnologyStackSection";
import { TopCompaniesSection } from "./sections/TopCompaniesSection";

export const HomePage = (): JSX.Element => {
  return (
    <div className="bg-[#ffffff] overflow-hidden w-full min-w-[1440px] relative">
      <div className="fixed top-[1596px] left-[-35px] w-[436px] h-[436px] bg-[#ff857854] rounded-[218px] blur-[197px] pointer-events-none z-0" />

      <div className="fixed top-[3390px] left-[1044px] w-[436px] h-[436px] bg-[#ff857833] rounded-[218px] blur-[197px] pointer-events-none z-0" />

      <div className="fixed top-[5345px] left-[1048px] w-[436px] h-[436px] bg-[#2fc98042] rounded-[218px] blur-[197px] pointer-events-none z-0" />

      <div className="fixed top-[5857px] left-[-200px] w-[436px] h-[436px] bg-[#ff85784a] rounded-[218px] blur-[197px] pointer-events-none z-0" />

      <div className="fixed top-[2481px] left-[1158px] w-[436px] h-[436px] bg-[#2fc9804f] rounded-[218px] blur-[197px] pointer-events-none z-0" />

      <div className="fixed top-[856px] left-[1101px] w-[436px] h-[436px] bg-[#2fc98021] rounded-[218px] blur-[197px] pointer-events-none z-0" />

      <div className="relative z-10">
        <HeaderSection />
        <HeroSection />
        <AboutUsSection />
        <TechnologyStackSection />
        <SoftwareDevelopmentSection />
        <TopCompaniesSection />
        <HiringProcessSection />
        <ProcessStepsSection />
        <ClientTestimonialsSection />
        <FooterSection />
      </div>
    </div>
  );
};
