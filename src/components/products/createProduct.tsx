// components/products/createProduct.tsx
import React from "react";
import InputField from "../inputField";
import addphoto from "../../../public/svg/addphotoIcon.svg";
import Image from "next/image";

interface BasicDetailsProps {
  productTitle: string;
  setProductTitle: (value: string) => void;
  productDescription: string;
  setProductDescription: (value: string) => void;
  price: string;
  setPrice: (value: string) => void;
  oldPrice: string;
  setOldPrice: (value: string) => void;
  collection: string;
  setCollection: (value: string) => void;
  inventoryStocks: string;
  setInventoryStocks: (value: string) => void;
}

export function BasicDetails({
  productTitle,
  setProductTitle,
  productDescription,
  setProductDescription,
  price,
  setPrice,
  oldPrice,
  setOldPrice,
  collection,
  setCollection,
  inventoryStocks,
  setInventoryStocks,
}: BasicDetailsProps) {
  return (
    <div className="flex gap-4 flex-col items-start lg:items-center h-full w-full">
      <InputField
        placeholder="Product Title"
        value={productTitle}
        onChange={(e) => setProductTitle(e.target.value)}
      />
      <textarea
        className="p-3 w-full lg:max-w-md text-black rounded-2xl border border-gray-300"
        placeholder="Product description"
        value={productDescription}
        onChange={(e) => setProductDescription(e.target.value)}
      />
      <div className="flex lg:max-w-md w-full gap-2 flex-row">
        <InputField
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <InputField
          placeholder="Old price"
          value={oldPrice}
          onChange={(e) => setOldPrice(e.target.value)}
        />
      </div>
      <InputField
        placeholder="Inventory stocks"
        value={inventoryStocks}
        onChange={(e) => setInventoryStocks(e.target.value)}
      />
      <textarea
        className="p-3 w-full rounded-2xl lg:max-w-md text-black border border-gray-300"
        placeholder="Product collection"
        value={collection}
        onChange={(e) => setCollection(e.target.value)}
      />
    </div>
  );
}

interface ProductImagesProps {
  images: string[];
  setImages: (value: string[]) => void;
}

export function ProductImages({ images, setImages }: ProductImagesProps) {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const imageUrls = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages(imageUrls);
    }
  };

  return (
    <div className="flex flex-col justify-center items-start lg:items-center h-full w-full">
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageUpload}
        className="hidden"
        id="image-upload"
      />
      <label
        htmlFor="image-upload"
        className="flex bg-gray-200 lg:max-w-md text-main py-2 w-full items-center gap-1 justify-center rounded-3xl cursor-pointer"
      >
        Add image
        <Image src={addphoto} alt="add photo" />
      </label>
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt={`Product Image ${index}`}
          className="mt-2 w-32 h-32 object-cover"
        />
      ))}
    </div>
  );
}

interface InventoryVariationsProps {
  hasVariations: boolean;
  setHasVariations: (value: boolean) => void;
}

export function InventoryVariations({
  hasVariations,
  setHasVariations,
}: InventoryVariationsProps) {
  return (
    <div className="flex flex-col lg:items-center h-full w-full">
      <div className="flex lg:max-w-md w-full flex-row gap-2">
        <input
          type="checkbox"
          checked={hasVariations}
          onChange={() => setHasVariations(!hasVariations)}
          className="bg-main"
        />
        <p>
          This product is variable; has different colors, sizes, weight,
          materials, etc.
        </p>
      </div>
    </div>
  );
}

interface ShippingProps {
  selfShipping: boolean;
  setSelfShipping: (value: boolean) => void;
  shippingCosts: string;
  setShippingCosts: (value: string) => void;
}

export function Shipping({
  selfShipping,
  setSelfShipping,
  shippingCosts,
  setShippingCosts,
}: ShippingProps) {
  return (
    <div className="flex flex-col lg:items-center h-full w-full">
      <div className="flex flex-col w-full gap-4 items-center justify-center my-4">
        <div className="flex lg:max-w-md w-full justify-between flex-row gap-2">
          <p>Self shipping</p>
          <input
            type="checkbox"
            checked={selfShipping}
            onChange={() => setSelfShipping(!selfShipping)}
            className="checked:bg-main"
          />
        </div>
        <div className="flex lg:max-w-md w-full justify-between flex-row gap-2">
          <p>Self shipping</p>
          <input
            type="checkbox"
            checked={selfShipping}
            onChange={() => setSelfShipping(!selfShipping)}
            className="checked:bg-main"
          />
        </div>
      </div>

      <InputField
        placeholder="Shipping costs"
        value={shippingCosts}
        onChange={(e) => setShippingCosts(e.target.value)}
      />
    </div>
  );
}
