"use client";
import Image from "next/image";
import React from "react";
import shopImage from "../../public/svg/ShoppingSale.svg";
import check_circle from "../../public/svg/check_circle.svg";
import Button from "./button";

const goals = [
  "Reach Millions of Shoppers",
  "Easy Product Listing",
  "Secure and Fast Payments",
  "Boost Your Visibility",
];

interface Props {
  getStarted: () => void;
}

const WelcomePage: React.FC<Props> = ({ getStarted }) => {
  return (
    <div className="flex flex-col items-center gap-5 min-h-screen justify-around">
      <div className="w-[85%] lg:w-[50%] flex flex-col items-center">
        <Image alt="Image" src={shopImage} />

        <div className="text-center mt-4">
          <h1 className="text-4xl font-bold">Welcome</h1>
          <p className="text-lg">
            The safest platform to shop from social media vendors
          </p>
        </div>

        <div className="bg-sub w-full p-6 border-2 rounded-2xl border-main text-black mt-6">
          {goals.map((goal, index) => (
            <div key={index} className="flex flex-row items-center my-2">
              <Image src={check_circle} alt="check circle" className="mr-2" />
              <p>{goal}</p>
            </div>
          ))}
        </div>
      </div>

      <Button onClick={getStarted}>Get started</Button>
    </div>
  );
};

export default WelcomePage;
