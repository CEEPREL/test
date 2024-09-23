"use client";

import {
  BasicDetails,
  InventoryVariations,
  ProductImages,
  Shipping,
} from "@/components/products/productDetails";
import ProductWrapper from "@/components/products/productWrapper";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useGlobalContext } from "@/contextAPI/global";

export default function Page() {
  const router = useRouter();
  const { user, setUser } = useGlobalContext();

  const [productTitle, setProductTitle] = useState(user?.productTitle || "");
  const [productDescription, setProductDescription] = useState(
    user?.productDescription || ""
  );
  const [price, setPrice] = useState(user?.price || "");
  const [oldPrice, setOldPrice] = useState(user?.oldPrice || "");
  const [collection, setCollection] = useState(user?.collection || "");
  const [inventoryStocks, setInventoryStocks] = useState(
    user?.inventoryStocks || ""
  );
  const [images, setImages] = useState<string[]>(user?.images || []);
  const [hasVariations, setHasVariations] = useState(
    user?.hasVariations || false
  );
  const [selfShipping, setSelfShipping] = useState(user?.selfShipping || false);
  const [shippingCosts, setShippingCosts] = useState(user?.shippingCosts || "");

  const continueBtn = () => {
    setUser({
      productTitle,
      productDescription,
      price,
      oldPrice,
      collection,
      inventoryStocks,
      images,
      hasVariations,
      selfShipping,
      shippingCosts,
    });

    router.push(`/product-preview`);
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
          oldPrice={oldPrice}
          setOldPrice={setOldPrice}
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
    <ProductWrapper header="Product details" handleClick={continueBtn}>
      {steps}
    </ProductWrapper>
  );
}
