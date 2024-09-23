import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface ImageUploaderProps {
  initialImage: StaticImageData | string;
  addPhotoIcon: StaticImageData | string;
  altText: string;
  onImageUpload: (file: File | null) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  initialImage,
  addPhotoIcon,
  altText,
  onImageUpload,
}) => {
  const [previewUrl, setPreviewUrl] = useState<string | StaticImageData>(
    initialImage
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
      onImageUpload(file);
    }
  };

  return (
    <div className="relative w-[20%] lg:w-[10%] lg:h-[10%] h-[20%] flex items-center justify-center rounded-full overflow-hidden border border-gray-300 cursor-pointer">
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
      {previewUrl ? (
        <Image
          src={typeof previewUrl === "string" ? previewUrl : previewUrl.src}
          alt={altText}
          className="object-cover w-full h-full rounded-full"
          layout="fill"
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full">
          <Image src={addPhotoIcon} alt="Add Photo" className="w-10 h-10" />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
