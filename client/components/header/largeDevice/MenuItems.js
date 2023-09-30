/**
 * Title: Write a program using JavaScript on MenuItems
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
 * Date: 30, September 2023
 */

import React from "react";

const MenuItems = () => {
  const menuItems = [
    "Jewelry & Accessories",
    "Clothing & Shoes",
    "Home & Living",
    "Toys & Entertainment",
    "Craft Supplies & Tools",
    "Vintage",
    "Etsy Registry",
  ];

  return (
    <section className="">
      <div className="flex flex-row justify-between">
        {menuItems.map((item, index) => (
          <span
            key={index}
            className="text-sm cursor-pointer border-b-2 border-b-transparent hover:border-b-black transition-colors delay-100 ease-linear pb-2"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default MenuItems;
