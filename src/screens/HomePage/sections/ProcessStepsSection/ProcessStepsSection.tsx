import { CheckCircleIcon } from "lucide-react";
import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const navigationItems = [
  { id: 1, label: "Benefits Of Hiring Developers" },
  { id: 2, label: "Key Factors To Consider While Hiring" },
  { id: 3, label: "Defining Your Project Requirements" },
  { id: 4, label: "Choosing The Right Development Model" },
  { id: 5, label: "Typical Challenges For Hiring Developers" },
  { id: 6, label: "Hiring Freelancers Vs. Dedicated Developers" },
  { id: 7, label: "Communication With Remote Developers" },
];

const benefitsLeftColumn = [
  "Client-centric Approach",
  "Global Quality Standards",
  "Cutting-edge Infrastructure",
];

const benefitsRightColumn = [
  "Best-in-class Project Management",
  "Time-zone Compatibility",
  "Agile Adaptability",
];

export const ProcessStepsSection = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState(2);

  return (
    <section className="relative w-full bg-[#f7f7f7] py-[68px] px-4">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[#223940] text-[35px] text-center tracking-[0] leading-[53px] mb-[86px]">
          User Guide To Hire Dedicated Software Developers
        </h2>

        <div className="flex gap-[13px] max-w-[1135px] mx-auto">
          <Card className="flex-shrink-0 w-[378px] bg-white border-none shadow-none">
            <CardContent className="p-0">
              <nav className="flex flex-col">
                {navigationItems.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <button
                      onClick={() => setActiveItem(item.id)}
                      className={`text-left px-[17px] py-6 [font-family:'Poppins',Helvetica] text-base tracking-[0] leading-[33px] transition-colors ${
                        activeItem === item.id
                          ? "bg-[#2fc980] text-white font-medium"
                          : "bg-white text-black font-light hover:bg-gray-50"
                      }`}
                    >
                      {item.label}
                    </button>
                    {index < navigationItems.length - 1 && (
                      <div className="h-px bg-[#00000012]" />
                    )}
                  </React.Fragment>
                ))}
              </nav>
            </CardContent>
          </Card>

          <Card className="flex-1 bg-white border-none shadow-none">
            <CardContent className="p-[29px]">
              <h3 className="[font-family:'Poppins',Helvetica] font-medium text-black text-xl tracking-[0] leading-[33px] mb-[29px]">
                Benefits Of Hiring Developers
              </h3>

              <p className="text-[#132930] text-[15px] leading-7 [font-family:'Poppins',Helvetica] font-light tracking-[0] mb-[57px]">
                Hiring dedicated developers gives you quick access to skilled professionals who can start working on your project immediately. 
                It saves time, reduces costs, and ensures faster delivery with better quality. 
                You get flexibility to scale your team easily, avoid recruitment hassles, and benefit from experts who follow modern technologies and clean coding practices.
              </p>

              <div className="grid grid-cols-2 gap-x-[115px] gap-y-[14px] mb-[51px]">
                {benefitsLeftColumn.map((benefit, index) => (
                  <div
                    key={`left-${index}`}
                    className="flex items-center gap-[15px]"
                  >
                    <CheckCircleIcon className="w-[18px] h-[18px] text-green-500 flex-shrink-0" />
                    <span className="[font-family:'Poppins',Helvetica] font-medium text-[#132930] text-[15px] tracking-[0] leading-7">
                      {benefit}
                    </span>
                  </div>
                ))}
                {benefitsRightColumn.map((benefit, index) => (
                  <div
                    key={`right-${index}`}
                    className="flex items-center gap-[15px]"
                  >
                    <CheckCircleIcon className="w-[18px] h-[18px] text-green-500 flex-shrink-0" />
                    <span className="[font-family:'Poppins',Helvetica] font-medium text-[#132930] text-[15px] tracking-[0] leading-7">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <img
                className="w-full h-[199px] object-cover"
                alt="Development team"
                src="/rectangle-107.png"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
