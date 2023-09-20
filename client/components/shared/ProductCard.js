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
import React, { useState } from "react";
import Modal from "./Modal";

const ProductCard = ({ product }) => {
  const { title, price, shop, thumbnail } = product || {};
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        <button
          onClick={openModal}
          className="bg-slate-300 hover:bg-slate-500 transition-colors delay-100 py-2 px-4 rounded-r-full w-fit text-sm"
        >
          Buy Now
        </button>
      </article>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title="Manage Your Cart"
        >
          <div className="h-full w-full flex gap-x-2">
            <Image
              src={thumbnail}
              alt={title}
              height={214}
              width={214}
              className="rounded h-[214px] object-cover object-top"
            />
            <div className="flex flex-col gap-y-2">
              <div className="bg-[#eaeaea99] p-2 rounded flex flex-col gap-y-2 h-fit">
                <h2 className="line-clamp-2">{title}</h2>
                <div className="flex flex-col gap-y-0">
                  <p className="text-base flex flex-row gap-x-0.5 items-baseline pb-0">
                    <span className="text-xs">Price: $</span>
                    {price}
                  </p>
                  <p className="text-base flex flex-row gap-x-0.5 items-baseline pb-0">
                    <span className="text-xs">Shop from</span>
                    {shop}
                  </p>
                </div>
              </div>

              <div className="bg-[#eaeaea99] p-2 rounded flex flex-col gap-y-2 h-fit">
                <div className="flex flex-col gap-y-0">
                  <p className="text-base flex flex-row gap-x-0.5 items-baseline pb-0">
                    <span className="text-xs">Shipping: $</span>
                    {(price * 0.2).toFixed(2)}
                  </p>
                  <p className="text-base flex flex-row gap-x-0.5 items-baseline pb-0">
                    <span className="text-xs">Shop from:</span>
                    {shop}
                  </p>
                  <hr className="my-1" />
                  <p className="text-base flex flex-col gap-y-1 items-baseline pb-0">
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
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProductCard;
