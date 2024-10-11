"use client";
import ProductWrapper from "@/components/products/productWrapper";
import { useGlobalContext } from "@/contextAPI/global";
import React from "react";
import { useRouter } from "next/navigation";

import {
  AboutVendor,
  ProductDescription,
  ProductPreview,
  SelectVariant,
} from "@/components/products/productPreview";

export default function Page() {
  const { user } = useGlobalContext();
  //   const [images, setImages] = useState<string[]>(user?.images || []);
  //   const [hasVariations, setHasVariations] = useState(
  //     user?.hasVariations || false
  //   );

  const router = useRouter();

  const continueBtn = () => {
    alert("No more Page to view");

    router.push(`/some-next-page`);
  };
  const steps = [
    {
      title: "",
      content: (
        <ProductPreview
          price={user?.price}
          productTitle={user?.productTitle}
          images={user?.images}
        />
      ),
    },
    {
      title: "Select Variant",
      content: <SelectVariant />,
    },
    {
      title: "Product Description",
      content: (
        <ProductDescription productDescription={user?.productDescription} />
      ),
    },
    {
      title: "About this vendor",
      content: <AboutVendor storeName={user?.productTitle} />,
    },
  ];
  return (
    <ProductWrapper handleClick={continueBtn} header="Product preview">
      {steps}
    </ProductWrapper>
  );
}
