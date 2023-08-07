import React, { ReactNode } from "react";
import Image from "next/image";
type ImageCardProps = {
  src: string;
  alt: string;
  //   width: [string, string, string];
  styTail?: string;
  aspect?: string;
  height?: [string, string, string];
  rounded?: string;
  type: "short" | "long";
};
function ImageCard({
  src,
  alt,
  // width,
  height,
  styTail,
  aspect,
  rounded,
  type,
}: ImageCardProps): ReactNode {
  const shortImageCard = `relative w-[60%] md:w-full lg:w-full lg:max-w-[500px] ${
    aspect || "aspect-[1]"
  } overflow-hidden rounded-3xl ${styTail}`;
  const longImageCard = `relative w-[80%] sm:min-w-[200px] md:w-full lg:min-w-[270px] lg:w-[468px] h-auto md:h-[240px] lg:h-[270px] overflow-hidden rounded-t-2xl ${styTail}`;
  const className = type === "short" ? shortImageCard : longImageCard;
  return (
    <div className={className}>
      <Image
        className="object-cover object-center"
        src={
          "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
        }
        alt={alt}
        fill
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

export default ImageCard;
