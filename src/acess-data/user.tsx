"use client";
import { useGlobalContext } from "@/contextAPI/global";

export default function UserInfo() {
  const { user } = useGlobalContext();

  return user;
}
