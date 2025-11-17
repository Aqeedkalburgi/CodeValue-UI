import { CheckCircleIcon } from "lucide-react";
import React from "react";

const features = [
  {
    text: "Client-centric Approach",
  },
  {
    text: "Global Quality Standards",
  },
  {
    text: "Cutting-edge Infrastructure",
  },
  {
    text: "Best-in-class Project Management",
  },
  {
    text: "Time-zone Compatibility",
  },
  {
    text: "Agile Adaptability",
  },
];

export const TopCompaniesSection = (): JSX.Element => {
  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <img
              className="w-full max-w-[520px] h-auto"
              alt="Code typing bro"
              src="/code-typing-bro-1.svg"
            />
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[#223940] text-[34px] leading-[47px]">
              Top Companies Trust Valuecoders For Hiring Software Developers
            </h2>

            <p className="text-[#132930] text-[15px] leading-7 [font-family:'Poppins',Helvetica] font-light">
              Companies worldwide rely on us for dependable engineering support, predictable delivery, and a smooth outsourcing experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircleIcon className="w-[18px] h-[18px] text-[#223940] flex-shrink-0" />
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-[#132930] text-[15px] leading-7">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
