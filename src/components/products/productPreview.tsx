import Image from "next/image";
import React from "react";
import image from "../../../public/images/PRODUCT PAGE IMAGE.png";
import share from "../../../public/svg/share.svg";
import favorite from "../../../public/svg/favorite.svg";
import star from "../../../public/svg/star.svg";
import blackStar from "../../../public/svg/blackStar.svg";
import followers from "../../../public/svg/followers.svg";
import storeImage from "../../../public/images/store_image.png";

export interface ProductImagesProps {
  images?: string[];
  productTitle?: string | undefined;
  price?: string;
  productDescription?: string;
  storeName?: string;
}

export function ProductPreview({
  images,
  price,
  productTitle,
}: ProductImagesProps) {
  return (
    <div className="flexitems-center justify-center w-full">
      <div className="flex flex-col  items-center justify-center ">
        <Image
          width={300}
          height={300}
          objectFit="cover"
          src={images ? images[0] : image}
          alt="Image"
        />
        <div className="flex flex-row items-center justify-between w-full lg:max-w-md">
          <h3 className="w-[70%] font-bold">
            {productTitle
              ? productTitle
              : "Gucci bag – the epitome of luxury and sophistication"}
          </h3>
          <div className=" gap-2 flex">
            <Image
              className=" bg-gray-100 p-1 w-full rounded-full"
              src={share}
              alt="share"
            />
            <Image
              className=" bg-gray-100 p-1 w-full rounded-full"
              alt="favorite"
              src={favorite}
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-full lg:max-w-md">
          <div className="flex gap-1 items-center justify-center flex-row">
            <h3 className="font-bold text-xl w-[%]">
              {price ? price : "₦18.0"}
            </h3>{" "}
            <h3 className="font-bold text-sm text-gray-500">₦28.0</h3>
            <h3 className="w-full bg-main rounded-3xl text-white p-1 text-xs">
              25% OFF
            </h3>
          </div>

          <div className="w-[%] gap-2 flex">
            <Image
              className=" bg-gray-100 p-1 w-full rounded-full"
              src={star}
              alt="share"
            />
            <Image
              className=" bg-gray-100 p-1 w-full rounded-full"
              src={star}
              alt="share"
            />
            <Image
              className=" bg-gray-100 p-1 w-full rounded-full"
              src={star}
              alt="share"
            />
            <Image
              className=" bg-gray-100 p-1 w-full rounded-full"
              alt="favorite"
              src={star}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SelectVariant() {
  return (
    <div className="flex flex-col gap-14 mt-8 items-center justify-center w-full">
      <div className="relative flex max-w-md w-full items-center  gap-2 justify-start">
        <div className="text-xs absolute left-0 -top-10">
          <div className="flex flex-col">
            <p className=" font-extralight text-xs text-gray-600 ">
              Size: SMALL
            </p>
          </div>
        </div>
        <p className="flex items-center justify-center rounded-3xl w-12 bg-gray-300 lg:max-w-md">
          Filter
        </p>
        <p className="flex items-center justify-center rounded-3xl w-12 bg-gray-300 lg:max-w-md">
          Filter
        </p>
        <p className="flex items-center justify-center rounded-3xl w-12 bg-gray-300 lg:max-w-md">
          Filter
        </p>
        <p className="flex items-center justify-center rounded-3xl w-12 bg-gray-300 lg:max-w-md">
          Filter
        </p>
        <p className="flex items-center justify-center rounded-3xl w-12 bg-gray-300 lg:max-w-md">
          Filter
        </p>
        <p className="flex items-center justify-center rounded-3xl w-12 bg-gray-300 lg:max-w-md">
          Filter
        </p>
      </div>
      <div className="relative flex max-w-md w-full items-center gap-2 justify-start">
        <div className="text-xs absolute left-0 -top-10">
          <div className="flex flex-col">
            <p className=" font-extralight text-xs text-gray-600 ">
              Size: SMALL
            </p>
          </div>
        </div>

        <p className="flex items-center justify-center rounded-3xl w-12 bg-gray-300 lg:max-w-md">
          Filter
        </p>
        <p className="flex items-center justify-center rounded-3xl w-12 bg-gray-300 lg:max-w-md">
          Filter
        </p>
        <p className="flex items-center justify-center rounded-3xl w-12 bg-gray-300 lg:max-w-md">
          Filter
        </p>
      </div>
    </div>
  );
}

export function ProductDescription({ productDescription }: ProductImagesProps) {
  return (
    <div className="flex flex-col gap-14 items-center justify-center w-full">
      <p className="text-gray-500 max-w-md">
        {productDescription
          ? productDescription
          : "Wholesale and drop shipping are both welcomed. For wholesale,we will offer discount or free express shipping which only takes 3-7 days to arrive."}
      </p>
    </div>
  );
}

export function AboutVendor({ storeName }: ProductImagesProps) {
  return (
    <div className="flex flex-col gap-14 items-center justify-center w-full">
      <div className="max-w-md">
        <div className="flex justify-start w-full items-center flex-row">
          <Image className=" rounded-full" alt="Store Image" src={storeImage} />
          <div className="flex flex-col">
            <p className="font-bold">{storeName ? storeName : "Gucci Store"}</p>
            <div className="flex flex-row items-center justify-between ">
              <h3 className="">Fashion</h3>
              <div className=" gap-2 flex">
                <Image
                  className=" bg-gray-100 p-1 w-full rounded-full"
                  src={blackStar}
                  alt="share"
                />
                <p>5.4</p>
                <Image
                  className=" bg-gray-100 p-1 w-full rounded-full"
                  alt="favorite"
                  src={followers}
                />
                <p>100K</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-gray-500 max-w-md">
          Wholesale and drop shipping are both welcomed. For wholesale,we will
          offer discount or free express shipping which only takes 3-7 days to
          arrive.
        </p>
      </div>
    </div>
  );
}
