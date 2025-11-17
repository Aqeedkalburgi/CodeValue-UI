import React from "react";

const quickLinks = [
  "Software Team",
  "Technologies",
  "Resources",
  "Company",
  "Contact us",
  "FAQ",
];

const services = [
  "Dedicated Development",
  "Staff Augmentation Services",
  "Software Development",
  "Development Center",
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-transparent">
      <div className="w-full bg-black">
        <div className="max-w-[1440px] mx-auto px-[151px] py-[50px]">
          <div className="grid grid-cols-4 gap-8">
            <div className="flex flex-col">
              <img
                className="w-[170px] h-[41px] mb-[10px]"
                alt="Logoipsum"
                src="/logoipsum-264--3--2.svg"
              />
              <p className="[font-family:'Poppins',Helvetica] font-light text-[#ffffff] text-sm tracking-[0.14px] leading-[25px] mb-[67px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et
              </p>
              <img
                className="w-[170px] h-[34px]"
                alt="Group"
                src="/group-658.png"
              />
            </div>

            <div className="flex flex-col">
              <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#ffffff] text-[22px] tracking-[0] leading-5 mb-[41px]">
                Quick Links
              </h3>
              <div className="[font-family:'Poppins',Helvetica] font-light text-[#ffffff] text-base tracking-[0] leading-10">
                {quickLinks.map((link, index) => (
                  <div key={index}>{link}</div>
                ))}
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#ffffff] text-[22px] tracking-[0] leading-5 mb-[41px]">
                Services
              </h3>
              <div className="[font-family:'Poppins',Helvetica] font-light text-[#ffffff] text-base tracking-[0] leading-10">
                {services.map((service, index) => (
                  <div key={index}>{service}</div>
                ))}
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#ffffff] text-[22px] tracking-[0] leading-5 mb-[50px]">
                Contact Us
              </h3>
              <div className="flex flex-col gap-[20px]">
                <div className="flex items-start gap-[18px]">
                  <img
                    className="w-6 h-6 mt-1"
                    alt="Vuesax bold location"
                    src="/vuesax-bold-location.svg"
                  />
                  <div className="[font-family:'Poppins',Helvetica] font-light text-[#ffffff] text-base tracking-[0.32px] leading-[27px]">
                    Envato, Level 13, 2 Elizabeth <br />
                    Victoria 3000 India
                  </div>
                </div>
                <div className="flex items-center gap-[18px]">
                  <img
                    className="w-6 h-6"
                    alt="Vuesax bold call"
                    src="/vuesax-bold-call.svg"
                  />
                  <div className="[font-family:'Poppins',Helvetica] font-light text-[#ffffff] text-base tracking-[0.32px] leading-[30px] whitespace-nowrap">
                    +91 861 944 1176
                  </div>
                </div>
                <div className="flex items-center gap-[18px]">
                  <img
                    className="w-6 h-6"
                    alt="Vuesax bold sms"
                    src="/vuesax-bold-sms.svg"
                  />
                  <div className="[font-family:'Poppins',Helvetica] font-light text-[#ffffff] text-base tracking-[0.32px] leading-[30px] whitespace-nowrap">
                    ezyoga@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[45px] bg-[#2fc980] flex items-center justify-center">
        <div className="[font-family:'Poppins',Helvetica] font-medium text-[#ffffff] text-base tracking-[0.16px] leading-[25px] whitespace-nowrap">
          logoname. 2023. All rights reserved
        </div>
      </div>
    </footer>
  );
};
