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
  const productCollections = ["collection", "Interests"];
  return (
    <div className="flex flex-col items-start gap-4 lg:items-center h-full w-full">
      <div className="relative flex lg:max-w-md items-center justify-center w-full">
        <InputField
          placeholder="Product Title"
          value={productTitle}
          onChange={(e) => setProductTitle(e.target.value)}
        />
        <p className=" text-xs text-gray-400 absolute left-4 top-1">
          Product Title
        </p>
      </div>

      <div className="relative flex lg:max-w-md items-center justify-center w-full">
        <textarea
          className="p-3 w-full lg:max-w-md rounded-2xl text-black border border-gray-300 "
          placeholder="Product description"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
        <p className=" text-xs text-gray-400 absolute left-4 top-1">
          Product description
        </p>
      </div>

      <div className="flex lg:max-w-md w-full gap-2 flex-row">
        <div className="relative flex lg:max-w-md items-center justify-center w-full">
          <InputField
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <p className=" text-xs text-gray-400 absolute left-4 top-1">Price</p>
        </div>
        <div className="relative flex lg:max-w-md items-center justify-center w-full">
          <InputField
            placeholder="Old price"
            value={oldPrice}
            onChange={(e) => setOldPrice(e.target.value)}
          />
          <p className=" text-xs text-gray-400 absolute left-4 top-1">
            Old price
          </p>
        </div>
      </div>
      <div className="relative flex h-auto lg:max-w-md items-center justify-center w-full">
        <div className="relative flex h-auto lg:max-w-md items-center justify-center w-full">
          <textarea
            className="p-3 w-full pt-14 h-auto lg:max-w-md text-black rounded-2xl border border-gray-300"
            placeholder="Search or create collection"
            value={collection}
            onChange={(e) => setCollection(e.target.value)}
          />
          <div className="absolute top-5 left-2 grid grid-cols-2 gap-4">
            {productCollections.map((item, index) => (
              <div key={index} className="relative">
                <p className="text-xs bg-gray-100 text-gray-800 rounded-3xl px-4 py-2">
                  {item}
                  <span className="text-gray-500 absolute right-1 top-1 cursor-pointer">
                    X
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className=" text-xs text-gray-400 absolute left-4 top-1">
          Product collection
        </p>
      </div>
      <div className="relative flex lg:max-w-md items-center justify-center w-full">
        <InputField
          placeholder="Inventory stocks"
          value={inventoryStocks}
          onChange={(e) => setInventoryStocks(e.target.value)}
        />
        <p className=" text-xs text-gray-400 absolute left-4 top-1">
          Inventory stocks
        </p>
      </div>
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
      {images.map((img, index) => (
        <div
          key={index}
          className="flex w-full lg:max-w-md items-center justify-between flex-row"
        >
          <img
            src={img}
            key={index}
            alt={`Product Image ${index}`}
            className="mt-2 w-32 h-32 object-cover"
          />
          <input className="bg-main" type="radio" />
        </div>
      ))}{" "}
      <label
        htmlFor="image-upload"
        className="flex bg-gray-200 lg:max-w-md text-main py-2 w-full items-center gap-1 justify-center rounded-3xl cursor-pointer"
      >
        Add image
        <Image src={addphoto} alt="add photo" />
      </label>
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
  const productCollections = ["Red", "white", "Black"];
  const productCollections2 = ["Large", "Small", "XL"];

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
      <div className="relative h-full gap-5 pt-4 flex-col flex lg:max-w-md items-center justify-center w-full">
        <div className="relative flex h-auto  lg:max-w-md items-center justify-center w-full">
          <textarea
            className="p-3 w-full pt-[70px] bg-slate-50 h-auto lg:max-w-md text-black rounded-2xl border border-gray-300"
            placeholder="Enter Value"
          />
          <div className="text-xs absolute left-2 top-1">
            <div className="flex flex-col">
              <p className=" font-extralight text-xs text-gray-400 ">
                Option 1
              </p>
              <p className=" font-semibold text-xs text-black">Color</p>
            </div>
          </div>
          <div className="absolute top-10 left-2 grid grid-cols-5 gap-4">
            {productCollections.map((item, index) => (
              <div key={index} className="relative">
                <p className="text-xs bg-gray-100 text-gray-800 rounded-3xl px-4 py-2">
                  {item}
                  <span className="text-gray-500 absolute right-1 top-1 cursor-pointer">
                    X
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative pt-4 flex h-auto lg:max-w-md items-center justify-center w-full">
        <div className="relative flex h-auto lg:max-w-md items-center justify-center w-full">
          <textarea
            className="p-3 w-full pt-[70px] bg-slate-50 h-auto lg:max-w-md text-black rounded-2xl border border-gray-300"
            placeholder="Enter Value"
          />
          <div className="text-xs absolute left-2 top-1">
            <div className="flex flex-col">
              <p className=" font-extralight text-xs text-gray-400 ">
                Option 2
              </p>
              <p className=" font-semibold text-xs text-black">Size</p>
            </div>
          </div>
          <div className="absolute top-10 left-2 grid grid-cols-5 gap-4">
            {productCollections2.map((item, index) => (
              <div key={index} className="relative">
                <p className="text-xs bg-gray-100 text-gray-800 rounded-3xl px-4 py-2">
                  {item}
                  <span className="text-gray-500 absolute right-1 top-1 cursor-pointer">
                    X
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative pt-4 flex h-auto lg:max-w-md items-center justify-center w-full">
        <div className="relative flex h-auto lg:max-w-md items-center justify-center w-full">
          <textarea
            className="p-3 w-full pt-[70px] h-auto bg-slate-50 lg:max-w-md text-black rounded-2xl border border-gray-300"
            placeholder="Enter Value"
          />
          <div className="text-xs absolute left-2 top-1">
            <div className="flex flex-col">
              <p className=" font-extralight text-xs text-gray-400 ">
                Option 3
              </p>
              <p className=" font-semibold text-xs text-black">Size</p>
            </div>
          </div>
          <div className="absolute top-10 left-2 grid grid-cols-5 gap-4">
            {productCollections2.map((item, index) => (
              <div key={index} className="relative">
                <p className="text-xs bg-gray-100 text-gray-800 rounded-3xl px-4 py-2">
                  {item}
                  <span className="text-gray-500 absolute right-1 top-1 cursor-pointer">
                    X
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
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
