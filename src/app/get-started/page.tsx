"use client";

import GetStarted from "@/components/onBording/get-started";
import OnboardingWrapper from "@/components/onBording/onboardingWrapper";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function GetStartedPage() {
  const router = useRouter();
  const [emailOrPhone, setEmailOrPhone] = useState("");

  const handleContinue = () => {
    if (emailOrPhone) {
      // Store emailOrPhone in global context or local storage if needed
      router.push("/profile-setup");
    } else {
      alert("Please enter your phone number or email.");
    }
  };

  const colors = ["border-main", "border-gray-200"];

  return (
    <OnboardingWrapper
      color1={colors[0]}
      color2={colors[1]}
      color3={colors[1]}
      activePage={1}
      handleClick={handleContinue}
    >
      <GetStarted
        emailOrPhone={emailOrPhone}
        setEmailOrPhone={setEmailOrPhone}
      />
    </OnboardingWrapper>
  );
}
