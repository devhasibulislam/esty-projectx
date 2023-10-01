/**
 * Title: Write a program using JavaScript on ActivityDresses3
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

const ActivityDresses3 = () => {
  const recentProducts = [
    {
      thumbnail:
        "https://i.etsystatic.com/36331859/c/2868/2277/0/350/il/8924a1/5249432625/il_340x270.5249432625_pls0.jpg",
      price: {
        amount: 120.55,
        currency: "USD",
      },
    },
    {
      thumbnail:
        "https://i.etsystatic.com/11387641/r/il/ed65b0/3338845893/il_340x270.3338845893_c36i.jpg",
      price: {
        amount: 150.16,
        currency: "USD",
      },
    },
    {
      thumbnail:
        "https://i.etsystatic.com/10149955/r/il/1b50d0/5033562371/il_340x270.5033562371_ez4y.jpg",
      price: {
        amount: 256.77,
        currency: "USD",
      },
    },
    {
      thumbnail:
        "https://i.etsystatic.com/10757760/r/il/9fe1a0/3962156938/il_340x270.3962156938_hr33.jpg",
      price: {
        amount: 291.99,
        currency: "USD",
      },
    },
    {
      thumbnail:
        "https://i.etsystatic.com/12561644/r/il/03cd1c/5048627645/il_340x270.5048627645_a3xn.jpg",
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
          Women&apos;s Blouses{" "}
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

export default ActivityDresses3;
