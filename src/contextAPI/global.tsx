"use client";

import React, { createContext, useContext, useState } from "react";

export interface User {
  firstName?: string;
  lastName?: string;
  userName?: string;
  phoneNumber?: string;
  email?: string;
  storeName?: string;
  storeTagName?: string;
  storePhoneNumber?: string;
  storeEmail?: string;
  category?: string;
  productTitle?: string | undefined;
  productDescription?: string;
  price?: string;
  oldPrice?: string;
  inventoryStocks?: string;
  collection?: string;
  images?: string[];
  hasVariations?: boolean;
  selfShipping?: boolean;
  shippingCosts?: string;
}

export interface IGlobalContext {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const GlobalContext = createContext<IGlobalContext>(
  {} as IGlobalContext
);

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>({
    firstName: "",
    lastName: "",
    userName: "",
    phoneNumber: "",
    email: "",
    storeName: "",
    storeTagName: "",
    storePhoneNumber: "",
    storeEmail: "",
    category: "",
    productTitle: "",
    productDescription: "",
    price: "",
    oldPrice: "",
    inventoryStocks: "",
    collection: "",
    images: [],
    hasVariations: false,
    selfShipping: false,
    shippingCosts: "",
  });

  const stateValues = { user, setUser };

  return (
    <GlobalContext.Provider value={stateValues}>
      {children}
    </GlobalContext.Provider>
  );
};
