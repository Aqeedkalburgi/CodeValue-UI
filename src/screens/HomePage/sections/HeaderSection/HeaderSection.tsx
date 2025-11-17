import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../../../components/ui/navigation-menu";

const navigationItems = [
  { label: "Software Team", hasDropdown: false },
  { label: "Services", hasDropdown: true },
  { label: "Technologies", hasDropdown: false },
  { label: "Resources", hasDropdown: false },
  { label: "Company", hasDropdown: false },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="w-full h-[84px] bg-[#ffffff] shadow-[0px_4px_100px_#657a8240]">
      <div className="flex items-center justify-between h-full px-[150px]">
        <img
          className="w-[180px] h-[43px]"
          alt="Logoipsum"
          src="/logoipsum-264-1.svg"
        />

        <NavigationMenu>
          <NavigationMenuList className="flex gap-8">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                {item.hasDropdown ? (
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent [font-family:'Poppins',Helvetica] font-normal text-[#223940] text-base">
                    {item.label}
                  </NavigationMenuTrigger>
                ) : (
                  <NavigationMenuLink className="[font-family:'Poppins',Helvetica] font-normal text-[#223940] text-base hover:text-[#2dc67d] transition-colors cursor-pointer">
                    {item.label}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          variant="outline"
          className="h-[52px] px-6 bg-[#ffffff] rounded-md border-2 border-solid border-[#2dc67d] hover:bg-[#2dc67d] hover:text-white transition-colors"
        >
          <span className="[font-family:'Poppins',Helvetica] font-medium text-[#223940] text-base mr-[9.8px]">
            Get In Touch
          </span>
          <img
            className="w-[29.36px] h-[29.36px]"
            alt="Element arrow back"
            src="/352020-arrow-back-icon-1.svg"
          />
        </Button>
      </div>
    </header>
  );
};
