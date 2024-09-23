"use client";
import React from "react";
import Main from "./_main";
import WelcomePage from "@/components/welcome-page";
import { useRouter } from "next/navigation";

export default function page() {
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
