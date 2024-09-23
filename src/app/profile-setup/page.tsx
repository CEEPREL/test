"use client";

import ProfileSetup from "@/components/onBording/profile-setup";
import OnboardingWrapper from "@/components/onBording/onboardingWrapper";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/contextAPI/global";

export default function ProfileSetupPage() {
  const { setUser } = useGlobalContext();
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    const [firstName, lastName] = fullName.split(" ");
    setUser((prevUser) => ({
      ...prevUser,
      firstName,
      lastName,
      userName: username,
      phoneNumber,
      email,
    }));
    console.log(email);

    router.push("/setup-store");
  };

  const colors = ["border-main", "border-gray-200"];

  return (
    <OnboardingWrapper
      color1={colors[0]}
      color2={colors[0]}
      color3={colors[1]}
      activePage={2}
      handleClick={handleSubmit}
    >
      <ProfileSetup
        fullName={fullName}
        setFullName={setFullName}
        username={username}
        setUsername={setUsername}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        email={email}
        setEmail={setEmail}
      />
    </OnboardingWrapper>
  );
}
