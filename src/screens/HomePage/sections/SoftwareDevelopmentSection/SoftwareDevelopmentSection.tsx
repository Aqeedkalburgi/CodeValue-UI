import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Separator } from "../../../../components/ui/separator";

const features = [
  { text: "English Speaking Programmers" },
  { text: "Flexible Work Hours" },
  { text: "Rapid Onboarding Process" },
  { text: "Expertise In Top Technologies" },
  { text: "Reliable Partner Credentials" },
];

export const SoftwareDevelopmentSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#00003c] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="relative">
            <img
              className="w-full h-auto max-w-[870px]"
              alt="Background cityscape"
              src="/bg-1--1--1.png"
            />
          </div>

          <div className="flex flex-col">
            <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[#ffffff] text-[46px] leading-[62px] mb-12">
              Why Hire Software Developers In India?
            </h2>

            <div className="flex flex-col gap-0">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex items-center justify-between py-6">
                    <span className="[font-family:'Poppins',Helvetica] font-medium text-[#ffffff] text-xl leading-5">
                      {feature.text}
                    </span>
                    <ArrowRightIcon className="w-[29px] h-[29px] text-white flex-shrink-0" />
                  </div>
                  {index < features.length - 1 && (
                    <Separator className="bg-[#d9d9d9] opacity-[0.19]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
