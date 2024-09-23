"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import StoreSetup from "@/components/onBording/store-setup";
import OnboardingWrapper from "@/components/onBording/onboardingWrapper";
import { useGlobalContext } from "@/contextAPI/global";

export default function StoreSetupPage() {
  const router = useRouter();
  const { setUser } = useGlobalContext();

  const [storeName, setStoreName] = useState("");
  const [storeTagName, setStoreTagName] = useState("");
  const [storePhoneNumber, setStorePhoneNumber] = useState("");
  const [storeEmail, setStoreEmail] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    setUser((prevUser) => ({
      ...prevUser,
      storeName,
      storeTagName,
      storePhoneNumber,
      storeEmail,
      category,
    }));

    router.push("/create-product");
  };

  const colors = ["border-main", "border-gray-200"];

  return (
    <OnboardingWrapper
      color1={colors[0]}
      color2={colors[0]}
      color3={colors[0]}
      activePage={3}
      handleClick={handleSubmit}
    >
      <StoreSetup
        storeName={storeName}
        setStoreName={setStoreName}
        storeTagName={storeTagName}
        setStoreTagName={setStoreTagName}
        storePhoneNumber={storePhoneNumber}
        setStorePhoneNumber={setStorePhoneNumber}
        storeEmail={storeEmail}
        setStoreEmail={setStoreEmail}
        category={category}
        setCategory={setCategory}
      />
    </OnboardingWrapper>
  );
}
