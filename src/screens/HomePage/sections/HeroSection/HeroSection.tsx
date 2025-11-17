import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";

const formFields = [
  {
    id: "fullName",
    label: "Full Name",
    placeholder: "Enter You Name",
    type: "text",
  },
  {
    id: "email",
    label: "Email Address",
    placeholder: "Enter You Email",
    type: "email",
  },
  {
    id: "phone",
    label: "Phone No",
    placeholder: "Enter You Number",
    type: "tel",
  },
  {
    id: "country",
    label: "Country",
    placeholder: "Enter You Country",
    type: "text",
  },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full py-[119px] bg-[url(/section-bg-2-1.png)] bg-[100%_100%]">
      <div className="container mx-auto px-4 max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-6 max-w-[679px]">
            <div className="flex flex-col gap-2">
              <h2 className="[font-family:'Poppins',Helvetica] font-medium text-[#2fc980] text-[50px] tracking-[0] leading-[normal]">
                HIRE DEDICATED
              </h2>

              <div className="relative">
                <h1 className="[font-family:'Poppins',Helvetica] font-bold text-[#223940] text-[98px] tracking-[0] leading-[30px] whitespace-nowrap">
                  DEVELOPERS
                </h1>
                <div className="absolute top-[-72px] right-0 w-[199px] h-1 bg-[#2fc980]" />
              </div>
            </div>

            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#223940] text-lg tracking-[0] leading-[normal] mt-8">
              Top 1% Pre-vetted, In-house &amp; Dedicated Software Programmers
            </p>

            <p className="text-[#132930] text-[15px] leading-[30px] [font-family:'Poppins',Helvetica] font-light tracking-[0] max-w-[614px]">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry&#39;s Standard Dummy
              Text Ever Since The 1500s, When An Unknown Printer Took A Galley
              Of Type And Scrambled
            </p>

            <div className="flex gap-6 mt-6">
              <Button className="h-[52px] w-[181px] bg-[#ff8c91] hover:bg-[#ff8c91]/90 rounded-md">
                <span className="[font-family:'Poppins',Helvetica] font-medium text-[#ffffff] text-base tracking-[0] leading-[normal]">
                  View More
                </span>
                <img
                  className="w-[29.36px] h-[29.36px] ml-[5.8px]"
                  alt="Element arrow back"
                  src="/352020-arrow-back-icon-1.svg"
                />
              </Button>

              <Button
                variant="outline"
                className="h-[52px] w-[181px] rounded-md border-2 border-[#2dc67d] hover:bg-[#2dc67d]/10"
              >
                <span className="[font-family:'Poppins',Helvetica] font-medium text-[#223940] text-base tracking-[0] leading-[normal]">
                  Get In Touch
                </span>
                <img
                  className="w-[29.36px] h-[29.36px] ml-[9.8px]"
                  alt="Element arrow back"
                  src="/352020-arrow-back-icon-1.svg"
                />
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-[457px] bg-[#ffffff] rounded-[10px] shadow-[0px_4px_250px_#ffc6c987] border-0">
              <div className="w-full h-[99px] bg-[#2dc67d0f] rounded-[10px_10px_0px_0px] flex items-center justify-center px-[30px]">
                <div className="flex flex-col items-center gap-2 w-full">
                  <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#223940] text-xl tracking-[0] leading-[normal]">
                    Create Your Team
                  </h3>
                  <p className="text-[#223940] text-sm text-center leading-[normal] [font-family:'Poppins',Helvetica] font-light tracking-[0]">
                    Lorem Ipsum Is Simply Dummy Text Of The Printing
                  </p>
                </div>
              </div>

              <CardContent className="p-[30px]">
                <form className="flex flex-col gap-6">
                  <div className="grid grid-cols-2 gap-5">
                    {formFields.map((field) => (
                      <div key={field.id} className="flex flex-col gap-1">
                        <Label
                          htmlFor={field.id}
                          className="[font-family:'Poppins',Helvetica] font-medium text-[#223940] text-sm tracking-[0] leading-[normal]"
                        >
                          {field.label}
                        </Label>
                        <Input
                          id={field.id}
                          type={field.type}
                          placeholder={field.placeholder}
                          className="h-[47px] bg-[#ffffff] border border-solid border-[#00000017] [font-family:'Poppins',Helvetica] font-light text-[#223940] text-sm tracking-[0] leading-[normal] placeholder:text-[#223940] placeholder:font-light"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-1">
                    <Label
                      htmlFor="projectBrief"
                      className="[font-family:'Poppins',Helvetica] font-medium text-[#223940] text-sm tracking-[0] leading-[normal]"
                    >
                      Project Brief
                    </Label>
                    <Textarea
                      id="projectBrief"
                      placeholder="Enter You Project Brief"
                      className="h-[108px] bg-[#ffffff] border border-solid border-[#00000017] [font-family:'Poppins',Helvetica] font-light text-[#223940] text-sm tracking-[0] leading-[normal] placeholder:text-[#223940] placeholder:font-light resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="h-[52px] w-full bg-[#ff252f87] hover:bg-[#ff252f87]/90 rounded-md"
                  >
                    <span className="[font-family:'Poppins',Helvetica] font-medium text-[#ffffff] text-base tracking-[0] leading-[normal]">
                      Hire Software Developer
                    </span>
                    <img
                      className="w-[29.36px] h-[29.36px] ml-[3.8px]"
                      alt="Element arrow back"
                      src="/352020-arrow-back-icon-1.svg"
                    />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
