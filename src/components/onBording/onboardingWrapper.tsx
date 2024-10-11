import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import backArrow from "../../../public/svg/arrow_back.svg";
import Button from "../button";

interface OnboardingWrapperProps {
  children: React.ReactNode;
  handleClick: () => void;
  activePage: number;
  color1: string;
  color2: string;
  color3: string;
}

const OnboardingWrapper: React.FC<OnboardingWrapperProps> = ({
  children,
  handleClick,
  color1,
  color2,
  color3,
}) => {
  const route = useRouter();

  return (
    <div className="flex flex-col justify-between w-[95%] lg:w-[85%] min-h-screen mx-auto">
      <div className="relative w-full">
        <button
          onClick={() => route.back()}
          className="absolute top-5 left-0 flex gap-2"
        >
          <Image className="inline-block" src={backArrow} alt="Back" />
          Get started
        </button>
      </div>

      <div className="flex flex-row gap-5 w-full mt-16">
        <div className={`border-t-8 ${color1} w-full`} />

        <div className={`border-t-8 ${color2} w-full`} />

        <div className={`border-t-8 ${color3} w-full`} />
      </div>

      <div className="flex-grow w-full mt-6 overflow-y-auto">{children}</div>

      <div className="w-full flex justify-center items-center py-4">
        <Button
          onClick={() => {
            handleClick();
          }}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default OnboardingWrapper;
