import React, { ReactNode } from "react";
import Image from "next/image";
type ImageCardProps = {
  src: string;
  alt: string;
  width: [string, string, string];
};
function ImageCard({ src, alt, width }: ImageCardProps): ReactNode {
  const className = `relative w-${width[0]} md:w-${width[1]} lg:w-full  aspect-[1] overflow-hidden rounded-lg`;
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
