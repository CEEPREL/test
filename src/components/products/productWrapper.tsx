// components/products/ProductWrapper.tsx
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import backArrow from "../../../public/svg/arrow_back.svg";
import Button from "../button";
import moreIcon from "../../../public/svg/more.svg";
import doneIcon from "../../../public/svg/doneIcon.svg";
import dropIcon from "../../../public/svg/dropIcon.svg";

interface SectionProps {
  title: string;
  content: React.ReactNode;
}

interface ProductWrapperProps {
  children: SectionProps[];
  handleClick: () => void;
  header: string;
}

const ProductWrapper: React.FC<ProductWrapperProps> = ({
  children,
  handleClick,
  header,
}) => {
  const route = useRouter();
  const [openSection, setOpenSection] = useState<Record<number, boolean>>({});

  const toggleSection = (index: number) => {
    setOpenSection((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="flex flex-col w-[95%] lg:w-[85%] min-h-screen mx-auto py-6">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => route.back()}
          className="flex items-center gap-2 text-lg font-bold"
        >
          <Image src={backArrow} alt="Back" />
          {header}
        </button>
        <button>
          <Image src={moreIcon} alt="more" />
        </button>
      </div>

      <div className="flex justify-between items-center mb-4">
        <button className="flex items-center gap-2 text-xs border border-gray-300 px-2 py-1 rounded-3xl">
          Done
          <Image src={doneIcon} alt="Done" />
        </button>
        <h3 className="text-main">Preview product</h3>
      </div>

      <div className="flex flex-col w-full overflow-y-auto space-y-6">
        {children.map((section, index) => (
          <div key={index} className="flex flex-col space-y-4">
            <div className="flex justify-between items-center w-full border-t border-gray-200 pt-4">
              <h3 className="font-bold">{section.title}</h3>
              <Image
                className={`cursor-pointer transition-transform ${
                  openSection[index] ? "rotate-180" : "rotate-0"
                }`}
                src={dropIcon}
                alt="Dropdown"
                onClick={() => toggleSection(index)}
              />
            </div>
            <div
              className={`transition-all duration-300 ${
                openSection[index] ? "hidden" : "visible"
              }`}
            >
              {section.content}
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-full justify-center items-center mt-8 py-4 ">
        <div className="flex lg:max-w-md gap-2 w-full">
          <button
            className="border w-[85%] lg:w-[50%] p-3 rounded-full border-main text-main"
            onClick={handleClick}
          >
            Continue
          </button>
          <Button onClick={handleClick}>Continue</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductWrapper;
