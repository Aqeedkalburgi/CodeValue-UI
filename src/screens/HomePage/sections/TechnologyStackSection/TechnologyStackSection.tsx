import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const technologyCards = [
  {
    id: 1,
    title: "Backend Development",
    bgColor: "bg-[#f3f5ff]",
    accentColor: "bg-[#b0bdff]",
    icon: "/web-settings-1.png",
    tags: [
      { text: ".NET", size: "text-sm" },
      { text: "C/C++", size: "text-xs" },
      { text: "DJANGO", size: "text-xs" },
      { text: "Firebase", size: "text-xs" },
      { text: "GOLANG", size: "text-xs" },
      { text: "SYMFONY", size: "text-xs" },
      { text: "LARAVEL", size: "text-xs" },
      { text: "NODE", size: "text-xs" },
      { text: "PHP", size: "text-xs" },
      { text: "PYTHON", size: "text-xs" },
      { text: "RUBY ON RAILS", size: "text-xs" },
      { text: "JAVA", size: "text-xs" },
    ],
  },
  {
    id: 2,
    title: "Fronted Development",
    bgColor: "bg-[#fff3e6]",
    accentColor: "bg-[#ffc093]",
    icon: "/web-settings-2.png",
    tags: [
      { text: ".NET", size: "text-sm" },
      { text: "C/C++", size: "text-xs" },
      { text: "DJANGO", size: "text-xs" },
      { text: "Firebase", size: "text-xs" },
      { text: "GOLANG", size: "text-xs" },
      { text: "SYMFONY", size: "text-xs" },
      { text: "LARAVEL", size: "text-xs" },
      { text: "NODE", size: "text-xs" },
      { text: "PHP", size: "text-xs" },
      { text: "PYTHON", size: "text-xs" },
      { text: "RUBY ON RAILS", size: "text-xs" },
      { text: "JAVA", size: "text-xs" },
    ],
  },
  {
    id: 3,
    title: "Mobile Development",
    bgColor: "bg-[#fbeefd]",
    accentColor: "bg-[#f6bcff]",
    icon: "/web-settings-3.png",
    tags: [
      { text: ".NET", size: "text-sm" },
      { text: "C/C++", size: "text-xs" },
      { text: "DJANGO", size: "text-xs" },
      { text: "Firebase", size: "text-xs" },
      { text: "GOLANG", size: "text-xs" },
      { text: "SYMFONY", size: "text-xs" },
      { text: "LARAVEL", size: "text-xs" },
      { text: "NODE", size: "text-xs" },
      { text: "PHP", size: "text-xs" },
      { text: "PYTHON", size: "text-xs" },
      { text: "RUBY ON RAILS", size: "text-xs" },
      { text: "JAVA", size: "text-xs" },
    ],
  },
  {
    id: 4,
    title: "Blockchain, Ai/ML",
    bgColor: "bg-[#effdff]",
    accentColor: "bg-[#9ff3ff]",
    icon: "/web-settings-4.png",
    tags: [
      { text: ".NET", size: "text-sm" },
      { text: "C/C++", size: "text-xs" },
      { text: "DJANGO", size: "text-xs" },
      { text: "Firebase", size: "text-xs" },
      { text: "GOLANG", size: "text-xs" },
      { text: "SYMFONY", size: "text-xs" },
      { text: "LARAVEL", size: "text-xs" },
      { text: "NODE", size: "text-xs" },
      { text: "PHP", size: "text-xs" },
      { text: "PYTHON", size: "text-xs" },
      { text: "RUBY ON RAILS", size: "text-xs" },
      { text: "JAVA", size: "text-xs" },
    ],
  },
  {
    id: 5,
    title: "DevOps & Low-Code",
    bgColor: "bg-[#fbfff1]",
    accentColor: "bg-[#ffdaa2]",
    icon: "/web-settings-2-1.png",
    tags: [
      { text: ".NET", size: "text-sm" },
      { text: "C/C++", size: "text-xs" },
      { text: "DJANGO", size: "text-xs" },
      { text: "Firebase", size: "text-xs" },
      { text: "GOLANG", size: "text-xs" },
      { text: "SYMFONY", size: "text-xs" },
      { text: "LARAVEL", size: "text-xs" },
      { text: "NODE", size: "text-xs" },
      { text: "PHP", size: "text-xs" },
      { text: "PYTHON", size: "text-xs" },
      { text: "RUBY ON RAILS", size: "text-xs" },
      { text: "JAVA", size: "text-xs" },
    ],
  },
  {
    id: 6,
    title: "E-commerce & CMS",
    bgColor: "bg-[#ffbcbc42]",
    accentColor: "bg-[#ffbcbc]",
    icon: "/web-settings-5.png",
    tags: [
      { text: ".NET", size: "text-sm" },
      { text: "C/C++", size: "text-xs" },
      { text: "DJANGO", size: "text-xs" },
      { text: "Firebase", size: "text-xs" },
      { text: "GOLANG", size: "text-xs" },
      { text: "SYMFONY", size: "text-xs" },
      { text: "LARAVEL", size: "text-xs" },
      { text: "NODE", size: "text-xs" },
      { text: "PHP", size: "text-xs" },
      { text: "PYTHON", size: "text-xs" },
      { text: "RUBY ON RAILS", size: "text-xs" },
      { text: "JAVA", size: "text-xs" },
    ],
  },
];

export const TechnologyStackSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <img
          className="absolute top-0 left-0 w-[76px] h-[56px] object-cover"
          alt="Image"
          src="/image-8.png"
        />

        <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[#223940] text-[50px] text-center tracking-[0] leading-[67px] whitespace-nowrap mb-4">
          Our Diverse Technology Competency
        </h2>

        <p className="max-w-[740px] mx-auto text-[#132930] text-[15px] text-center leading-[33px] [font-family:'Poppins',Helvetica] font-light tracking-[0] mb-12">
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry. Lorem Ipsum Has Been The Industry&#39;s Standard Dummy Text
          Ever Since
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologyCards.map((card) => (
            <Card
              key={card.id}
              className={`${card.bgColor} shadow-[0px_4px_80px_transparent] border-0 overflow-hidden`}
            >
              <CardContent className="p-0">
                <div className="p-7">
                  <img
                    className="w-12 h-[47px] object-cover mb-6"
                    alt={card.title}
                    src={card.icon}
                  />

                  <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#223940] text-xl tracking-[0] leading-[normal] mb-6">
                    {card.title}
                  </h3>

                  <div className="flex flex-wrap gap-x-2 gap-y-3 mb-6">
                    {card.tags.map((tag, index) => (
                      <React.Fragment key={index}>
                        <span
                          className={`[font-family:'Poppins',Helvetica] font-normal text-black ${tag.size} tracking-[0] leading-[normal]`}
                        >
                          {tag.text}
                        </span>
                        {index < card.tags.length - 1 && (
                          <div className="w-px h-3.5 bg-[#00000030] self-center" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div
                  className={`w-full h-1.5 ${card.accentColor} shadow-[0px_4px_80px_transparent]`}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
