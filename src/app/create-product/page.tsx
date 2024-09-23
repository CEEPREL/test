"use client";

import ProductWrapper from "@/components/products/productWrapper";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  BasicDetails,
  ProductImages,
  InventoryVariations,
  Shipping,
} from "@/components/products/createProduct";
import { useGlobalContext } from "@/contextAPI/global";

export default function Page() {
  const router = useRouter();
  const { setUser } = useGlobalContext(); // Use setProduct to store data globally

  const [productTitle, setProductTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [price, setPrice] = useState("");
  const [collection, setCollection] = useState("");
  const [inventoryStocks, setInventoryStocks] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [hasVariations, setHasVariations] = useState(false);
  const [selfShipping, setSelfShipping] = useState(false);
  const [shippingCosts, setShippingCosts] = useState("");

  const continueBtn = () => {
    setUser({
      productTitle,
      productDescription,
      price,
      collection,
      inventoryStocks,
      images,
      hasVariations,
      selfShipping,
      shippingCosts,
    });

    router.push(`/product-details`); // Navigate to the next page
  };

  const steps = [
    {
      title: "Basic details",
      content: (
        <BasicDetails
          productTitle={productTitle}
          setProductTitle={setProductTitle}
          productDescription={productDescription}
          setProductDescription={setProductDescription}
          price={price}
          setPrice={setPrice}
          oldPrice={price}
          setOldPrice={setPrice}
          collection={collection}
          setCollection={setCollection}
          inventoryStocks={inventoryStocks}
          setInventoryStocks={setInventoryStocks}
        />
      ),
    },
    {
      title: "Product images",
      content: <ProductImages images={images} setImages={setImages} />,
    },
    {
      title: "Inventory variations",
      content: (
        <InventoryVariations
          hasVariations={hasVariations}
          setHasVariations={setHasVariations}
        />
      ),
    },
    {
      title: "Shipping",
      content: (
        <Shipping
          selfShipping={selfShipping}
          setSelfShipping={setSelfShipping}
          shippingCosts={shippingCosts}
          setShippingCosts={setShippingCosts}
        />
      ),
    },
  ];

  return (
    <ProductWrapper header="Create a product" handleClick={continueBtn}>
      {steps}
    </ProductWrapper>
  );
}
