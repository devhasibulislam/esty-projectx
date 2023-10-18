/**
 * Title: Write a program using JavaScript on RecentView3
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

import Image from "next/image";
import React from "react";
import Favorite from "../icons/Favorite";

const RecentView3 = () => {
  const recentThumbnails = [
    "https://i.etsystatic.com/33208167/r/il/e0390f/4681827529/il_75x75.4681827529_m7cu.jpg",
  ];

  const recentProducts = [
    {
      thumbnail:
        "https://i.etsystatic.com/5620966/c/1915/1520/0/844/il/486024/1908100443/il_340x270.1908100443_qbbj.jpg",
      price: {
        amount: 193.55,
        currency: "USD",
      },
    },
    {
      thumbnail:
        "https://i.etsystatic.com/5620966/c/2379/1891/0/40/il/b993b9/3945966809/il_340x270.3945966809_d7qe.jpg",
      price: {
        amount: 68.16,
        currency: "USD",
      },
    },
    {
      thumbnail:
        "https://i.etsystatic.com/5620966/r/il/a06160/4584504603/il_340x270.4584504603_fr5r.jpg",
      price: {
        amount: 216.77,
        currency: "USD",
      },
    },
    {
      thumbnail:
        "https://i.etsystatic.com/5620966/c/981/779/0/102/il/7522cb/5121158485/il_340x270.5121158485_1ia3.jpg",
      price: {
        amount: 29.99,
        currency: "USD",
      },
    },
    {
      thumbnail:
        "https://i.etsystatic.com/5620966/r/il/84fa39/1545907429/il_340x270.1545907429_nxob.jpg",
      price: {
        amount: 210.92,
        currency: "USD",
      },
    },
  ];

  return (
    <section className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-2">
        <h1 className="group text-sm flex flex-row gap-x-2 items-center font-bold cursor-pointer w-fit">
          Recently viewed
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 group-hover:translate-x-1.5 transition-transform delay-100 ease-linear"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-10 justify-stretch gap-4">
        {recentProducts.map((product, index) => (
          <div
            key={index}
            className={
              "group relative lg:col-span-2 md:col-span-5 col-span-10 hover:shadow-lg rounded-lg transition-shadow delay-100 ease-linear"
            }
          >
            <Image
              src={product.thumbnail}
              alt={product.thumbnail}
              height={index === 0 ? 413 : 199}
              width={index === 0 ? 520 : 251}
              className="rounded-md cursor-pointer w-full h-full object-cover"
            />
            <span className="absolute left-2 bottom-2 bg-white px-2 rounded-full text-sm font-bold">
              <span className="text-xs font-normal">
                {product.price.currency}
              </span>{" "}
              {product.price.amount}
            </span>
            <Button className="absolute top-2 right-2 group-hover:opacity-100 opacity-0 transition-opacity delay-100 ease-linear">
              <Favorite className="w-6 h-6" />
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className={
        "bg-slate-100 p-1.5 flex justify-center items-center rounded-full hover:bg-slate-300 hover:text-white transition-colors duration-100" +
        " " +
        props.className
      }
    >
      {children}
    </button>
  );
}

export default RecentView3;
