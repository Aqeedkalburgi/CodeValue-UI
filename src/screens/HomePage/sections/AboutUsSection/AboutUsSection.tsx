import { CheckIcon } from "lucide-react";
import React from "react";

const features = [
  {
    title: "High Quality/cost Ratio",
    subtitle: "Hire Silicon Valley Caliber At Half The Cost",
    description:
      "Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.",
    checkColor: "bg-[#2fc980]",
    position: "right",
  },
  {
    title: "Rigorous Vetting",
    subtitle: "5+ Hours Of Tests And Interviews",
    description:
      "Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.",
    checkColor: "bg-[#2fc980]",
    position: "left",
  },
];

const additionalPoints = [
  {
    text: "100+ Skills Available",
    description:
      "Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.",
    checkColor: "bg-[#ff252f87]",
    position: "right",
  },
  {
    text: "Seniority Tests",
    description:
      "Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.",
    checkColor: "bg-[#ff252f87]",
    position: "left",
  },
];

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[#223940] text-[50px] tracking-[0] leading-[67px] mb-6">
            Why Hire Developers From Our Name
          </h2>
          <p className="max-w-[740px] mx-auto text-[#132930] text-[15px] leading-[33px] [font-family:'Poppins',Helvetica] font-light tracking-[0]">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry. Lorem Ipsum Has Been The Industry&#39;s Standard Dummy
            Text Ever Since
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div className="relative flex items-center justify-center">
            <img
              className="w-full max-w-[583px] h-auto object-cover"
              alt="Developer workspace"
              src="/image-6.png"
            />
            <img
              className="absolute bottom-0 left-0 w-full max-w-[472px] h-auto"
              alt="Illustration"
              src="/2844250-1.svg"
            />
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-6 h-6 bg-[#2fc980] rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckIcon className="w-3 h-2.5 text-white" />
                </div>
                <div>
                  <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#223940] text-[34px] tracking-[0] leading-5 mb-2">
                    High Quality/cost Ratio
                  </h3>
                </div>
              </div>
              <div className="ml-9">
                <p className="[font-family:'Poppins',Helvetica] font-normal text-[#223940] text-[22px] tracking-[0] leading-5 mb-3">
                  Hire Silicon Valley Caliber At Half The Cost
                </p>
                <p className="[font-family:'Poppins',Helvetica] font-light text-[#132930] text-[15px] tracking-[0] leading-[27px]">
                  Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries
                  Who Have Applied To Turing.
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-6 h-6 bg-[#ff252f87] rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckIcon className="w-3 h-2.5 text-white" />
                </div>
                <div>
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-[#223940] text-[22px] tracking-[0] leading-5">
                    100+ Skills Available
                  </p>
                </div>
              </div>
              <div className="ml-9">
                <p className="[font-family:'Poppins',Helvetica] font-light text-[#132930] text-[15px] tracking-[0] leading-[27px]">
                  Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries
                  Who Have Applied To Turing.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center space-y-8 order-2 lg:order-1">
            <div>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-6 h-6 bg-[#2fc980] rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckIcon className="w-3 h-2.5 text-white" />
                </div>
                <div>
                  <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#223940] text-[34px] tracking-[0] leading-5 mb-2">
                    Rigorous Vetting
                  </h3>
                </div>
              </div>
              <div className="ml-9">
                <p className="[font-family:'Poppins',Helvetica] font-normal text-[#223940] text-[22px] tracking-[0] leading-5 mb-3">
                  5+ Hours Of Tests And Interviews
                </p>
                <p className="[font-family:'Poppins',Helvetica] font-light text-[#132930] text-[15px] tracking-[0] leading-[27px]">
                  Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries
                  Who Have Applied To Turing.
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-6 h-6 bg-[#ff252f87] rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckIcon className="w-3 h-2.5 text-white" />
                </div>
                <div>
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-[#223940] text-[22px] tracking-[0] leading-5">
                    Seniority Tests
                  </p>
                </div>
              </div>
              <div className="ml-9">
                <p className="[font-family:'Poppins',Helvetica] font-light text-[#132930] text-[15px] tracking-[0] leading-[27px]">
                  Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries
                  Who Have Applied To Turing.
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center order-1 lg:order-2">
            <img
              className="w-full max-w-[594px] h-auto"
              alt="Team collaboration illustration"
              src="/2517913-1.svg"
            />
            <img
              className="absolute top-0 right-0 w-[53%] h-auto object-cover"
              alt="Background image"
              src="/image-7.png"
            />
            <img
              className="absolute bottom-[10%] right-0 w-[4.34%] h-auto object-cover"
              alt="Decorative element"
              src="/image-9.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
