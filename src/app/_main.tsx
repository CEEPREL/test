import React from "react";
import { JSXProps } from "./layout";
import { GlobalContextProvider } from "@/contextAPI/global";

const Main = ({ children }: JSXProps) => {
  return <GlobalContextProvider>{children}</GlobalContextProvider>;
};
export default Main;
