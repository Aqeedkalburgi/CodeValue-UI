import React from "react";

const processSteps = [
  {
    number: "1",
    title: "INQUIRY",
    description:
      "Share your requirements and project details with our team.",
    icon: "/group-1000004240-1.svg",
    iconClass: "w-[195px] h-[195px]",
  },
  {
    number: "2",
    title: "SELECT DEVELOPERS",
    description:
      "We shortlist the best-fit engineers based on your needs.",
    icon: "/group-1000004240.svg",
    iconClass: "w-[195px] h-[195px]",
  },
  {
    number: "3",
    title: "TEAM INTEGRATION",
    description:
      "Your chosen developers integrate into your workflow and processes.",
    icon: "/8666755-users-group-icon-1.svg",
    iconClass: "w-[72px] h-[72px]",
    hasCircleBorder: true,
  },
  {
    number: "4",
    title: "TEAM SCALING",
    description:
      "Easily add more developers as your project grows.",
    icon: "/7968885-scale-scaling-adobe-illustrator-tool-icon-1.svg",
    iconClass: "w-[71px] h-[58px]",
    hasCircleBorder: true,
  },
];

export const HiringProcessSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-[60px]">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Blog bg"
        src="/blog-bg-1.png"
      />

      <div className="relative z-10 container mx-auto px-4">
        <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[#223940] text-[50px] text-center tracking-[0] leading-[67px] mb-[8px]">
          Our Hiring Process
        </h2>

        <p className="[font-family:'Poppins',Helvetica] font-light text-[#132930] text-[15px] text-center tracking-[0] leading-[33px] mb-[69px] max-w-[763px] mx-auto">
          Take A Look At Our Simple And Straightforward Process To Hire Software
          Developers From Valuecoders.
        </p>

        <div className="flex items-start justify-center gap-[17px] max-w-[1138px] mx-auto">
          {processSteps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center w-[248px]">
                <div className="relative w-[195px] h-[195px] mb-[22px]">
                  {step.hasCircleBorder ? (
                    <div className="absolute inset-0 bg-[#ffffff] rounded-full border-8 border-solid border-[#2fc980] flex items-center justify-center">
                      <img
                        className={step.iconClass}
                        alt={step.title}
                        src={step.icon}
                      />
                    </div>
                  ) : (
                    <img
                      className={`${step.iconClass} mx-auto`}
                      alt={step.title}
                      src={step.icon}
                    />
                  )}

                  <div className="absolute top-0 right-0 w-[63px] h-[63px] bg-[#ff8c91] rounded-full border-[3px] border-solid border-[#ffffff] flex items-center justify-center">
                    <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#ffffff] text-3xl text-center tracking-[0] leading-[42px]">
                      {step.number}
                    </span>
                  </div>
                </div>

                <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#223940] text-2xl text-center tracking-[0] leading-[42px] mb-[6px]">
                  {step.title}
                </h3>

                <p className="[font-family:'Poppins',Helvetica] font-light text-[#132930] text-sm text-center tracking-[0] leading-6">
                  {step.description}
                </p>
              </div>

              {index < processSteps.length - 1 && (
                <div className="flex items-center pt-[101px]">
                  <img
                    className="w-8 h-8"
                    alt="Arrow next"
                    src="/4829869-arrow-next-right-icon--4--4.svg"
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
