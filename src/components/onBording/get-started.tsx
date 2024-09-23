"use client";

import React from "react";
import InputField from "../inputField";

interface GetStartedProps {
  emailOrPhone: string;
  setEmailOrPhone: (value: string) => void;
}

const GetStarted: React.FC<GetStartedProps> = ({
  emailOrPhone,
  setEmailOrPhone,
}) => {
  return (
    <div className="flex flex-col items-start lg:items-center  gap-6 h-full w-full">
      <div className=" text-left lg:text-center">
        <h1 className="text-3xl font-semibold">
          Enter your phone number or email to get started
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          We will send you a verification code for confirmation
        </p>
      </div>
      <div className="flex flex-col w-full gap-y-96 justify-around items-center ">
        <InputField
          placeholder="Enter phone number or email"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
        />
      </div>
    </div>
  );
};

export default GetStarted;
