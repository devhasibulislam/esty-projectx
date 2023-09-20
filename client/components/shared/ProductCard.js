/**
 * Title: Write a program using JavaScript on ProductCard
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/devhasibulislam
 * Facebook: https://facebook.com/devhasibulislam
 * Instagram: https://instagram.com/devhasibulislam
 * Twitter: https://twitter.com/devhasibulislam
 * Pinterest: https://pinterest.com/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 19, September 2023
 */

import Image from "next/image";
import React from "react";

const ProductCard = ({ product }) => {
  const { title, price, shop, thumbnail } = product || {};

  return (
    <div className="flex flex-col gap-y-4">
      <Image
        src={thumbnail}
        alt={title}
        height={260.06}
        width={327.5}
        className="h-[260.06px] w-full max-w-full object-cover object-center rounded"
      />
      <article className="flex flex-col gap-y-1">
        <h2 className="line-clamp-1 text-lg">{title}</h2>
        <div className="flex justify-between items-center text-sm">
          <p className="text-base flex flex-row gap-x-0.5 items-baseline">
            <span className="text-xs">$</span>
            {price}
          </p>
          <p className="text-base flex flex-row gap-x-0.5 items-baseline">
            <span className="text-xs">#</span>
            {shop}
          </p>
        </div>
        <button className="bg-violet-500 py-2 px-4 rounded-r-full text-white w-fit text-sm">
          Buy Now
        </button>
      </article>
    </div>
  );
};

export default ProductCard;
