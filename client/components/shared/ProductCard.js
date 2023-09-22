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
import ModalContent from "./ModalContent";

const ProductCard = ({ product }) => {
  const { title, price, shop, thumbnail } = product || {};
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="flex flex-col gap-y-4">
      {imageLoaded ? (
        <div
          className={`bg-gray-200 h-[260.06px] w-full max-w-full object-cover object-center rounded animate-pulse`}
        ></div>
      ) : (
        <Image
          src={thumbnail}
          alt={title}
          height={260.06}
          width={327.5}
          className="h-[260.06px] w-full max-w-full object-cover object-center rounded"
          onLoad={handleImageLoad}
          onError={() => console.error("2. Error loading image :(")}
        />
      )}

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
          <ModalContent product={{ title, price, shop, thumbnail }} />
        </Modal>
      )}
    </div>
  );
};

export default ProductCard;
