"use client";
import React from "react";
import WelcomePage from "@/components/welcome-page";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const getStarted = () => {
    router.push("/get-started");
  };

  return (
    <div>
      <WelcomePage getStarted={getStarted} />
    </div>
  );
}
