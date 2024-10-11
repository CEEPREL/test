"use client";

import React from "react";
import InputField from "../inputField";
import addPhoto from "../../../public/svg/add_a_photo.svg";
import storeImage from "../../../public/images/store_image.png";
import Image from "next/image";

interface StoreSetupProps {
  storeName: string;
  setStoreName: (value: string) => void;
  storeTagName: string;
  setStoreTagName: (value: string) => void;
  storePhoneNumber: string;
  setStorePhoneNumber: (value: string) => void;
  storeEmail: string;
  setStoreEmail: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  image: string;
  setImage: (value: string) => void;
}

interface ProductImagesProps {}

const StoreSetup: React.FC<StoreSetupProps> = ({
  storeName,
  setStoreName,
  storeTagName,
  setStoreTagName,
  storePhoneNumber,
  setStorePhoneNumber,
  storeEmail,
  setStoreEmail,
  category,
  setCategory,
  setImage,
  image,
}) => {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const imageUrl = URL.createObjectURL(files[0]);
      setImage(imageUrl);
    }
  };
  return (
    <div className="flex flex-col items-start lg:items-center gap-6 h-full w-full">
      <div className="flex w-full h-full items-center justify-center flex-row">
        <label
          htmlFor="image-upload"
          className="flex flex-col border border-gray-300 h-auto w-[95%] p-4 items-center justify-center rounded-md my-2"
        >
          <div className="w-[20%] lg:w-[10%] lg:h-[10%] h-[20%] flex items-center justify-center relative rounded-full">
            <Image
              className="w-full h-full rounded-full"
              alt="Store Image"
              width={10}
              height={10}
              objectFit="scale-down"
              src={image ? image : storeImage}
            />
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="hidden "
              id="image-upload"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image src={addPhoto} alt="Add Photo" className="w-6 h-6" />
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Upload store logo
          </p>
        </label>
      </div>

      <div className="flex flex-col w-full gap-4 max-w-md">
        <InputField
          placeholder="Store name"
          value={storeName}
          onChange={(e) => setStoreName(e.target.value)}
        />
        <InputField
          placeholder="Store tag name"
          value={storeTagName}
          onChange={(e) => setStoreTagName(e.target.value)}
        />
        <InputField
          placeholder="Store phone number"
          value={storePhoneNumber}
          onChange={(e) => setStorePhoneNumber(e.target.value)}
        />
        <InputField
          placeholder="Store email"
          value={storeEmail}
          onChange={(e) => setStoreEmail(e.target.value)}
        />
        <InputField
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
    </div>
  );
};

export default StoreSetup;
