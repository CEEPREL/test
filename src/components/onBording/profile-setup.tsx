"use client";

import React from "react";
import InputField from "../inputField";
import instagram from "../../../public/svg/Instagram.svg";
import tiktok from "../../../public/svg/Tik Tok.svg";
import google from "../../../public/svg/Google.svg";
import Image from "next/image";

interface ProfileSetupProps {
  fullName: string;
  setFullName: (value: string) => void;
  username: string;
  setUsername: (value: string) => void;
  phoneNumber: string;
  setPhoneNumber: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
}

const ProfileSetup: React.FC<ProfileSetupProps> = ({
  fullName,
  setFullName,
  username,
  setUsername,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
}) => {
  const authLogos = [instagram, tiktok, google];

  return (
    <div className="flex flex-col items-start lg:items-center gap-6 h-full w-full">
      <div className="text-left lg:text-center">
        <h1 className="text-3xl font-semibold">Complete profile setup</h1>
        <p className="text-lg text-gray-600 mt-4">
          Connect your socials for quick setup
        </p>
      </div>
      <div className="flex w-full justify-evenly flex-row">
        {authLogos.map((logo, index) => (
          <button
            key={index}
            className="flex border-4 border-background w-[95%] p-4 bg-gray-100 justify-center rounded-md my-2"
          >
            <Image
              src={logo}
              alt="authentication logo"
              className="flex justify-center items-center"
            />
          </button>
        ))}
      </div>
      <p className="text-lg text-gray-600">Or enter manually</p>
      <div className="flex flex-col w-full gap-4 max-w-md">
        <InputField
          placeholder="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <InputField
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          placeholder="Phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <InputField
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ProfileSetup;
