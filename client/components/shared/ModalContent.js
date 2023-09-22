/**
 * Title: Write a program using JavaScript on ModalContent
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
 * Date: 22, September 2023
 */

import Image from "next/image";
import React, { useState } from "react";

const ModalContent = ({ product }) => {
  const { title, price, shop, thumbnail } = product || {};
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section className="h-full w-full flex gap-x-2">
      {imageLoaded ? (
        <div
          className={`bg-gray-200 h-[214px] w-full max-w-full object-cover object-top rounded animate-pulse`}
        ></div>
      ) : (
        <Image
          src={thumbnail}
          alt={title}
          height={214}
          width={214}
          className="h-[214px] w-full max-w-full object-cover object-top rounded"
          onLoad={handleImageLoad}
          onError={() => console.error("3. Error loading image :(")}
        />
      )}
      <div className="flex flex-col gap-y-2">
        <div className="bg-[#eaeaea99] p-2 rounded flex flex-col gap-y-2 h-fit">
          <h2 className="line-clamp-2">{title}</h2>
          <div className="flex flex-col gap-y-0">
            <p className="text-sm flex flex-row gap-x-0.5 items-baseline pb-0">
              <span className="text-xs">Price: $</span>
              {price}
            </p>
            <p className="text-sm flex flex-row gap-x-0.5 items-baseline pb-0">
              <span className="text-xs">Shop from</span>
              {shop}
            </p>
          </div>
        </div>

        <div className="bg-[#eaeaea99] p-2 rounded flex flex-col gap-y-2 h-fit">
          <div className="flex flex-col gap-y-0">
            <p className="text-sm flex flex-row gap-x-0.5 items-baseline pb-0">
              <span className="text-xs">Shipping: $</span>
              {(price * 0.2).toFixed(2)}
            </p>
            <p className="text-sm flex flex-row gap-x-0.5 items-baseline pb-0">
              <span className="text-xs">Shop from:</span>
              {shop}
            </p>
            <hr className="my-1" />
            <p className="text-sm flex flex-col gap-y-1 items-baseline pb-0">
              <span className="text-xs">Estimated delivery:</span>
              <span className="border-b border-b-black  border-dashed">
                {Date.now().toLocaleString("en")}
              </span>
            </p>
          </div>
        </div>

        <button className="rounded py-0.5 bg-slate-300 hover:bg-slate-500 transition-colors delay-100">
          Checkout
        </button>
      </div>
    </section>
  );
};

export default ModalContent;
