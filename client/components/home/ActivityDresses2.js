/**
 * Title: Write a program using JavaScript on ActivityDresses2
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
 * Date: 01, October 2023
 */

import Image from "next/image";
import React from "react";
import Favorite from "../icons/Favorite";

const ActivityDresses2 = () => {
  const recentProducts = [
    {
      thumbnail:
        "https://i.etsystatic.com/6767653/r/il/2cd429/2787979323/il_340x270.2787979323_2kqk.jpg",
      price: {
        amount: 120.55,
        currency: "USD",
      },
    },
    {
      thumbnail:
        "https://i.etsystatic.com/6895248/c/667/529/0/425/il/80ed35/776256903/il_340x270.776256903_3ok3.jpg",
      price: {
        amount: 150.16,
        currency: "USD",
      },
    },
    {
      thumbnail:
        "https://i.etsystatic.com/16881753/r/il/77a905/2119116717/il_340x270.2119116717_82n6.jpg",
      price: {
        amount: 256.77,
        currency: "USD",
      },
    },
    {
      thumbnail:
        "https://i.etsystatic.com/27497347/c/1970/1565/0/117/il/f3aed2/3607653541/il_340x270.3607653541_gdoz.jpg",
      price: {
        amount: 291.99,
        currency: "USD",
      },
    },
    {
      thumbnail:
        "https://i.etsystatic.com/18851994/r/il/f5d37c/2586832940/il_340x270.2586832940_cojw.jpg",
      price: {
        amount: 215.92,
        currency: "USD",
      },
    },
  ];

  return (
    <section className="flex flex-col gap-y-6">
      <article className="flex flex-col gap-y-1">
        <h1 className="text-2xl flex flex-row items-center gap-x-2 group w-fit cursor-pointer">
          Women&apos;s Skirts{" "}
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
        </h1>
        <p className="text-sm text-slate-500">Based on your activity</p>
      </article>
      <div className="grid grid-cols-10 justify-stretch gap-4">
        {recentProducts.map((product, index) => (
          <div
            key={index}
            className={
              "group relative col-span-2 hover:shadow-lg rounded-lg transition-shadow delay-100 ease-linear"
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

export default ActivityDresses2;
