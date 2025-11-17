import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonials = [
  {
    image: "/vector-1.png",
    profileImage: "/group-1000004263.png",
    name: "Krish Bruynson",
    title: "Director, Storloft",
  },
  {
    image: "/vector-2.png",
    profileImage: "/group-1000004264.png",
    name: "Krish Bruynson",
    title: "Director, Storloft",
  },
  {
    image: "/vector-3.png",
    profileImage: "/group-1000004265.png",
    name: "Krish Bruynson",
    title: "Director, Storloft",
  },
  {
    image: "/vector-4.png",
    profileImage: "/group-1000004266.png",
    name: "Krish Bruynson",
    title: "Director, Storloft",
  },
];

export const ClientTestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-[1148px] mx-auto">
        <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[#223940] text-[46px] text-center tracking-[0] leading-[67px] mb-2">
          What Our Clients Have To Say About Us
        </h2>

        <p className="[font-family:'Poppins',Helvetica] font-light text-[#132930] text-[15px] text-center tracking-[0] leading-[33px] mb-[78px] max-w-[529px] mx-auto">
          Take A Look At Our Simple And Straightforward Process To Hire Software
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-start">
              <Card className="w-full h-[301px] mb-[58px] relative">
                <CardContent className="p-0">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    alt="Testimonial"
                    src={testimonial.image}
                  />
                </CardContent>
                <img
                  className="absolute -bottom-9 left-1/2 -translate-x-1/2 w-[72px] h-[72px]"
                  alt="Profile"
                  src={testimonial.profileImage}
                />
              </Card>

              <div className="w-full">
                <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-[22px] tracking-[0] leading-[33px] mb-0">
                  {testimonial.name}
                </h3>

                <p className="[font-family:'Poppins',Helvetica] font-light text-[#6e6e6e] text-base tracking-[0] leading-[33px] mb-[1px]">
                  {testimonial.title}
                </p>

                <div className="flex gap-[17px]">
                  {[...Array(5)].map((_, starIndex) => (
                    <img
                      key={starIndex}
                      className="w-5 h-5"
                      alt="StarIcon icon"
                      src="/216411-star-icon-5.svg"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
